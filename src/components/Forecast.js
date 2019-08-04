import React from 'react';
import './Forecast.css';

const Forecast = ({dates, mains, mins, maxs, icons}) => {
    let weekDay = dates.map((days, i) => {
        let day = days
        return (
            <div className='timeframe' key={i}>
                {day}
            </div>
        )
    })              
    console.log(`Forecast.js icons: `, icons)
    let icon = icons.map((iconObj, i) => {
        // console.log(`new icon: `, iconObj)
        let icon = iconObj
        return (
            <div className='icon' key={i}>
                <img src={`https://openweathermap.org/img/w/${icon}.png`} alt='forecast weather icons'/>
            </div>
        )
    })

    let main = mains.map((mainObj, i) => {
        let main = mainObj
        return (
            <div className='temp' key={i}>
                {main}
            </div>
        )
    })

    // let max = maxs.map((maxObj, i) => {
    //     // let max = maxObj
    //     return (
    //         <div key={i}>
    //             {/* {`${max} °`} */}
    //             {max}
    //         </div>
    //     )
    // })

    // let min = mins.map((minObj, i) => {
    //     let min = minObj
    //     return (
    //         <div key={i}>
    //             {/* {`${min} °F`} */}
    //             {min}
    //         </div>
    //     )
    // }); 

    return (
        <div className='forecast-display'>
            <div className='forecast'>
                {weekDay}
            </div>
            <div className='forecast'>
                {icon}
            </div>
            <div className='forecast'>
                {main}
            </div>


            {/* <div className='forecast'>
                {min}
            </div>
            <div className='forecast'>
                {max}
            </div> */}
        </div>
    )
}

export default Forecast;
