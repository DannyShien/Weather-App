import React from 'react';

const Forecast = (props) => {
    const showForecast = props.threeHourForecast.map((natalie) => { 
        let forecastTemp = ((natalie.forecast_weather[0].main.temp - 273.15) * 9/5 +32).toFixed(1);
        // console.log(`HERE IS YO PROPS:`, natalie.forecast_weather[0].main.temp)
        return ( 
            <div className = 'forecast'>
                <h2>3 hr Interval Forecast</h2>
                    <div>{forecastTemp}</div>
                    <div>{forecastTemp}</div>
                    <div>{forecastTemp}</div>
                    
            </div>  
        )       
    })
    return (
        <ul>
            {showForecast}
        </ul>
    )
}

export default Forecast;

//  {/* <div>{props.timestamp}</div>
//                         <div>{`${props.mainTemp}°`} </div>
//                         <div>{`${props.minTemp}°`}</div>
//                         <div>{`${props.maxTemp}°`}</div>  */}