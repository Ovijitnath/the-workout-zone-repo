
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';


import Product from '../Product/Product';
import './Home.css'
import Cart from '../Cart/Cart';
const Home = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='home-container'>
            <div className='leftSide-container'>
                <div className='banner-icon'>
                    <h1>THE WORKOUT ZONE  </h1>
                    <FontAwesomeIcon icon={faDumbbell} > </FontAwesomeIcon>
                </div>
                <h3>Select Todays Exercise!</h3>
                <div className='allCards-container'>                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }</div>
            </div>
            <div className='rightSide-container'>

                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Home;
