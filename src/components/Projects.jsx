import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBCollapse, MDBContainer, MDBRipple, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import Modal from './Modal'

const Projects = () => {
  return (
      <>
       
      <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
        <MDBCol>
                  <MDBCard className='h-100'>
                      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                          <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                       
                              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        
                      </MDBRipple>
                      <MDBCardBody>
                          <MDBCardTitle>Progect1</MDBCardTitle>
                          <MDBCardText>
                              Web design
                          </MDBCardText>
                          <MDBBtn href='#'><Modal /></MDBBtn>
                      </MDBCardBody>
                  </MDBCard>
        </MDBCol>
              <MDBCol>
                  <MDBCard className='h-100'>
                      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                          <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/041.webp' fluid alt='...' />
                          
                              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                          
                      </MDBRipple>
                      <MDBCardBody>
                          <MDBCardTitle>Progect2</MDBCardTitle>
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
                          <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/042.webp' fluid alt='...' />
                          
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
                          <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/044.webp' fluid alt='...' />
                          
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
                          <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                          
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
                          <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                         
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
              </MDBCol>
              

      </MDBRow>
      </>
  )
}

export default Projects