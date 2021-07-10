import React, { useRef, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import "./Signup.css"
import logo from '../../assets/logo.png'
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      notify()
    }

    setLoading(false)
  }

  toast.configure()
  const notify = ()=>{
    toast.error("Sig Up Failed")
  }

  return (
    <>

    
        <div className="login">
        {error }        
          <form onSubmit={handleSubmit} className="form">
          <img src={logo} className="logo" />
          <input type="email" className="box mail" placeholder="Email" ref={emailRef} required/>
          <input type="password" className="box pw" placeholder="Password" ref={passwordRef} required/>
          <input type="password" className="box pw" placeholder="Password Confirmation" ref={passwordConfirmRef}  required/>
                <button type="submit" className="submit" ></button>
                
                <div className="regis">
                    <p>Already have an account? <Link to="/login"className="bold"> Log In.</Link></p>
                </div>
          </form>
          
        </div>
      
      {/* <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div> */}
    </>
  )
}
