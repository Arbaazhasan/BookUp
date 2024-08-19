import mongoose from "mongoose";
import { catchAsyncError } from "../middleware/catchAsyncError.js";
import { BookingModel } from "../model/booking.model.js";
import { BookingsRecord } from "../model/bookingsRecord.model.js";
import { Room } from "../model/room.model.js";
import ErrorHandler from "../utils/errorHandler.js";

export const checkAvailability = catchAsyncError(async (req, res, next) => {

    const { roomNo, roomName, vendorId } = req.query;
    const { checkInDate, checkOutDate } = req.body;

    if (!roomNo || !roomName || !vendorId || !checkInDate || !checkInDate.date || !checkInDate.month || !checkInDate.year || !checkOutDate || !checkOutDate.date || !checkOutDate.month || !checkOutDate.year)
        return next(new ErrorHandler('Please select dates!', 400));

    // Check if the room exists
    const isRoom = await Room.findOne({ roomNo, name: roomName, vendorId });
    if (!isRoom) return next(new ErrorHandler('Room does not exist', 404));

    // Check if the room is available
    const isAvailable = isRoom.availableRooms > 0;
    if (!isAvailable) return next(new ErrorHandler('Room is not available', 400));

    const requestedCheckInDate = new Date(checkInDate.year, checkInDate.month - 1, checkInDate.date);
    const requestedCheckOutDate = new Date(checkOutDate.year, checkOutDate.month - 1, checkOutDate.date);

    const reservationDates = isRoom.reservationDates;
    let isDatesAvailable = true;

    // Check single Interface room
    if (isRoom.noOfRooms == 1 && isRoom.availableRooms == 1) {

        // Check if requested dates are free
        if (!reservationDates.length) {
            return res.status(200).json({
                success: true,
                message: "Room available"
            });
        }

        isRoom.reservationDates.forEach((reservation) => {
            const existingCheckInDate = new Date(reservation.checkInDate.year, reservation.checkInDate.month - 1, reservation.checkInDate.date);
            const existingCheckOutDate = new Date(reservation.checkOutDate.year, reservation.checkOutDate.month - 1, reservation.checkOutDate.date);

            if (
                (requestedCheckInDate < existingCheckOutDate && requestedCheckOutDate > existingCheckInDate) ||
                (requestedCheckInDate <= existingCheckInDate && requestedCheckOutDate >= existingCheckOutDate)
            ) {
                isDatesAvailable = false;
            }
        });

        if (!isDatesAvailable) return next(new ErrorHandler('Selected date is not available!', 400));

        return res.status(200).json({
            success: true,
            message: "Room available"
        });
    }

    // Check multiple same Interface room
    if (isRoom.noOfRooms > 1 && isRoom.availableRooms > 0) {

        return res.status(200).json({
            success: true,
            message: "Room available "
        });
    }

});




