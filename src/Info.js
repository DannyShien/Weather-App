import React from 'react';

const Info = (props) => {
    console.log('This is being passed', props);
    return (
        <div className = 'weatherInfo'>
            {props.stats.map(object => {
                return  (
                    <ul className = 'infoList'>
                        <h2>{props.name}</h2>
                        {/* Weather: {`${props.state.main}, ${props.state.description}`} */}
                        Temperature: {`${props.temperature}°F`}
                        Humidity: {`${props.humidity}%`}
                        Wind:  {`${props.wind}mph`}
                    </ul>
                )
            })}
        </div>
    )

}

export default Info;

