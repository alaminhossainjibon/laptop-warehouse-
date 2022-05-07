import React from 'react';
import './Register.css'
const Register = () => {
    return (
        <div className='container register-form'>
            <h2 className='text-primary  my-2'>Please Register: </h2>
            <form>
                <input className='w-50' type="text" name="name" id="" placeholder='Your name' />
                <input className='w-50' type="email" name="email" id="" placeholder='Email Address' required />
                <input className='w-50' type="password" name="password" id="" placeholder='Password' required />
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms">Please Accept</label>
                <input

                    className='w-50  btn btn-primary mt-2'
                    type="submit"
                    value="Register" />
            </form>
            {/* <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p> */}

        </div>
    );
};

export default Register;