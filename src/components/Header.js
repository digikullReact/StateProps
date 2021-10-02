import React,{useEffect,useState} from 'react'
import { Navbar ,Container,NavDropdown,Form,Nav,FormControl,Button} from 'react-bootstrap';

function Header(props) {
  
const [data,setData]=useState(0);

/*
Use effect gets called after every render
useEffect(() => {
  console.log("USe effect gets called");

  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

 // you only want that the data loads for the first time only -->


})

*/


/**
 * USe effect gets called only after the first render
 * 
 * 
 * useEffect(() => {
    console.log("USe effect gets called");

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))

   // you only want that the data loads for the first time only -->

 
  },[])
 */



  // how useeffects acts as ,component did mount ,did update and will unmount


  // Use effect gets called after the first render and after any change in the dependecy passed
  // to the array 
  useEffect(() => {
    //console.log("USe effect gets called");

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))

   // you only want that the data loads for the first time only -->

 
  },[data])





  const changeData=()=>{
    setData(+ new Date());
  }

  //console.log("I am rendered HEader")

    return (
        <Navbar bg="light" expand="lg">
        
          <button onClick={changeData}>
           Click Me
          </button>
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
