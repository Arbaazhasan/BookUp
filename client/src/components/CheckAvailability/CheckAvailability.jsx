import React, { useEffect, useState } from 'react';
import './checkAvailability.scss';
import { useDispatch, useSelector } from 'react-redux';
import { checkAvailabilityAction } from '../../Redux/reducers/bookingReducer';
import { checkRoomAvailabilityAction } from '../../Redux/actions/bookingAction';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const CheckAvailability = () => {

    const dispatch = useDispatch();
    const { roomDetails } = useSelector(state => state.bookingReducer);
    const navigate = useNavigate();

    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [roomType, setRoomType] = useState('');

    

    const closeWindowHandler = () => {
        dispatch(checkAvailabilityAction());
    };


    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (!checkInDate || !checkOutDate || !roomType) return toast.error("Please fill all the fields.");

        const date = new Date();
        const currentDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

        if (currentDate < checkInDate) return toast.error("Please select the valid check-in date!");

        if (checkInDate > checkOutDate) return toast.error("please select the valid check-Out Data!");

        const isAvailable = checkRoomAvailabilityAction(dispatch, checkInDate, checkOutDate, roomDetails._id);

        if (isAvailable) {
            navigate('/guestProfile/booking');

            dispatch(checkAvailabilityAction());
        };
    };


    useEffect(() => {

    }, [checkInDate, checkOutDate, roomType]);


    return (
        <form className='checkAvailability' onSubmit={onSubmitHandler}>

            <table>

                <tbody>


                    <tr className='tr1'>
                        <td>
                            <p>Check Availability </p>

                            <div className="closeBtn" onClick={closeWindowHandler}>
                                X
                            </div>

                        </td>
                    </tr>


                    <tr className='tr2'>
                        <td>
                            <p>Check in date</p>
                            <input type="date" id='checkDate' name="" onChange={(e) => setCheckInDate(e.target.value)} />

                        </td>
                    </tr>

                    <tr className='tr3'>
                        <td>
                            <p>Check out date</p>
                            <input type="date" placeholder='Check out date' name="" id="" onChange={(e) => setCheckOutDate(e.target.value)} />
                        </td>
                    </tr>


                    <tr className='tr4'>
                        <td>
                            <select name="" id="" defaultValue="" onChange={(e) => setRoomType(e.target.value)}>
                                <option value="" hidden disabled>
                                    Room Type
                                </option>
                                <option value="Laxaries">Laxaries Rooms</option>
                                <option value="Deluxe">Deluxe Room</option>
                                <option value="Signature">Signature Room</option>
                                <option value="Couple">Couple Room</option>
                            </select>

                        </td>
                    </tr>


                    <tr className='tr5'>
                        <td>
                            <button>Check Availability </button>

                        </td>
                    </tr>

                </tbody>

            </table>

        </form>
    );
};

export default CheckAvailability;