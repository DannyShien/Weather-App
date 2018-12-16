import React from 'react';

const Info = (props) => {
    // console.log(props);
    return (
        <div className = 'weatherInfo'>
            {props.stats.map(stats => {
                return  (
                    <ul className = 'infoList'>
                        <h2>{props.name}</h2>
                        Weather: {`${this.state.main}, ${this.state.description}`}
                        Temperature: {`${this.state.temperature}°F`}
                        Humidity: {`${this.state.humidity}%`}
                        Wind:  {`${this.state.wind}mph`}
                    </ul>
                )
            })}
        </div>
    )

}

export default Info;

