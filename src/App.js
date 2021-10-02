import { useState ,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import MyClass from './components/MyClass';
import Talk from './components/Talk';
import Api from './components/Api';



///------>
/*
useEffect(() => {

 
},[])
*/







function App() {


  const [hideClass,setHideClass]=useState(true)

 
  
  

  // How re rendering occurs --->

  // 1- When the state of the component gets changed
  // 2--When the props of the component gets changed
  // 3- When the parent comonent gets re rendered

  const [footerLinks,setFooterLinks]=useState([])


  /// this is how you declare state in react

  const [headerLinks,setHeaderLinks]=useState([
   "Home"

  ])


  const AddHeaderLinks=(link)=>{

    setHideClass(false);
    setFooterLinks([...headerLinks,link])
 

    /// Modifying the state
   /// setHeaderLinks([...headerLinks,link]);
    


  }


  return (
    <>

   <Api/>

  


   <Footer/>


</>
   
   
  );
}

export default App;
