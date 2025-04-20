import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    loading: false,
    error: null,
    bookingsArray: [],

};

const vendorBookingReducer = createSlice({
    name: "vendorBookingReducer",
    initialState,

    reducers: {

        getVendorBookingRequest: (state, action) => {
            state.loading = true;
            state.error = null;
            state.bookingsArray = [];
        },
        getVendorBookingSuccess: (state, action) => {
            state.loading = false;
            state.bookingsArray = action.payload;
        },
        getVendorBookingFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.bookingsArray = [];

        },

        updateBookingStatusRequest: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        updateBookingStatusSuccess: (state, action) => {
            state.loading = false;
        },
        updateBookingStatusFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

    }
});

export const {

    getVendorBookingRequest,
    getVendorBookingSuccess,
    getVendorBookingFail,


    updateBookingStatusRequest,
    updateBookingStatusSuccess,
    updateBookingStatusFail

} = vendorBookingReducer.actions;

export default vendorBookingReducer.reducer;