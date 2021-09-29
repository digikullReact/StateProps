import React from 'react'
import { Navbar ,Container,NavDropdown,Form,Nav,FormControl,Button} from 'react-bootstrap';

function Header(props) {
    return (
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >

        {/** dynamice display of array items ----> */}
       
       {
         props.headerLinks.map(ele=>(

          <Nav.Link href="#action1">{ele}</Nav.Link>


         ))
       }

       
       
      
      </Nav>
  
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Header
