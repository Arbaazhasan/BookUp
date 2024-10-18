import axios from "axios";
import { server } from "../store/store";
import toast from "react-hot-toast";
import { guestAuthonticated, guestLoginFailed, guestLoginRequest, guestLoginSuccess, guestLogoutFail, guestLogoutRequest, guestLogoutSuccess, guestRegisterFail, guestRegisterRequest, guestRegisterSuccess } from "../reducers/guestAuthReducer";



export const guestRegisterAction = async (dispatch, name, email, password) => {
    try {


        dispatch(guestRegisterRequest());

        const { data } = await axios.post(`${server}/guest/register`, {
            name,
            email,
            password
        }, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true
        });


        dispatch(guestRegisterSuccess());


        console.log(data);

        toast.success(data.message);

    } catch (error) {
        dispatch(guestRegisterFail(error.response.data.message));
        console.log(error);
    }
};


export const guestLoginAction = async (dispatch, email, password) => {

    try {


        dispatch(guestLoginRequest());

        const { data } = await axios.post(`${server}/guest/login`, {
            email,
            password

        }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        dispatch(guestLoginSuccess(data));

        toast.success(data.message);

    } catch (error) {

        dispatch(guestLoginFailed(error.response.data.message));

        console.log(error);

    }
};


export const guestLogout = async (dispatch) => {

    try {
        dispatch(guestLogoutRequest());

        const { data } = await axios.post(`${server}/guest/logout`, {}, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
        });

        dispatch(guestLogoutSuccess());

        toast.success(data.message);


    } catch (error) {

        dispatch(guestLogoutFail(error.response.data.message));
    }
};


export const isGuestAuthonticatedAction = async (dispatch) => {

    const { data } = await axios.post(`${server}/guest/getguest`, {}, {

        headers: {
            "Content-Type": "application/json",
        },
        withCredentials: true
    });


    if (data.success === false)
        return;

    const token = localStorage.getItem('token');

    if (!token)
        return;

    dispatch(guestAuthonticated());

};