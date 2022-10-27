import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div class="d-flex justify-content-center align-items-center my-5">
            <Spinner animation="grow" variant="success " />
        </div>

    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace ></Navigate>;
    }
    return children;


};

export default PrivateRoute;