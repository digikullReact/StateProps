import React,{useState} from 'react'




function Talk() {

    // variable -->the thing which changes 
    const [data,setData]=useState(["First Element of an array"]);
    const [bg,setBg]=useState("");

    // useState returns an array of two elemnts ,first element is the the state itself
    // and second element is the method to modify that state


    const changColor=()=>{
        //setBg("Green") ///
        data.push("2 element")
       //const data2=JSON.parse(JSON.stringify(data));
        setData([...data]);  // -->
  

    }

    return (
        <div style={{backgroundColor:bg}}>  

        {
            data.map(ele=>(
             <h1>{data}</h1>
            ))
        }



<button onClick={changColor}>
Change Heading Data

</button>
            
        </div>
    )
}

export default Talk
