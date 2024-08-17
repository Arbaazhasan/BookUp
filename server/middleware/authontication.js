import jwt from "jsonwebtoken";
import { catchAsyncError } from "./catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { Vendor } from "../model/vendor.model.js";

export const authontication = catchAsyncError(async (req, res, next) => {

    const { vendorToken } = req.cookies;

    if (!vendorToken) return next(new ErrorHandler('Login first!', 400));

    const decode = jwt.verify(vendorToken, process.env.JWT_SECRET);

    if (!decode) return next(new ErrorHandler('Session Expired!', 400));

    const vendor = await Vendor.findById(decode._id);

    if (!vendor) return next(new ErrorHandler('User not exits!'));


    req.vendor = vendor;

    next();



});