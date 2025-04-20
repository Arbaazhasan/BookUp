import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    status: false,
    isVendorAuthonticated: true,
    vendorProfile: [],
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
            localStorage.setItem('vendorToken', action.payload.token || null);
            state.vendorProfile = action.payload.venderData;
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

        vendorRegisterRequest: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        vendorRegisterSuccess: (state, action) => {
            state.success = true;
            state.loading = false;
            state.isVendorAuthonticated = true;
            localStorage.setItem('vendorToken', action.payload || null);
        },
        vendorRegisterFail: (state, action) => {
            state.success = false;
            state.loading = false;
            state.isVendorAuthonticated = false;
            state.error = action.payload;
        },


        vendorAuthonticated: (state, action) => {
            state.isVendorAuthonticated = true;
            state.vendorProfile = action.payload;
        },


    }
});


export const {
    vendorLoginRequest,
    vendorLoginSuccess,
    vendorLoginFail,

    vendorLogoutRequest,
    vendorLogoutSuccess,
    vendorLogoutFail,

    vendorRegisterRequest,
    vendorRegisterSuccess,
    vendorRegisterFail,


    vendorAuthonticated,


} = vendorAuthReducer.actions;

export default vendorAuthReducer.reducer;