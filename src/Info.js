import React from 'react';

const Info = (props) => {
    // console.log('This is being passed', props);
    return (
        <div className = 'weatherInfo'>
            <h2>{props.name}</h2>
            Temperature: {`${props.temperature}°F`}
            {/* <br />
            Weather: {`${props.state.main}, ${props.state.description}`} */}
            <br />
            Humidity: {`${props.humidity}%`}
            <br />
            Wind:  {`${props.wind} mph`}
        </div>
    )

}

export default Info;

