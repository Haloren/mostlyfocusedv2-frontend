import React from 'react';
import { Link } from 'react-router-dom';

const Help = () => {
    return (
        <>
            <Link className="back-btn" to={'/'}>Back</Link>
            <div className="help-container">
            <h1>Help</h1>
                <br></br>
                <hr></hr>
                <br></br>
                <h3>Title goes here</h3>
                <ul>
                    <li>Some text</li>
                    <li>Some text</li>
                </ul>
                <br></br>
                <hr></hr>
                <br></br>
                <h3>Title goes here</h3>
                <ul>
                    <li>Some text</li>
                    <li>Some text</li>
                </ul>
                <br></br>
                <hr></hr>
                <br></br>
                <h3>Title goes here</h3>
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