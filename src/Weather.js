import React, { Component } from 'react';


import Search from './Search';
import CurrentWeather from './CurrentWeather';
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
            wind: '' // speed
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
                </div>
            </div>
        );
    }

    // When input is submitted, name of city is fetched from API to return weather info. 
    _onSubmit = (event) => {
        const searchCity = this.state.name
        event.preventDefault();
        // console.log(searchCity);
        console.log('Input Submitted')
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&type=accurate&APPID=dee07fae47d614b4f9cb0a8cd0a2cfeb`)
            .then(r => {
                return r.json()
            })
            .then(obj => {
                // console.log(obj.weather[0].id)
                let temp = ((obj.main.temp -273.15) * 9/ 5 + 32).toFixed(1);
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
                    temperature: temp,
                    humidity: obj.main.humidity,
                    wind: obj.wind.speed
                })
                console.log('Weather Info:', obj);
            });

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