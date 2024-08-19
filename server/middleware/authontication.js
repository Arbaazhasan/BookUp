import jwt from "jsonwebtoken";
import { catchAsyncError } from "./catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { Vendor } from "../model/vendor.model.js";
import { Guest } from "../model/guest.model.js";

export const vendorAuthontication = catchAsyncError(async (req, res, next) => {

    const { vendorToken } = req.cookies;

    if (!vendorToken) return next(new ErrorHandler('Login first!', 400));

    const decode = jwt.verify(vendorToken, process.env.JWT_SECRET);

    if (!decode) return next(new ErrorHandler('Session Expired!', 400));

    const vendor = await Vendor.findById(decode._id);

    if (!vendor) return next(new ErrorHandler('User not exists!'));

    req.vendor = vendor;

    next();

});

export const guestAuthontication = catchAsyncError(async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) return next(new ErrorHandler('Login first!', 400));

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    if (!decode) return next(new ErrorHandler('Session Expired!', 400));

    const guest = await Guest.findById(decode._id);

    if (!guest) return next(new ErrorHandler('Guest not exists'));

    req.guest = guest;

    next();

});