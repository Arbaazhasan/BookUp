import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    status: false,
    isVendorAuthonticated: false,
    loading: false,
    error: null,

};

const vendorAuthReducer = createSlice({
    name: "vendorAuthReducer",
    initialState,

    reducers: {

        vendorLoginRequest: (state, action) => {
            state.loading = true;
            state.error = null;
            state.isVendorAuthonticated = false;
        },
        vendorLoginSuccess: (state, action) => {
            state.loading = false;
            state.isVendorAuthonticated = true;
        },
        vendorLoginFail: (state, action) => {
            state.loading = false;
            state.isVendorAuthonticated = false;
            state.error = action.payload;
        },

        vendorLogoutRequest: (state, action) => {
            state.loading = true;
            state.error = null;
        },

        vendorLogoutSuccess: (state, action) => {
            state.loading = false;
            state.isVendorAuthonticated = false;
        },
        vendorLogoutFail: (state, action) => {
            state.loading = false;
            state.isVendorAuthonticated = true;
            state.error = action.payload;
        },



        vendorAuthonticated: (state, action) => {
            state.isVendorAuthonticated = true;
        }

    }
});


export const {
    vendorLoginRequest,
    vendorLoginSuccess,
    vendorLoginFail,

    vendorLogoutRequest,
    vendorLogoutSuccess,
    vendorLogoutFail,

    vendorAuthonticated

} = vendorAuthReducer.actions;

export default vendorAuthReducer.reducer;