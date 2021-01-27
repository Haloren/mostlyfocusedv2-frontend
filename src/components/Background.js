import React from 'react';

const Background = () => {
    let picArray = [
                "../images/day.jpg",
                "../images/day1.jpg",
                "../images/day2.jpg",
                "../images/day3.jpg",
                "../images/day4.jpg",
                "../images/day5.jpg",
                "../images/night.jpg",
                "../images/night1.jpg",
                "../images/night2.jpg",
                "../images/night3.jpg"
                ];
    let randomPic = picArray[Math.floor(Math.random()*picArray.length)];
    return (
        <div style={{
            position: 'absolute',
            zIndex: '-99',
            width: '100%',
            height: '100%',
            
            backgroundImage: `url(${randomPic})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundColor: '#000',
            filter: 'brightness(.8)'
        }} ></div>
    )
  }

export default Background