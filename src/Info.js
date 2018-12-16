import React from 'react';

const Info = (props) => {
    return (
        <div className = 'weatherInfo'>
            <h2>{props.name}</h2>
            <ul className = 'infoList'>
                <li>Weather: {props.main} {props.description}</li>
                <li>Temperature: {props.temperature}</li>
                <li>Humidity: {props.humidity}</li>
                <li>Wind: {props.wind}</li>
            </ul>
        </div>
    )

}

export default Info;