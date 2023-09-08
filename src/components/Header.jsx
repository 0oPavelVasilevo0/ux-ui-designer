import { MDBBtn } from 'mdb-react-ui-kit'
import React from 'react'

const Header = () => {
    return (
        <>
            <div className='p-5 text-center bg-light'>
                <h1 className='mb-3'>Heading</h1>
                <h4 className='mb-3'>Subheading</h4>
                <MDBBtn tag="a" outline size="lg">
                    Call to action
                </MDBBtn>
            </div>
            <div className='p-5 text-center bg-light'>
                <p className='mt-4'>Scroll down</p>
                <p className='mt-4'>Scroll down</p>
                <p className='mt-4'>Scroll down</p>
                <p className='mt-4'>Scroll down</p>
                <p className='mt-4'>Scroll down</p>
                <p className='mt-4'>Scroll down</p>
                <p className='mt-4'>Scroll down</p>
                <p className='mt-4'>Scroll down</p>
                <p className='mt-4'>Scroll down</p>
                <p className='mt-4'>Scroll down</p>
                <p className='mt-4'>Scroll down</p>
            </div>
        </>
    )
}

export default Header