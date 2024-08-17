import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({

    bookingId: {
        type: String,
        required: true
    },
    vendorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    hotelName: {
        type: String,
        required: true
    },
    roomNo: {
        type: String,
        required: true
    },
    cutomerDetails: {
        type: [],
        required: true
    },

}, {
    timestamps: true
});

export const BookingModel = mongoose.model('Booking', bookingSchema);