import React from 'react';

const Weather = (props) => {
    // console.log("Weather", props.weather)

    // let fahrenheit = Math.round(((props.weather.weather.results.main.temp - 273.15)*9/5+32));
    // let celsius = Math.round((props.weather.weather.results.main.temp - 273.15));

    // let description = props.weather.weather.results.weather[0].description;
    // switch (description) {
    //     case 'clear sky': 
    //         description = '☀️';
    //         break;
    //     case 'few clouds': 
    //         description = '☁️';
    //         break;
    //     case 'scattered clouds': 
    //         description = '☁️';
    //         break;
    //     case 'broken clouds': 
    //         description = '☁️';
    //         break;
    //     case 'shower rain':
    //         description = '🌧️';
    //         break;
    //     case 'rain':
    //         description = '🌧️';
    //         break;
    //     case 'thunderstorm':
    //         description = '🌩️';
    //         break;
    //     case 'snow':
    //         description = '🌨️';
    //         break;
    //     case 'mist':
    //         description = '🌫️';
    //         break;
    //     default:
    //         description = '';
    // }

    return (
        <div className="weather-container">
            {/* <h3>{description}</h3>
            <h3>{fahrenheit} °F</h3>
            <h3>{celsius} °C</h3>
            <h3>{props.weather.weather.results.name}</h3> */}
        </div>
    )
}

export default Weather