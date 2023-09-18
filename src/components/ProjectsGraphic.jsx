import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBRipple, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import { projects } from '../helpers/projectsList'
import Project from './Project'

const ProjectsGraphic = () => {
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

export default ProjectsGraphic