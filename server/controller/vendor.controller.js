import { catchAsyncError } from "../middleware/catchAsyncError.js";
import { Vendor } from "../model/vendor.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import ErrorHandler from "../utils/errorHandler.js";

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


export const vendorLogout = catchAsyncError((req, res, next) => {

    res.status(200).cookie('vendorToken', null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    }).json({
        success: true,
        message: 'Logut!'
    });

});


