// import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit'
import React from 'react'
import BioModal from './BioModal'


const Header = () => {
    return (
        <header>
            <div id="intro" className="bg-image text-center" style={{ backgroundImage: `url(${require('./../../src/img/stock_.png')})`, height: 'calc(100vh - 58.59px)' }} >
                <div className="mask text-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }} >
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white px-5'>
                            <h1 className='mb-3 '>Hello, my name is Evgeniya. I am designer UI/UX</h1>
                            <h4 className='mb-3'>Subheading</h4>
                            <BioModal />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header