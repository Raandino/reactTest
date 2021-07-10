import React, { PureComponent } from 'react'
import Sidebar from '../SideBar/Sidebar'
import './WeatherCall.css'


// const getWeather = e =>{
//      console.log('sheeess')
//      e.preventDefault()
//   }


const WeatherCall =( props) => {

    
    
    return(
        
        
        <div className="weatherform" >
            
            <form  className="form" onSubmit={props.getWeather} >
            <input type="text" name="city" className="box mail" placeholder="City"  />
            {/* <input type="text" name="country"  className="box pw" placeholder="Country"  /> */}
                    <button type="submit" className="submit" ></button>
            </form>

            
        </div>

        
    )
}

export default WeatherCall