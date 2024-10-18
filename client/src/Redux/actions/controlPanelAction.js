import axios from "axios";
import { getRoomDetailsFail, getRoomDetailsRequest, getRoomDetailsSuccess, getRoomListFail, getRoomListRequest, getRoomListSuccess } from "../reducers/controlPanelReducer";
import { server } from "../store/store";


export const getRoomListAction = async (dispatch) => {
    try {

        dispatch(getRoomListRequest());

        const { data } = await axios.get(`${server}/vendor/room/getallrooms`, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        dispatch(getRoomListSuccess(data.message));

    } catch (error) {

        console.log(error);

        dispatch(getRoomListFail(error.response.data.message));

    }

};


export const getRoomDetailsAction = async (dispatch, roomNo) => {

    try {
        dispatch(getRoomDetailsRequest());

        const { data } = await axios.get(`${server}/vendor/room/searchroom/${roomNo}`, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        dispatch(getRoomDetailsSuccess(data.message));

    } catch (error) {
        console.log(error);
        dispatch(getRoomDetailsFail(error.response.data.message));
    }

};