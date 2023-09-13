import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBRipple, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import { NavLink } from 'react-router-dom'
import img1 from './../img/projects/Login.png'
import img2 from './../img/projects/Group_13.png'
import img3 from './../img/projects/Frame_547.png'
import img5 from './../img/projects/emirares_page.png'
import img6 from './../img/projects/85936e881161615dd5b6.gif'
import Modal from './Modal'

const GraphicDesign = () => {
  return (
      <>
         
          <MDBRow className='row-cols-1 row-cols-md-1 g-5'>
            <MDBCol>
                <MDBCard style={{ maxWidth: '100%' }}>
                    <MDBRow className='g-0'>
                        <MDBCol md='6'>
                            <MDBCardImage src={img1} alt='...' fluid />
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

        </MDBRow >
          </>
      
  )
}

export default GraphicDesign