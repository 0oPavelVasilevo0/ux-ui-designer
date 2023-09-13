import React, { useState } from 'react';
import { MDBNavbar, MDBCollapse, MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBIcon, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav, MDBNavbarToggler, MDBNavbarBrand } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [showNavRight, setShowNavRight] = useState(false);

    const activeLink = 'text-info fw-bold';
    const normalLink = 'text-dark fw-lighter';

    const closeNavbar = () => {
        setShowNavRight(false);
    }

    return (
        <MDBNavbar expand='lg' sticky bgColor='light'>
            <MDBContainer >
                <NavLink to='/'  >
                    <MDBNavbarBrand>
                        Evgeniya Ivchenko
                    </MDBNavbarBrand>
                </NavLink>
                <MDBNavbarToggler
                    type='button'
                    data-target='#navbarRightAlignExample'
                    aria-controls='navbarRightAlignExample'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNavRight(!showNavRight)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar show={showNavRight}>
                    <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
                        <MDBNavbarItem onClick={closeNavbar}>
                            <MDBNavbarLink >
                                <NavLink to='/' className={({ isActive }) => isActive ? activeLink : normalLink}>
                                    Home
                                </NavLink>
                            </MDBNavbarLink>

                        </MDBNavbarItem>
                        <MDBNavbarItem onClick={closeNavbar}>
                            <MDBNavbarLink >
                                <NavLink to='/projects' className={({ isActive }) => isActive ? activeLink : normalLink}>
                                    Projects
                                </NavLink>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem onClick={closeNavbar}>
                            <MDBNavbarLink >
                                <NavLink to='/info' className={({ isActive }) => isActive ? activeLink : normalLink}>
                                    Info
                                </NavLink>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem onClick={closeNavbar}>
                            <MDBNavbarLink href='#contacts' >
                                Contacts
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBDropdown>
                                <MDBDropdownToggle tag='a' className='hidden-arrow me-3 me-lg-0 nav-link' style={{ cursor: 'pointer' }}>
                                    <MDBIcon flag='united-kingdom' className='m-0' />
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link>
                                        <MDBIcon flag='united-kingdom' />
                                        English
                                        <MDBIcon fas icon='check' color='success' className='ms-2' />
                                    </MDBDropdownItem>
                                    <MDBDropdownItem link>
                                        <MDBIcon flag='russia' />
                                        Русский
                                    </MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>

    );
}

export default NavBar