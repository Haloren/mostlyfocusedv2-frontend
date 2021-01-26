import React from 'react';
import { Link } from 'react-router-dom';

const Help = () => {
    return (
        <>
            <Link className="back-btn" to={'/'}>Back</Link>
            <h1 className="help-title">Help</h1>
            <div className="help-container">
                <h3>Title goes here</h3>
                <ol>
                    <li></li>
                    <li></li>
                </ol>
                <br></br>
                <hr></hr>
                <br></br>
                <h3>Title goes here</h3>
                <ol>
                    <li></li>
                    <li></li>
                </ol>
                <br></br>
                <hr></hr>
                <br></br>
                <h3>Title goes here</h3>
                <ol>
                    <li></li>
                    <li></li>
                </ol>
                <br></br>
                <hr></hr>
                <br></br>
            </div>
        </>
    )
}

export default Help 