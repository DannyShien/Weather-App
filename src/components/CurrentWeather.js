// Stateless component that does not manage state.
import React from 'react';

const CurrentWeather = (props) => {
    console.log('THIS IS BEING PASSES:', props);
    return (
        <div>
            <div className = 'weather-info'>
                <h2>{props.city}</h2>
                <li>{`${props.weather_condition}`}</li>
                <li>{`${props.temperature}°F`}</li>
            </div>
            {/* <div>
                <li><strong>Humidity:</strong> {`${props.humidity}%`}</li>
                <li><strong>Wind:</strong>  {`${props.wind} mph`}</li>
            </div> */}
        </div>
    )

}

export default CurrentWeather;

