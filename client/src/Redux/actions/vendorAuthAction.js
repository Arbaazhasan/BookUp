import axios from "axios";
import toast from "react-hot-toast";
import { vendorAuthonticated, vendorLoginFail, vendorLoginRequest, vendorLoginSuccess, vendorLogoutFail, vendorLogoutRequest, vendorLogoutSuccess, vendorRegisterFail, vendorRegisterRequest, vendorRegisterSuccess } from "../reducers/vendorAuthReducer";
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

        toast.success(data.message);
        dispatch(vendorLoginSuccess({ token: data.vendor, venderData: data.isVendor }));

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


export const vendorSignUpAction = async (dispatch, email, password) => {
    try {

        dispatch(vendorRegisterRequest());

        const { data } = await axios.post(`${server}/vendor/register`, {
            email,
            password
        },
            {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            });

        dispatch(vendorRegisterSuccess());

        toast.success(data.message);

    } catch (error) {
        console.log(error);
        dispatch(vendorRegisterFail(error.response.data.message));
    }
}


export const isVendorAuthonticatedAction = async (dispatch) => {
    try {
        // Get token from localStorage
        const token = localStorage.getItem('vendorToken');

        if (!token) {
            // If no token, the vendor is not authenticated
            return dispatch(vendorLogoutSuccess());
        }

        // Call backend to verify the token
        const { data } = await axios.post(`${server}/vendor/getvendor`, {}, {
            headers: {
                // "Content-Type": "application/json",
                // "Authorization": `Bearer ${token}` // Pass token in Authorization header
            },
            withCredentials: true
        });

        // If success, authenticate vendor
        if (data.success) {
            dispatch(vendorAuthonticated(data.venderData));
        } else {
            // If token invalid, log the vendor out
            dispatch(vendorLogoutSuccess());
        }

    } catch (error) {
        console.log(error);
        dispatch(vendorLogoutFail(error.response?.data?.message || 'Failed to authenticate vendor'));
    }
};
