import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UsercontextProvider'
import Login from './Componets/Login'
import Profile from './Componets/Profile'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <UserContextProvider>
   <div>
    {/* <h2 className="text-2xl font-bold mb-4 bg-amber-500" b>Create Context API in React</h2> */}
    <Login/>
    <Profile/>
   </div>
   </UserContextProvider>
    </>
  )
}

export default App
