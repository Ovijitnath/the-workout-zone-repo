import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css'
const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className='home-container'>
            <div className='leftSide-container'>
                <h1>THE WORKOUT ZONE</h1>
                <h2>Select Todays Exercise!</h2>
                <div className='allCards-container'>                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }</div>
            </div>
            <div className='rightSide-container'>
                <h2>Profile Section</h2>
            </div>
        </div>
    );
};

export default Home;