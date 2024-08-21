import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div><p>Please login</p></div>;

  return <div><p>Welcome {user.username}</p></div>;
}

export default Profile;

import React from "react";
import { createContext } from "react";

const userContext = createContext()

export default userContext

import UserConextProvider from './context/UserConextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  

  return (
    <UserConextProvider>
    <h1>Hi My name is Rajeel Siddiqui</h1>  
       <Login/>
       <Profile/>
    </UserConextProvider>
  )
}

export default App

import React,{useState} from 'react'
import userContext from './UserContext.js'

function UserConextProvider({children}) {
const [user, setuser] = useState('')
  return (
    <userContext.Provider value={{user,setuser}}>
    {children}
    </userContext.Provider>
  )
}

export default UserConextProvider

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
      placeholder='enter usernmae' required='name'/>
      {" "}
      <input type="email"
      value={email}
      onChange={(e)=> setemail(e.target.value)}
      placeholder='enter email' required='email'/>
      {" "}
      <input type="password"
      value={password}
      onChange={(e)=> setpassword(e.target.value)}
      placeholder='enter password' required='password'/>
      {" "}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login