import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext (UserContext)
 
    if (!user) return <div><p>Please login</p></div>
    return <div><p>Welcome {user.name} I give you verification code on {user.email} email & {user.password} this is your password</p></div>
  
}

export default Profile