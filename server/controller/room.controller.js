import mongoose from "mongoose";
import { dataUri } from "../data/dataUri.js";
import { catchAsyncError } from "../middleware/catchAsyncError.js";
import { BookingModel } from "../model/booking.model.js";
import { BookingsRecord } from "../model/bookingsRecord.model.js";
import { Room } from "../model/room.model.js";
import ErrorHandler from "../utils/errorHandler.js";
import { v2 as cloudinary } from 'cloudinary';


export const searchRoom = catchAsyncError(async (req, res, next) => {

    const { roomNo } = req.params;
    const vendorId = req.vendor._id;

    const isRoom = await Room.findOne({ roomNo, vendorId });

    if (!isRoom)
        return next(new ErrorHandler('Room does not exits!', 404));

    res.status(200).json({
        success: true,
        message: isRoom

    });

});

export const reservationController = catchAsyncError(async (req, res, next) => {

    const { roomNo } = req.params;
    const { name, bookingDate, document, checkInDateTime, checkOutDateTime, roomStatus } = req.body;

    if (!roomNo) return next(new ErrorHandler('Somethe wrong!', 500));



});




// Add Room controller
export const addRoom = catchAsyncError(async (req, res, next) => {

    const files = req.files;

    const { roomNo, name, roomArray, noOfRooms, availableRooms, roomType, description, price } = req.body;

    const vendor = req.vendor;

    if (!files.length || !files)
        return next(new ErrorHandler('Please upload at least one Image!', 400));

    const requiredFields = { roomNo, name, roomArray, noOfRooms, availableRooms, roomType, description, price };

    const missingFields = [];

    // Check for missing fields
    Object.entries(requiredFields).forEach(([key, value]) => {
        if (!value) {
            missingFields.push(key);
        }
    });

    if (missingFields.length)
        return next(new ErrorHandler(`Please fill all fields!, ${missingFields.join(' , ')}`, 400));

    let arr = roomArray.split(',').map(item => item.trim());


    const isRoom = await Room.findOne({ roomNo, vendorId: vendor._id });

    // Check if room already exists for the vendor
    if (isRoom) return next(new ErrorHandler('Room number already exits!', 409));


    // Getting uploading files on cloudinary

    const imageUpload = files.map((file) => {
        const getDataUri = dataUri(file);
        return cloudinary.uploader.upload(getDataUri.content, {
            folder: 'BookUp'
        });
    });

    const uploadedImages = await Promise.all(imageUpload);

    const images = uploadedImages.map((image) => ({
        public_id: image.public_id,
        url: image.url
    }));


    // Uploading Data in database
    await Room.create({
        vendorId: vendor._id,
        roomNo, name, roomArray: arr, noOfRooms, availableRooms, roomType, description, price,
        images
    });


    res.status(200).json({
        success: true,
        message: "Add Successfully",
        uploadedImages
    });

});


// Update Room Controller
export const updateRoom = catchAsyncError(async (req, res, next) => {

    const files = req.files;

    const { roomNo, name, noOfRooms, availableRooms, roomType, services, description, price, deleteImages } = req.body;

    console.log(

        "deleteImages : " , deleteImages
    );

    const vendor = req.vendor;

    const isRoom = await Room.findOne({ roomNo, vendorId: vendor._id });

    if (!isRoom)
        return next(new ErrorHandler('Room does not exist!', 404));

    let oldImagesArray = isRoom.images;

    // Delete images from Cloudinary
    if (deleteImages && deleteImages.length) {

        await Promise.all(
            deleteImages?.map(async (public_id) => {
                return cloudinary.uploader.destroy(public_id)
                    .then((result) => {
                        console.log(`Deleted image: ${public_id}`, result);
                    })
                    .catch((error) => {
                        console.error(`Error deleting image: ${public_id}`, error);
                    });
            })
        );

    }

    // Remove the images data from the database array
    const oldImagesUpdatedArray = oldImagesArray.filter((image) => {
        return !deleteImages?.includes(image.public_id);
    });

    // Uploading new images to Cloudinary
    let newImagesArray = [];
    if (files && files.length) {
        const imageUpload = files.map(async (file) => {
            const getDataUri = dataUri(file);

            return cloudinary.uploader.upload(getDataUri.content, {
                folder: 'BookUp'
            });
        });

        const uploadedImages = await Promise.all(imageUpload);

        newImagesArray = uploadedImages.map((image) => ({
            public_id: image.public_id,
            url: image.url
        }));
    }

    // Updateing array to upload on the database 
    const images = [...newImagesArray, ...oldImagesUpdatedArray];

    // saveing data on the database{the {new : true} will be return the updated object to udpate document}
    const updatedRoom = await Room.findByIdAndUpdate(isRoom._id, {
        roomNo, name, noOfRooms, availableRooms, roomType, services, description, price,
        images: images
    }, {
        new: true
    });

    if (!updatedRoom) return next(new ErrorHandler('Failed to update room!', 500));

    res.status(200).json({
        success: true,
        message: 'Room updated successfully',
        room: updatedRoom // Return the updated room object
    });
});


