import React from 'react';
import { Container } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
    return (
        <Container className='blog-container'>
            <div className='row'>
                <div className='col-12 align-items-center'>
                    <div className='section-header'>
                        <h2 className='section-title mt-5'> What is CORS?</h2>
                        <span className='section-divider'>
                            <hr />
                        </span>
                    </div>
                    <div className='para'>
                        <p>CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.</p>
                        <p>In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.</p>
                    </div>

                </div>
            </div>
            <div className='row'>
                <div className='col-12 align-items-center'>
                    <div className='section-header'>
                        <h2 className='section-title mt-5'> Why are you using firebase?</h2>
                        <span className='section-divider'>
                            <hr />
                        </span>
                    </div>
                    <div className='para'>
                        <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more</p>
                        <h4 className='text-center'>What other options do you have to implement authentication?</h4>
                        <div className='list-name'>
                            <div>
                                <li>STYTCH</li>
                                <li>Ory</li>
                                <li>Supabase</li>
                            </div>
                            <div>
                                <li>Okta</li>
                                <li>PingIdentity</li>
                                <li>Keycloak</li>
                            </div>
                            <div>
                                <li>Frontegg</li>
                                <li>Authress</li>
                                <li>Auth0</li>
                            </div>
                            <div>
                                <li>Amazon Cognito</li>
                                <li>OneLogin</li>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className='row'>
                <div className='col-12 align-items-center'>
                    <div className='section-header'>
                        <h2 className='section-title mt-5'>How does the private route work?</h2>
                        <span className='section-divider'>
                            <hr />
                        </span>
                    </div>
                    <div className='para'>
                        <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)</p>
                        <p>PrivateRoute component is the blueprint for all private routes in the application</p>
                    </div>

                </div>
            </div>
            <div className='row'>
                <div className='col-12 align-items-center'>
                    <div className='section-header'>
                        <h2 className='section-title mt-5'>What is Node?</h2>
                        <span className='section-divider'>
                            <hr />
                        </span>
                    </div>
                    <div className='para'>
                        <p>Node is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications..</p>
                        <p>Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser.</p>
                        <h4 className='text-center'>How does Node work?</h4>
                        <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default Blog;