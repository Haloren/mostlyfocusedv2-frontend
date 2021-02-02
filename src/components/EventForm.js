import React from 'react';

class EventForm extends React.Component {

    state = { title: '', date: '' }

    render() {
        return (
            <div>
                <form onSubmit={}>
                    <input type="text" name="title" value={} onChange={} placeholder="Add an Event" required ></input>
                    <input type="date" name="date" value={} onChange={} required ></input>
                    <input type="submit" value="+"></input>
                </form>
            </div>
        )
    }
}

export default (EventForm)