// Delete Room Controller
export const deleteRoom = catchAsyncError(async (req, res, next) => {

    const { roomNo } = req.params;
    const vendorId = req.vendor._id;

    const isRoom = await Room.findOne({ roomNo, vendorId });

    if (!isRoom)
        return next(new ErrorHandler('Room does not extis!', 400));

    const images = isRoom.images;

    // Delete Images from cloudinary
    await Promise.all(
        images.map((image) => {
            cloudinary.uploader.destroy(image.public_id).then((result) => {
                console.log(result);
            }).catch((error) => {
                console.error(`Error deleting image : ${image.public_id} : `, error);
            });
        })
    );

    // Delete room from the databse
    const isDelete = await Room.findByIdAndDelete(isRoom._id);

    if (!isDelete) return next(new ErrorHandler('Failed to delete the room!', 500));

    res.status(200).json({
        success: true,
        message: "Room deleted successfully",
        deleteRoomNo: roomNo
    });

});


// Update room status
export const updateRoomStatus = catchAsyncError(async (req, res, next) => {

    const { bookingId } = req.params;
    const { document, updateType } = req.body;

    if (!bookingId)
        return next(new ErrorHandler('Please provide all required fields!', 400));

    if (!['checkIn', 'checkOut', 'cancelled'].includes(updateType))
        return next(new ErrorHandler('Invalid update type!', 400));

    const isBooking = await BookingModel.findById(bookingId);

    if (!isBooking)
        return next(new ErrorHandler('Booking does not exists!', 404));

    const isRoom = await Room.findById(isBooking.roomId);

    if (!isRoom)
        return next(new ErrorHandler('Room does not exists!', 404));


    // Check-In Update
    if (updateType === 'checkIn') {
        const update = await BookingModel.findByIdAndUpdate(isBooking._id, {
            customerDetails: {
                ...isBooking.customerDetails,
                document: {
                    name: document.name,
                    number: document.number
                }
            },
            checkInDate: new Date(),
        });

        if (!update)
            return next(new ErrorHandler('Something went wrong, please try again!', 500));


        return res.status(200).json({
            success: true,
            message: 'Check-In Update successfully'
        });

    }



    if (updateType === 'checkOut') {
        const update = await BookingModel.findByIdAndUpdate(isBooking._id, {
            checkOutDate: new Date(),
        });

        if (!update)
            return next(new ErrorHandler('Something went wrong, please try again!', 500));

    }

    const isRecorded = await BookingsRecord.create({
        bookingId: isBooking.bookingId,
        guestId: isBooking.guestId,
        roomId: isBooking.roomId,
        roomNo: isBooking.roomNo,
        customerDetails: isBooking.customerDetails,
        reservationDates: isBooking.reservationDates,
        checkInDate: isBooking.checkInDate,
        checkOutDate: isBooking.checkOutDate,
        isCancelled: updateType === 'cancelled',
        bookingDate: isBooking.createdAt
    });

    if (!isRecorded)
        return next(new ErrorHandler('Something went wrong, please try again!', 500));

    const updateRoom = await Room.findByIdAndUpdate(isRoom._id, {
        $push: {
            roomArray: isBooking.roomNo
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
        return next(new ErrorHandler('something wrong please try again!', 500));

    await BookingModel.findByIdAndDelete(isBooking._id);


    return res.status(200).json({
        success: true,
        message: updateType === 'checkOut' ?
            'Check-Out updated successfully and now the room is free.' :
            'Booking cancelled successfully!'
    });

});



// get vendor all rooms
export const getVendorRooms = catchAsyncError(async (req, res, next) => {

    const vendorId = req.vendor._id;

    const getRooms = await Room.find({ vendorId });

    if (!getRooms)
        return next(new ErrorHandler('No room exists!', 400));

    res.status(200).json({
        success: true,
        message: getRooms

    });


});

