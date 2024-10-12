import axios from "axios";
import toast from "react-hot-toast";
import { vendorAuthonticated, vendorLoginFail, vendorLoginRequest, vendorLoginSuccess, vendorLogoutFail, vendorLogoutRequest, vendorLogoutSuccess } from "../reducers/vendorAuthReducer";
import { server } from "../store/store";
import { FaLessThanEqual } from "react-icons/fa6";


export const vendorLoginAction = async (dispatch, email, password) => {

    try {

        dispatch(vendorLoginRequest());

        const { data } = await axios.post(`${server}/vendor/login`, {
            email,
            password
        }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        console.log(data);
        toast.success(data.message);

        dispatch(vendorLoginSuccess());

    } catch (error) {
        // const errorMessage =  || "Something went wrong!";
        dispatch(vendorLoginFail(error.response?.data?.message));
        console.log(error);

    }

};


export const vendorLogoutAction = async (dispatch) => {

    try {

        dispatch(vendorLogoutRequest());

        const { data } = await axios.get(`${server}/vendor/logout`, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        dispatch(vendorLogoutSuccess());

        toast.success(data.message);

    } catch (error) {
        console.log(error);
        dispatch(vendorLogoutFail(error.response.data.message));
    }
};



export const isVendorAuthonticatedAction = async (dispatch) => {

    const { data } = await axios.post(`${server}/vendor/getvendor`, {}, {
        headers: {
            "Content-Type": "application/json"
        },
        withCredentials: true
    });

    if (data.success === false)
        return;

    dispatch(vendorAuthonticated());


};


