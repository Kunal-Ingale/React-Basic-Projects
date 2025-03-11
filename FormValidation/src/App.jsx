import React, { useEffect, useState } from 'react'

function App() {
 const [formData,setFormData] = useState({email:"", password:""});
 const [formErrors,setformErrors] = useState({});
const [isSumbit, setIsSubmit] = useState(false);

 const handleChange=(e)=>{
  const {name , value} = e.target;
 setFormData({...formData, [name]:value});
 console.log(formData);
 
 }

 const validate = (data) =>{
   let errors = {};
   if(!data.email){
    errors.email = "Email is Required!";
   } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Email address is invalid.";
  }
   if(!data.password){
    errors.password = "Password is Required!";
   }else if (formData.password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }
   return errors;
  
 }
 const handleSubmit=(e)=>{
   e.preventDefault()
   setformErrors(validate(formData))
   setIsSubmit(true);
 }
 useEffect(()=> {
   console.log(formErrors);
   
  if(Object.keys(formErrors) === 0 && isSumbit){
    console.log(formData);
    
  }

 }, [formErrors])

  return (
    <div>
      <h2>Form Validation</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
           value={formData.email}
           onChange={handleChange}
          />
      <div>
        <p style={{color :'red'}}>{formErrors.email}</p>
            <br />
          <label>Password:</label>
          <input
           type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <br />
        </div>
        <p style={{color :'red'}}>{formErrors.password}</p>
        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default App
