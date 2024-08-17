import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({

    username: {
        type: String,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
        select: false
    },

    firstName: {
        type: String
    },

    lastName: {
        type: String,
    },

    address: {
        type: String
    },

    city: {
        type: String
    },

    country: {
        type: String
    },

    postalCode: {
        type: String
    },

    aboutMe: {
        type: String
    }

});

export const Vendor = mongoose.model('Vengor', vendorSchema);