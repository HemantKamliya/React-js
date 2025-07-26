import { useEffect, useState } from 'react'
import InputComponent from './component/InputBox'
import { TodoProvider } from './context/index'
import InputItem from './component/InputItem'
function App() {
  const [todos, setTodos] = useState([])

  const addTask = (todo) => {
    setTodos((prevTodo) => [{ ...todo }, ...prevTodo]
    )
  }
  const updateTask = (id, todo) => {
    setTodos((prevTodo) => prevTodo.map((prev) => (prev.id === id) ? todo : prevTodo))
  }
  const deleteTask = (id) => {
    setTodos((prev) => (prev.filter((prevTodo) => (prevTodo.id !== id))))
  }
  const toggleComplete = (id) => {
    setTodos((prev) => (prev.map((prevTodo) => (prevTodo.id === id) ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
    )
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
  return (
    <TodoProvider value={{ todos, addTask, updateTask, deleteTask, toggleComplete }}>
      <>
        <div className='bg-gradient-to-r from-purple-600 to-blue-400 min-h-screen px-10 py-20 flex flex-col items-center'>
          <div className='mb-8 text-white text-6xl font-extrabold tracking-wider'>
            to-do list
          </div>
          <div className='w-full max-w-3xl bg-white shadow-xl rounded-3xl p-10'>
            <InputComponent />
            {todos.map((todo) => (
              <div key={todo.id}
                className='w-full'>
                  <InputItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>

      </>
    </TodoProvider>
  )
}

export default App
