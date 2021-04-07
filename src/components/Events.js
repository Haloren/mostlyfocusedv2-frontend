import React from 'react';

const Events = (props) => {
    // console.log("Events", props.user)

    return (
        <div className="list-container events">
           <h1> Upcoming Events </h1>
           <hr></hr>
           <ul>
               {props.user && props.user.events.map(event =>
                    <li key={event.id} className="list-item">
                        <button className="delete-btn">X</button>
                        <h4> {event.title} </h4>
                        <h4> {(event.date).slice(5,10)} </h4>
                    </li>
                )}
           </ul>
        </div>
    )
}

export default (Events)