import { useContext,createContext } from "react"
export const todoContext = createContext({
    todos:[
       { id:1,
        todo: "msg",
        completed:false
       }
    ] ,
    addTodo: (todo) =>{},       //only decalration not functionality 
    updatedTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggle:(id)=>{}     //for adding dash by CSS
});

export const useTodo = ()=>{
    return useContext(todoContext);
}

export const TodoProvider = todoContext.Provider; 