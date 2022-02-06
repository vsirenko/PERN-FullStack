import React, { useContext } from 'react';
import { Context } from '../index';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import Logo from '../assets/Logo';
import { observer } from "mobx-react-lite"
import {useNavigate} from "react-router-dom";

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate()
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        navigate(SHOP_ROUTE)
    }
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <NavLink to={SHOP_ROUTE}><Logo /></NavLink>
            {user.isAuth ? 
                <Nav className="ml-auto">
                    <Button variant='outline-light'  onClick={() => navigate(ADMIN_ROUTE)}>Админ Панель</Button>
                    <Button variant='outline-light'  onClick={logOut}className="ml-2">Выйти</Button>
                </Nav>
                :
                <Nav className="ml-auto">
                <Button variant='outline-light'  onClick={() => navigate(LOGIN_ROUTE)}>Войти</Button>
                </Nav>
            }
            </Container>
        </Navbar>
        </>
    );
})

export default NavBar;
