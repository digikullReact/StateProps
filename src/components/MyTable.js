import React,{useEffect} from 'react'
import { Table } from 'react-bootstrap'


function MyTable(props) {

useEffect(() => {
  
  console.log("Component Mounted");
  /// componnent will unmount works ---->
  return () => {
    console.log("Component Mytable gets unmounted now")
  }
}, [])


    return (
        <div>
            
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>Image</th>
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
              <td> <img src={ele.picture}/> </td>
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
