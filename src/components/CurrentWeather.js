import React from 'react';
import './CurrentWeather.css';

// Stateless/functional component that does not manage state.
// Establishing props by deconstruction
const CurrentWeather = ({city, secondaryCity, condition, temperature, icon, humidity, wind, clouds}) => {
    return (
        <div className='current-weather'>
            <div className='left-display'>
                <div>
                    {/* {} and that secific prop allows me to pass that information directly where I want it. */}
                    <h2>{city}</h2>
                    <li>{condition}</li>
                </div>
                <div>
                    <li>{`${temperature}°`}</li>
                </div>
            </div>
            <div className='right-display'>
                <div>
                    {/* {weatherIcon} */}
                    <img src={`https://openweathermap.org/img/w/${icon}.png`}  alt='weather icon' />
                </div>
                <div>
                    <li>Humidity: {`${humidity}%`}</li>
                    <li>Wind: {`${wind} mph`}</li>
                    <li>Clouds: {`${clouds} %`}</li>
                </div>
            </div>
        </div>
    )

}

export default CurrentWeather;

