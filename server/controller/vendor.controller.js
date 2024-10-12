import { catchAsyncError } from "../middleware/catchAsyncError.js";
import { Vendor } from "../model/vendor.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import ErrorHandler from "../utils/errorHandler.js";
import mongoose from "mongoose";


// Vendor Registration
export const vendorResigter = catchAsyncError(async (req, res, next) => {

    const { email, password } = req.body;

    const isVendor = await Vendor.findOne({ email });

    if (isVendor) return next(new ErrorHandler('Vendor already exits!', 409));

    const hashedPassword = await bcrypt.hash(password, 10);

    const vendor = await Vendor.create({
        email,
        password: hashedPassword,
    });


    const vendorToken = jwt.sign({ _id: vendor._id }, process.env.JWT_SECRET);

    res.status(201).cookie('vendorToken', vendorToken, {
        maxAge: 1000 * 60 * 100,
        httpOnly: true
    }).json({
        success: true,
        message: 'Registered'
    });


});


// vendor Login
export const vendorLogin = catchAsyncError(async (req, res, next) => {

    const { email, password } = req.body;

    const isVendor = await Vendor.findOne({ email }).select('+password');

    if (!isVendor) return next(new ErrorHandler('Vendor not exits!', 404));

    const isCorrectPassword = await bcrypt.compare(password, isVendor.password);

    if (!isCorrectPassword) return next(new ErrorHandler('Incorrect password!'));

    const vendorToken = jwt.sign({ _id: isVendor._id }, process.env.JWT_SECRET);

    res.status(200).cookie('vendorToken', vendorToken, {
        maxAge: 1000 * 60 * 100,
        httpOnly: true,
    }).json({
        success: true,
        message: 'Login'
    });

});

// Logout
export const vendorLogout = catchAsyncError((req, res, next) => {

    res.status(200).cookie('vendorToken', null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    }).json({
        success: true,
        message: 'Logut!'
    });

});

// Update profile
export const updateVendorProfile = catchAsyncError(async (req, res, next) => {

    const { vendorId } = req.params;
    const { username, email, firstName, lastName, address, city, country, postalCode, about } = req.body;

    // check vendor id is valid or not
    if (!vendorId || !mongoose.Types.ObjectId.isValid(vendorId))
        return next(new ErrorHandler('Vendor Id is required!', 400));

    // Find vendor by Id
    const isVendor = await Vendor.findById({ _id: vendorId });
    if (!isVendor)
        return next(new ErrorHandler('Vendor not exist!', 404));

    //update vendor profile 
    const isUpdate = await Vendor.findByIdAndUpdate(isVendor._id, {
        username,
        email,
        firstName,
        lastName,
        address,
        city,
        country,
        postalCode,
        about
    }, {
        new: true
    });

    // if update could not be success
    if (!isUpdate)
        return next(new ErrorHandler('something went wrong, please try again', 500));

    res.status(200).json({
        success: true,
        message: "Profule update successfully",
        data: isUpdate
    });


});


export const getVendor = catchAsyncError((req, res) => {

    const { vendorToken } = req.cookies;
    console.log(vendorToken);

    if (!vendorToken) return res.status(200).json({
        success: false
    });

    res.status(200).json({
        success: true,
    });

});