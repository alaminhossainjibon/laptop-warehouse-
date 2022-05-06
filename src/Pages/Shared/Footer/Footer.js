import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-style mt-5'>
            <p className='text-light p-5'>
                Copyright &copy; 2022 -- All right reserved by Laptop-warehouse!
            </p>

            <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Facebook_F_icon.svg/2048px-Facebook_F_icon.svg.png" alt="" /></a>

            <a className='ms-2' href=""><img src="https://cdn.worldvectorlogo.com/logos/youtube-2.svg" alt="" /> </a>

            <a className='ms-2' href=""><img src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png" alt="" /></a>

            <a className='ms-2' href=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Gmail_Icon_%282013-2020%29.svg/1280px-Gmail_Icon_%282013-2020%29.svg.png" alt="" /></a>

        </div>
    );
};

export default Footer;