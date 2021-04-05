import React from 'react';
import day1 from '../images/background_images/day1.jpg';
import day2 from '../images/background_images/day2.jpg';
import day3 from '../images/background_images/day3.jpg';
import day4 from '../images/background_images/day4.jpg';
import day5 from '../images/background_images/day5.jpg';
import day6 from '../images/background_images/day6.jpg';
import day7 from '../images/background_images/day7.jpg';
import day8 from '../images/background_images/day8.jpg';
import day9 from '../images/background_images/day9.jpg';
import day10 from '../images/background_images/day10.jpg';
import day11 from '../images/background_images/day11.jpg';
import day12 from '../images/background_images/day12.jpg';
import day13 from '../images/background_images/day13.jpg';
import day14 from '../images/background_images/day14.jpg';

import night1 from '../images/background_images/night1.jpg';
import night2 from '../images/background_images/night2.jpg';
import night3 from '../images/background_images/night3.jpg';
import night4 from '../images/background_images/night4.jpg';
import night5 from '../images/background_images/night5.jpg';
import night6 from '../images/background_images/night6.jpg';
import night7 from '../images/background_images/night7.jpg';
import night8 from '../images/background_images/night8.jpg';
import night9 from '../images/background_images/night9.jpg';
import night10 from '../images/background_images/night10.jpg';
import night11 from '../images/background_images/night11.jpg';
import night12 from '../images/background_images/night12.jpg';
import night13 from '../images/background_images/night13.jpg';
import night14 from '../images/background_images/night14.jpg';

const hours = new Date().getHours();
const dayTime = hours > 6 && hours < 18 ? 'day' : 'night';
let randomNumber = Math.floor(Math.random() * 14);

const dayArray = [day1, day2, day3, day4, day5, day6, day7, day8, day9, day10, day11, day12, day13, day14]
const nightArray = [night1, night2, night3, night4, night5, night6, night7, night8, night9, night10, night11, night12, night13, night14]

let bgImage = dayTime === 'day' ? dayArray[randomNumber] : nightArray[randomNumber];
// let bgImage = dayTime === 'day' ? nightArray[randomNumber] : dayArray[randomNumber];

const Background = () => {
    // console.log ("Background Image", bgImage)
    return (
        <div className="background" style={{ backgroundImage: `url(${bgImage})` }} ></div>
    )
  }

export default Background