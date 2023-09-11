import { MDBBtn } from 'mdb-react-ui-kit';
import React from 'react';


const Info = () => {

    return (
        <>
            <div className='p-5 text-center bg-light'>
                <h1 className='mb-3'>Heading</h1>
                <h4 className='mb-3'>Subheading</h4>
                <MDBBtn tag="a" outline size="lg">
                    Call to action
                </MDBBtn>
            </div>

            <p className='mt-4'>Scroll down</p>
            <p>Scroll down</p>
            <p>Scroll down</p>
            <p>Scroll down</p>
            <p>Scroll down</p>
            <p>Scroll down</p>
            <p>Scroll down</p>
            <p>Scroll down</p>
       </>
    );
}

export default Info