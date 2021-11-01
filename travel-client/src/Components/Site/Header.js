import React from 'react';

import {
    Navbar, 
    NavbarBrand, 
    Nav, 
    NavItem, 
    NavLink
} from 'reactstrap';

const Header = () => {
    return(
        <header>
            <Navbar className='header'>
                <NavbarBrand href='/'><br /><h1>This Is The Travel Planning App Header</h1><br /></NavbarBrand>
                <Nav className='ml-auto' navbar>
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