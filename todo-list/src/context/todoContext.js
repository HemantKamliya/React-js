import { createContext, useContext } from "react";
export const TodoContext=createContext({
   todos:[{
          id:1,
          todo:'',
          completed:false,
}],
   addTask:(todo)=>{},
   deleteTask:(id)=>{},
   updateTask:(id,todo)=>{},
   toggleComplete:(id)=>{}
})
export const useTodo=()=>{
    return useContext(TodoContext);
}
export const TodoProvider=TodoContext.Provider
