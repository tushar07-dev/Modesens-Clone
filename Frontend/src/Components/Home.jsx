import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useAuth, logOut } from '../firebase/firebase'

const Home = () => {
    const [loading,setLoading]=useState(false)
    const currentUser=useAuth()
    const navigate=useNavigate()

    const handleLogout=async()=>{
        try {
            setLoading(true)
            logOut();
            alert("Logout Successful")
            navigate("/")
        } catch (error) {
            alert(error.message)
        }
        setLoading(false)
    }

  return (
    <div>
         <div>
            <h3>Login details: {currentUser?.email}</h3>
        </div>
        <h1> Welcome to My World................</h1>
        <button disabled={loading || currentUser ==null} onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home