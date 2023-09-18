import { MDBBtn, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle, MDBNavbarItem, MDBNavbarLink } from 'mdb-react-ui-kit';
import React, { useState } from 'react'

const Modal = () => {
    const [centredModal, setCentredModal] = useState(false);

    const toggleShow = () => setCentredModal(!centredModal);


  return (
      <>
          <MDBBtn onClick={toggleShow}>Contact</MDBBtn>
          <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
              <MDBModalDialog centered size='lg'>
                  <MDBModalContent>
                      <MDBModalHeader>
                          <MDBModalTitle>Modal title</MDBModalTitle>
                          <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                      </MDBModalHeader>
                      <MDBModalBody>
                     
                          <p style={{color: "black"}}>
                              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                              egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                          </p>
                        
                      </MDBModalBody>
                      <MDBModalFooter>
                          <MDBBtn color='secondary' onClick={toggleShow}>
                              Close
                          </MDBBtn>
                      </MDBModalFooter>
                  </MDBModalContent>
              </MDBModalDialog>
          </MDBModal>
      </>
  )
}

export default Modal