import axios from "axios";
import { clearPreviousRoomDetailsAction, deleteRoomFail, deleteRoomRequest, deleteRoomSuccess, getRoomDetailsFail, getRoomDetailsRequest, getRoomDetailsSuccess, getRoomListFail, getRoomListRequest, getRoomListSuccess, getSearchRoomFail, getSearchRoomRequest, getSearchRoomSuccess, vendorLaodingRequest, vendorLoadingFail, vendorLoadingSuccess } from "../reducers/controlPanelReducer";
import { server } from "../store/store";
import toast from "react-hot-toast";
import { DiAndroid } from "react-icons/di";


export const searchRoomAction = async (dispatch, id) => {
    try {

        dispatch(getSearchRoomRequest());

        const { data } = await axios.get(`${server}/vendor/room/searchroom/${id}`, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        dispatch(getSearchRoomSuccess(data.message));

    } catch (error) {
        dispatch(getSearchRoomFail(error.response.data.message));
        console.log(error);

    }
};


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


export const addRoomAction = async (dispatch, roomNo,
    roomName,
    noOfRooms,
    availableRooms,
    roomType,
    roomArray,
    description,
    price,
    images

) => {

    try {

        dispatch(vendorLaodingRequest());

        const formData = new FormData();

        formData.append('roomNo', roomNo);
        formData.append('name', roomName);
        formData.append('noOfRooms', noOfRooms);
        formData.append('availableRooms', availableRooms);
        formData.append('roomType', roomType);
        formData.append('roomArray', roomArray);
        formData.append('description', description);
        formData.append('price', price);

        images.map((image) => {
            formData.append('files', image);
        });


        const { data } = await axios.post(`${server}/vendor/room/addroom`,

            formData

            , {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true
            });

        dispatch(vendorLoadingSuccess());

        toast.success(data.message);

        return data.success === true ? true : false;

    } catch (error) {

        console.log(error);
        dispatch(vendorLoadingFail(error.response.data.message));

    }

};


export const updateRoomAction = async (dispatch,
    roomNo,
    roomName,
    noOfRooms,
    availableRooms,
    roomType,
    roomArray,
    description,
    price,
    deleteImagesArray
) => {
    try {

        dispatch(vendorLaodingRequest());

        const formData = new FormData();

        formData.append('roomNo', roomNo);
        formData.append('name', roomName);
        formData.append('noOfRooms', noOfRooms);
        formData.append('availableRooms', availableRooms);
        formData.append('roomType', roomType);
        formData.append('roomArray', roomArray);
        formData.append('description', description);
        formData.append('price', price);

        images.map((deleteImagesArray) => {
            formData.append('files', image);
        });

        const { data } = await axios.patch(`${server}/vendor/room/updateroom`,

            formData

            , {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true
            });

        console.log(data);

        dispatch(vendorLoadingSuccess());

        toast.success(data.message);

        return data.success === true ? true : false;


    } catch (error) {
        console.log(error);

        dispatch(vendorLoadingFail(error.response.data.message));
    }
};



export const deleteRoomAction = async (dispatch, roomId) => {
    try {

        dispatch(deleteRoomRequest());

        const { data } = await axios.delete(`${server}/vendor/room/deleteroom/${roomId}`, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });


        dispatch(deleteRoomSuccess());
        toast.success(data.message);
        dispatch(clearPreviousRoomDetailsAction());

    } catch (error) {
        dispatch(deleteRoomFail(error.response.data.message));
        console.log(error);
    }
};