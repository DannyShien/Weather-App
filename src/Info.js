import React from 'react';

const Info = (props) => {
    // console.log('This is being passed', props);
    return (
        <div className = 'weather-info'>
            <h2>{props.name}</h2>
            <li><strong>Temperature:</strong> {`${props.temperature}°F`}</li>
            {/* <br /> */}
            <li><strong>Weather Condition:</strong> {`${props.main}, ${props.description}`}</li>
            {/* <br /> */}
            <li><strong>Humidity:</strong> {`${props.humidity}%`}</li>
            {/* <br /> */}
            <li><strong>Wind:</strong>  {`${props.wind} mph`}</li>
        </div>
    )

}

export default Info;

