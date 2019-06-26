import React from 'react';
import './Forecast.css';

const Forecast = ({dates, mains, mins, maxs, icons}) => {
    let weekDay = dates.map((days, i) => {
        let day = days
        return (
            <div key={i}>
                {day}
            </div>
        )
    })              

    let icon = icons.map((iconObj, i) => {
        let icon = iconObj
        return (
            <div key={i}>
                <img src={`https://openweathermap.org/img/w/${icon}.png`} />
            </div>
        )
    });

    let main = mains.map((mainObj, i) => {
        let main = mainObj
        return (
            <div key={i}>
                {main}
            </div>
        )
    });

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
