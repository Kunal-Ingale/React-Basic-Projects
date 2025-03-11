import { useState } from "react"


function App() {
  const [color,setColor]= useState("grey")
  return (
    <>
      <div className="w-full h-screen"
       style={{backgroundColor:color}}>
    
       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
      
        <div className="flex flex-wrap justify-center gap-3 bg-white px-2 py-2 rounded-full ">
        
        
        <button
        onClick={()=>setColor ("red")} 
        className="outline-none rounded-2xl px-4 text-white shadow-red-700 shadow-md"
        style={{backgroundColor:"red"}}> Red
        </button>
        
      {/* blue */}
     <button 
       onClick={()=>setColor("blue")}
        className="outline-none rounded-2xl px-4 text-white shadow-blue-700 shadow-md"
        style={{backgroundColor:"blue"}}> Blue
     </button>
        

      {/* cyan */}
      <button 
       onClick={()=>setColor("cyan")}
        className="outline-none rounded-2xl px-4 text-white shadow-cyan-400 shadow-md"
        style={{backgroundColor:"cyan"}}> Cyan
      </button>
        

      {/* yellow */}
      
     <button 
     onClick={()=>setColor("green")}
        className="outline-none rounded-2xl px-4 text-white shadow-green-600 shadow-md"
        style={{backgroundColor:"Green"}}>Green
      </button>
      </div>
        </div>
      </div>
    </>
  )
}

export default App
