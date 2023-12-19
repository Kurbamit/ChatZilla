import React from 'react';
import "../styles/style.css";

function Login() {
    return (
        <>
            <div className = 'login-box'>
                <h2>LOGIN</h2>
                <form>
                    <div className= 'input-field'>
                        <input type='text' name='' required></input>
                        <label>Email or username</label>
                    </div>
                    <div className='input-field'>
                        <input type='password' name='' required></input>
                        <label>Password</label>
                    </div>
                    <a href="#" className='btn mt-4'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Log in
                    </a>
                    <a href="#" className='btn mt-4'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Sign up
                    </a>
                    <p className='mb-0 mt-4 text-center'>
                        <a href="#0" className='link'>Forgot your password?</a>
                    </p>
                </form>
            </div>
        </>
    );
}

export default Login;