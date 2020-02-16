import React from 'react';
import './Forecast.css';

const Forecast = ({dates, mains, mins, maxs, icons}) => {
    let timeInterval = dates.map((timestamp, i) => {
        let time = timestamp[1]
        return (
            <div className='timestamp' key={i}>
                {time}
            </div>
        )
    })    
    
    let weekday = dates.map((dayNow, i) => {
        let day = dayNow[0]
        return day
    })
    let today = weekday[0]

    let icon = icons.map((iconArr, i) => {
        let icon = iconArr
        return (
            <div key={i}>
                <img src={`https://openweathermap.org/img/w/${icon}.png`} alt='forecast weather icons'/>
            </div>
        )
    })

    let main = mains.map((mainObj, i) => {
        let main = mainObj
        return (
            <div key={i}>
                {`${main}°`}
            </div>
        )
    })

    return (
        <div className='forecast-display'>
            <div className='day'>
                <p><strong>TODAY {today}</strong></p>
            </div>
            <div className='forecast'>
                {timeInterval}
            </div>
            <div className='forecast'>
                {icon}
            </div>
            <div className='forecast'>
                {main}
            </div>
        </div>
    )
}

export default Forecast;
