import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'

const TypeProjects = () => {
    return (
        <MDBContainer className="px-4 d-flex align-items-center justify-content-center" style={{ height: '100vh'}} >
            
            <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
                <MDBCol>
                    <div className='bg-image hover-overlay'>
                        <img src='https://mdbootstrap.com/img/new/fluid/city/055.webp' className='img-fluid' />
                        <a href='#!'>
                            <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
                        </a>
                    </div>
                </MDBCol>
                <MDBCol>
                    <div className='bg-image hover-overlay'>
                        <img src='https://mdbootstrap.com/img/new/fluid/city/055.webp' className='img-fluid' />
                        <a href='#!'>
                            <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
                        </a>
                    </div>
                </MDBCol>
            </MDBRow>
           
            
        </MDBContainer>
    )
}

export default TypeProjects