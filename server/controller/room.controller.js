import { dataUri } from "../data/dataUri.js";
import { catchAsyncError } from "../middleware/catchAsyncError.js";
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




// Add Room controller
export const addRoom = catchAsyncError(async (req, res, next) => {

    const files = req.files;

    const { roomNo, name, noOfRooms, availableRooms, roomType, services, description, price } = req.body;

    const vendor = req.vendor;


    if (!files.length || !files)
        return next(new ErrorHandler('Please upload at least one Image!', 400));

    if (!roomNo || !name || !noOfRooms || !availableRooms || !roomType || !services || !description || !price)
        return next(new ErrorHandler('Please fill all fields!', 400));


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
        roomNo, name, noOfRooms, availableRooms, roomType, services, description, price,
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

