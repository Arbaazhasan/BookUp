import axios from "axios";
import { server } from "../store/store";
import { checkRoomAvailabilityFail, checkRoomAvailabilityRequest, checkRoomAvailabilitySuccess, getHotelListFail, getHotelListRequest, getHotelListSuccess, getRoomDetailsFail, getRoomDetailsRequest, getRoomDetailsSuccess } from "../reducers/bookingReducer";
import toast from "react-hot-toast";

export const getHotelListAction = async (
    dispatch,
    cityName,
    noOfRoom,
    checkIn,
    checkOut,
) => {

    try {

        dispatch(getHotelListRequest());

        const { data } = await axios.post(`${server}/booking/searchrooms`, {
            city: cityName,
            rooms: noOfRoom,
            checkIn,
            checkOut,
        }, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });


        dispatch(getHotelListSuccess(data.availableRooms));

    } catch (error) {
        console.log(error);
        dispatch(getHotelListFail(error.response.data.message));
    }


};


export const getHotelDetailsAction = async (dispatch, id) => {

    try {
        dispatch(getRoomDetailsRequest());

        const { data } = await axios.get(`${server}/guest/getRoomDetails/${id}`, {
            headers: {
                "Content-Type": "applicaton/json",
            },
            withCredentials: true
        });

        dispatch(getRoomDetailsSuccess(data.message));

    } catch (error) {

        dispatch(getRoomDetailsFail(error.response.data.message));
        console.log(error);

    }


};



export const checkRoomAvailabilityAction = async (dispatch, checkInDate, checkOutDate, roomId) => {

    try {

        dispatch(checkRoomAvailabilityRequest());



        const { data } = await axios.post(`${server}/booking/checkavailability`, {
            checkInDate,
            checkOutDate,
            roomId
        }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        dispatch(checkRoomAvailabilitySuccess({ checkInDate, checkOutDate }));

        toast.success(data.message);

        return data.success;

    } catch (error) {

        dispatch(checkRoomAvailabilityFail(error.response.data.message));
        console.log(error);
    }

};