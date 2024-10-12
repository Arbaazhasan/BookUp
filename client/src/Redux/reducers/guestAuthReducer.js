import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    status: false,
    isGuestAuthonticated: false,
    loading: false,
    error: null
};


const guestAuthReducer = createSlice({
    name: 'guestLoginReducer',
    initialState,

    reducers: {

        testCase: (state, action) => {
            console.log(state.isGuestAuthonticated);
        },



        guestLoginRequest: (state, action) => {
            state.status = false;
            state.loading = true;
            state.isGuestAuthonticated = false;
            state.error = null;

        },
        guestLoginSuccess: (state, action) => {
            state.status = true;
            state.loading = false;
            state.isGuestAuthonticated = true;
            localStorage.setItem('token', action.payload.isUser._id || null);

        },
        guestLoginFailed: (state, action) => {
            state.status = false;
            state.isGuestAuthonticated = false;
            state.loading = false;
            state.error = action.payload;
        },



        guestRegisterRequest: (state, action) => {
            state.status = false;
            state.loading = true;
            state.isGuestAuthonticated = false;
            state.error = null;
        },
        guestRegisterSuccess: (state, action) => {
            state.success = true;
            state.loading = false;
            state.isGuestAuthonticated = true;
            localStorage.setItem('token', action.payload.user._id || null);

        },
        guestRegisterFail: (state, action) => {
            state.success = false;
            state.isGuestAuthonticated = false;
            state.loading = false;
            state.error = action.payload;
        },



        guestLogoutRequest: (state, action) => {
            state.success = false;
            state.loading = false;
            state.isGuestAuthonticated = true;
            state.error = null;
        },
        guestLogoutSuccess: (state, action) => {
            state.success = true;
            state.loading = false;
            state.isGuestAuthonticated = false;
            localStorage.removeItem('token');
        },
        guestLogoutFail: (state, action) => {
            state.success = false;
            state.loading = false;
            state.isGuestAuthonticated = true;
            state.error = action.payload;
        },


        guestAuthonticated: (state, action) => {
            state.isGuestAuthonticated = true;
        }


    }

});


export const {
    guestLoginRequest,
    guestLoginSuccess,
    guestLoginFailed,

    guestRegisterRequest,
    guestRegisterSuccess,
    guestRegisterFail,

    guestLogoutRequest,
    guestLogoutSuccess,
    guestLogoutFail,

    guestAuthonticated

} = guestAuthReducer.actions;

export default guestAuthReducer.reducer;