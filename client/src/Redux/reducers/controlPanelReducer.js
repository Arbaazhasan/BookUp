import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    roomList: [],
    roomDetails: [],
    error: null,
};


const controlPanelReducer = createSlice({
    name: "controlPanelReducer",
    initialState,
    reducers: {

        clearPreviousRoomDetailsAction: (state, action) => {
            state.roomDetails = [];
        },

        getSearchRoomRequest: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        getSearchRoomSuccess: (state, action) => {
            state.loading = false;
            state.roomDetails = action.payload;
        },
        getSearchRoomFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        getRoomListRequest: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        getRoomListSuccess: (state, action) => {

            state.loading = false;
            state.roomList = action.payload;
        },
        getRoomListFail: (state, action) => {
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


        deleteRoomRequest: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        deleteRoomSuccess: (state, action) => {
            state.loading = false;
        },
        deleteRoomFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        vendorLoadingRequest: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        vendorLoadingSuccess: (state, action) => {
            state.loading = false;
        },
        vendorLoadingFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },





    }
});

export const {

    clearPreviousRoomDetailsAction,

    getSearchRoomRequest,
    getSearchRoomSuccess,
    getSearchRoomFail,

    getRoomListRequest,
    getRoomListSuccess,
    getRoomListFail,

    getRoomDetailsRequest,
    getRoomDetailsSuccess,
    getRoomDetailsFail,

    deleteRoomRequest,
    deleteRoomSuccess,
    deleteRoomFail,


    vendorLoadingRequest,
    vendorLoadingSuccess,
    vendorLoadingFail

} = controlPanelReducer.actions;

export default controlPanelReducer.reducer;