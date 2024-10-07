import React, { useState } from 'react';

function InputComponent() {
  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddTask = () => {
    if (inputText.trim()) {
      setTasks([...tasks, inputText]);
      setInputText('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-row space-x-4 items-center">
        <input 
          type="text" 
          id="input"
          className="text-black w-full p-3 border rounded-lg border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter your task"
          value={inputText}
          onChange={handleChange}
          onKeyDown={handleKeyDown} 
        />
        <button 
          className='bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-500 w-36 text-white rounded-xl font-bold p-3 transition-all duration-300 ease-in-out'
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
      <ul className="space-y-3">
        {tasks.map((task, index) => (
          <li 
            key={index} 
            className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md border-l-4 border-purple-500"
          >
            <span>{index + 1}. {task}</span>
            <button 
              className="bg-red-500 text-white rounded-full px-4 py-1 text-sm font-semibold hover:bg-red-700 transition-all"
              onClick={() => handleDeleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InputComponent;
