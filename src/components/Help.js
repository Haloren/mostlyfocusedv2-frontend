import React from 'react';
import { Link } from 'react-router-dom';

const Help = () => {
    return (
        <>
            <Link className="back-btn" to={'/users/1'}>Back</Link>
            <div className="help-container">
            <h1>Help</h1>
                <br></br>
                <hr></hr>
                <br></br>
                <h3>How to use</h3>
                <ul>
                    <li>Help keep yourself focused by setting this as your home page, that way everytime you open a new tab to search the internet you'll be reminded of current Todos and upcoming Events.</li>
                    <li>Add and Delete Todos and Events</li>
                    <li>Check the Weather with a glance and set to your desired City</li>
                </ul>
                <br></br>
                <hr></hr>
                <br></br>
                <h3>Weather</h3>
                <ul>
                    <li>Change from Fahrenheit to Celsius by clicking on the displayed temperature</li>
                    <li>Change the City by entering a zip code and click the "+"</li>
                </ul>
                <br></br>
                <hr></hr>
                <br></br>
                <h3>Todos and Events</h3>
                <ul>
                    <li>Enter an Event and Date the click the "+" to add an Event to the Event list</li>
                    <li>Enter a Todo the click the "+" to add a Todo to the Todo list</li>
                    <li>Delete Events and Todos by clicking the "X" next to the item you'd like to delete</li>
                </ul>
                <br></br>
                <hr></hr>
                <br></br>
            </div>
        </>
    )
}

export default Help 