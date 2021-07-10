import React from 'react'
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
const notify = ()=>{
  toast.error("You did something wrong!")
}

export  const WeatherResult = (props) => {
    return (
        <div className="weatherResult">

        {props.error && notify()}

        
            {props.Temperature ?
            <div className="weatherResult">
                <div className="formx">
                    <h1 className="result">{props.Location}</h1>
                    <h1 className="result">{props.Temperature}°C</h1>
                    <h1 className="result">{props.Description}</h1>
                </div>      
            </div>:

                props.error ?
                <div></div>:
                <div className="weatherResult">
                                    <h1 className="result">no data</h1>
                </div>
                
            }
        </div>
    )
}

export default WeatherResult
