import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false // This hides the password field by default in queries
    },
    address: {
        type: String
    },
    phoneNo: {
        type: Number
    },
});

export const User = mongoose.model('User', userSchema);
