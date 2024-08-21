import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {

 const [name,setname] = useState ()
 const [email,setemail] = useState ()
 const [password,setpassword] = useState ()

 const {setuser} = useContext (UserContext)

 const handleChange = (e) => {
  e.preventDefault()
  setuser({name,email,password})
 }

  return (
    <div>
      <input type="text" placeholder='enter name'
       value={name}
       onChange={(e) => setname(e.target.value)}
      />
      {" "}
      <input type="email" placeholder='enter email'
       value={email}
       onChange={(e)=> setemail(e.target.value)}
      />
      {" "}
      <input type="Password" placeholder='enter password'
       value={password}
       onChange={(e)=> setpassword(e.target.value)}
      />
      {" "}
      <button onClick={handleChange}>Submit</button>
    </div>
  )
}

export default Login