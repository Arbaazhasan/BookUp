import { configureStore } from "@reduxjs/toolkit";
import guestAuthReducer from "../reducers/guestAuthReducer";
import vendorAuthReducer from "../reducers/vendorAuthReducer";


const store = configureStore({
    reducer: {
        guestAuthReducer: guestAuthReducer,
        vendorAuthReducer: vendorAuthReducer
    },

});

export const server = 'http://localhost:5000/api/v1';

export default store;