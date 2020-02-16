// Class components are stateful components. They hold state to be altered. 

// Importing React 'Component' from the react framework.
import React, { Component } from 'react';

// Connecting other components to this component page. 
import Navbar from './Navbar';
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
            forecast_time: '',
            forecast_mainTemp: '',
            forecast_minTemp: '', 
            forecast_maxTemp: '', 
            forecast_icon: ''
        }
    }

    componentDidMount() {
        this.primaryFetchWeather()
        this.fetchForecast()
    }
   
    render() {
        // const searchBarStyle = {
        //     width: '45vw',
        //     display: 'flex',
        //     justifyContent: 'space-between'
        // }
        return (
            <>
                <Navbar 
                    weather={this.primaryFetchWeather} 
                    forecast={this.fetchForecast}    
                />

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
                        dates = {this.state.forecast_time}
                        mains = {this.state.forecast_mainTemp}
                        maxs = {this.state.forecast_maxTemp}
                        icons = {this.state.forecast_icon}
                    /> 
                : null}              
            </>
        );
    }


    // this method takes the input and runs it through the API and is being called in the componentDidMount
    primaryFetchWeather = (query) => {
        const primarySearch = this.props.location.state
        const owKey = `${process.env.REACT_APP_WEATHER_API}`
        let weather1 = `https://api.openweathermap.org/data/2.5/weather?q=${primarySearch}&type=accurate&APPID=${owKey}`
        let weather2 = `https://api.openweathermap.org/data/2.5/weather?q=${query}&type=accurate&APPID=${owKey}`
        {(query) ?
            fetch(weather2)
                .then(r => {return r.json()})
                .catch(err => {console.log(err)})
                .then(this.getTheWeather)
                :
            fetch(weather1)
                .then(r => {return r.json()})
                .catch(err => {console.log(err)})
                .then(this.getTheWeather)
        
        }
    }

    // This method is the next step in the promise chain
    getTheWeather = (obj) => {
        let condition = obj.weather.map((condition) => {
            return condition.description
        });
        let current_temp = ((obj.main.temp - 273.15) * 9/ 5 + 32).toFixed(0);
        let iconArr = obj.weather.map((code) => {
            let theIcon = code.icon
                return theIcon
        })
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
            icon: iconArr
        })
    }

    // this method takes the same input value and runs it through another API for the forecast
    fetchForecast = (query) => {
        const forecastSearch = this.props.location.state
        const owKey = `${process.env.REACT_APP_WEATHER_API}`
        const forecast1 = `https://api.openweathermap.org/data/2.5/forecast?q=${forecastSearch}&cnt=16&APPID=${owKey}&units=imperial`
        const forecast2 = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&cnt=16&APPID=${owKey}&units=imperial`
        {(query) ? 
            fetch(forecast2)
                .then(r => {return r.json()})
                .catch(err => {console.log(err)})
                .then(this.getForecast)
                :
            fetch(forecast1)
                .then(r => {return r.json()})
                .catch(err => {console.log(err)})
                .then(this.getForecast)    
        }
    }

    convertDate = (day) => {
        // console.log(`2. DT_TXT IS GRABBED FROM OBJ: `, day)
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
        // console.log(`3. DT_TXT IS PASSED IN CONVERT-DATE FUNCTION: `, n)

        let hour =  d.getHours();
        let AmPm = hour >= 12 ? 'pm' : 'am'
        hour = hour % 12;
        hour = hour ? hour : 12
        let strTime = hour + AmPm;
        // console.log(`4. TIME IS CONVERTED: `, strTime)

        let timestamp = [n, strTime]
        return timestamp
    };


    // this method is the next step in the promise chain in the fetchForecast function
    getForecast = (obj) => {
        let forecastList = obj.list
        let forecastArray = forecastList.map((forecast) => {
            return forecast
        });

        let daysArray = forecastList.map((dateObj) => {
            let theDate = dateObj
            // console.log(`1. STARTS WITH OBJECT: `, theDate)
            let date = this.convertDate(theDate.dt_txt)
            // console.log(`5. CONVERTED DATE AND TIME IS RETURNED: `, date)
            return date
        });

        let mainTemp = forecastList.map((t) => {
            let main =((t.main.temp)).toFixed();
            return main
        })  
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

        this.setState ({
            forecastData: forecastArray,
            forecast_time: daysArray,
            forecast_mainTemp: mainTemp,
            forecast_icon: iconsArr
        })
    }
}

export default Weather;