import React from 'react';
import './Forecast.css';

const Forecast = ({dates, times, mains, mins, maxs, icons}) => {
    let weekDay = dates.map((timestamp, i) => {
        let day = timestamp[0]
        // console.log(day)
        let time = timestamp[1]
        // console.log(time)
        return (
            <div className='timestamp' key={i}>
                {day}
                {time}
            </div>
        )
    })              
    // console.log(`Forecast.js times: `, times)
    // let time  = times.map((timeArr, i) => {
    //     console.log(`TIME: `, timeArr)
    // })

    console.log(`Forecast.js icons: `, icons)
    let icon = icons.map((iconArr, i) => {
        // console.log(`new icon: `, iconArr)
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
