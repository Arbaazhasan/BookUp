import React, { useState } from 'react';
import './header.scss';
import { vendorLogoutAction } from '../../../Redux/actions/vendorAuthAction';
import { useDispatch } from 'react-redux';
import { searchRoomAction } from '../../../Redux/actions/controlPanelAction';
import { useParams } from 'react-router-dom';

const Header = ({ currentPath }) => {

    const dispatch = useDispatch();
    const [roomNo, setRoomNo] = useState('');
    const logoutHandler = () => vendorLogoutAction(dispatch);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Done")
        searchRoomAction(dispatch, roomNo);
    };


    return (
        <div className='header'>
            <div className="left">
                <div>
                    <p>Dashbaord </p>
                    <span>/ {currentPath}</span>
                </div>
                <h2>{currentPath}</h2>
            </div>
            <form className="right" onSubmit={submitHandler}>
                <input type="text" placeholder='Type here...' onChange={(e) => setRoomNo(e.target.value)} />
                <button type='submit'>Search</button>
                <button onClick={logoutHandler}>Log out</button>
            </form>

        </div>
    );
};

export default Header;