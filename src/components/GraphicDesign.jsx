import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBRipple, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import { NavLink } from 'react-router-dom'

const GraphicDesign = () => {
  return (
      <>
         
          
          <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
              <MDBCol>
                  <MDBCard className='h-100'>
                      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                          <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                         
                              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                          
                      </MDBRipple>
                      <MDBCardBody>
                          <MDBCardTitle>Project1 graphic</MDBCardTitle>
                          <MDBCardText>
                              Some quick example text to build on the card title and make up the bulk of the card's content.
                          </MDBCardText>
                          <MDBBtn href='#'>Button</MDBBtn>
                      </MDBCardBody>
                  </MDBCard>
              </MDBCol>
              <MDBCol>
                  <MDBCard>
                      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                          <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/041.webp' fluid alt='...' />
                          
                              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                         
                      </MDBRipple>
                      <MDBCardBody>
                          <MDBCardTitle>Project2 graphic</MDBCardTitle>
                          <MDBCardText>
                              Some quick example text to build on the card title and make up the bulk of the card's content.
                          </MDBCardText>
                          <MDBBtn href='#'>Button</MDBBtn>
                      </MDBCardBody>
                  </MDBCard>
              </MDBCol>
              <MDBCol>
                  <MDBCard>
                      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                          <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/042.webp' fluid alt='...' />
                         
                              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                         
                      </MDBRipple>
                      <MDBCardBody>
                          <MDBCardTitle>Project3 graphic</MDBCardTitle>
                          <MDBCardText>
                              Some quick example text to build on the card title and make up the bulk of the card's content.
                          </MDBCardText>
                          <MDBBtn href='#'>Button</MDBBtn>
                      </MDBCardBody>
                  </MDBCard>
              </MDBCol>
              <MDBCol>
                  <MDBCard>
                      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                          <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/044.webp' fluid alt='...' />
                        
                              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        
                      </MDBRipple>
                      <MDBCardBody>
                          <MDBCardTitle>Project4 graphic</MDBCardTitle>
                          <MDBCardText>
                              Some quick example text to build on the card title and make up the bulk of the card's content.
                          </MDBCardText>
                          <MDBBtn href='#'>Button</MDBBtn>
                      </MDBCardBody>
                  </MDBCard>
              </MDBCol>
              <MDBCol>
                  <MDBCard>
                      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                          <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                          
                              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                         
                      </MDBRipple>
                      <MDBCardBody>
                          <MDBCardTitle>Project5 graphic</MDBCardTitle>
                          <MDBCardText>
                              Some quick example text to build on the card title and make up the bulk of the card's content.
                          </MDBCardText>
                          <MDBBtn href='#'>Button</MDBBtn>
                      </MDBCardBody>
                  </MDBCard>
              </MDBCol>
              <MDBCol>
                  <MDBCard>
                      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                          <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                        
                              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                         
                      </MDBRipple>
                      <MDBCardBody>
                          <MDBCardTitle>Project6 graphic</MDBCardTitle>
                          <MDBCardText>
                              Some quick example text to build on the card title and make up the bulk of the card's content.
                          </MDBCardText>
                          <MDBBtn href='#'>Button</MDBBtn>
                      </MDBCardBody>
                  </MDBCard>
              </MDBCol>

             

          </MDBRow>
          </>
      
  )
}

export default GraphicDesign