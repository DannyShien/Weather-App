import React from 'react';
import Search from './Search';
import './Weather.css';

const Weather = (props) =>  { console.log(props)
    return (
        <div className="weather-container center">   
            <h1>React Weather API</h1>
            <div className = 'search-bar'>
                <h4>Check your city's weather.</h4>  
                <Search
                    onSubmit = {props.onSubmit}
                    newInput = {props.name}
                    handleChange = {props.citySearch}
                />         
            </div>
        </div>
    );
}


export default Weather;