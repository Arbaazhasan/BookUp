import React from 'react';
import './header.scss';

const Header = ({ currentPath }) => {
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
                <button>Log out</button>
            </div>

        </div>
    );
};

export default Header;