import React, { useState } from 'react';
import "../styles/style.css";
import { useLoginForm } from '../scripts/loginUtils/logInUtils';

function Login() {
    const { loginInfo, handleInputChange, handleSignIn } = useLoginForm();

    return (
        <>
            <div className='login-box'>
                <h2>LOGIN</h2>
                <form>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='emailOrUsername'
                            value={loginInfo.emailOrUsername}
                            onChange={handleInputChange}
                            required
                        ></input>
                        <label>Email or username</label>
                    </div>
                    <div className='input-field'>
                        <input
                            type='password'
                            name='password'
                            value={loginInfo.password}
                            onChange={handleInputChange}
                            required
                        ></input>
                        <label>Password</label>
                    </div>
                    <button className='btn mt-4' onClick={handleSignIn}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Log in
                    </button>
                    {/* Add Sign Up button and other elements as needed */}
                    <a href="#" className='btn mt-4'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Sign up
                    </a>
                    <p className='mb-0 mt-4 text-center'>
                        <a href="#0" className='link'>
                            Forgot your password?
                        </a>
                    </p>
                </form>
            </div>
        </>
    );
}

export default Login;
