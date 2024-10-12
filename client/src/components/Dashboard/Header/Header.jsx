import React from 'react';
import './header.scss';
import { vendorLogoutAction } from '../../../Redux/actions/vendorAuthAction';
import { useDispatch } from 'react-redux';

const Header = ({ currentPath }) => {

    const dispatch = useDispatch();

    const logoutHandler = () => vendorLogoutAction(dispatch);

    return (
        <div className='header'>
            <div className="left">
                <div>
                    <p>Dashbaord </p>
                    <span>/ {currentPath}</span>
                </div>
                <h2>{currentPath}</h2>
            </div>
            <div className="right">
                <input type="text" placeholder='Type here...' />
                <button onClick={logoutHandler}>Log out</button>
            </div>

        </div>
    );
};

export default Header;