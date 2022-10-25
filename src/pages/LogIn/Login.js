import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Login = () => {
    return (

        <div class="container">
            <div class="row">
                <div class="col-sm-4 col-md-4"></div>
                <div class="col-sm-4 col-md-4 m-1">
                    <div className="">
                        <h4 className="my-4 text-center">Log into Techdemy</h4>
                        <Form className="">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Password" required />
                            </Form.Group>
                            <div className='d-flex justify-content-center'> <Button variant="success" type="submit" size="lg">
                                Log In
                            </Button></div>

                        </Form>
                        <div>
                            <div className="d-flex my-1">
                                <hr className='w-50'></hr>
                                <p >or</p>
                                <hr className='w-50'></hr>
                            </div>
                            <ButtonGroup vertical className="d-flex justify-content-center align-items-center">
                                <Button className="mb-3" variant="outline-success"><FaGoogle></FaGoogle>  Log in with Google</Button>
                                <Button variant="outline-success" ><FaGithub></FaGithub>  Log in with Github</Button>
                            </ButtonGroup>
                        </div>
                        <div className="d-flex my-2">
                            <hr className='w-50'></hr>
                            <p >or</p>
                            <hr className='w-50'></hr>
                        </div>
                        <div>
                            <Link to="/register"><p className='text-center'>Sign Up With Email</p></Link>

                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-md-4"></div>
            </div>

        </div >



    );
};

export default Login;   