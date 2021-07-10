import React, { Component } from 'react'
import WeatherResult from './WeatherResult'
import WeatherCall from './WeatherCall'
import Sidebar from '../SideBar/Sidebar'

export class WeatherDash extends Component {

    state= {
        Location: '',
        Temperature: '',
        error: '',
        Description:'',

    }

    getWeather = async (e)=>{
        this.setState({
            Location: '',
            Temperature: '',
            error: '',
            Description:'',
        })
        e.preventDefault();
        const {city, country} = e.target.elements
        const cityValue = city.value
        // const countryValue =country.value
        

        if (cityValue ){
            const API_KEY="35089672db223f72240e37f9e0753f51"
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=${API_KEY}`
            const response = await fetch(API_URL)
            

            const data = await response.json()
            console.log(data)
            if (data.cod== "404"){
                this.setState({error: 'City not found'})
            }else{
                this.setState({
                    Location: data.name,
                    Temperature: data.main.temp,
                    error: null,
                    Description: data.weather[0].description
                })
            }
            }
           else{
            this.setState({error: 'Enter a city or country'})
        }

        
        console.log(this.state)
    }
 
   
    render() {
        return (
            < >
            <div className="dashweather">
            <Sidebar></Sidebar>
            <div className="weathercanvas">
                <div><WeatherCall getWeather={this.getWeather}></    WeatherCall></div>
                <div> <WeatherResult {...this.state}></WeatherResult> </div>
                {/* <WeatherCall getWeather={this.getWeather}></    WeatherCall>
                <WeatherResult {...this.state}></WeatherResult>    */}
            </div>
            </div>
            
            
             
            </>
        )
    }
}

export default WeatherDash
