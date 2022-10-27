import React from 'react';
import { Button } from 'react-bootstrap';
import { FaCartPlus } from 'react-icons/fa';
import { useLoaderData } from 'react-router';

const CheckOut = () => {
    const checkInfo = useLoaderData();
    const { title } = checkInfo;
    return (
        <div className='text-center'>
            <h1>Checkout for Course: </h1>
            <div className='w-75 mx-auto d-flex justify-content-between'>
                <h3>{title}</h3>
                <Button variant="success"> Buy <FaCartPlus></FaCartPlus></Button>
            </div>

        </div>
    );
};

export default CheckOut;