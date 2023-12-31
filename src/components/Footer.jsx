import { MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBRow } from 'mdb-react-ui-kit'
import {SiAdobephotoshop} from 'react-icons/si'
import {SiAdobeillustrator} from 'react-icons/si'
import {FiFigma} from 'react-icons/fi'
import { GiStripedSun } from 'react-icons/gi'
import React from 'react'

const Footer = () => {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href='#' className='me-4 text-reset'>
                        <MDBIcon fab icon="instagram" size='lg' className='text-danger' />
                    </a>
                    <a href='#' className='me-4 text-reset'>
                        <MDBIcon fab icon="linkedin" size='lg' className='text-primary' />

                    </a>
                    <a href='#' className='me-4 text-reset'>
                        <MDBIcon fab icon="telegram" size='lg' className='text-info' />

                    </a>
                    <a href='#' className='me-4 text-reset'>
                        <MDBIcon far icon="envelope" size='lg' className='text-warning' />

                    </a>

                </div>

            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                {/* <MDBIcon far icon="object-group" className="me-3 text-success" /> */}
                                <MDBIcon size='xl'>< GiStripedSun className="me-3 text-success"  /></MDBIcon> 
                                Ivchenko UX-UI
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Skills</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    {/* <MDBIcon fab icon="figma" /> */}
                                    <MDBIcon>< FiFigma className='text-info' /></MDBIcon> Figma
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    {/* <MDBIcon fab icon="adobe" /> Adobe */}
                                    <MDBIcon><SiAdobephotoshop className='text-info' /></MDBIcon> Photoshop
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    {/* <MDBIcon fab icon="adobe" /> Adobe */}
                                    <MDBIcon><SiAdobeillustrator className='text-info' /></MDBIcon> Illusatrator
                                </a>
                            </p>
                            
                            <p>
                                <a href='#!' className='text-reset'>
                                    <MDBIcon fab icon="confluence" /> Confluence
                                </a>
                            </p>

                        </MDBCol>

                        {/* <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Pricing
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Settings
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Orders
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Help
                                </a>
                            </p>
                        </MDBCol> */}

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4' id='contacts'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                World
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                info@example.com
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                            </p>
                            <p>
                                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2023 Copyright:
                <a className='text-reset fw-bold' href='#'>
                    Pawasil
                </a>
            </div>
        </MDBFooter>
    )
}

export default Footer