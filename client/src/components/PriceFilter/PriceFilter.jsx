import React from 'react';
import './priceFilter.scss';
import { FaArrowRight } from "react-icons/fa6";

const PriceFilter = () => {
    return (
        <div className='PriceFilter'>


            <div className="heading">
                <p>Price per night</p>
            </div>

            <div className="price">

                <div className="option">
                    <div>
                        <input type="checkbox" />
                        <p>₹0 - ₹2000</p>
                    </div>
                    <span>(1432)</span>
                </div>

                <div className="option">
                    <div>
                        <input type="checkbox" />
                        <p>₹2000 - ₹5500</p>
                    </div>
                    <span>(873)</span>
                </div>

                <div className="option">
                    <div>
                        <input type="checkbox" />
                        <p>₹5500 - ₹9000</p>
                    </div>
                    <span>(86)</span>
                </div>

                <div className="option">
                    <div>
                        <input type="checkbox" />
                        <p>₹9000 - ₹12500</p>
                    </div>
                    <span>(41)</span>
                </div>

                <div className="option">
                    <div>
                        <input type="checkbox" />
                        <p>₹12500 - ₹15000</p>
                    </div>
                    <span>(32)</span>
                </div>

                <div className="option">
                    <div>
                        <input type="checkbox" />
                        <p>₹15000 - ₹30000</p>
                    </div>
                    <span>(71)</span>
                </div>

                <div className="option">
                    <div>
                        <input type="checkbox" />
                        <p>₹30000+</p>
                    </div>
                    <span>(19)</span>
                </div>

            </div>



            <div className="heading">
                <p>Your Budget</p>
            </div>

            <div className="customPrice">
                <input type="text" placeholder='Min' />
                <span>to</span>
                <input type="text" placeholder='Max' />
                <button><FaArrowRight /></button>
            </div>


            <div className="heading">
                <p>Star Category</p>
            </div>


            <div className="price">

                <div className="option">
                    <div>
                        <input type="checkbox" />
                        <p>3 Star</p>
                    </div>
                    <span>(1432)</span>
                </div>

                <div className="option">
                    <div>
                        <input type="checkbox" />
                        <p>4 Star</p>
                    </div>
                    <span>(873)</span>

                </div>

                <div className="option">
                    <div>
                        <input type="checkbox" />
                        <p>5 Star</p>
                    </div>
                    <span>(873)</span>

                </div>


            </div>

        </div>
    );
};

export default PriceFilter;