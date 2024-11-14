import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    hotelList: [],
    roomDetails: [],
    error: null,
    checkAvailabilityWindow: false,
    isRoomAvailable: false,

};

const bookingReducer = createSlice({
    name: "bookingReducer",
    initialState,

    reducers: {

        getHotelListRequest: (state, action) => {
            state.loading = true,
                state.error = null;
        },
        getHotelListSuccess: (state, action) => {
            state.loading = false;
            state.hotelList = action.payload;
        },
        getHotelListFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        getRoomDetailsRequest: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        getRoomDetailsSuccess: (state, action) => {
            state.loading = false;
            state.roomDetails = action.payload;
        },
        getRoomDetailsFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        checkRoomAvailabilityRequest: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        checkRoomAvailabilitySuccess: (state, action) => {
            state.loading = false;
        },
        checkRoomAvailabilityFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },



        checkAvailabilityAction: (state, action) => {
            state.checkAvailabilityWindow = !state.checkAvailabilityWindow;
        }

    }
});


export const {

    getHotelListRequest,
    getHotelListSuccess,
    getHotelListFail,

    getRoomDetailsRequest,
    getRoomDetailsSuccess,
    getRoomDetailsFail,


    checkRoomAvailabilityRequest,
    checkRoomAvailabilitySuccess,
    checkRoomAvailabilityFail,

    checkAvailabilityAction


} = bookingReducer.actions;

export default bookingReducer.reducer;