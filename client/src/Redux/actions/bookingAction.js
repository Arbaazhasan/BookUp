import axios from "axios";
import { server } from "../store/store";
import { getHotelListFail, getHotelListRequest, getHotelListSuccess } from "../reducers/bookingReducer";

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