import mongoose from "mongoose";

const bookingsRecordSchema = new mongoose.Schema({

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
    bookingDate: {
        type: Date,
        required: true
    },

    isCancelled: {
        type: Boolean,
        default: false
    }


}, {
    timestamps: true
});

export const BookingsRecord = mongoose.model('BookingsRecord', bookingsRecordSchema);