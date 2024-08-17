import React from 'react';
import './checkAvailability.scss';

const CheckAvailability = () => {
    return (
        <div className='checkAvailability'>

            <table>

                <tr className='tr1'>
                    <td>

                        <p>Check Availability </p>

                        <div className="closeBtn">
                            X
                        </div>

                    </td>
                </tr>


                <tr className='tr2'>
                    <td>
                        <p>Check in date</p>
                        <input type="date" id='checkDate' name="" />

                    </td>
                </tr>

                <tr className='tr3'>
                    <td>
                        <p>Check out date</p>
                        <input type="date" placeholder='Check out date' name="" id="" />
                    </td>
                </tr>

                <tr className='tr4'>
                    <td>

                        <select name="" id="" >
                            <option value="" disabled selected hidden>Adult</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                            <option value="">7</option>
                        </select>

                    </td>
                </tr>

                <tr className='tr5'>
                    <td >
                        <select name="" id="" >
                            <option value="" disabled selected hidden>Children</option>
                            <option value="" >1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                            <option value="">7</option>
                        </select>

                    </td>
                </tr>

                <tr className='tr6'>
                    <td>
                        <select name="" id="">
                            <option value="" hidden disabled selected>Room Type</option>
                            <option value="">Laxaries Rooms</option>
                            <option value="">Deluxe Room</option>
                            <option value="">Signature Room</option>
                            <option value="">Couple ROom</option>
                        </select>
                    </td>
                </tr>


                <tr className='tr7'>
                    <td>
                        <button>Check Availability </button>

                    </td>
                </tr>


            </table>

        </div>
    );
};

export default CheckAvailability;