import React from 'react';
import './Products.css'
const Product = (props) => {
    const { name, img, seller, price } = props.product;
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <h5 className='product-name'>{name}</h5>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>

            </div>
            <button className='btn-cart'>
                <p>Add To List</p>
            </button>
        </div>
    );
};

export default Product;