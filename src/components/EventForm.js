import React from 'react';

class EventForm extends React.Component {

    state = { title: '', date: '' }

    handleOnChange = (event) => {
        debugger;
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        debugger

        this.setState({title: '', date: ''});
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleOnChange} placeholder="Add Event" required ></input>
                    <input type="date" name="date" value={this.state.date} onChange={this.handleOnChange} required ></input>
                    <input type="submit" value="+"></input>
                </form>
            </>
        )
    }
}

export default (EventForm)