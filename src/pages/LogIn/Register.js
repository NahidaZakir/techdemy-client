import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { SignUp } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        SignUp(email, password)
            .then(result => {
                form.reset();
                setError('');
                navigate('/login');

            })
            .catch(error => {
                setError(error.message);
            });
    }
    return (

        <div className="container">
            <div className="row">
                <div className="col-sm-4 col-md-4"></div>
                <div className="col-sm-4 col-md-4">
                    <h4 className='text-center my-4'>Sign Up in Techdemy</h4>
                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control name="fullname" type="text" placeholder="Full Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control name="photourl" type="text" placeholder="Photo URL" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" required />
                        </Form.Group>
                        <div className="d-flex justify-content-center">
                            <Button variant="success" type="submit" size="lg">
                                Register
                            </Button>
                        </div>
                        <Form.Text>
                            {error}
                        </Form.Text>

                    </Form>
                </div>
                <div className=" col-sm-4 col-md-4"></div>

            </div>
        </div>


    );
};

export default Register;