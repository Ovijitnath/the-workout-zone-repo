import React from 'react';
import './Products.css'
const Product = (props) => {
    const { name, img, age, time } = props.product;
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <h5 className='product-name'>{name}</h5>
                <p>Age: {age}</p>
                <p>Time: {time}</p>

            </div>
            <button className='btn-cart'>
                <p>Add To List</p>
            </button>
        </div>
    );
};

export default Product;