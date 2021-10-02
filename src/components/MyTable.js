import React from 'react'
import { Table } from 'react-bootstrap'


function MyTable(props) {
    return (
        <div>
            
            <Table striped bordered hover>
  <thead>
    <tr>
    
      <th>Name</th>
      <th>Age </th>
      <th>Phone</th>
      <th>Email</th>

    </tr>
  </thead>
  <tbody>
      {
          props.data.map(ele=>(
            <tr>
            <td>{ele.name}</td>
            <td>{ele.age}</td>
            <td>{ele.phone}</td>
            <td>{ele.email}</td>
          </tr>


          ))
      }
  
 
   
  </tbody>
</Table>
        </div>
    )
}

export default MyTable
