import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit'
import React from 'react'

const Header = () => {
    return (
        <header>

            <div
                id="intro"
                className="bg-image text-center"
                style={{ backgroundImage: `url(${require('./../../src/img/stock_.png')})`,height: "100vh"  }}
            >
                <div
                    className="mask text-white"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
                >
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h1 className='mb-3 '>Heading</h1>
                            <h4 className='mb-3'>Subheading</h4>
                            <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                                Call to action
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='p-5 text-center bg-light'>
                <h1 className='mb-3'>Heading</h1>
                <h4 className='mb-3'>Subheading</h4>
                <MDBBtn tag="a" outline size="lg">
                    Call to action
                </MDBBtn>
            </div> */}
            {/* <div className='p-5 text-center bg-light'>
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
            </div> */}
        </header>
    )
}

export default Header