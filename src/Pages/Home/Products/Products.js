import React, { useEffect, useState } from 'react';
import Product from '../Product/Product'
import './Products.css'
const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div id="products" className='container'>
            <div className='row'>
                <h1 className='mt-5 products-title'>Our Products</h1>
                <div className='products-container'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            service={product}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;