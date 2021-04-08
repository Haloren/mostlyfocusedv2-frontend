import React, { useState } from 'react';

import ClearDay from '../images/weather_icons/ClearDay.png';
import ClearNight from '../images/weather_icons/ClearNight.png';
import Clouds from '../images/weather_icons/Clouds.png';
import Default from '../images/weather_icons/Default.png';
import DrizzleDay from '../images/weather_icons/DrizzleDay.png';
import DrizzleNight from '../images/weather_icons/DrizzleNight.png';
import Rain from '../images/weather_icons/Rain.png';
import Snow from '../images/weather_icons/Snow.png';
import Thunderstorm from '../images/weather_icons/Thunderstorm.png';

const Weather = (props) => {
    // console.log("Weather", props)

    const hours = new Date().getHours();
    const dayTime = hours > 6 && hours < 18 ? 'day' : 'night';

    let weatherCondition = props.weather && props.weather.weather[0].main;
    // console.log("weatherCondition", weatherCondition) 
    // ☀️ 🌙 ☁️ 🌦 🌦 🌧️ 🌩️ 🌨️ 🌫️
    switch (weatherCondition) {
        case 'Clear': 
            dayTime === 'day' ? weatherCondition = ClearDay : weatherCondition = ClearNight;
            break;
        case 'Clouds':
            weatherCondition = Clouds;
            break;
        case 'Drizzle':
            dayTime === 'day' ? weatherCondition = DrizzleDay : weatherCondition = DrizzleNight;
            break;
        case 'Rain':
            weatherCondition = Rain;
            break;
        case 'Thunderstorm':
            weatherCondition = Thunderstorm;
            break;
        case 'Snow':
            weatherCondition = Snow;
            break;
        default:
            weatherCondition = Default;
    }

    //API TEMP IS IN KELVIN CONVERT TO FAHRENHEIT & CELSIUS
    let fahrenheit = Math.round(((props.weather && props.weather.main.temp - 273.15)*9/5+32));
    let celsius = Math.round((props.weather && props.weather.main.temp - 273.15));
    
    const [textToggle, textToggleState] = useState(true)  
    
    return (
        <div className="weather-container">
            {/* <img src={ClearDay} alt="" /> */}
            { textToggle ? 
                <h3 style={{ cursor: 'pointer' }} onClick={ () => textToggleState(!textToggle)}>
                    <img class="weather-icon" src={weatherCondition} alt={props.weather && props.weather.weather[0].main}></img> 
                {fahrenheit} °F
                </h3>
                :
                <h3 style={{ cursor: 'pointer' }} onClick={ () => textToggleState(!textToggle)}>
                    <img class="weather-icon" src={weatherCondition} alt={props.weather && props.weather.weather[0].main}></img> 
                {celsius} °C
                </h3>
            }
            
            <h3>{props.weather && props.weather.name}</h3>
        </div>
    )
}

export default Weather