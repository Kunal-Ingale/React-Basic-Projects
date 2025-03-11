import React,{useState} from 'react';
import SignUp from './SignUp';
import Personalinfo from './Personalinfo';
import Other from './Other';


function Form() {
 
  const [page, setPage] = useState(0);
  const [formdata,setFormdata]=useState({
    email:"",
    password:"",
    confirmPassword:"",
   firstName:"",
    lastName:"",
    Username:"",
    DOB:"",
    College:"",
    other:""

  });
  
  const FormTitles =["Sign Up","Personal Info","Other"];

   const pageDisplay=()=>{
     if(page === 0 ) 
       return <SignUp formdata={formdata} setformdata={setFormdata}/>
     else if (page ===1)
      return <Personalinfo formdata={formdata} setformdata={setFormdata}/>
     else
       return <Other formdata={formdata} setformdata={setFormdata}/> 
    }

  return (
    <>
  
      <div className='form'>
        
        <div className='progressbar' >
          <div style={{width: page==0 ? "33.3%" : page===1 ? "66.6%" : "100%"}}></div>
        
        </div>
       
        <div className='form-container'>
        <div className='header'>
         <h1>{FormTitles[page]}</h1>
        </div>
        <div className='body'>
          {pageDisplay()}
        </div>
        
        <div className='footer'>
        <button onClick={()=>{
          if(page === 0){}
          else{
          setPage((cp) =>cp-1);}
        }} >Prev</button>

        <button onClick={()=>{
          if(page === FormTitles.length-1 ) 
          { alert("Form submitted"); console.log(formdata);}
          else  setPage((curr)=> curr+1);
          
        }} >
          {page === (FormTitles.length-1) ? "Submit" :"Next"}
        </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form
