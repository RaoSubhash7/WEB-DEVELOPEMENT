import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
      const [username, setUserName] = useState()
      const [password, setPassword] = useState()
      const {setUser} = useContext(UserContext)

      const handleSubmit = (e) =>{
        e.preventDefault (  )
        setUser({username,password})

      }
  return (
    <div>
        <h2 className="text-2xl font-bold mb-4 bg-amber-500" b>Login</h2>
        <input type="text" placeholder = "UserName" value={username} onChange={(e) => setUserName(e.target.value)}/>
        <br />
        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <br />
        <br />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login