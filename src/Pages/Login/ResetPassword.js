import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.config';
import './Login.css';

const auth = getAuth(app);

const ResetPassword = () => {
    const [userEmail, setUserEmail] = useState('');


    const handleSubmit = event => {
        event.preventDefault();
        // const form = event.target;
    }

    const handleEmailBlur = event => {
        const email = event.target.value;
        setUserEmail(email);

    }

    const handleForgetPassword = () => {
        // const email = event.target.value;
        // setUserEmail(email);
        if (!userEmail) {
            alert('Please enter your email address.')
            return;
        }
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('Password Reset email sent. Please check your email.')
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <Container>
            <Form onSubmit={handleSubmit} className='mx-auto border p-5 main' >
                <h2 className='text-center mb-4'>Reset Password</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} name='email' type="email" placeholder="Enter email" required />
                </Form.Group>
                <Button onClick={handleForgetPassword} className='w-100' variant="primary" type="submit">
                    Sent Email verification
                </Button>
                <p className='mt-4 text-center'>Go to Login <Link to='/login'>login</Link></p>
            </Form>
        </Container>
    );
};

export default ResetPassword;