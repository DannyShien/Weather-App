import React from 'react';

const Forecast = (props) => {
    const showForecast = props.threeHourForecast.map((props) => { console.log(`HERE IS YO PROPS:`, props)
        return ( 
            <div className = 'forecast'>
                <h2>3 hr Interval Forecast</h2>
                    <div>{`ehh, props.showForecast`}</div>
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