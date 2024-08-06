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