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
            localStorage.setItem('vendorToken', action.payload || null);
        },
        vendorLoginFail: (state, action) => {
            state.success = false;
            state.loading = false;
            state.isVendorAuthonticated = false;
            state.error = action.payload;
        },

        vendorLogoutRequest: (state, action) => {
            state.loading = true;
            state.error = null;
        },

        vendorLogoutSuccess: (state, action) => {
            state.success = true;
            state.loading = false;
            state.isVendorAuthonticated = false;
            localStorage.removeItem('vendorToken');
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