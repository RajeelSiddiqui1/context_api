import React from 'react'
import {createContext} from 'react'

const UserContext = createContext()

export default UserContext

import React, { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'
function Login() {

    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const {setUser} = useContext(UserContext)

    const handleSubmit =(e) =>{
     e.preventDefault()
     setUser({username,email,password})
    }
   
  return (

    <div>
        <h2>Login</h2>
        <input type="text"
        value={username} 
        onChange={(e) => setusername(e.target.value)}
        placeholder='username'/>
        {" "}
        <input type="email"
        value={email} 
        onChange={(e) => setemail(e.target.value)}
        placeholder='email'/>
        {" "}
        <input type="password" 
        value={password} 
        onChange={(e) => setpassword(e.target.value)}
        placeholder='password'/>
        {" "}
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login



export default App


import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext (UserContext)

  if (!user) return <div><p>Please Login</p></div>

   return <div> Welcome {user.username}</div>
}

export default Profile

import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
