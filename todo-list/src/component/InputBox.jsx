import React, { useState } from 'react'
import { useTodo } from '../context'

function InputBox() {
  const [todo, setTodo] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { addTask } = useTodo()
  
  const add = async (e) => {
    e.preventDefault();
    if (!todo.trim()) return;
    
    setIsLoading(true)
    // Simulate a brief loading state for better UX
    setTimeout(() => {
      addTask({ id: Date.now(), todo: todo.trim(), completed: false });
      setTodo("")
      setIsLoading(false)
    }, 200)
  }
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      add(e)
    }
  }

  return (
    <div className="w-full">
      <form onSubmit={add} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <div className="relative flex-1">
          <input 
            type="text" 
            className="w-full px-4 py-3 sm:py-4 text-gray-800 bg-gray-50 border-2 border-gray-200 rounded-xl sm:rounded-2xl focus:outline-none focus:border-purple-500 focus:bg-white transition-all duration-300 placeholder-gray-400 text-base sm:text-lg"
            placeholder="What needs to be done? ✍️"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
          />
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
            <span className="text-gray-300 text-xl">📝</span>
          </div>
        </div>
        
        <button 
          type="submit"
          disabled={!todo.trim() || isLoading}
          className={`px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-white text-base sm:text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg
            ${isLoading || !todo.trim() 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-purple-500/25'
            }`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Adding...
            </div>
          ) : (
            <span className="flex items-center justify-center">
              <span className="mr-2">+</span>
              Add Task
            </span>
          )}
        </button>
      </form>
    </div>
  )
}

export default InputBox
