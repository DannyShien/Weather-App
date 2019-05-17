// Class components are stateful components. They hold state to be altered. 

// Importing React 'Component' from the react framework.
import React, { Component } from 'react';

// Connecting other components to this component page. 
// import Search from './Search';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
// import './Weather.css';

// Establishing a class component called Weather. 
class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_weather: null,
            city: '', 
            weather: '',
            main: '', 
            description: '', 
            temperature: '', 
            humidity: '',
            wind: '',

            forecast_weather: null,
            forecast_display: [],
            forecast_timestamp: '',
            forecast_mainTemp: '',
            forecast_minTemp: '', 
            forecast_maxTemp: '', 
            forecast_humidity: '', 
            forecast_wind:''
        }
    }

   
    render() {
        return (
            <div className = 'weather-container'>
               
                        {this.showCurrentWeather()}
                  
            </div>
        );
    }

  

    // When input is submitted, name of city is fetched from API to return weather info. 
    _onSubmit = (event) => {
        const searchCity = this.state.city
        event.preventDefault();
        // console.log(searchCity);
        console.log('Input Submitted');
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&type=accurate&APPID=dee07fae47d614b4f9cb0a8cd0a2cfeb`)
            .then(r => {
                return r.json()
            })
            .then(this.getTheWeather)
            // console.log('Weather Info:', obj);
                // fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Atlanta&cnt=16&APPID=0f120aa36b999f92a1be873d99468369`)
                //     // .catch(err =>{
                //     //     console.log(err);
                //     // })
                //     .then(r => { 
                //         // console.log(r)
                //         return r.json()
                //     })
                //     .then(obj => {
                //         // let day = obj.list.map((forecast) => {
                //         //     return forecast.dt_txt});
                //         //     console.log(day)

                //         // let day = obj.list.map((date) => {
                //         //     let singleTimestamp = new Date(date.dt * 1000)
                //         //     // let timestamp = new Date(day[0] * 1000);
                //         //     return singleTimestamp});
                //             // console.log(day)

                //         // let main_temp = obj.list.map((jeff) => {
                //         //     let temperature = ((jeff.main.temp - 273.15) * 9/ 5 + 32).toFixed(1);
                //         //     return temperature});
                //             // console.log('hey', main_temp);

                //         // let min_temp = obj.list.map((harry) => {
                //         //     let temp = ((harry.main.temp_min - 273.15) * 9/5 + 32).toFixed(1);
                //         //     return temp});

                //         // let max_temp = obj.list.map((harry) => {
                //         //     let temp = ((harry.main.temp_max - 273.15) * 9/5 + 32).toFixed(1);
                //         //     return temp});    

                //         this.setState ({
                //             forecast_display: [...this.state.forecast_display, {
                //             forecast_weather: obj.list,
                //             // forecast_timestamp: day,
                //             // forecast_mainTemp: main_temp,
                //             // forecast_minTemp: min_temp, 
                //             // forecast_maxTemp: max_temp, 
                //             }]
                //         })
                //         // console.log('wow', this.state.forecast_display[0].forecast_mainTemp[0]);
                //     })
    }
                


    getTheWeather = (obj) => {
        console.log(`WEATHER OBJ: `, obj)
        let current_temp = ((obj.main.temp - 273.15) * 9/ 5 + 32).toFixed(0);
        let weather_condition =  obj.weather.map((bob) => {
            return bob.main
        });   
            // console.log(weather_condition)
        let weather_description = obj.weather.map((bob) => {
            return bob.description
        });
        this.setState ({
            current_weather: obj,
            city: obj.name,
            main: weather_condition,
            description: weather_description,
            temperature: current_temp,
            humidity: obj.main.humidity,
            wind: obj.wind.speed,
        })
    }
    

    // Uses ternary to check if there is any data, if there is data, render the data.
    showCurrentWeather = () => {
        return (
            this.state.current_weather ? 
                <CurrentWeather
                    city = {this.state.city}
                    weather_condition= {`${this.state.description}`}
                    temperature = {this.state.temperature}
                    humidity = {this.state.humidity}
                    wind = {this.state.wind}
                /> : null
            )
    }

    // _showForecast = () => { 
    //     if (!this.state.forecast_weather) {
    //         return (
    //             <Forecast 
    //                 threeHourForecast = {this.state.forecast_display}
    //                 // timestamp = {`${this.state.forecast_timestamp}`}
    //                 // mainTemp = {`${this.state.forecast_mainTemp}`}
    //             />
    //         )
    //     } else {
    //         console.log('No data grabbed.')
    //         return (null);
    //     }
    // }
}

export default Weather;