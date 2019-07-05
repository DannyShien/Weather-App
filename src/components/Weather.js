// Class components are stateful components. They hold state to be altered. 

// Importing React 'Component' from the react framework.
import React, { Component } from 'react';

// Connecting other components to this component page. 
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';


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
                    dates = {this.state.forecast_timestamp}
                    mains = {this.state.forecast_mainTemp}
                    // mins = {this.state.forecast_minTemp}
                    maxs = {this.state.forecast_maxTemp}
                    icons = {this.state.forecast_icon}
                /> 
                : null}
            </>
        );
    }
    // this method takes the input and runs it through the API and is being called in the componentDidMount
    fetchWeather = () => {
        const searchCity = this.props.location.state
        const owKey = `${process.env.REACT_APP_WEATHER_API}`
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&type=accurate&APPID=${owKey}`)
            .then(r => {return r.json()})
            .catch(err => {console.log(err)})
            .then(this.getTheWeather)
    }
    // this method is the next step in the promise chain
    getTheWeather = (obj) => {
        // NEED A CONDITION TO RENDER NOTHING FOR "WEATHER PAGE" IF NO INPUT WAS ENTERED
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
    }

    // this method takes the same input value and runs it through another API for the forecast
    fectchForecast = () => {
        const searchCity = this.props.location.state
        const owKey = `${process.env.REACT_APP_WEATHER_API}`
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&cnt=16&APPID=${owKey}&units=imperial`)
            .then(r => {return r.json()})
            .catch(err => {console.log(err)})
            .then(this.getForecast)
    }

    convertDate = (day) => {
        console.log(`2. DT_TXT IS GRABBED FROM OBJ: `, day)
        let d = new Date(day)
        const weekday = new Array(7)
            weekday[0] = "Sun";
            weekday[1] = "Mon";
            weekday[2] = "Tues";
            weekday[3] = "Wed";
            weekday[4] = "Thurs";
            weekday[5] = "Fri";
            weekday[6] = "Sat";
    
        let n = weekday[d.getDay()];
        console.log(`3. DT_TXT IS PASSED IN CONVERT-DATE FUNCTION: `, n)
        return n
    };

    // this method is the next step in the promise chain in the fetchForecast function
    getForecast = (obj) => {
        let forecastList = obj.list
        let forecastArray = forecastList.map((forecast) => {
            return forecast
        });

        let daysArray = forecastList.map((dateObj) => {
            let theDate = dateObj
            console.log(`1. STARTS WITH OBJECT: `, theDate)
            let date = this.convertDate(dateObj.dt_txt)
            console.log(`4. DT_TXT IS RETURNED: `, date)
            return date
        });

        let mainTemp = forecastList.map((t) => {
            let main =((t.main.temp))
            // console.log(main)
            return main
        })

        // let minTemp = forecastList.map((t) => {
        //     let min = ((t.main.temp_min - 273.15) * 9/5 + 32).toFixed(1);
        //     return min
        // });
        // let maxTemp = forecastList.map((t) => {
        //     let max = ((t.main.temp_max))
        //     // let max = ((t.main.temp_max - 273.15) * 9/5 + 32).toFixed(1);
        //     return max
        // });    
        // this code block returns an array of arrays
        let IconArrays = forecastList.map((i) => {
            let iconArr = i.weather
            let icon = iconArr.map((iconObj) => {
                let theIcon = iconObj.icon
                return theIcon
            })
            return icon
        })
        // this code block returns the arrays, as strings, that's in the array 
        let iconsArr = IconArrays.map((icons) => {
            let icon = icons[0]
            return icon
        })
        // console.log(iconsArr)

        this.setState ({
            forecastData: forecastArray,
            forecast_timestamp: daysArray,
            forecast_mainTemp: mainTemp,
            // forecast_minTemp: minTemp, 
            // forecast_maxTemp: maxTemp, 
            forecast_icon: iconsArr
        })
    }
}

export default Weather;