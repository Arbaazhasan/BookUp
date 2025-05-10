import { catchAsyncError } from "../middleware/catchAsyncError.js";
import { Vendor } from "../model/vendor.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import ErrorHandler from "../utils/errorHandler.js";
import mongoose from "mongoose";
import { BookingModel } from "../model/booking.model.js";
import { Room } from "../model/room.model.js";


// Vendor Registration
export const vendorResigter = catchAsyncError(async (req, res, next) => {

    const { email, password } = req.body;

    const isVendor = await Vendor.findOne({ email });

    if (isVendor) return next(new ErrorHandler('Vendor already exits!', 409));
    //pre event
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
        message: `Welcome ${isVendor.firstName}`,
        vendor: isVendor._id,
        isVendor
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

    const { userName, email, firstName, lastName, address, city, country, postalCode, about } = req.body;

    const vendorId = req.vendor._id;

    // check vendor id is valid or not
    if (!vendorId || !mongoose.Types.ObjectId.isValid(vendorId))
        return next(new ErrorHandler('Vendor Id is required!', 400));

    // Find vendor by Id
    const isVendor = await Vendor.findById({ _id: vendorId });
    if (!isVendor)
        return next(new ErrorHandler('Vendor not exist!', 404));

    //update vendor profile 
    const isUpdate = await Vendor.findByIdAndUpdate(isVendor._id, {
        username: userName,
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


export const getVendor = catchAsyncError(async (req, res) => {

    const { vendorToken } = req.cookies;

    if (!vendorToken) return res.status(200).json({
        success: false
    });


    const id = jwt.verify(vendorToken, process.env.JWT_SECRET);

    const venderData = await Vendor.findById({ _id: id._id });

    res.status(200).json({
        success: true,
        venderData
    });

});


export const getBookings = catchAsyncError(async (req, res) => {
    const vendorId = req.vendor._id;
    const { type } = req.body;

    // Initialize the query with vendorId
    const query = { vendorId };

    // If type is passed, filter by that specific status
    if (type === "New Booking" || type === "Check-In") {
        query.status = type;  // Filter by the provided status ("New Booking" or "Check-In")
    } else {
        // Otherwise, exclude "New Booking" and "Check-In"
        query.status = { $nin: ["New Booking", "Check-In"] };
    }

    // Fetch bookings based on the constructed query
    const getBookings = await BookingModel.find(query).populate("vendorId");

    // Return the result
    res.status(200).json({
        success: true,
        message: getBookings,
    });
});


export const updateBookingStatus = catchAsyncError(async (req, res, next) => {

    const { status, bookingId } = req.body;

    if (!status || !bookingId)
        return next(new ErrorHandler("Select Status ", 400));

    if (!bookingId || !mongoose.Types.ObjectId.isValid(bookingId))
        return next(new ErrorHandler('all fileds are required!', 400));

    const isBooking = await BookingModel.findById(bookingId);

    // Check Booking
    if (!isBooking)
        return next(new ErrorHandler('Booking does not exists!', 404));

    // Check room exists
    const isRoom = await Room.findById(isBooking.roomId);
    if (!isRoom)
        return next(new ErrorHandler('Room does not exists!', 404));

    const updateRoom = await Room.findByIdAndUpdate(isRoom._id, {
        $push: {
            roomArray: isBooking.roomNo,
        },
        $inc: { availableRooms: +1 },

        $pull: {
            reservationDates: {
                bookingId: isBooking._id
            }
        }
    }, {
        new: true
    });

    await BookingModel.findByIdAndUpdate({ _id: bookingId }, {
        $set: { status: status }
    });

    res.status(200).json({
        success: true,
        message: "Status Update"
    });


})