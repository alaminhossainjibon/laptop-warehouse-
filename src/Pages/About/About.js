import React from 'react';
import './About.css'
import profile from '../../images/profile/profile.jpg'

const About = () => {
    return (
        <div>
            <h2 className='text-center text-light'>My About...</h2>
            <div className='about container p-5  md:w-full'>
                <img className='img-size' src={profile} alt="" />
                <p className='text-light'>My name is Al-amin hossain, I'm from Bangladesh, I live in Rangpur. My goal and dreams full stack web developer. I learn programming and web development in programming-hero website.I love learning new technologies every day</p>

                <h6 className='text-light mt-5'>@Created by : Al-amin Hossain!!</h6>
            </div>
        </div>
    );
};

export default About;