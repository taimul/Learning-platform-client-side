import React, { useContext } from 'react';
import logo from '../../../Assets/logo.png'
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { FaUser } from "react-icons/fa";
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }
    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand ><Link className='brand' to='/'><Image src={logo}></Image>Learn</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav className='align-items-center'>
                        <Nav.Link><Link className='nav-bar' to={'/courses'}>Courses</Link ></Nav.Link>
                        <Nav.Link><Link className='nav-bar' to={'/faq'}>FAQ</Link ></Nav.Link>
                        <Nav.Link><Link className='nav-bar' to={'/blog'}>Blog</Link ></Nav.Link>

                        <label className='switch'>
                            <input type="checkbox" />
                            <span className='slider round'></span>
                        </label>

                        <>
                            {
                                user?.uid ?
                                    <>
                                        {/* <span style={{ color: "white" }}>{user?.displayName}</span> */}
                                        <Button onClick={handleLogOut} variant="danger">Log Out</Button>
                                    </>
                                    :
                                    <>
                                        <Nav.Link><Link className='nav-bar' to={'/login'}>Login</Link ></Nav.Link>
                                        <Nav.Link><Link className='nav-bar' to={'/signup'}>SignUp</Link ></Nav.Link>
                                    </>
                            }
                        </>
                        <Link className=''>
                            {user?.photoURL ?
                                <abbr title={user?.displayName}>
                                    <Image
                                        style={{ height: '30px' }}
                                        roundedCircle
                                        src={user?.photoURL}>
                                    </Image>
                                </abbr>
                                : <FaUser></FaUser>
                            }
                        </Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;