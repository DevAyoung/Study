import React, { Fragment, useState, useEffect, useCallback } from 'react';
import { Navbar, Container, NavbarToggler, Collapse, Nav, NavItem, Form, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import LoginModal from '../components/auth/LoginModal';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT_REQUEST } from '../redux/types';
import RegisterModal from './auth/RegisterModal';

const AppNavbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const {isAuthenticated, user, userRole} = useSelector((state) => state.auth)
    console.log(userRole, "UserRole")



    const distpatch = useDispatch()

    //LOGOUT
    const onLogout = useCallback(() => {
        distpatch({
            type: LOGOUT_REQUEST
        });
    }, [distpatch]);

    useEffect(() => {
        setIsOpen(false)
    },[user]);

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    const addPostClick = () => {

    }


    const authLink = (
        <Fragment>
            <NavItem>
                {userRole === "MainJuin" ? (
                    <Form className="col mt-2">
                        <Link to="post" className="btn btn-success block text-white px-3" onClick={addPostClick}>
                            ADD POST
                        </Link>
                    </Form>
                ) :""}
            </NavItem>

            <NavItem className="d-flex justify-content-center">
                <Form className="col mt-2">
                    {user && user.name ? (
                        <Link>
                            <Button outline color="light" className="px-3" block>
                                <strong>{user ? `환영합니다 $(user.name)`:""}</strong>
                            </Button>
                        </Link>
                    ): (
                        <Button outline color="light" className="px-3" block>
                                <strong>유저를 찾을 수 없습니다 :(</strong>
                        </Button>
                    )};
                </Form>
            </NavItem>

            <NavItem>
                <Form className="col">
                    <Link onClick={onLogout} to="#">
                        <Button outline color="light" className="mt-2" block>
                            LOGOUT
                        </Button>
                    </Link>
                </Form>
            </NavItem>
        </Fragment>
    )



    const guestLink = (
        <Fragment>
            <NavItem>
                <RegisterModal/>
            </NavItem>

            <NavItem>
                <LoginModal/>
            </NavItem>
        </Fragment>
    );



    return(
        <Fragment>
            <Navbar color="dark" dark expand="lg" className="sticky-top">
                <Container>
                    <Link to="/" className="text-white text-decoration-none">
                        Jenny's React Blog(제니 블로그)
                    </Link>

                    <NavbarToggler onClick={handleToggle}/>

                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto d-flex justify-content-around" navbar>
                        {isAuthenticated ? (
                            authLink 
                        ) : ( 
                            guestLink
                        )}    
                        </Nav>     
                    </Collapse>
                
                </Container>

            </Navbar>
        </Fragment>
    );
};

export default AppNavbar;