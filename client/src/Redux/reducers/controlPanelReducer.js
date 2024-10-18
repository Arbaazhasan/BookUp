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
        }

    }
});

export const {
    getRoomListRequest,
    getRoomListSuccess,
    getRoomListFail,

    getRoomDetailsRequest,
    getRoomDetailsSuccess,
    getRoomDetailsFail
} = controlPanelReducer.actions;

export default controlPanelReducer.reducer;