import { configureStore } from "@reduxjs/toolkit";
import guestAuthReducer from "../reducers/guestAuthReducer";
import vendorAuthReducer from "../reducers/vendorAuthReducer";
import bookingReducer from "../reducers/bookingReducer";
import controlPanelReducer from "../reducers/controlPanelReducer";

const store = configureStore({
    reducer: {
        guestAuthReducer: guestAuthReducer,
        vendorAuthReducer: vendorAuthReducer,
        bookingReducer: bookingReducer,
        controlPanelReducer : controlPanelReducer
    },

});

export const server = 'http://localhost:5000/api/v1';

export default store;