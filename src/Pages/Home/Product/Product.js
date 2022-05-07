import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'
const Service = ({ service }) => {
    const { id, supplier, img, description, price, quantity } = service;
    const navigate = useNavigate();
    const navServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='product'>
            <img className='images' src={img} alt="" />
            <p className='text-light'>Price: ${price}</p>
            <h4 className='text-light'>Subject: {supplier}</h4>
            <p className='text-light'>Description: {description}</p>
            <p className='text-light'>Quantity: {quantity}</p>
            <button onClick={() => navServiceDetail(id)} className='button'>Manage</button>
        </div>
    );
};

export default Service;