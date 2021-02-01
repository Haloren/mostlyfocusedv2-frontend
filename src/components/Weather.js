import React from 'react';

const Weather = (props) => {
    console.log("Weather", props.weather)

    let fahrenheit = Math.round(((props.weather && props.weather.main.temp - 273.15)*9/5+32));
    // let celsius = Math.round((props.weather && props.weather.main.temp - 273.15));

    const hours = new Date().getHours();
    const dayTime = hours > 6 && hours < 18 ? 'day' : 'night';

    let description = props.weather && props.weather.weather[0].description;
    // console.log("Description", description)
    switch (description) {
        case 'clear sky': 
            dayTime === 'day' ? 
            description = '☀️' : 
            description = '🌙';
            break;
        case 'few clouds': 
            description = '☁️';
            break;
        case 'scattered clouds': 
            description = '🌤';
            break;
        case 'broken clouds': 
            description = '⛅️';
            break;
        case 'shower rain':
            description = '🌦';
            break;
        case 'rain':
            description = '🌧️';
            break;
        case 'thunderstorm':
            description = '🌩️';
            break;
        case 'snow':
            description = '🌨️';
            break;
        case 'mist':
            description = '🌫️';
            break;
        default:
            description = '';
    }

    return (
        <div className="weather-container">
            <h3>{description} {fahrenheit}° F</h3>
            {/* <h3>{celsius}° C</h3> */}
            <h3>{props.weather && props.weather.name}</h3>
        </div>
    )
}

export default Weather