import React from 'react';
import { useContext } from 'react';
import { Outlet } from 'react-router';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import Header from '../pages/Shared/Header/Header';

import "./Main.css";
const Main = () => {
    const { theme } = useContext(AuthContext);
    return (
        <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }} >
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;    