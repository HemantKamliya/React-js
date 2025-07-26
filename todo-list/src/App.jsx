import { useEffect, useState } from 'react'
import InputComponent from './component/InputBox'
import { TodoProvider } from './context/index'
import InputItem from './component/InputItem'
import './styles/global.css'
function App() {
  const [todos, setTodos] = useState([])

  const addTask = (todo) => {
    setTodos((prevTodo) => [{ ...todo }, ...prevTodo])
  }
  
  const updateTask = (id, todo) => {
    setTodos((prevTodo) => prevTodo.map((prev) => (prev.id === id) ? todo : prev))
  }
  
  const deleteTask = (id) => {
    setTodos((prev) => (prev.filter((prevTodo) => (prevTodo.id !== id))))
  }
  
  const toggleComplete = (id) => {
    setTodos((prev) => (prev.map((prevTodo) => (prevTodo.id === id) ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo)))
  }
  
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const completedCount = todos.filter(todo => todo.completed).length
  const totalCount = todos.length

  return (
    <TodoProvider value={{ todos, addTask, updateTask, deleteTask, toggleComplete }}>
      <div className='min-h-screen bg-gradient-to-br from-violet-600 via-purple-600 to-blue-500 px-4 py-8 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-4xl'>
          {/* Header */}
          <div className='text-center mb-8 sm:mb-12'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight'>
              ✨ Todo List
            </h1>
            <p className='text-purple-100 text-lg sm:text-xl font-medium'>
              Stay organized, stay productive
            </p>
            {totalCount > 0 && (
              <div className='mt-4 inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full'>
                <span className='text-white text-sm sm:text-base font-medium'>
                  {completedCount} of {totalCount} completed
                </span>
              </div>
            )}
          </div>

          {/* Main Container */}
          <div className='bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/20'>
            <InputComponent />
            
            {/* Todo List */}
            <div className='mt-6 sm:mt-8 space-y-3'>
              {todos.length === 0 ? (
                <div className='text-center py-12'>
                  <div className='text-6xl mb-4'>📝</div>
                  <p className='text-gray-500 text-lg font-medium'>No tasks yet</p>
                  <p className='text-gray-400 text-sm mt-2'>Add your first task above to get started!</p>
                </div>
              ) : (
                todos.map((todo, index) => (
                  <div 
                    key={todo.id}
                    className='transform transition-all duration-300 hover:scale-[1.02] animate-fadeIn'
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <InputItem todo={todo} />
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Footer */}
          <div className='text-center mt-8 text-white/70 text-sm'>
            Made with ❤️ for productivity
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
