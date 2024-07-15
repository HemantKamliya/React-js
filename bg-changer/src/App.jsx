import { useState } from 'react'

function App() {
  let [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-100'
        style={{ backgroundColor: color }}>
        <h1>Hello</h1>
        <div className="fixed inset-x-0 px-2 flex flex-wrap justify-center bottom-10">
          <div className='flex px-3 py-2 flex-wrap bg-white justify-center shadow-xl rounded-3xl gap-10' >
            <button className='px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "red" }} onClick={()=> setColor("Red")}>
              Red
            </button>
            <button className='px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "Green" }} onClick={()=> setColor("Green")}>
            Green
            </button>
            <button className='px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "blue" }} onClick={()=> setColor("Blue")}>
              Blue
            </button>
            <button className='px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "olive" }} onClick={()=> setColor("olive")}>
              Olive
            </button>
            <button className='px-4 py-1 rounded-full text-black shadow-lg'
              style={{ backgroundColor: "yellow" }} onClick={()=> setColor("yellow")}>
              Yellow
            </button>
            <button className='px-4 py-1 rounded-full text-black shadow-lg'
              style={{ backgroundColor: "White" }} onClick={()=> setColor("White")}>
              white
            </button>
            <button className='px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "Grey" }} onClick={()=> setColor("Grey")}>
              Grey
            </button>


          </div>
        </div>
      </div>

    </>
  )
}

export default App
