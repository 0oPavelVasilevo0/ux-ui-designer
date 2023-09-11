import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBRipple, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import { NavLink } from 'react-router-dom'

const GraphicDesign = () => {
  return (
      <MDBContainer>
         
          <NavLink to='/projects'>
              <MDBBtn className='m-4'>
                  return to project selection
              </MDBBtn>
          </NavLink>
          <NavLink to='/web_projects'>
              <MDBBtn className='m-4'>
                  to web design
              </MDBBtn>
          </NavLink>
          <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
              <MDBCol>
                  <MDBCard className='h-100'>
                      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                          <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                          <a>
                              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                          </a>
                      </MDBRipple>
                      <MDBCardBody>
                          <MDBCardTitle>Card title graphic</MDBCardTitle>
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
                          <a>
                              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                          </a>
                      </MDBRipple>
                      <MDBCardBody>
                          <MDBCardTitle>Card title</MDBCardTitle>
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
                          <a>
                              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                          </a>
                      </MDBRipple>
                      <MDBCardBody>
                          <MDBCardTitle>Card title</MDBCardTitle>
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
                          <a>
                              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                          </a>
                      </MDBRipple>
                      <MDBCardBody>
                          <MDBCardTitle>Card title</MDBCardTitle>
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
                          <a>
                              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                          </a>
                      </MDBRipple>
                      <MDBCardBody>
                          <MDBCardTitle>Card title</MDBCardTitle>
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
                          <a>
                              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                          </a>
                      </MDBRipple>
                      <MDBCardBody>
                          <MDBCardTitle>Card title</MDBCardTitle>
                          <MDBCardText>
                              Some quick example text to build on the card title and make up the bulk of the card's content.
                          </MDBCardText>
                          <MDBBtn href='#'>Button</MDBBtn>
                      </MDBCardBody>
                  </MDBCard>
              </MDBCol>

              {/* <MDBCol>
              <MDBCard className='h-100'>
                  <MDBCardImage
                      src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                      alt='...'
                      position='top'
                  />
                  <MDBCardBody>
                      <MDBCardTitle>Card title</MDBCardTitle>
                      <MDBCardText>
                          This is a longer card with supporting text below as a natural lead-in to additional content.
                          This content is a little bit longer.
                      </MDBCardText>
                  </MDBCardBody>
              </MDBCard>
          </MDBCol> */}

          </MDBRow>
          <br />
      </MDBContainer>
  )
}

export default GraphicDesign