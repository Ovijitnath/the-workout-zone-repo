import React from 'react';
import logo from './300and300.jpg';
import './Cart.css'


const Cart = ({ cart }) => {

    let total = 0;
    for (const product of cart) {
        total = total + product.time;
    }

    return (
        <div>
            <div className='my-bio'>
                <img src={logo} alt="" />
                <div className='name-address'>
                    <h3>Ovijit Nath <br /> <small>Chittagong,Bangladesh</small> </h3>
                </div>
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
            <br />
            <div>

                <h2>Add A Break</h2>
                <div className='allBtn-container'>
                    <button className='btn-break'>10m</button>
                    <button className='btn-break'>20m</button>
                    <button className='btn-break'>30m</button>
                    <button className='btn-break'>40m</button>
                    <button className='btn-break'>50m</button>
                </div>
            </div>
            <br />
            <div>
                <h2>Exercise Details</h2>
                <div>
                    <h3 className='time-details'>Exercise Time :  {total} minutes</h3>
                    <h3 className='time-details'>Break Time : </h3>
                </div>
            </div>
            <br />
            <br />
            <div>
                <button className='complete-btn'>Activity Completed</button>

                <br />
            </div>
        </div>
    );
};

export default Cart;