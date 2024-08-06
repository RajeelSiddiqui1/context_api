import React, { useContext } from 'react'
import { useState } from 'react'
import userContext from '../context/UserContext'
function Login() {

  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const {setuser} = useContext (userContext)

const handleSubmit =(e)=>{
 e.preventDefault()
 setuser({username,email,password})
}
  return (
    <div>
      <h2>Login</h2>
      <input type="text" 
      value={username}
      onChange={(e)=> setusername(e.target.value)}
      placeholder='enter usernmae'/>
      {" "}
      <input type="email"
      value={email}
      onChange={(e)=> setemail(e.target.value)}
      placeholder='enter email'/>
      {" "}
      <input type="password"
      value={password}
      onChange={(e)=> setpassword(e.target.value)}
      placeholder='enter password'/>
      {" "}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login