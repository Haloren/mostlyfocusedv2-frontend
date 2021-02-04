import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actionCreators';

class TodoForm extends React.Component {

    state = { item: '' }

    handleOnChange = (event) => {
        debugger
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        debugger
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" name="title" value={this.state.item} onChange={this.handleOnChange} placeholder="Add an Todo" required ></input>
                    <input type="submit" value="+"></input>
                </form>
            </>
        )
    }
}

export default connect(null, { addTodo })(TodoForm)