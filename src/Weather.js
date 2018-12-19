import React, { Component } from 'react';


import Search from './Search';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
// import './Weather.css';
// import Key from './config';


class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather_data: null,
            name: '', // city name
            weather: '',
            main: '', // weather group parameters 
            description: '', // descriptions of parameters
            temperature: '', 
            humidity: '',
            wind: '', // speed
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
            <div className='weather'>   
                <h1>React Weather API</h1>
                <div className = 'search-bar'>
                    <h4>Check your city's weather.</h4>
                    <Search
                    onSubmit = {this._onSubmit}
                    newInput = {this.state.name}
                    handleChange = {this._citySearch}
                    />

                    {this._showWeatherData()}

                    <Forecast 
                        timestamp = {`${this.state.forecast_timestamp}`}
                        mainTemp = {`${this.state.forecast_mainTemp}`}
                        minTemp = {`${this.state.forecast_minTemp}`}
                        maxTemp = {`${this.state.forecast_maxTemp}`}
                    />
                </div>
            </div>
        );
    }

    // When input is submitted, name of city is fetched from API to return weather info. 
    _onSubmit = (event) => {
        const searchCity = this.state.name
        event.preventDefault();
        // console.log(searchCity);
        console.log('Input Submitted');
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&type=accurate&APPID=dee07fae47d614b4f9cb0a8cd0a2cfeb`)
            .then(r => {
                return r.json()
            })
            .then(obj => {
                // console.log(obj.weather[0].id)
                let current_temp = ((obj.main.temp - 273.15) * 9/ 5 + 32).toFixed(1);
                let weather_condition =  obj.weather.map((bob) => {
                    return bob.main});   
                    // console.log(weather_condition)
                let weather_description = obj.weather.map((bob) => {
                    return bob.description});
                this.setState ({
                    weather_data: obj,
                    name: obj.name,
                    main: weather_condition,
                    description: weather_description,
                    temperature: current_temp,
                    humidity: obj.main.humidity,
                    wind: obj.wind.speed,
                })
                console.log('Weather Info:', obj);
                fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Atlanta&cnt=16&APPID=0f120aa36b999f92a1be873d99468369`)
                    // .catch(err =>{
                    //     console.log(err);
                    // })
                    .then(r => { console.log(r)
                        return r.json()
                    })
                    .then(obj => {
                        let day = obj.list.map((forecast) => {
                            return forecast.dt_txt});
                        //     console.log(day)

                        // let day = obj.list.map((date) => {
                        //     let singleTimestamp = new Date(date.dt * 1000)
                        //     // let timestamp = new Date(day[0] * 1000);
                        //     return singleTimestamp});
                            // console.log(day)

                        let main_temp = obj.list.map((jeff) => {
                            let temperature = ((jeff.main.temp - 273.15) * 9/ 5 + 32).toFixed(1);
                            return temperature});
                            console.log('hey', main_temp);

                        let min_temp = obj.list.map((harry) => {
                            let temp = ((harry.main.temp_min - 273.15) * 9/5 + 32).toFixed(1);
                            return temp});

                        let max_temp = obj.list.map((harry) => {
                            let temp = ((harry.main.temp_max - 273.15) * 9/5 + 32).toFixed(1);
                            return temp});    

                        this.setState ({
                            forecast_timestamp: day,
                            forecast_mainTemp: main_temp,
                            forecast_minTemp: min_temp, 
                            forecast_maxTemp: max_temp, 
                            // forecast_humidity: '', 
                            // forecast_wind:'' 
                        })
                        // console.log(timestamp);
                    })
            })
                
    }

    // Setting the state for 'name' to be used in the input. 
    _citySearch = (input) => {
        // console.log(input)
        this.setState({
            name: input
        });

    }

    // checks to see if there is any data, if there is data, render the data.
    _showWeatherData = () => {
        if(this.state.weather_data) {
            return (
                <CurrentWeather
                    name = {this.state.name}
                    weather_condition= {`${this.state.description}`}
                    temperature = {this.state.temperature}
                    humidity = {this.state.humidity}
                    wind = {this.state.wind}
                />
            )
        } else {
            return (null);
        }
    }
}

export default Weather;