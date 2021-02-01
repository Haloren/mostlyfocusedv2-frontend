import React, { useEffect } from 'react';
import Clock from 'react-digital-clock';
import { Link } from 'react-router-dom';

const DateTime = () => {

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
        <>
        <div className="date-time-container">
            <h3 className="date">{day} {month} {date}, {year}</h3>
            <div className="clock" id="clock">   
                <Clock format={'hh-mm'} />
            </div> 
        </div>
        <Link to={'/help'} className="help-link">Help</Link>
        </>
    )
}

export default DateTime