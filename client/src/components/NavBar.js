import React, { useContext } from 'react';
import { Context } from '../index';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import Logo from '../assets/Logo';
import { observer } from "mobx-react-lite"

const NavBar = observer(() => {
    const { user } = useContext(Context);

    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <NavLink to={SHOP_ROUTE}><Logo /></NavLink>
            {user.isAuth ? 
                <Nav className="ml-auto">
                    <Button variant='outline-light' >Админ Панель</Button>
                    <Button variant='outline-light' className="ml-2">Выйти</Button>
                </Nav>
                :
                <Nav className="ml-auto">
                <Button variant='outline-light'  onClick={() => user.setIsAuth(true)}>Войти</Button>
                </Nav>
            }
            </Container>
        </Navbar>
        </>
    );
})

export default NavBar;
