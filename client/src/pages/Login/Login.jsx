import React, { useEffect, useState } from 'react';
import './login.scss';

import toast from 'react-hot-toast';
import { guestLoginAction, guestRegisterAction } from '../../Redux/actions/guestAuthActions';
import { useDispatch } from 'react-redux';

import { FcGoogle } from "react-icons/fc";
import { IoMdHome } from "react-icons/io";
import { Link } from 'react-router-dom';
import { vendorLoginAction } from '../../Redux/actions/vendorAuthAction';

const Login = () => {

    const dispatch = useDispatch();

    const [loginMethod, setLoginMethod] = useState('Sign In');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submithHandler = (e) => {

        e.preventDefault();


        if (!email || !email.length > 8 || !password || !password.length > 3) {
            return toast.error("please fill the correct values");
        }


        loginMethod === 'Sign Up' && guestRegisterAction(dispatch, name, email, password);

        loginMethod === 'Sign In' && guestLoginAction(dispatch, email, password);

        loginMethod === 'Vendor Login' && vendorLoginAction(dispatch, email, password);


    };


    return (
        <div className='login'>

            <div className="loginHeader">

                <div>
                    <h3>BookUp</h3>

                    <div>
                        <Link to="/"> Home</Link>
                        <p onClick={() => setLoginMethod('Vendor Login')}>Vendor</p>
                        <p onClick={() => setLoginMethod('Sign In')}>Sign In</p>
                        <p onClick={() => setLoginMethod('Sign Up')}>Sign Up</p>
                    </div>
                </div>

            </div>


            <div className="left">
                <div className="heading">

                    <h1>{loginMethod}</h1>
                    {
                        loginMethod === 'Sign Up' ?
                            <p>Enter your name, email and password to sign up</p>


                            :
                            <p>Enter your email and password to sign in</p>

                    }

                </div>

                <form action="" onSubmit={submithHandler}>

                    {
                        loginMethod === 'Sign Up' ?

                            <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />

                            :
                            ''
                    }


                    <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} />

                    <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                    <button>Sign In </button>
                </form>

                <div className="anotherLinks">

                    {
                        loginMethod === 'Sign Up' ?

                            <p>Already have an account? <span onClick={() => setLoginMethod('Sign Up')}>Sign In</span></p>

                            :
                            <p>Don't have an account?<span onClick={() => setLoginMethod('Sign In')}>Sign Up</span></p>

                    }

                </div>

                <hr />

                <div className="signWith">

                    <div>
                        <FcGoogle />
                    </div>

                    <p>Sign in with Google</p>

                </div>

            </div>

            <div className="right">

                <div>
                    <h1>"Attention is the new currency"</h1>
                    <p>The more effortless the writing looks,the more effort the writer
                        <br />

                        actually put into the process.
                    </p>
                </div>

            </div>


        </div>
    );
};

export default Login;