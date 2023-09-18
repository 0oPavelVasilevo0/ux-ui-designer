import { MDBBtn, MDBCard, MDBCardBody, MDBCardFooter, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBCollapse, MDBContainer, MDBRipple, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
// import Modal from './Modal'
import Project from './Project'
import { projects } from '../helpers/projectsList'

const ProjectsWeb = () => {
    return (
        <>
            <MDBRow className='row-cols-1 row-cols-md-1 g-5'>
                {projects.map((project, index) => {
                    return (
                        <Project
                            key={index}
                            title={project.title}
                            img={project.img}
                            card={project.card}
                            index={index}
                        />
                    );
                })}
            </MDBRow>

        </>
    )
}

export default ProjectsWeb