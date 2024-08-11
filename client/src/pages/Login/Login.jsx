import React, { useEffect, useState } from 'react';
import './login.scss';

import { FcGoogle } from "react-icons/fc";

const Login = () => {

    const [loginMethod, setLoginMethod] = useState('Sign In');


    useEffect(() => {
        console.log(loginMethod);

    }, [loginMethod]);

    return (
        <div className='login'>

            <div className="loginHeader">

                <div>
                    <h3>BookUp</h3>

                    <div>
                        <p onClick={() => setLoginMethod('Dashboard')}>Dasboard</p>
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

                <form action="">
                    <input type="text" placeholder='name' />
                    <input type="text" placeholder='email' />

                    {
                        loginMethod === 'Sign Up' ?

                            <input type="text" placeholder='password' />

                            :
                            ''
                    }

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