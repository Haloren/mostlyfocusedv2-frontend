import React, { useEffect } from 'react';
import Clock from 'react-digital-clock';

const Home = () => {

    useEffect(() => {
        document.title = 'Mostly Focused'
    }, [])

    let today = new Date();
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let day = days[ today.getDay() ];
    let month = months[ today.getMonth() ];
    let date = today.getDate();
    let year = today.getFullYear();

    return (
        <div className="date-time-container">
            <h3 className="date">{day} {month} {date}, {year}</h3>
            <div className="clock">   
                <Clock format={'hh-mm'} />
            </div>
        </div>
    )
}

export default Home