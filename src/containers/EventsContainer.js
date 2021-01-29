import React from 'react';
import Events from '../components/Events';
import EventForm from '../components/EventForm';

class EventsContainer extends React.Component {
    render() {
        return (
            <>
                <EventForm />
                <Events />
            </>
        )
    }
}

export default (EventsContainer);