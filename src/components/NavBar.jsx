import { MDBBtn, MDBCollapse, MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBIcon, MDBNavbar, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav, MDBNavbarToggler } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const NavBar = () => {
    const [showNavRight, setShowNavRight] = useState(false);

    return (
        <header>
            <MDBNavbar sticky='top' expand='lg' light bgColor='light'>

                <MDBContainer >

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
                            <MDBNavbarItem>
                                <MDBNavbarLink active aria-current='page' href='#'>
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>Link</MDBNavbarLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle tag='a' className='nav-link'>
                                        Dropdown
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem link>Action</MDBDropdownItem>
                                        <MDBDropdownItem link>Another action</MDBDropdownItem>
                                        <MDBDropdownItem link>Something else here</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle tag='a' className='hidden-arrow me-3 me-lg-0 nav-link'>
                                        <MDBIcon flag='united-kingdom' className='m-0' />
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem link>
                                            <MDBIcon flag='united-kingdom' />
                                            English
                                            <MDBIcon fas icon='check' color='success' className='ms-2' />
                                        </MDBDropdownItem>
                                        {/* <MDBDropdownItem>
                                         
                                            </MDBDropdownItem>
                                        <MDBDropdownItem link>
                                            <MDBIcon flag='poland' />
                                            Polski
                                        </MDBDropdownItem>
                                        <MDBDropdownItem link>
                                            <MDBIcon flag='china' />
                                            中文
                                        </MDBDropdownItem>
                                        <MDBDropdownItem link>
                                            <MDBIcon flag='japan' />
                                            日本語
                                        </MDBDropdownItem>
                                        <MDBDropdownItem link>
                                            <MDBIcon flag='germany' />
                                            Deutsch
                                        </MDBDropdownItem>
                                        <MDBDropdownItem link>
                                            <MDBIcon flag='spain' />
                                            Español
                                        </MDBDropdownItem> */}
                                        <MDBDropdownItem link>
                                            <MDBIcon flag='russia' />
                                            Русский
                                        </MDBDropdownItem>
                                        {/* <MDBDropdownItem link>
                                            <MDBIcon flag='portugal' />
                                            Português
                                        </MDBDropdownItem> */}
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
            <div className='p-5 text-center bg-light'>
                <h1 className='mb-3'>Heading</h1>
                <h4 className='mb-3'>Subheading</h4>
                <MDBBtn tag="a" outline size="lg">
                    Call to action
                </MDBBtn>
            </div>
            <div className='p-5 text-center bg-light'>
                <p className='mt-4'>Scroll down</p>
                <p className='mt-4'>Scroll down</p>
                <p className='mt-4'>Scroll down</p>
                <p className='mt-4'>Scroll down</p>
                <p className='mt-4'>Scroll down</p>
                <p className='mt-4'>Scroll down</p>
                <p className='mt-4'>Scroll down</p>
                <p className='mt-4'>Scroll down</p>
                <p className='mt-4'>Scroll down</p>
                <p className='mt-4'>Scroll down</p>
                <p className='mt-4'>Scroll down</p>
            </div>
        </header>
    );
}

export default NavBar