import React from 'react';

const Forecast = ({dates, mins, maxs, icons}) => {
    // console.log(`DATE: `, dates)
    let weekDay = dates.map((day) => {
        console.log(day)
        return (
            <div>
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

    let max = maxs.map((maxObj, i) => {
        let max = maxObj
        return (
            <div key={i}>
                {/* {`${max} °`} */}
                {max}
            </div>
        )
    })

    let min = mins.map((minObj, i) => {
        let min = minObj
        return (
            <div key={i}>
                {/* {`${min} °F`} */}
                {min}
            </div>
        )
    }); 

    return (
        <div>
            <div>
                {weekDay}
            </div>
            <div>
                {icon}
            </div>
            <div>
                {min}
            </div>
            <div>
                {max}
            </div>
        
        </div>
    )
}

export default Forecast;
