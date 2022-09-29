
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
                <h3>Select Todays Exercise!</h3>
                <div className='allCards-container'>                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }</div>
            </div>
            <div className='rightSide-container'>

                <Cart></Cart>

            </div>
        </div>
    );
};

export default Home;