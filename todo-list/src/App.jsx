import { useState } from 'react';
import InputComponent from './components/InputComponent';

function App() {
  let [color, setColor] = useState("olive");

  return (
    <>
      <div className='bg-gradient-to-r from-purple-600 to-blue-400 min-h-screen px-10 py-20 flex flex-col items-center'>
        <div className='mb-8 text-white text-6xl font-extrabold tracking-wider'>
          Todo List
        </div>
        <div className='w-full max-w-2xl bg-white shadow-xl rounded-3xl p-10'>
          <InputComponent />
        </div>
      </div>
    </>
  );
}

export default App;
