import { MDBContainer, MDBNavbar, MDBNavbarBrand } from 'mdb-react-ui-kit'
import React from 'react'

const Nabbar1 = () => {
  return (
      <MDBNavbar light bgColor='light'>
          <MDBContainer>
              <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
          </MDBContainer>
      </MDBNavbar>
  )
}

export default Nabbar1