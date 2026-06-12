import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {
let [color, setColor] = useState('red')

  return (
   <>
  <div className= "w-full h-screen duration-300" style={{ backgroundColor: color }}>
    <div className="fixed flex flex-warp justfy-center 
    shadow-md gap-3 bg-white bottom-12 inset-x-0 px-2 py-2 rounded-2xl">
   <button className="outline-none border-none px-4 py-2 rounded-lg bg-red-500 
   text-white font-bold" onClick={() => setColor('red')}>
    Red
   </button>
   <button className="outline-none border-none px-4 py-2 rounded-lg bg-green-500 text-white font-bold" onClick={() => setColor('green')}>
    Green
   </button>
   <button className="outline-none border-none px-4 py-2 rounded-lg bg-blue-500 text-white font-bold" onClick={() => setColor('blue')}>
    Blue
   </button>
    </div>
    
  </div>
   </>
  )
}

export default App
