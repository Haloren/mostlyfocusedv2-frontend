import React from 'react';

import { connect } from 'react-redux';
import { deleteEvent } from '../redux/actionCreators';

const Events = (props) => {
    // console.log("Events", props.user)
    const handleOnDelete = (event) => {
        // debugger;
        props.deleteEvent(event.id, event.user_id )
    }

    return (
        <div className="list-container events">
           <h1> Upcoming Events </h1>
           <hr></hr>
           <ul>
               {props.user && props.user.events.map(event =>
                    <li key={event.id} className="list-item">
                        <button className="delete-btn" onClick={() => handleOnDelete(event)}>X</button>
                        <h4> {event.title} </h4>
                        <h4> {(event.date).slice(5,10)} </h4>
                    </li>
                )}
           </ul>
        </div>
    )
}

export default connect(null, { deleteEvent }) (Events)