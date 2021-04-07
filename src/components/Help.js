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
                    <li>Some text</li>
                </ul>
                <br></br>
                <hr></hr>
                <br></br>
                <h3>Todos</h3>
                <ul>
                    <li>Some text</li>
                    <li>Some text</li>
                </ul>
                <br></br>
                <hr></hr>
                <br></br>
                <h3>Events</h3>
                <ul>
                    <li>Some text</li>
                    <li>Some text</li>
                </ul>
                <br></br>
                <hr></hr>
                <br></br>
                <h3>Weather</h3>
                <ul>
                    <li>Some text</li>
                    <li>Some text</li>
                </ul>
                <br></br>
                <hr></hr>
                <br></br>
            </div>
        </>
    )
}

export default Help 