import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBRow } from 'mdb-react-ui-kit';
// import React from 'react'
import { NavLink } from 'react-router-dom';

const Project = ({ title, img, card, index }) => {
    return (
        <NavLink to={`/project/${index}`}>
            <MDBCard style={{ maxWidth: '100%' }} className='border border-4 border-white'>
                <MDBRow className='g-0'>
                    <MDBCol md='6'>
                        <MDBCardImage src={img} alt={title} fluid />
                    </MDBCol>
                    <MDBCol md='6' className='bg-dark text-light'>
                        <MDBCardBody>
                            <MDBCardTitle>{title}</MDBCardTitle>
                            <MDBCardText>{card}</MDBCardText>
                            <MDBCardText>
                                <small className='text-muted'>Last updated 3 mins ago</small>
                            </MDBCardText>
                            <MDBCardText className='text-end'>
                                {/* <Modal /> */}
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        </NavLink>
    );
};

export default Project;