import React from 'react'

function Personalinfo({formdata,setformdata}) {
  return (
    <div className='personal-info-container'>
    <input type="text" placeholder='firstName' 
    value={formdata.firstName} 
    onChange={(e)=>setformdata ({...formdata , firstName: e.target.value })}/>
    <input type="text" placeholder='lastName' 
    value={formdata.lastName}
    onChange={(e)=>setformdata ({...formdata , lastName: e.target.value })}/>
    <input type="text" placeholder='Username' 
    value={formdata.Username} 
    onChange={(e)=>setformdata ({...formdata , Username: e.target.value })}/>
    <input type="date" placeholder='DOB' 
    value={formdata.DOB}
    onChange={(e)=>setformdata ({...formdata , DOB: e.target.value })}/>
    </div>
  )
}

export default Personalinfo
