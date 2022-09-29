import React from 'react';
import './Products.css'
const Product = (props) => {
    const { handleAddToCart, product } = props
    const { name, img, age, time } = product;

    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <h4 className='product-name'><strong>{name}</strong></h4>
                <p>Age: {age}</p>
                <p>Time: {time}</p>

            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p><strong> Add To List</strong></p>
            </button>
        </div>
    );
};

export default Product;