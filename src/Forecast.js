import React from 'react';

const convertDate = (day) => {
    let d = new Date(day);
    const weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tues";
        weekday[3] = "Wed";
        weekday[4] = "Thurs";
        weekday[5] = "Fri";
        weekday[6] = "Sat";

    let n = weekday[d.getDay()];
    // console.log(n)
    return n
};


const Forecast = (props) => {
    const showForecast = props.threeHourForecast.map((natalie) => { 

        const finalDisplayForecast = natalie.forecast_weather.map((tran)=> {

            let forecast_day = convertDate((tran.dt_txt));
            let forecast_temp = ((tran.main.temp - 273.15) * 9/5 +32).toFixed(1);
            let forecast_tempMin = ((tran.main.temp_min - 273.15) * 9/5 +32).toFixed(1);
            let forecast_tempMax = ((tran.main.temp_max - 273.15) * 9/5 +32).toFixed(1);
            return ( 
                <div className = 'forecast'>
                    <div>{forecast_day}</div>
                    <div>{`${forecast_temp}° F`}</div>
                    <div>{`L/${forecast_tempMin}°`}</div>
                    <div>{`H/${forecast_tempMax}°`}</div>
                </div>   
            )       
        });
        return finalDisplayForecast
    })
    return (
        <ul>
            <h2>3 hr Interval Forecast</h2>
            {showForecast}
        </ul>
    )

}

export default Forecast;
