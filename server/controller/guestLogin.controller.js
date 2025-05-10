import { Guest } from "../model/guest.model.js";
import bcrypt from 'bcrypt';
import ErrorHandler from "../utils/errorHandler.js";
import { catchAsyncError } from "../middleware/catchAsyncError.js";
import jwt from "jsonwebtoken";
import { Room } from "../model/room.model.js";
import { Vendor } from "../model/vendor.model.js";


export const register = catchAsyncError(async (req, res, next) => {

    const { name, email, password } = req.body;

    const isUser = await Guest.findOne({ email });

    if (isUser)
        return next(new ErrorHandler("User already exits!", 409));

    const hasedPassword = await bcrypt.hash(password, 10);


    const user = await Guest.create({
        name,
        email,
        password: hasedPassword
    });

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    res.status(200).cookie('token', token, {
        maxAge: 1000 * 60 * 100,
        httpOnly: true

    }).json({
        success: true,
        message: 'Registered',
        user
    });


});


export const userLogin = catchAsyncError(async (req, res, next) => {

    const { email, password } = req.body;

    const isUser = await Guest.findOne({ email }).select('+password');

    if (!isUser)
        return next(new ErrorHandler("User not exits!", 404));



    const isPasswordCorrect = await bcrypt.compare(password, isUser.password);

    if (!isPasswordCorrect)
        return next(new ErrorHandler("Password incorrect!", 400));

    const token = jwt.sign({ _id: isUser._id }, process.env.JWT_SECRET);

    res.status(200).cookie('token', token, {
        maxAge: 1000 * 60 * 100,
        httpOnly: true,
    }).json({
        success: true,
        message: `Welcome back ${isUser.name}`,
        isUser
    });

});


export const logout = catchAsyncError(async (req, res, next) => {

    res.status(200).cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    }).json({
        success: true,
        message: 'Logout'
    });

});


export const getGuest = catchAsyncError(async (req, res) => {
    const { token } = req.cookies;

    if (!token) return res.status(200).json({
        success: false,
    });

    res.status(200).json({
        success: true,
        message: req.guest
    });

});



export const getRoomDetails = catchAsyncError((async (req, res, next) => {


    const { id } = req.params;

    if (!id) return next(new ErrorHandler("Incorrect Room Id!", 404));

    const isRoom = await Room.findById(id);

    if (!isRoom) return next(new ErrorHandler("Room does not exits!", 404));

    const getVendorDetails = await Vendor.findById(isRoom.vendorId);

    if (!getVendorDetails) return next(new ErrorHandler("Room does not exits!", 404));

    const roomDetails = {
        _id: isRoom._id,
        address: getVendorDetails.address + ", " + getVendorDetails.city + ", " + getVendorDetails.country,
        name: isRoom.name,
        roomType: isRoom.roomType,
        description: isRoom.description,
        price: isRoom.price,
        services: isRoom.services,
        images: isRoom.images,
    };

    res.status(200).json({
        success: true,
        message: roomDetails
    });

}));