import React, { useState } from 'react'
import { useTodo } from '../context'

function InputItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const { toggleComplete, deleteTask, updateTask } = useTodo()

  const editTodo = () => {
    if (todoMsg.trim()) {
      updateTask(todo.id, { ...todo, todo: todoMsg.trim() })
      setIsTodoEditable(false)
    } else {
      setTodoMsg(todo.todo) // Reset if empty
      setIsTodoEditable(false)
    }
  }

  const toggleCompleted = () => {
    toggleComplete(todo.id)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      editTodo()
    } else if (e.key === 'Escape') {
      setTodoMsg(todo.todo)
      setIsTodoEditable(false)
    }
  }

  return (
    <div className={`group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 hover:shadow-lg
      ${todo.completed 
        ? "bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 hover:border-green-300" 
        : "bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 hover:border-purple-300"
      }`}>
      
      {/* Checkbox */}
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={todo.completed}
          onChange={toggleCompleted}
        />
        <div 
          onClick={toggleCompleted}
          className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 cursor-pointer transition-all duration-300 flex items-center justify-center hover:scale-110
            ${todo.completed 
              ? 'bg-green-500 border-green-500' 
              : 'border-purple-300 hover:border-purple-500'
            }`}
        >
          {todo.completed && (
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </div>

      {/* Todo Text */}
      <div className="flex-1 min-w-0">
        <input
          type="text"
          className={`w-full bg-transparent border-none outline-none text-gray-800 text-base sm:text-lg transition-all duration-300
            ${isTodoEditable 
              ? "bg-white px-3 py-2 rounded-lg border-2 border-purple-300 focus:border-purple-500" 
              : "px-1"
            }
            ${todo.completed ? "line-through text-gray-500" : ""}
          `}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          onKeyDown={handleKeyDown}
          readOnly={!isTodoEditable}
          placeholder="Enter task..."
        />
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Edit/Save Button */}
        <button
          className={`p-2 sm:p-2.5 rounded-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-300
            ${todo.completed 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-blue-100 hover:bg-blue-200 text-blue-600'
            }`}
          onClick={() => {
            if (todo.completed) return;
            if (isTodoEditable) {
              editTodo();
            } else {
              setIsTodoEditable(true);
            }
          }}
          disabled={todo.completed}
          title={isTodoEditable ? "Save changes" : "Edit task"}
        >
          {isTodoEditable ? (
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          )}
        </button>

        {/* Delete Button */}
        <button
          className="p-2 sm:p-2.5 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-300"
          onClick={() => deleteTask(todo.id)}
          title="Delete task"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default InputItem
