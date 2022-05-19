import React from 'react';
import profile from '../../assets/images/profile/profile.jpg'
import './About.css'
const About = () => {
    return (
        <div className='about mx-auto my-5 shadow-lg'>
            <h2 className='text-center text-white'>My About...</h2>
            <div className='about container p-5  md:w-full'>
                <img className='img-size' src={profile} alt="" />
                <h2 className='text-white text-bold text-2xl'>Hi..!!!</h2>
                <p className='text-white'>My name is Al-amin hossain, I'm from Bangladesh, I live in Rangpur. My goal and dreams full stack web developer. I learn programming and web development in programming-hero website.I love learning new technologies every day</p>

                <h6 className='text-light mt-5 text-white'>@Created by : Al-amin Hossain!!</h6>
            </div>
        </div>
    );
};

export default About;