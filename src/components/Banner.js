import React ,{useState} from 'react'
import { Col,Row ,Form,Container,Button} from 'react-bootstrap';


function Banner(props) {
 /// console.log("I am rendered Banner")
    const [state,setState]=useState("");

const handleChange=(event)=>{
    setState(event.target.value);
}


const addLink=()=>{
  //console.log("Link Added");
    props.AddHeaderLinks(state)


}

    return (

      
      
        <Container>
        <Row style={{marginTop:"50px"}}>
          <Col>
          <h3>Add Header Componenet</h3>
          

          <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="text"  onChange={handleChange} placeholder="Enter Link Name" />
   
  </Form.Group>


  <Button variant="primary" type="button" onClick={addLink}>
    Add Header Link
  </Button>
</Form>
          
          </Col>
          <Col>
          <h3>Add Footer Componenet</h3>
          
          
          
          </Col>
        </Row>
      
      </Container>
    )
}

export default Banner
