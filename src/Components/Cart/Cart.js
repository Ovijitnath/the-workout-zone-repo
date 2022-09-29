import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from './300and300.jpg';
import './Cart.css'


const Cart = ({ cart }) => {

    const [time, setTime] = useState();
    const handleClick10 = () => {
        setTime(10);
    }
    const handleClick20 = () => {
        setTime(20);
    }
    const handleClick30 = () => {
        setTime(30);
    }
    const handleClick40 = () => {
        setTime(40);
    }
    const handleClick50 = () => {
        setTime(50);
    }
    let total = 0;
    for (const product of cart) {
        total = total + product.time;
    }

    localStorage.setItem('time', JSON.stringify(time));
    const notify = () => toast("Completed! Wow so easy!");

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
                    <button onClick={handleClick10} className='btn-break'>10s</button>
                    <button onClick={handleClick20} className='btn-break'>20s</button>
                    <button onClick={handleClick30} className='btn-break'>30s</button>
                    <button onClick={handleClick40} className='btn-break'>40s</button>
                    <button onClick={handleClick50} className='btn-break'>50s</button>
                </div>
            </div>
            <br />
            <div>
                <h2>Exercise Details</h2>
                <div>
                    <h3 className='time-details'>Exercise Time :  {total} minutes</h3>
                    <h3 className='time-details'>Break Time : {time} secs</h3>
                </div>
            </div>
            <br />
            <br />
            <div>
                <button onClick={notify} className='complete-btn'>Activity Completed <ToastContainer /></button>

                <br />
            </div>
        </div>
    );
};

export default Cart;