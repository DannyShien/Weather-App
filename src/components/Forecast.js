import React from 'react';

const convertDate = (day) => {
    console.log(`THE DAY: `, day)
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

const Forecast = ({date, iconArray, min, max}) => {
    // console.log(`DATE: `, date)
    // console.log(`TEMPERATURE: `,temperature)
    // console.log(`MIN: `,min)
    // console.log(`MAX: `,max)
    // console.log(`FORECAST ARRAY: `,forecast)
    // console.log(iconArray)
    return (
        <div>
            {
                iconArray.map((iconObj, i) => {
                    let icon = iconObj[0].icon
                    return (
                        <div key = {i}>
                            <img src={`https://openweathermap.org/img/w/${icon}.png`} />
                        </div>
                    )
                })
            }
        </div>
    )


    // const showForecast = props.threeHourForecast.map((natalie) => { 
    //     const finalDisplayForecast = natalie.forecast_weather.map((tran)=> {
    //         let i = 0;
    //         if([i] <= (i === 3)) {
    //             console.log([i]);
    //             let forecast_day = convertDate((tran.dt_txt));
    //             let forecast_temp = ((tran.main.temp - 273.15) * 9/5 +32).toFixed(1);
    //             let forecast_tempMin = ((tran.main.temp_min - 273.15) * 9/5 +32).toFixed(1);
    //             let forecast_tempMax = ((tran.main.temp_max - 273.15) * 9/5 +32).toFixed(1);
    //             return ( 
    //                 <div className = 'forecast'>
    //                     <div><strong>{forecast_day}</strong></div>
    //                     <div>{tran.dt_txt}</div>
    //                     <div>{`${forecast_temp}° F`}</div>
    //                     <div>{`L/${forecast_tempMin}°`}</div>
    //                     <div>{`H/${forecast_tempMax}°`}</div>
    //                 </div>   
    //             )       
    //         } else {
    //             return 
    //         }
    //     });
    //     return finalDisplayForecast
    // })
    // return (
    //     <div className = 'pos'>
    //         {showForecast}
    //     </div>
    // )

}

export default Forecast;
