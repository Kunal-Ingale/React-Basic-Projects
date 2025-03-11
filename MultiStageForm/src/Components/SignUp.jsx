import React from 'react'

function SignUp({formdata,setformdata}) {
  return (
    <div className='sign-up-container'>
      <input type="text" placeholder='Email' 
       value={formdata.email} 
        onChange={(e)=>setformdata ({...formdata , email: e.target.value })}/>
      
      <input type="text" placeholder='Password' 
      value={formdata.password} 
      onChange={(e)=>setformdata ({...formdata , password: e.target.value })}/>
     
      <input type="text" placeholder='Confirm Pass' 
       value={formdata.confirmPassword}
       onChange={(e)=>setformdata ({...formdata , confirmPassword: e.target.value })}/>


    </div>
  )
}

export default SignUp
