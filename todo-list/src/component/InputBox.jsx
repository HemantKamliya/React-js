import React,{useState} from 'react'
import { useTodo } from '../context'
function InputBox() {
    const [todo,setTodo]=useState("")
    const {addTask}=useTodo()
    const add =(e)=>{
        e.preventDefault();
        if(!todo) return ;
          addTask({id:Date.now(),todo,completed:false});
          setTodo("")
    }
    const handleKeyDown =(e)=>{
        if(e.key === 'Enter') 
            { add(e)}
            
    }
  return (
    <div className="w-full flex flex-col space-y-6">
     <div className="flex flex-row space-x-4 items-center">
        <input 
          type="text" 
          id="input"
          className="text-black w-full p-3 border rounded-lg border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter your task"
          value={todo}
            onChange={(e)=> setTodo(e.target.value)}
           onKeyDown={handleKeyDown} 
        />
        <button 
          className='bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-500 w-36 text-white rounded-xl font-bold p-3 transition-all duration-300 ease-in-out'
          onClick={add}
        >
          Add Task
        </button>
      </div>
     </div>
  )
}

export default InputBox