import { Guest } from "../model/guest.model.js";
import bcrypt from 'bcrypt';
import ErrorHandler from "../utils/errorHandler.js";
import { catchAsyncError } from "../middleware/catchAsyncError.js";
import jwt from "jsonwebtoken";


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

    res.status(200).cookie('toekn', token, {
        maxAge: 1000 * 60 * 100,
        httpOnly: true

    }).json({
        success: true,
        message: 'Registered'
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
        message: `Welcome back ${isUser.name}`
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

})

