import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from "firebase/auth";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';



const Login = () => {
    const { Login, GoogleSignIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const hanldeLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        Login(email, password)
            .then(result => {
                form.reset();           
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))

    }
    const googleLogin = () => {
        GoogleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    }

    const githubLogin = () => {

    }
    return (

        <div className="container">
            <div className="row">
                <div className="col-sm-4 col-md-4"></div>
                <div className="col-sm-4 col-md-4 m-1">
                    <div className="">
                        <h4 className="my-4 text-center">Log into Techdemy</h4>
                        <Form onSubmit={hanldeLogin}>
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
                                <Button onClick={googleLogin} className="mb-3" variant="outline-success"><FaGoogle></FaGoogle>  Log in with Google</Button>
                                <Button onClick={githubLogin} variant="outline-success" ><FaGithub></FaGithub>  Log in with Github</Button>
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
                <div className="col-sm-4 col-md-4"></div>
            </div>

        </div >



    );
};

export default Login;   