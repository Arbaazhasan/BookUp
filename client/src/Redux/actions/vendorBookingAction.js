import axios from "axios"
import { getVendorBookingFail, getVendorBookingRequest, getVendorBookingSuccess, updateBookingStatusFail, updateBookingStatusRequest, updateBookingStatusSuccess } from "../reducers/vendorBookingReducer"
import { server } from "../store/store"
import toast from "react-hot-toast";

export const vendorBookingAction = async (dispatch, type) => {
    try {
        dispatch(getVendorBookingRequest())


        const { data } = await axios.post(`${server}/vendor/getBookings`, {
            type
        }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        dispatch(getVendorBookingSuccess(data.message));

    } catch (error) {

        dispatch(getVendorBookingFail(error.response.data.message))
        console.log(error)

    }
};


export const updateBookingAction = async (dispatch, status, bookingId) => {
    try {

        dispatch(updateBookingStatusRequest())


        const { data } = await axios.post(`${server}/vendor/updatebookingstatus`, {
            status,
            bookingId
        }, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true
        });

        if (data.success)
            dispatch(updateBookingStatusSuccess());

        toast.success(data.message)


    } catch (error) {
        dispatch(updateBookingStatusFail(error.response.data.message));
        console.log(error);

    }
}