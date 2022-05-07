import React from 'react';
// import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container text-center w-50 mx-auto'>
            <h2 className='text-primary text-center my-2'>Please Login: </h2>
            <form>
                <input className='w-50' type="email" name="email" id="" placeholder='Email Address' required />
                <br />
                <br />
                <input className='w-50' type="password" name="password" id="" placeholder='Password' required />
                <br />
                <input
                    className='w-50 mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="Login" />
            </form>

            {/* <p>You New User? <Link to="/register" className='text-info pe-auto text-decoration-none' >Please Register</Link></p>
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none'>Reset Password</button></p> */}

        </div>
    );
};

export default Login;