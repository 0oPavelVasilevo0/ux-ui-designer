import { MDBBtn, MDBCard, MDBCardBody, MDBCardFooter, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBCollapse, MDBContainer, MDBRipple, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import Modal from './Modal'
import img1 from './../img/projects/Login.png'
import img2 from './../img/projects/Group_13.png'
import img3 from './../img/projects/Frame_547.png'
import img5 from './../img/projects/emirares_page.png'
import img6 from './../img/projects/85936e881161615dd5b6.gif'
const Projects = () => {
    return (
        <>

            <MDBRow className='row-cols-1 row-cols-md-1 g-5'>
                {/* <MDBCol>
                  <MDBCard className='h-100'>
                      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                          <MDBCardImage src={img1} fluid alt='...' />
                       
                              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        
                      </MDBRipple>
                      <MDBCardBody>
                          <MDBCardTitle>Progect1</MDBCardTitle>
                          <MDBCardText>
                              Web design
                          </MDBCardText>
                          <MDBBtn tag='a' href='#'><Modal /></MDBBtn>
                      </MDBCardBody>
                  </MDBCard>
        </MDBCol>
              <MDBCol>
                  <MDBCard className='h-100'>
                      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                          <MDBCardImage src={img2} fluid alt='...' />
                          
                              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                          
                      </MDBRipple>
                      <MDBCardBody>
                          <MDBCardTitle>Progect2</MDBCardTitle>
                          <MDBCardText>
                              Web design
                          </MDBCardText>
                          <MDBBtn href='#!' >Button</MDBBtn>
                      </MDBCardBody>
                  </MDBCard>
              </MDBCol>
              <MDBCol>
                  <MDBCard className='h-100'>
                      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                          <MDBCardImage src={img3} fluid alt='...' />
                          
                              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        
                      </MDBRipple>
                      <MDBCardBody>
                          <MDBCardTitle>Progect3</MDBCardTitle>
                          <MDBCardText>
                              Web design
                          </MDBCardText>
                          <MDBBtn href='#'>Button</MDBBtn>
                      </MDBCardBody>
                  </MDBCard>
              </MDBCol>
              <MDBCol>
                  <MDBCard className='h-100'>
                      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                          <MDBCardImage src={img4} fluid alt='...' />
                          
                              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        
                      </MDBRipple>
                      <MDBCardBody>
                          <MDBCardTitle>Progect4</MDBCardTitle>
                          <MDBCardText>
                              Web design
                          </MDBCardText>
                          <MDBBtn href='#'>Button</MDBBtn>
                      </MDBCardBody>
                  </MDBCard>
              </MDBCol>
              <MDBCol>
                  <MDBCard className='h-100'>
                      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                          <MDBCardImage src={img5} fluid alt='...' />
                          
                              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                          
                      </MDBRipple>
                      <MDBCardBody>
                          <MDBCardTitle>Progect5</MDBCardTitle>
                          <MDBCardText>
                              Web design
                          </MDBCardText>
                          <MDBBtn href='#'>Button</MDBBtn>
                      </MDBCardBody>
                  </MDBCard>
              </MDBCol>
              <MDBCol>
                  <MDBCard className='h-100'>
                      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                          <MDBCardImage src={img6} fluid alt='...' />
                         
                              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        
                      </MDBRipple>
                      <MDBCardBody>
                          <MDBCardTitle>Progect6</MDBCardTitle>
                          <MDBCardText>
                              Web design
                          </MDBCardText>
                          <MDBBtn href='#'>Button</MDBBtn>
                      </MDBCardBody>
                  </MDBCard>
              </MDBCol> */}
                <MDBCol>
                    <MDBCard style={{ maxWidth: '100%' }} className='border border-4 border-white'>
                        <MDBRow className='g-0'>
                            <MDBCol md='6'>
                                <MDBCardImage src={img1} alt='...' fluid />
                            </MDBCol>
                            <MDBCol md='6' className='bg-dark text-light'>
                                <MDBCardBody>
                                    <MDBCardTitle>Card title</MDBCardTitle>
                                    <MDBCardText>
                                        This is a wider card with supporting text below as a natural lead-in to additional content. This
                                        content is a little bit longer
                                    </MDBCardText>
                                    <MDBCardText>

                                        <small className='text-muted'>Last updated 3 mins ago</small>

                                    </MDBCardText>
                                    <MDBCardText className='text-end'>
                                        <Modal />
                                    </MDBCardText>


                                </MDBCardBody>


                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard style={{ maxWidth: '100%' }}>
                        <MDBRow className='g-0'>
                            <MDBCol md='6'>
                                <MDBCardImage src={img2} alt='...' fluid />
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBCardBody>
                                    <MDBCardTitle>Card title</MDBCardTitle>
                                    <MDBCardText>
                                        This is a wider card with supporting text below as a natural lead-in to additional content. This
                                        content is a little bit longer.
                                    </MDBCardText>
                                    <MDBCardText>
                                        <small className='text-muted'>Last updated 3 mins ago</small>
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard style={{ maxWidth: '100%' }}>
                        <MDBRow className='g-0'>
                            <MDBCol md='6'>
                                <MDBCardImage src={img3} alt='...' fluid />
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBCardBody>
                                    <MDBCardTitle>Card title</MDBCardTitle>
                                    <MDBCardText>
                                        This is a wider card with supporting text below as a natural lead-in to additional content. This
                                        content is a little bit longer.
                                    </MDBCardText>
                                    <MDBCardText>
                                        <small className='text-muted'>Last updated 3 mins ago</small>
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard style={{ maxWidth: '100%' }}>
                        <MDBRow className='g-0'>
                            <MDBCol md='6'>
                                <MDBCardImage src={img3} alt='...' fluid />
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBCardBody>
                                    <MDBCardTitle>Card title</MDBCardTitle>
                                    <MDBCardText>
                                        This is a wider card with supporting text below as a natural lead-in to additional content. This
                                        content is a little bit longer.
                                    </MDBCardText>
                                    <MDBCardText>
                                        <small className='text-muted'>Last updated 3 mins ago</small>
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard style={{ maxWidth: '100%' }}>
                        <MDBRow className='g-0'>
                            <MDBCol md='6'>
                                <MDBCardImage src={img5} alt='...' fluid />
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBCardBody>
                                    <MDBCardTitle>Card title</MDBCardTitle>
                                    <MDBCardText>
                                        This is a wider card with supporting text below as a natural lead-in to additional content. This
                                        content is a little bit longer.
                                    </MDBCardText>
                                    <MDBCardText>
                                        <small className='text-muted'>Last updated 3 mins ago</small>
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard style={{ maxWidth: '100%' }}>
                        <MDBRow className='g-0'>
                            <MDBCol md='6'>
                                <MDBCardImage src={img6} alt='...' fluid />
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBCardBody>
                                    <MDBCardTitle>Card title</MDBCardTitle>
                                    <MDBCardText>
                                        This is a wider card with supporting text below as a natural lead-in to additional content. This
                                        content is a little bit longer.
                                    </MDBCardText>
                                    <MDBCardText>
                                        <small className='text-muted'>Last updated 3 mins ago</small>
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </MDBCol>

            </MDBRow>

        </>
    )
}

export default Projects