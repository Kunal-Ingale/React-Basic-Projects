import React from 'react'

function Other({formdata,setformdata}) {
  return (
    <div className='other-info-container '>
   <input type="text" placeholder='College' 
   value={formdata.College} 
   onChange={(e)=>setformdata ({...formdata , College: e.target.value })}/>
   <input type="text" placeholder='Other' 
   value={formdata.other}
   onChange={(e)=>setformdata ({...formdata , other: e.target.value })}/>

    </div>
  )
}

export default Other
