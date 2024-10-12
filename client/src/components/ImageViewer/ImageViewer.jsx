import React, { useEffect, useState } from 'react';
import './imageViewer.scss';
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";

const ImageViewer = () => {

    const arr = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'];

    const [currentImage, setCurrentIamage] = useState(0);

    const nextSlideHandler = () => {

        if (currentImage < arr.length - 1) {
            setCurrentIamage(() => currentImage + 1);
        } else {
            setCurrentIamage(() => 0);
        }

    };
    const previousSlideHandler = () => {

        if (currentImage < 1) {
            setCurrentIamage(() => arr.length - 1);
        } else {
            setCurrentIamage(() => currentImage - 1);
        }

    };

    useEffect(() => {

        console.log(currentImage);

    }, [currentImage]);



    return (
        <div className='imageViewer'>

            <div className="slideBtn" onClick={previousSlideHandler}>
                <button><FaLessThan /></button>
            </div>

            <div className="Image">
                <img src={`/public/images/rooms/${arr[currentImage]}`} alt="" />
            </div>

            <div className="slideBtn" onClick={nextSlideHandler}>
                <button><FaGreaterThan /></button>
            </div>


        </div>
    );
};

export default ImageViewer;