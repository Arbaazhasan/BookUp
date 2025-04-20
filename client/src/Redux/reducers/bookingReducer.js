import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    hotelList: [],
    roomDetails: [],
    error: null,
    checkAvailabilityWindow: false,
    isRoomAvailable: false,

    checkInDate: "",
    checkOutDate: "",
    userFirstName: "",
    userLastName: "",
    userEmail: "",
    userPhoneNo: "",
    userCity: "",
    userCountry: "",
    adults: "",
    children: "",
    noOfRooms: "",

    allBookingList: [],



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
            state.hotelList = action.payload.availableRooms;
            state.adults = action.payload.adult;
            state.children = action.payload.children;
            state.noOfRooms = action.payload.noOfRoom;
            console.log(action.payload.adult)


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
            state.checkInDate = action.payload.checkInDate;
            state.checkOutDate = action.payload.checkOutDate;
        },
        checkRoomAvailabilityFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        getBookingRequest: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        getBookingSuccess: (state, action) => {
            state.loading = false;
        },
        getBookingFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        getAllBookingListRequest: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        getAllBookingListSuccess: (state, action) => {
            state.loading = false;
            state.allBookingList = action.payload;
        },
        getAllBookingListFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },



        setBookingDates: (state, action) => {
            state.checkInDate = action.payload.checkInData;
            state.checkOutDate = action.payload.checkOutDate;
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

    getBookingRequest,
    getBookingSuccess,
    getBookingFail,

    getAllBookingListRequest,
    getAllBookingListSuccess,
    getAllBookingListFail,

    setBookingDates,


    checkAvailabilityAction


} = bookingReducer.actions;

export default bookingReducer.reducer;