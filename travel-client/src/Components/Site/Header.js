import React from 'react';

import {Navbar, NavbarBrand, Nav, NavItem, } from 'reactstrap';
import Logout from '../Logout/Logout';


const Header = props => {
    return(
        <header>
            <Navbar className='header'>
                <NavbarBrand href='/'><br /><h1>Welcome To the Dynamic Travel Planning App</h1><br /></NavbarBrand>
                <Nav className='ml-auto' navbar>
                    <Logout clearLocalStorage={props.clearLocalStorage}/>
                    <NavItem>
               
                        {/* <NavLink href='https://github.com/reagankporter/Travel-Client'>
                            GitHub Client
                        </NavLink>
                        <NavLink href='https://github.com/reagankporter/Travel-Server'>
                            GitHub Server
                        </NavLink> */}
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
    );
};

export default Header;