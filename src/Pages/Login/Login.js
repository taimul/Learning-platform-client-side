import React, { useContext, useState } from 'react';
import './Login.css';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

const Login = () => {
    const { providerLogin, signIn, setLoading } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    const handleGitSignIn = () => {
        providerLogin(gitProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit} className='mx-auto border p-5 main' >
                <h2 className='text-center mb-4'>Login To Learn</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <p><small>Forget Password? <button type="button" className="btn btn-link"><Link to='/reset'>Reset Password</Link></button></small></p>
                <Button className='w-100' variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
                <p className='text-center mt-4'>Or Login With Social media</p>
                <div className='d-flex justify-content-center'>
                    <Link onClick={handleGoogleSignIn} className='me-5'><FaGoogle /></Link>
                    <Link onClick={handleGitSignIn}><FaGithub /></Link>
                </div>
                <p className='mt-4 text-center'>Don't Have account? <Link to='/signup'>Sign Up</Link></p>
            </Form>
        </Container>
    );
};

export default Login;