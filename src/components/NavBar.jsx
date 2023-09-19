import React, { useState } from 'react';
import { MDBNavbar, MDBCollapse, MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBIcon, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav, MDBNavbarToggler, MDBNavbarBrand } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from 'react-router-dom';
import Modal from './Modal';

const NavBar = () => {
    const [showNavRight, setShowNavRight] = useState(false);

    const activeLink = 'text-warning fw-bold square  '; //border-bottom border-warning border-2
    const normalLink = 'text-light fw-lighter ';

    const closeNavbar = () => {
        setShowNavRight(false);
    }

    return (
        <MDBNavbar expand='lg' sticky bgColor='dark'>
            <MDBContainer >
                <NavLink to='/' >
                    <MDBNavbarBrand className='text-warning fw-bold'>
                        <span className='text-light'>Evgeniya </span>Ivchenko
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
                    <MDBIcon icon='bars' color='light' fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar show={showNavRight}>
                    <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
                        <NavLink to='/'>
                        <MDBNavbarItem onClick={closeNavbar} >
                            <MDBNavbarLink>
                                <NavLink to='/'  className={({ isActive }) => isActive ? activeLink : normalLink}>
                                    Home
                                </NavLink>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        </NavLink>
                        <NavLink to='/projects'>
                        <MDBNavbarItem onClick={closeNavbar}>
                            <MDBNavbarLink >
                                <NavLink to='/projects' className={({ isActive }) => isActive ? activeLink : normalLink}>
                                    Projects
                                </NavLink>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        </NavLink>
                        <NavLink to='/info'>
                        <MDBNavbarItem onClick={closeNavbar}>
                            <MDBNavbarLink >
                                <NavLink to='/info' className={({ isActive }) => isActive ? activeLink : normalLink}>
                                    Info
                                </NavLink>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        </NavLink>
                        <MDBNavbarItem onClick={closeNavbar} >
                        <MDBNavbarLink href='#contacts' className='text-secondary '>
                               {/* <Modal /> */}
                               Contact
                             </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBDropdown >
                                <MDBDropdownToggle tag='a' className='hidden-arrow me-3 me-lg-0 nav-link ' style={{ cursor: 'pointer' }}>
                                    <MDBIcon flag='united-kingdom' className='m-0' />
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className='bg-dark'>
                                    <MDBDropdownItem link>
                                        <MDBIcon flag='united-kingdom' />
                                        <span className='text-light'>English</span>
                                        <MDBIcon fas icon='check' color='success' className='ms-2' />
                                    </MDBDropdownItem>
                                    <MDBDropdownItem link>
                                        <MDBIcon flag='russia' />
                                        Русский
                                        <MDBIcon fas icon='check' color='success' className='ms-2' />
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