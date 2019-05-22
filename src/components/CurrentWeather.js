// Stateless component that does not manage state.
import React from 'react';
import './CurrentWeather.css';

const CurrentWeather = ({city, condition, temperature, icon, humidity, wind, clouds}) => {
    // console.log('THIS IS BEING PASSED:', props);
    return (
        <div>
            <div className = 'weather-info'>
                <h2>{city}</h2>
                <li>{condition}</li>
                <li>{`${temperature}°F`}</li>
            </div>

            <div>
                <img src={`https://openweathermap.org/img/w/${icon}.png`}  alt='weather icon' />
            </div>
            
            <div>
            
            </div>
            <div>
                <li>Humidity: {`${humidity}%`}</li>
                <li>Wind: {`${wind} mph`}</li>
                <li>Clouds: {`${clouds} %`}</li>
            </div>
        </div>
    )

}

export default CurrentWeather;

