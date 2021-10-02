import React,{useEffect,useState} from 'react'
import axios from "axios"
import MyTable from "./MyTable";


function Api() {

const [state,setState]=useState([]);
const [newData,setNewData]=useState(false);

   


    useEffect(() => {

          // returns a promise 
     axios.get("http://localhost:8080/api/data") .then(data=>{
        // console.log(data.data);
         setState(data["data"]);

         // if any error ---occurs here --
         


     }).catch(err=>{
         console.log("Eroro couured",err);
     })

   

      
    }, [newData])


    const AddData=()=>{

     /// 
     const data={
        "_id": (Math.random() + 1).toString(36).substring(7),
        "balance": (Math.random() + 1).toString(36).substring(7),
        "picture": "https://source.unsplash.com/200x100/?random",
        "age": 21,
        "eyeColor": (Math.random() + 1).toString(36).substring(7),
        "name": (Math.random() + 1).toString(36).substring(7),
        "gender": (Math.random() + 1).toString(36).substring(7),
        "company": (Math.random() + 1).toString(36).substring(7),
        "email": (Math.random() + 1).toString(36).substring(7),
        "phone": (Math.random() + 1).toString(36).substring(7)
      }



      axios.post("http://localhost:8080/api/addRecord",data).then(data=>{
         // alert(data["data"].msg);
          setNewData(!newData);



      }).catch(err=>{
          console.log(err);
      })


    }
    


    // Externla libraries 
    // axios ---
    return (
        <div>
          

            <MyTable data={state}/>

            <button className="btn btn-danger"  onClick={AddData}>

                Add Record 

            </button>

            
        </div>
    )
}

export default Api
