import logo from './300and300.jpg';
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
                <div className='my-bio'>
                    <img src={logo} alt="" />
                    <div className='name-address'>
                        <h3>Ovijit Nath</h3>
                        <p>Chittagong,Bangladesh</p></div>
                </div>
                <div className='p-info'>
                    <div>
                        <h3>75kg</h3>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h3>5'11"</h3>
                        <p>Height</p>
                    </div>
                    <div>
                        <h3>27 years</h3>
                        <p>Age</p>
                    </div>
                </div>
                <div>
                    <h1>Add A Break</h1>
                    <div className='btn-all'>
                        <button className='btn-break'>10m</button>
                        <button className='btn-break'>20m</button>
                        <button className='btn-break'>30m</button>
                        <button className='btn-break'>40m</button>
                        <button className='btn-break'>50m</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;