import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import React from 'react';
import img from './../../src/img/stock_.png'

const Info = () => {

    return (
        <MDBContainer>
            <div className='p-5 text-center bg-light'>
                <h1 className='mb-3'>Heading</h1>
                <h4 className='mb-3'>Subheading</h4>
                <MDBBtn tag="a" outline size="lg">
                    Call to action
                </MDBBtn>
            </div>
            <div>
                <p className='mt-4'>Scroll down</p>
                <p>Scroll down</p>
                <p>Scroll down</p>
                <p>Scroll down</p>
                <p>Scroll down</p>
                <p>Scroll down</p>
                <p>Scroll down</p>
                <p>Scroll down</p>
                <div>
                    <img src={img} className='img-fluid shadow-4' alt='...'></img>
                </div>
            </div>
        </MDBContainer>
    );
}

export default Info