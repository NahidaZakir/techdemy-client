import React from 'react';
import { Outlet } from 'react-router';
import Header from '../pages/Shared/Header/Header';

import "./Main.css";
const Main = () => {
    return (
        <div >
            <Header></Header>

            <Outlet></Outlet>
        </div>
    );
};

export default Main;    