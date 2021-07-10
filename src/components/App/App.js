import React from "react"
import Signup from "../SignUp/Signup"
import { AuthProvider } from "../../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "../DashBoard/Dashboard"
import Login from "../Login/Login"
import PrivateRoute from "../PrivateRoute"
import UpdateProfile from "../UpdateProfile"
import "./App.css"
import WeatherDash from '../WeatherAPI/WeatherDash'
import InventoryDash from '../Inventory/InventoryDash'

function App() {

  

  return (
    
    <div className="containerx">
      
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/weather" component={WeatherDash} />
              <Route path="/inventory" component={InventoryDash} />

            </Switch>
          </AuthProvider>
        </Router>
      </div>
      
    // </Container>
  )
}

export default App
