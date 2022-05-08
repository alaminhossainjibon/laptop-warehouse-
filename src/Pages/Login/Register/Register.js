import React from 'react';
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
// import auth from '../../../firebase.init';
import './Register.css'

const Register = () => {
    // const [
    //     createUserWithEmailAndPassword,
    //     user,
    //     loading,
    //     error,
    // ] = useCreateUserWithEmailAndPassword(auth)
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }

    // if (user) {
    //     navigate('/home');
    // }

    const handleRegister = e => {
        e.preventDefault();
        // const displayName = e.target.name.value;
        // const email = e.target.email.value;
        // const password = e.target.password.value;

        // createUserWithEmailAndPassword(email, password);
        navigate('/home');
    }

    return (
        <div className='container register-form'>
            <h2 className='text-light  my-2'>Please Register: </h2>
            <form onClick={handleRegister}>
                <input className='w-50' type="text" name="name" id="" placeholder='Your name' />
                <input className='w-50' type="email" name="email" id="" placeholder='Email Address' required />
                <input className='w-50' type="password" name="password" id="" placeholder='Password' required />
                <input type="checkbox" name="terms" id="terms" />
                <label className='text-light' htmlFor="terms">Please Accept</label>
                <input

                    className='w-50  btn btn-primary mt-2'
                    type="submit"
                    value="Register" />
            </form>
            <p><span className='text-light'>Already have an account?</span> <Link to="/login" className='text-info pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            {/* <SocialLogin></SocialLogin> */}
        </div>
    );
};

export default Register;