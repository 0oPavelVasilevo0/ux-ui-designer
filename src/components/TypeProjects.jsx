import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBRow, MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import ProjectsWeb from './ProjectsWeb';
import ProjectsGraphic from './ProjectsGraphic';
import { NavLink } from 'react-router-dom';

const TypeProjects = () => {

    const [justifyActive, setJustifyActive] = useState('tab1');

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };
    
    const activeLink = 'text-white fw-bold bg-transparent shadow-3-strong square border border-2 border-white ';
    const normalLink = 'text-white text-opacity-50 fw-bold bg-transparent shadow-3-strong ';

    const activeLink1 = 'text-warning fw-bold bg-transparent shadow-3-strong square border border-2 border-warning ';
    const normalLink1 = 'text-warning text-opacity-50 fw-bold bg-transparent shadow-3-strong ';


    return (
//    <MDBContainer>
//         <MDBRow>
//             <MDBCol sm='6'>
//                 <MDBCard>
//                         <NavLink to='/web_projects'>
//                     <MDBCardImage src={web} alt='' fluid />
//                         </NavLink>
                   
//                 </MDBCard>
//             </MDBCol>
//             <MDBCol sm='6'>
//                 <MDBCard>
//                     <MDBCardImage src={graphic} alt='' fluid/>
//                 </MDBCard>
//             </MDBCol>
//         </MDBRow>
//         </MDBContainer>

        <MDBContainer fluid className='pb-3 bg-dark '  >
                <MDBContainer>
                    <MDBContainer  className='pt-3 px-0' >
                    <MDBTabs pills justify className='mb-5'>
                            <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}
                                className={ justifyActive === 'tab1' ? activeLink : normalLink }>
                                    Web
                                </MDBTabsLink>
                            </MDBTabsItem>
                            <MDBTabsItem >
                            <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'} className={`ms-3 me-0 ${ justifyActive === 'tab2' ? activeLink1: normalLink1}`}>
                                    Graphic
                                </MDBTabsLink>
                            </MDBTabsItem>
                        </MDBTabs>
                    </MDBContainer>
                    <MDBTabsContent>
                        <MDBTabsPane show={justifyActive === 'tab1'}><ProjectsWeb /></MDBTabsPane>
                        <MDBTabsPane show={justifyActive === 'tab2'}><ProjectsGraphic /></MDBTabsPane>
                    </MDBTabsContent>
                </MDBContainer>
        </MDBContainer>

    )
}

export default TypeProjects