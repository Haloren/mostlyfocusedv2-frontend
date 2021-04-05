import React from 'react';
import day0 from '../images/background_images/day0.jpg';
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
import night0 from '../images/background_images/night0.jpg';

const hours = new Date().getHours();
const dayTime = hours > 6 && hours < 18 ? 'day' : 'night';
let randomNumber = Math.floor(Math.random() * 13);
const dayImages = []

const nightIMage = []


let bgImage = dayTime === 'day' ? `day${randomNumber}` : `night${randomNumber}`;

const Background = () => {
    console.log ("Background Image", bgImage)

    return (
        <div className="background" style={{ backgroundImage: `url(${day0})` }} ></div>
        // <div className="background" style={{ backgroundImage: `url(${bgImage})` }} ></div>
    )
  }

export default Background