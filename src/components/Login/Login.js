import React, { useRef, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import logo from '../../assets/logo.png'
import "./Login.css"
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      notify()
    }

    setLoading(false)
  }

  toast.configure()
  const notify = ()=>{
    toast.error("Login Failed")
  }
  return (
      <div className="container">
        <div className="login">
        {error }        
          <form onSubmit={handleSubmit} className="form">
          <img src={logo} className="logo" />
          <input type="email" className="box mail" placeholder="Email" ref={emailRef} required/>
          <input type="password" className="box pw" placeholder="Password" ref={passwordRef} required/>
                 <div className="regis">
                    <p>Don’t have an accont? <Link to="/signup"className="bold"> Register one.</Link></p>
                </div>
                <button type="submit" className="submit" ></button>
          </form>
        </div>
      </div>
      // {/* <Card >
      //   <Card.Body >
      //     <h1 className="text-center ">AM PM</h1>
      //     <h3 className="text-center ">log in</h3>

      //     {error && <Alert variant="danger">{error}</Alert>}
      //     <Form onSubmit={handleSubmit}>
      //       <Form.Group  id="email">
      //         <Form.Label>Email</Form.Label>
      //         <Form.Control type="email" ref={emailRef} required />
      //       </Form.Group>
      //       <Form.Group id="password">
      //         <Form.Label>Password</Form.Label>
      //         <Form.Control type="password" ref={passwordRef} required />
      //       </Form.Group>
      //       <button type="submit" class="submit"></button>
      //     </Form>
      //     <div className="w-100 text-center mt-3">
      //       <Link to="/forgot-password">Forgot Password?</Link>
      //     </div>
      //   </Card.Body>
      //   <div className="w-100 text-center mt-2">
      //   Need an account? <Link to="/signup">Sign Up</Link>
      // </div>
      // </Card> */}
      
    
  )
}
