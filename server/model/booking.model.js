import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({

    bookingId: {
        type: String,
        required: true
    },
    guestId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true

    },
    roomId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    roomNo: {
        type: String,
        required: true
    },

    noOfBookedRooms: {
        type: Number,
        default: 1,
        min: 1
    },
    customerDetails: {
        type: {},
        required: true
    },

    reservationDates: {
        type: {},
        required: true
    },

    checkInDate: {
        type: Date,
    },
    checkOutDate: {
        type: Date,
    },


}, {
    timestamps: true
});

export const BookingModel = mongoose.model('Booking', bookingSchema);