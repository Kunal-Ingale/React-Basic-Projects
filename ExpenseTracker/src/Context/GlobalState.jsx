import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer'

const InitialState ={
    transactions: [
    {id:1 ,text:'Flower',amount:-20},
    {id:2 , text:'Salary',amount:300},
    {id:3,text:'Book',amount:-10}
]
}
export const GlobalContext = createContext(InitialState)

//provider
export const GlobalProvider=({children})=>{
 const [state, disptach] = useReducer(AppReducer, InitialState)
 
 return (
    <GlobalContext.Provider value={{transactions:state.transactions}}>
        {children}
    </GlobalContext.Provider>
 )
}
