import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = e => {
        navigate('/register');
    }

    return (
        <div className='container text-center w-50 mx-auto'>
            <h2 className='text-light text-center my-2'>Please Login: </h2>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} className='w-50' type="email" name="email" id="" placeholder='Email Address' required />
                <br />
                <br />
                <input ref={passwordRef} className='w-50' type="password" name="password" id="" placeholder='Password' required />
                <br />
                <input
                    className='w-50 mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="Login" />
            </form>

            <p><span className='text-light'>You New User?</span> <Link to="/register" className='text-info pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
            <p><span className='text-light'>Forget Password?</span> <button className=' btn btn-link text-info pe-auto text-decoration-none'>Reset Password</button></p>
            {/* <Spinner></Spinner> */}
            {/* <SocialLogin></SocialLogin> */}
        </div >
    );
};

export default Login;