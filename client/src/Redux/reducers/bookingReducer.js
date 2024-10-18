import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    hotelList: [],
    error: null,

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
        }
    }
});


export const {

    getHotelListRequest,
    getHotelListSuccess,
    getHotelListFail

} = bookingReducer.actions;

export default bookingReducer.reducer;