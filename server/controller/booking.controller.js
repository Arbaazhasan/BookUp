import mongoose from "mongoose";
import { catchAsyncError } from "../middleware/catchAsyncError.js";
import { BookingModel } from "../model/booking.model.js";
import { BookingsRecord } from "../model/bookingsRecord.model.js";
import { Room } from "../model/room.model.js";
import ErrorHandler from "../utils/errorHandler.js";
import { Vendor } from "../model/vendor.model.js";



export const checkAvailability = catchAsyncError(async (req, res, next) => {

    const { checkInDate, checkOutDate, roomId } = req.body;

    console.log(roomId);
    if (!checkInDate || !checkOutDate || !roomId)
        return next(new ErrorHandler('Please select dates!', 400));

    // Check if the room exists
    const isRoom = await Room.findById(roomId);
    if (!isRoom) return next(new ErrorHandler('Room does not exist', 404));

    // Check if the room is available
    const isAvailable = isRoom.availableRooms > 0;
    if (!isAvailable) return next(new ErrorHandler('Room is not available', 400));

    const requestedCheckInDate = new Date(checkInDate);
    const requestedCheckOutDate = new Date(checkOutDate);

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
            const existingCheckInDate = new Date(reservation.checkOutDate);
            const existingCheckOutDate = new Date(checkInDate);

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



// Search room according to city and Check-in and Check-Out dates
export const searchRooms = catchAsyncError(async (req, res, next) => {

    const { city, checkInDate, checkOutDate, rooms } = req.body;


    if (!city)
        return next(new ErrorHandler('Please select city!', 400));


    // Parse the dates
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);


    // Check that check-out date is after check-in date
    if (checkIn >= checkOut) {
        return res.status(400).json({
            success: false,
            message: "Check-out date must be after check-in date"
        });
    }

    // Step 1: Find all vendors in the specified city
    const vendors = await Vendor.find({ city: { $regex: new RegExp(city, 'i') } });

    if (!vendors.length) {
        return res.status(404).json({
            success: false,
            message: `No hotel found in ${city}`
        });
    }

    // Extract vendor IDs
    const vendorIds = vendors.map(vendor => vendor._id);

    // Step 2: Find rooms that belong to the vendors in the city and are available for the given date range
    const availableRooms = await Room.find({
        vendorId: { $in: vendorIds },

        reservationDates: {
            $not: {
                $elemMatch: {
                    $or: [
                        { checkIn: { $lt: checkOut }, checkOut: { $gt: checkIn } } // Overlapping reservations
                    ]
                }
            }
        },
        availableRooms: { $gt: (rooms - 1) || 0 } // Rooms that have availability
    });

    // Step 3: If no rooms are found, return a 404 error
    if (!availableRooms.length) {
        return res.status(404).json({
            success: false,
            message: "No rooms available for the given dates"
        });
    }

    // Step 4: Return the list of available rooms
    return res.status(200).json({
        success: true,
        availableRooms
    });
});


// Book Room
export const bookRoom = catchAsyncError(async (req, res, next) => {

    const { roomId } = req.query;
    const { name, adults, children, checkInDate, checkOutDate, noOfRooms } = req.body;
    const guestId = req.guest._id;

    // Validate required fields
    if (!name || !adults || !children.toString() || !checkInDate || !checkOutDate) {
        return next(new ErrorHandler('Please provide all required fields!', 400));
    }

    const customerDetails = {
        ...name,
        adults,
        children,
    }

    // Check if room exists
    const isRoom = await Room.findById({ _id: roomId });
    if (!isRoom) return next(new ErrorHandler('Room does not exist!', 404));

    // Check if room is available
    if (isRoom.availableRooms <= 0) return next(new ErrorHandler('Room is not available!', 400));


    // Converting dates into IOS Standard
    const requestedCheckInDate = new Date(checkInDate);
    const requestedCheckOutDate = new Date(checkOutDate);
    let isDatesAvailable = true;


    // if more then 1 room available 
    if (isRoom.noOfRooms == 1 && isRoom.availableRooms == 1) {
        console.log("first");

        isRoom.reservationDates?.forEach((reservation) => {
            const existingCheckInDate = new Date(reservation.checkOutDate);
            const existingCheckOutDate = new Date(checkInDate);

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
            vendorId: isRoom.vendorId,
            guestId,
            roomId: isRoom._id,
            roomNo: isRoom.roomArray[0],
            noOfBookedRooms: noOfRooms,
            customerDetails,
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
            vendorId: isRoom.vendorId,
            guestId,
            roomId: isRoom._id,
            roomNo: isRoom.roomArray[0],
            customerDetails,
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

    const getBookings = await BookingModel.find({ guestId }).populate("vendorId");

    res.status(200).json({
        success: true,
        message: getBookings,
    });

});


