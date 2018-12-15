import React, { Component } from 'react';
import Search from './Search';
import Info from './Info';
import Key from './config';

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', // city name
            main: '', // weather group parameters 
            description: '', // descriptions of parameters
            temperature: '', // weather temp
            wind: '' // speed
        }
    }
    render() {
        return (
            <div className="Weather">
                <h1>React Weather API</h1>
                <div className = 'searchBar'>
                    <Search />  
                    <Info />
                </div>
            </div>
        );
    }

    _onSubmit(event) {
        const search = event.target.value;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Atlanta&type=accurate&APPID=${Key.owKey}`)
            .then(r => r.json())
            .then(obj => {
                let newInfo = {
                    name: obj.name,
                    main: obj.weather.main,
                    description: obj.weather.description,
                    temperature: ((obj.main.temp -273.15) * 9/ 5 + 32).toFixed(1),
                    // temperature: (((obj.main.temp -273.15) * 9) / 5 + 32).toFixed(1),
                    wind: obj.wind.speed,
                }
            })

    }



}

export default Weather;