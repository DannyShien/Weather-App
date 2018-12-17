import React, { Component } from 'react';
import Search from './Search';
import Info from './Info';
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
            <div className="Weather">   
                <h1>React Weather API</h1>
                <div className = 'searchBar'>
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
                // console.log(obj)
                this.setState ({
                    weather_data: obj,
                    name: obj.name,
                    main: obj.weather.main,
                    description: obj.weather.description,
                    temperature: ((obj.main.temp -273.15) * 9/ 5 + 32).toFixed(1),
                    // temperature: (((obj.main.temp -273.15) * 9) / 5 + 32).toFixed(1),
                    humidity: obj.main.humidity,
                    wind: obj.wind.speed
                })
                console.log('New info:', obj);
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
                <Info
                    name = {this.state.name}
                    weather = {`${this.state.main}, ${this.state.description}`}
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