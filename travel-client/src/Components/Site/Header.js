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
                <NavbarBrand href='/'>Travel Library</NavbarBrand>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <NavLink href='https://github.com/reagankporter/Travel-Client'>
                            GitHub Client
                        </NavLink>
                        <NavLink href='https://github.com/reagankporter/Travel-Server'>
                            GitHub Server
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
    );
};

export default Header;