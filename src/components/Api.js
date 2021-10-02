import React,{useEffect,useState} from 'react'
import axios from "axios"
import MyTable from "./MyTable";


function Api() {

const [state,setState]=useState([]);

    useEffect(() => {

        // returns a promise 
        axios.get("http://localhost:8080/api/data") .then(data=>{
           // console.log(data.data);
            setState(data["data"]);

            // if any error ---occurs here --
            


        }).catch(err=>{
            console.log("Eroro couured",err);
        })


      
    }, [])
    


    // Externla libraries 
    // axios ---
    return (
        <div>
          

            <MyTable data={state}/>

            
        </div>
    )
}

export default Api
