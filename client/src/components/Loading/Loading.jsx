import React, { useEffect, useState } from 'react';
import './loading.scss';

const Loading = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex >= 6 ? 0 : prevIndex + 1));
        }, 300);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='loading'>
            Loading
            {'.'.repeat(index)}
        </div>
    );
};

export default Loading;
