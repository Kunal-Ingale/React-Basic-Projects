import { useState } from 'react'
import './App.css'

const arr = ["Play Cricket" , "Play video games" , "read Books"];
function App() {
  const [copy, setCopy] = useState(arr);
  const [checked, setChecked] = useState({});
    const handleDelete = (index)=>{
       let newArr = copy;
       let filetred = newArr.filter((el , i)=>{
        return i != index;
       })
       setCopy(filetred);
    }
  
    const handleCheck=(index)=>{
    setChecked((prev)=>({
      ...prev,
      [index] : !prev[index]
    }))
    } 

  return (
    
     <div>
     {copy.map((a, i) => 
       (
          <div key={i} style={{ display: "flex", alignItems: "center" }}>
            <li>
               <input
                type="checkbox"
                onChange={() => handleCheck(i)} // Use onChange to toggle the checkbox
                checked={checked[i] || false}
               />
                {a}
                {checked[i] && 
                (
                <button onClick={() => handleDelete(i)}>Delete</button>
                )
                }
             </li>
          </div>
        )
      )
      }
     </div>
   
  )
}

export default App
