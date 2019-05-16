import React from 'react';

const CurrentWeather = (props) => {
    // console.log('This is being passed', props);
    return (
        <div className = 'weather-info'>
            <h2>{props.name}</h2>
            <li><strong>Temperature:</strong> {`${props.temperature}°F`}</li>
            <li><strong>Weather Condition:</strong> {`${props.weather_condition}`}</li>
            <li><strong>Humidity:</strong> {`${props.humidity}%`}</li>
            <li><strong>Wind:</strong>  {`${props.wind} mph`}</li>
        </div>
    )

}

export default CurrentWeather;

