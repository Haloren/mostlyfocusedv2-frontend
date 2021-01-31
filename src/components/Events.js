import React from 'react';

const Events = (props) => {
    // console.log("Events", props.user.events)

    return (
        <div className="events-container">
           <h1> Upcoming Events </h1>
           <ul>
               {props.user.events && props.user.events.map(event =>
                    <li key={event.id} className="list-item">
                        <h3> {event.date} </h3>
                        <h3> {event.title} </h3>
                        <button className="delete-btn">X</button>
                    </li>
                )}
           </ul>
        </div>
    )
}

export default (Events)