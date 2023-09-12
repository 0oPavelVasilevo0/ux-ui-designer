import { MDBBtn, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle } from 'mdb-react-ui-kit';
import React, { useState } from 'react'

const BioModal = () => {
    const [topRightModal, setTopRightModal] = useState(false);

    const toggleShow = () => setTopRightModal(!topRightModal);

    const activeLink = 'text-light';
    const normalLink = 'btn-outline-light';
// 'btn btn-outline-light btn-lg text-dark'
    return (
        <>
            {/* <MDBBtn onClick={toggleShow} color='light' className={({ isActive }) => isActive ? activeLink : normalLink}>Bio</MDBBtn> */}
            <MDBBtn onClick={toggleShow} color='light' className='btn btn-outline-light btn-lg text-light'>Bio</MDBBtn>
            <MDBModal
                animationDirection='right'
                show={topRightModal}
                tabIndex='-1'
                setShow={setTopRightModal}
            >
                <MDBModalDialog position='top-right' side>
                    <MDBModalContent>
                        <MDBModalHeader className='bg-light text-info'>
                            <MDBModalTitle>My bio</MDBModalTitle>
                            <MDBBtn
                                color='none'
                                className='btn-close btn-close-white'
                                onClick={toggleShow}
                            ></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <div className='row'>
                                <div className='col-3 text-center'>
                                    {/* <i className='fas fa-shopping-cart fa-4x text-info'></i> */}
                                </div>

                                <div className='col-9'>
                                    <p>Do you need more time to make a purchase decision?</p>
                                    <p>No pressure, your product will be waiting for you in the cart.</p>
                                </div>
                            </div>
                        </MDBModalBody>
                        <MDBModalFooter>
                            {/* <MDBBtn color='info'>Go to the cart</MDBBtn> */}
                            <MDBBtn outline color='info' onClick={toggleShow}>
                                Close
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    )
}

export default BioModal