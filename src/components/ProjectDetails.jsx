import { MDBCardImage, MDBContainer } from 'mdb-react-ui-kit'
import React from 'react'
import { useParams } from 'react-router-dom';
import { projects } from '../helpers/projectsList';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects[id];

    return (
        <MDBContainer>
            <div className='p-5 text-center bg-light'>
                <h1 className='mb-3'>{project.title}</h1>
            </div>
            <div>
                <p className='mt-4'>{project.description}</p>
                {/* <p>Scroll down</p>
              <p>Scroll down</p>
              <p>Scroll down</p>
              <p>Scroll down</p>
              <p>Scroll down</p>
              <p>Scroll down</p>
              <p>Scroll down</p> */}
                <div>
                    <MDBCardImage src={project.img} alt={project.title} fluid />
                </div>
            </div>
        </MDBContainer>
    )
}

export default ProjectDetails