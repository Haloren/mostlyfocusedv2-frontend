import React from 'react';
import { connect } from 'react-redux';
import { addEvent } from '../redux/actionCreators';

class EventForm extends React.Component {

    state = { title: '', date: '' }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        // debugger;
        this.props.addEvent(this.state, this.props.user.id)
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

export default connect(null, { addEvent })(EventForm)