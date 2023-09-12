import React, { useState } from 'react';
import { MDBNavbar, MDBCollapse, MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBIcon, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav, MDBNavbarToggler, MDBNavbarBrand, MDBBtn } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [showNavRight, setShowNavRight] = useState(false);

    const activeLink = 'text-info fw-bold';
    const normalLink = 'text-dark fw-lighter';

    return (

        <MDBNavbar expand='lg' sticky  bgColor='light'>
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
                    <MDBNavbarNav  right fullWidth={false} className='mb-2 mb-lg-0'>
                        <MDBNavbarItem  >
                            <MDBNavbarLink >
                            <NavLink to='/' className={({ isActive }) => isActive ? activeLink : normalLink}>
                                  
                               
                                    {/* <MDBBtn color='light' className='btn btn-outline-light  text-info'> */}
                                    Home
                               
                         
                            </NavLink>
                            </MDBNavbarLink> 
                            
                        </MDBNavbarItem>
                        <MDBNavbarItem >
                            <MDBNavbarLink >
                            <NavLink to='/projects' className={({ isActive }) => isActive ? activeLink : normalLink}>
                                
                                    {/* <MDBBtn color='light' className='btn btn-outline-light  text-info'> */}
                                    {/* <span className=' list-group-item-primary'>Projects</span> */}
                                    Projects
                                    {/* </MDBBtn> */}
                               
                            </NavLink>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem >
                            <MDBNavbarLink >
                            <NavLink to='/info' className={({ isActive }) => isActive ? activeLink : normalLink}>
                                
                                    {/* <MDBBtn color='light' className='btn btn-outline-light  text-info'> */}
                                    Info
                                    {/* </MDBBtn> */}
                               
                            </NavLink>
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                       

                        <MDBNavbarItem>
                            <MDBDropdown>
                                <MDBDropdownToggle tag='a' className='hidden-arrow me-3 me-lg-0 nav-link' style={{cursor: 'pointer'}}>
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

        //               <MDBNavbarItem>
        //                     <MDBNavbarLink
        //                         className="px-2"
        //                         href="https://www.facebook.com/mdbootstrap"
        //                         rel="nofollow"
        //                         target="_blank"
        //                     >
        //                         <MDBIcon fab icon="facebook-f" />
        //                     </MDBNavbarLink>
        //                 </MDBNavbarItem>
        //                 <MDBNavbarItem>
        //                     <MDBNavbarLink
        //                         className="px-2"
        //                         href="https://twitter.com/MDBootstrap"
        //                         rel="nofollow"
        //                         target="_blank"
        //                     >
        //                         <MDBIcon fab icon="twitter" />
        //                     </MDBNavbarLink>
        //                 </MDBNavbarItem>
        //                 <MDBNavbarItem>
        //                     <MDBNavbarLink
        //                         className="ps-2"
        //                         href="https://github.com/mdbootstrap/mdb-ui-kit"
        //                         rel="nofollow"
        //                         target="_blank"
        //                     >
        //                         <MDBIcon fab icon="github" />
        //                     </MDBNavbarLink>
        //                 </MDBNavbarItem>

    );
}

export default NavBar