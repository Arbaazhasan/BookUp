import axios from "axios";
import { getRoomDetailsFail, getRoomDetailsRequest, getRoomDetailsSuccess, getRoomListFail, getRoomListRequest, getRoomListSuccess, vendorLaodingRequest, vendorLoadingFail, vendorLoadingSuccess } from "../reducers/controlPanelReducer";
import { server } from "../store/store";
import toast from "react-hot-toast";


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