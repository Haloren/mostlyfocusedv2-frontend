import React from 'react';

const Weather = (props) => {
    console.log("Weather", props.weather)

    //API TEMP IS IN KELVIN CONVERT TO FAHRENHEIT & CELSIUS
    let fahrenheit = Math.round(((props.weather && props.weather.main.temp - 273.15)*9/5+32));
    // let celsius = Math.round((props.weather && props.weather.main.temp - 273.15));

    const hours = new Date().getHours();
    const dayTime = hours > 6 && hours < 18 ? 'day' : 'night';

    let weatherCondition = props.weather && props.weather.weather[0].main;
    // console.log("weatherCondition", weatherCondition)
    switch (weatherCondition) {
        case 'Clear': 
            dayTime === 'day' ? weatherCondition = '☀️' : weatherCondition = '🌙';
            break;
        case 'Clouds':
            weatherCondition = '☁️';
            break;
        case 'Drizzle':
            dayTime === 'day' ? weatherCondition = '🌦' : weatherCondition = '🌦';
            break;
        case 'Rain':
            weatherCondition = '🌧️';
            break;
        case 'Thunderstorm':
            weatherCondition = '🌩️';
            break;
        case 'Snow':
            weatherCondition = '🌨️';
            break;
        default:
            weatherCondition = '🌫️';
    }

    return (
        <div className="weather-container">
            <h3>{weatherCondition} {fahrenheit}° F</h3>
            {/* <h3>{celsius}° C</h3> */}
            <h3>{props.weather && props.weather.name}</h3>
        </div>
    )
}

export default Weather