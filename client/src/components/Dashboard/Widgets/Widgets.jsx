import React, { useEffect } from 'react';
import './widgets.scss';

import { FaRegBookmark } from "react-icons/fa6";

const Widgets = ({ heading, title, icon }) => {

    return (
        <div className="widget" >

            <div className="left">
                <h1>{heading}</h1>
                <p>{title}</p>
            </div>

            <div className="right">
                {icon}
            </div>

        </div>
    );
};

export default Widgets;