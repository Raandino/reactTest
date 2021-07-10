import React, { useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import Sidebar from '../SideBar/Sidebar.js'
import dashmockup from '../../assets/dashmockup.svg'

export default function Dashboard() {
  // const [error, setError] = useState("")
  // const { currentUser, logout } = useAuth()
  // //const history = useHistory()

  // async function handleLogout() {
  //   setError("")

  //   try {
  //     await logout()
  //     history.push("/login")
  //   } catch {
  //     setError("Failed to log out")
  //   }
  // }

  return (
    <>
    
    <Sidebar></Sidebar>
    <div class="dash" >
            <img src={dashmockup} id="dashmockup" alt=""></img>  
        </div>
    </>
  )
}