// Book Room
export const bookRoom = catchAsyncError(async (req, res, next) => {

    const { vendorId, roomNo, roomName } = req.query;
    const { name, adults, children, checkInDate, checkOutDate } = req.body;
    const guestId = req.guest._id;

    // Validate required fields
    if (!name || !adults || !children || !roomNo || !roomName || !vendorId ||
        !checkInDate || !checkInDate.date || !checkInDate.month || !checkInDate.year ||
        !checkOutDate || !checkOutDate.date || !checkOutDate.month || !checkOutDate.year) {
        return next(new ErrorHandler('Please provide all required fields!', 400));
    }

    // Check if room exists
    const isRoom = await Room.findOne({ roomNo, vendorId, name: roomName });
    if (!isRoom) return next(new ErrorHandler('Room does not exist!', 404));

    // Check if room is available
    if (isRoom.availableRooms <= 0) return next(new ErrorHandler('Room is not available!', 400));


    // Converting dates into IOS Standard
    const requestedCheckInDate = new Date(checkInDate.year, checkInDate.month - 1, checkInDate.date);
    const requestedCheckOutDate = new Date(checkOutDate.year, checkOutDate.month - 1, checkOutDate.date);
    let isDatesAvailable = true;


    // if more then 1 room available 
    if (isRoom.noOfRooms == 1 && isRoom.availableRooms == 1) {
        console.log("first");

        isRoom.reservationDates?.forEach((reservation) => {
            const existingCheckInDate = new Date(reservation.checkInDate.year, reservation.checkInDate.month - 1, reservation.checkInDate.date);
            const existingCheckOutDate = new Date(reservation.checkOutDate.year, reservation.checkOutDate.month - 1, reservation.checkOutDate.date);

            if (
                (requestedCheckInDate < existingCheckOutDate && requestedCheckOutDate > existingCheckInDate) ||
                (requestedCheckInDate <= existingCheckInDate && requestedCheckOutDate >= existingCheckOutDate)
            ) {
                isDatesAvailable = false;
            }
        });

        if (!isDatesAvailable) {
            return next(new ErrorHandler('Selected dates are not available!', 400));
        }

        // Generate bookingId
        const bookingId = Math.floor(Math.random() * 12323435254);

        // Save booking information
        const booking = await BookingModel.create({
            bookingId,
            guestId,
            roomId: isRoom._id,
            roomNo: isRoom.roomArray[0],
            customerDetails: { name, adults, children },
            reservationDates: { from: requestedCheckInDate, to: requestedCheckOutDate }
        });


        if (!booking) return next(new ErrorHandler('Something wrong please try again!'));

        // Update room status
        await Room.findByIdAndUpdate(isRoom._id, {
            $inc: { availableRooms: -1 },
            $push: {
                reservationDates: {
                    bookingId: booking._id,
                    from: requestedCheckInDate, to: requestedCheckOutDate
                }
            },
            $pop: { roomArray: -1 } // Remove the first element
        }, {
            new: true
        });

        return res.status(200).json({
            success: true,
            message: 'Room Booked successfully',
        });

    }

    if (isRoom.availableRooms > 0 && isRoom.noOfRooms > 1) {
        console.log("Second");

        // Generate bookingId
        const bookingId = Math.floor(Math.random() * 12323435254);

        // Save booking information
        const booking = await BookingModel.create({
            bookingId,
            guestId,
            roomId: isRoom._id,
            roomNo: isRoom.roomArray[0],
            customerDetails: { name, adults, children },
            reservationDates: { from: requestedCheckInDate, to: requestedCheckOutDate }

        });

        if (!booking) return next(new ErrorHandler('Something wrong please try again!'));

        // Update room status
        await Room.findByIdAndUpdate(isRoom._id, {
            $inc: { availableRooms: -1 },
            $push: {
                reservationDates: {
                    bookingId: booking._id,
                    from: requestedCheckInDate, to: requestedCheckOutDate
                }
            },
            $pop: { roomArray: -1 } // Remove the first element
        }, {
            new: true
        });

        res.status(200).json({
            success: true,
            message: 'Room Booked successfully',
        });
    }


});


//cancel Bookings
export const cancelBooking = catchAsyncError(async (req, res, next) => {

    const { bookingId } = req.params;

    // Check bookingId is valid
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


    // save booking information into the record
    const isRecord = await BookingsRecord.create({
        bookingId: isBooking.bookingId,
        guestId: isBooking.guestId,
        roomId: isBooking.roomId,
        roomNo: isBooking.roomNo,
        customerDetails: isBooking.customerDetails,
        reservationDates: isBooking.reservationDates,
        bookingDate: isBooking.createdAt,
        isCancelled: true,
    });

    if (!isRecord)
        return next(new ErrorHandler("Something went wrong, please try again!", 500));

    // Upate the room status
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

    if (!updateRoom)
        return next(new ErrorHandler("Something went wrong, please try again!", 500));

    // delete booking 
    const isDelete = await BookingModel.findByIdAndDelete(isBooking._id);
    if (!isDelete)
        return next(new ErrorHandler("Something went wrong, please try again", 500));


    res.status(200).json({
        success: true,
        message: "Booking cancelled successfull"
    });


});


// get guest bookings
export const getGuestBookings = catchAsyncError(async (req, res, next) => {

    const guestId = req.guest._id;

    const getBookings = await BookingModel.find({ guestId });

    res.status(200).json({
        success: true,
        message: getBookings
    });

});


// get Guest bookings record
export const getGuestBookingRecords = catchAsyncError(async (req, res, next) => {

    const guestId = req.guest._id;

    const getRecords = await BookingsRecord.find({ guestId });

    res.status(200).json({
        success: true,
        message: getRecords
    });

});