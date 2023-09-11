import { MDBContainer, MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import Projects from './Projects';
import GraphicDesign from './GraphicDesign';

const TypeProjects = () => {

    const [justifyActive, setJustifyActive] = useState('tab1');

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };

    return (
        <>
            <MDBContainer >
                <MDBContainer className='mt-3' >
                    <MDBTabs pills justify className='mb-5'>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                                Web
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                                Graphic
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>
                </MDBContainer>

                <MDBTabsContent>
                    <MDBTabsPane show={justifyActive === 'tab1'}><Projects /></MDBTabsPane>
                    <MDBTabsPane show={justifyActive === 'tab2'}><GraphicDesign /></MDBTabsPane>
                </MDBTabsContent>
            </MDBContainer>
        </>


        // <MDBContainer className="px-4 d-flex align-items-center justify-content-center" style={{ height: '100vh'}} >

        //     <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
        //         <MDBCol>
        //             <div className='bg-image hover-overlay'>
        //                 <img src='https://mdbootstrap.com/img/new/fluid/city/055.webp' className='img-fluid' />
        //                 <NavLink to='/web_projects'>

        //                     <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>

        //                 </NavLink>
        //             </div>
        //         </MDBCol>
        //         <MDBCol>
        //             <div className='bg-image hover-overlay'>
        //                 <img src='https://mdbootstrap.com/img/new/fluid/city/055.webp' className='img-fluid' />
        //                 <NavLink to='/graphic_projects'>

        //                     <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>

        //                 </NavLink>
        //             </div>
        //         </MDBCol>
        //     </MDBRow>


        // </MDBContainer>
    )
}

export default TypeProjects