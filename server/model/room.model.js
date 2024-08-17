import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({

    vendorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vendor',
        required: true,
    },

    roomNo: {
        type: String,
        required: true,

    },

    name: {
        type: String
    },

    noOfRooms: {
        type: Number,
        required: true,
        min :0,
    },

    availableRooms: {
        type: Number,
        required: true,
        min:0
    },

    roomType: {
        type: String,
        required: true,
    },

    services: {
        type: String,

    },

    description: {
        type: String
    },
    price: {
        type: Number,
        min:0
    },

    images: {
        type: [],

    }

});

export const Room = mongoose.model('Room', roomSchema);