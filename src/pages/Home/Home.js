import React from 'react';
import { Image } from 'react-bootstrap';
import homebg from '../../assets/programming/green.jfif';
import './Home.css';

const Home = () => {
    return (
        <div className="m-5 w-75">
            <div className="d-md-flex justify-content-between">
                <div>
                    <h1>Welcome to <br></br> <span className="text-success big">Techdemy</span></h1>
                    <h1>Where everyone anytime <br></br> <span className="text-success big">learn for free</span></h1>
                </div>
                <div >
                    <Image style={{
                        width: '300px'
                    }} src={homebg}></Image>
                </div>
            </div>

        </div>
    );
};

export default Home;