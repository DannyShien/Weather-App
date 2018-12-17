import React, { Component } from 'react';
import Search from './Search';
import Info from './Info';
// import Key from './config';


class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', // city name
            // weather: '',
            // main: '', // weather group parameters 
            // description: '', // descriptions of parameters
            temperature: '', 
            humidity: '',
            wind: '', // speed
            stats: []
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


                    <Info
                    name = {this.state.name}
                    // weather = {`${this.state.main}, ${this.state.description}`}
                    temperature = {this.state.temperature}
                    humidity = {this.state.humidity}
                    wind = {this.state.wind}
                    stats = {this.state.stats}
                    />
                </div>
            </div>
        );
    }

    _onSubmit = (event) => {
        const searchCity = this.state.name
        event.preventDefault();
        // console.log(searchCity);
        console.log('Input Submitted')
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&type=accurate&APPID=dee07fae47d614b4f9cb0a8cd0a2cfeb`)

            .then(r => {
                return r.json()
            })
            // .then((data) => {console.log(data)
            //     return data;
            // })
            .then(obj => {
                // console.log(obj)
                let newInfo = {
                    name: obj.name,
                    // main: obj.weather.main,
                    // description: obj.weather.description,
                    temperature: ((obj.main.temp -273.15) * 9/ 5 + 32).toFixed(1),
                    // temperature: (((obj.main.temp -273.15) * 9) / 5 + 32).toFixed(1),
                    humidity: obj.main.humidity,
                    wind: obj.wind.speed
                };
                // console.log('New info:', newInfo);
                return newInfo;
            })
            .then(DisplayInfo => {
                this.setState = ({
                    name: DisplayInfo.name, 
                    main: DisplayInfo.main,
                    description: DisplayInfo.description, 
                    temperature: DisplayInfo.temperature, 
                    humidity: DisplayInfo.humidity,
                    wind: DisplayInfo.wind
                });
                console.log(DisplayInfo);
                return DisplayInfo
            });
    }

    _citySearch = (input) => {
        // console.log(input)
        this.setState({
            name: input
        });

    }

}

export default Weather;