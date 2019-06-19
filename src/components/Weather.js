// Class components are stateful components. They hold state to be altered. 

// Importing React 'Component' from the react framework.
import React, { Component } from 'react';

// Connecting other components to this component page. 
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
// import './Weather.css';


// Establishing a class component called Weather. 
class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherData: null,
            city: '', 
            condition: '', 
            temperature: '', 
            icon: '', 
            humidity: '',
            wind: '',
            clouds: '',

            forecastData: null,
            forecast_timestamp: '',
            forecast_mainTemp: '',
            forecast_minTemp: '', 
            forecast_maxTemp: '', 
            forecast_icon: ''
        }
    }

    componentDidMount() {
        this.fetchWeather()
        this.fectchForecast()
    }
   
    render() {
        return (
            <>
                <CurrentWeather
                    city = {this.state.city}
                    condition = {this.state.condition}
                    temperature = {this.state.temperature}
                    icon = {this.state.icon}
                    humidity = {this.state.humidity}
                    wind = {this.state.wind}
                    clouds = {this.state.clouds}
                /> 

                {this.state.forecastData ? 
                    <Forecast 
                    // forecast = {this.state.forecastData}
                    dates = {this.state.forecast_timestamp}
                    // temperature = {this.state.forecast_mainTemp}
                    mins = {this.state.forecast_minTemp}
                    max = {this.state.forecast_maxTemp}
                    icons = {this.state.forecast_icon}
                /> 
                : null}
            </>
        );
    }

    fetchWeather = () => {
        const searchCity = this.props.location.state
        const owKey = `${process.env.REACT_APP_WEATHER_API}`
        // event.preventDefault();
        // console.log('Input Submitted');
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&type=accurate&APPID=${owKey}`)
            .then(r => {return r.json()})
            .catch(err => {console.log(err)})
            .then(this.getTheWeather)
    }

    getTheWeather = (obj) => {
        // console.log(`WEATHER OBJ: `, obj)
        let condition = obj.weather.map((condition) => {
            return condition.description
        });
        let current_temp = ((obj.main.temp - 273.15) * 9/ 5 + 32).toFixed(0);
        let icon = obj.weather.map((code) => {return code.icon})
        let humidity = obj.main.humidity
        let wind = obj.wind.speed
        let clouds = obj.clouds.all
        
        this.setState ({
            weatherData: obj,
            city: obj.name,
            condition: condition,
            temperature: current_temp,
            humidity: humidity,
            wind: wind,
            clouds: clouds,
            icon: icon
        })
        // console.log(this.state.weatherData)
    }

    fectchForecast = () => {
        const searchCity = this.props.location.state
        const owKey = `${process.env.REACT_APP_WEATHER_API}`
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&cnt=16&APPID=${owKey}`)
            .then(r => {return r.json()})
            .catch(err => {console.log(err)})
            .then(this.getForecast)
    }

    getForecast = (obj) => {
        let forecastList = obj.list
        // console.log(`FORECAST: `, forecastList)

        let forecastArray = forecastList.map((forecast) => {
            // console.log(forecast)
            return forecast
        });
        // console.log(`FORECASTARRAY: `, forecastArray)

        let daysArray = forecastList.map((dateObj) => {
            // let theDate = new Date(dateObj.dt * 1000)
            // console.log(dateObj)
            let theDate = new Date(dateObj.dt_txt)
            // console.log(theDate)
            return theDate
        });
        // console.log(`Date: `, daysArray)

        let minTemp = forecastList.map((t) => {
            // console.log(t)
            let min = ((t.main.temp_min - 273.15) * 9/5 + 32).toFixed(1);
            // console.log(min)
            return min
        });
        // console.log('Min Temp: ', minTemp)
    
        let maxTemp = forecastList.map((t) => {
            let max = ((t.main.temp_max - 273.15) * 9/5 + 32).toFixed(1);
            return max
        });    
        // console.log('Max Temp: ', maxTemp)
    
        let IconArrays = forecastList.map((i) => {
            // console.log(i)
            // console.log(i.weather)
            let iconArr = i.weather
            let icon = iconArr.map((iconObj) => {
                // console.log(iconObj)
                let theIcon = iconObj.icon
                return theIcon
            })
            // console.log(icon)
            return icon
        })
        // console.log(`Icon: `, IconArrays)
        let iconsArr = IconArrays.map((icons) => {
            // console.log(icons)
            let icon = icons[0]
            // console.log(icon)
            return icon
        })
        // console.log(iconsArr)

        
        this.setState ({
            forecastData: forecastArray,
            forecast_timestamp: daysArray,
            forecast_minTemp: minTemp, 
            forecast_maxTemp: maxTemp, 
            forecast_icon: iconsArr
        })
    }
}

export default Weather;