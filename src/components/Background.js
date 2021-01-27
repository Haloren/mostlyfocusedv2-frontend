import React from 'react';

const Background = () => {
    let picArray = [
                "url(../images/day.jpg)",
                "url(../images/day1.jpg)",
                "url(../images/day2.jpg)",
                "url(../images/day3.jpg)",
                "url(../images/day4.jpg)",
                "url(../images/day5.jpg)",
                "url(../images/night.jpg)",
                "url(../images/night1.jpg)",
                "url(../images/night2.jpg)",
                "url(../images/night3.jpg)"
                ];
    let randomPic = picArray[Math.floor(Math.random()*picArray.length)];
    return (
        <div className="background" style={{ backgroundImage: `${randomPic}` }} ></div>
    )
  }

export default Background