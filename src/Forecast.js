import React from 'react';

const Forecast = (props) => {
    return (
        <div className = 'forecast'>
            <h2>3-hr Interval Forecast</h2>
            <div>{props.timestamp}</div>
            <div>{props.mainTemp} </div>
            <div>{props.minTemp}</div>
            <div>{props.maxTemp}</div>
        </div>
    )
}

export default Forecast;