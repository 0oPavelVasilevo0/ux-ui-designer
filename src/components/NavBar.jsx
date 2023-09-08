import React, { useState } from 'react';
import { MDBNavbar, MDBBtn, MDBCollapse, MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBIcon, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav, MDBNavbarToggler, MDBNavbarBrand } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const NavBar = () => {
    const [showNavRight, setShowNavRight] = useState(false);

    return (
        // <header>


        <MDBNavbar expand='lg' sticky light bgColor='light'>
            <MDBContainer >
                <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
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
                            <MDBNavbarLink href='#'>Projects</MDBNavbarLink>
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


        // <MDBNavbar expand='lg' sticky  light bgColor='light'>

        //         <MDBContainer >

        //             <MDBNavbarToggler
        //                 type='button'
        //                 data-target='#navbarRightAlignExample'
        //                 aria-controls='navbarRightAlignExample'
        //                 aria-expanded='false'
        //                 aria-label='Toggle navigation'
        //                 onClick={() => setShowNavRight(!showNavRight)}
        //             >
        //                 <MDBIcon icon='bars' fas />
        //             </MDBNavbarToggler>

        //             <MDBCollapse navbar show={showNavRight}>
        //                 <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
        //                     <MDBNavbarItem>
        //                         <MDBNavbarLink active aria-current='page' href='#'>
        //                             Home
        //                         </MDBNavbarLink>
        //                     </MDBNavbarItem>
        //                     <MDBNavbarItem>
        //                         <MDBNavbarLink href='#'>Link</MDBNavbarLink>
        //                     </MDBNavbarItem>

        //                     <MDBNavbarItem>
        //                         <MDBDropdown>
        //                             <MDBDropdownToggle tag='a' className='nav-link'>
        //                                 Dropdown
        //                             </MDBDropdownToggle>
        //                             <MDBDropdownMenu>
        //                                 <MDBDropdownItem link>Action</MDBDropdownItem>
        //                                 <MDBDropdownItem link>Another action</MDBDropdownItem>
        //                                 <MDBDropdownItem link>Something else here</MDBDropdownItem>
        //                             </MDBDropdownMenu>
        //                         </MDBDropdown>
        //                     </MDBNavbarItem>
        //                     <MDBNavbarItem>
        //                         <MDBDropdown>
        //                             <MDBDropdownToggle tag='a' className='hidden-arrow me-3 me-lg-0 nav-link'>
        //                                 <MDBIcon flag='united-kingdom' className='m-0' />
        //                             </MDBDropdownToggle>
        //                             <MDBDropdownMenu>
        //                                 <MDBDropdownItem link>
        //                                     <MDBIcon flag='united-kingdom' />
        //                                     English
        //                                     <MDBIcon fas icon='check' color='success' className='ms-2' />
        //                                 </MDBDropdownItem>

        //                                 <MDBDropdownItem link>
        //                                     <MDBIcon flag='russia' />
        //                                     Русский
        //                                 </MDBDropdownItem>

        //                             </MDBDropdownMenu>
        //                         </MDBDropdown>
        //                     </MDBNavbarItem>
        //                 </MDBNavbarNav>
        //             </MDBCollapse>
        //         </MDBContainer>
        //     </MDBNavbar>


        // {/* </header> */}

    );
}

export default NavBar