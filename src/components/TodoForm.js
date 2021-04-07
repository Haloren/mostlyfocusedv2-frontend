import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actionCreators';

class TodoForm extends React.Component {

    state = { item: '' }

    handleOnChange = (event) => {
        this.setState({
            item: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        // debugger;
        this.props.addTodo(this.state, this.props.user.id)
        this.setState({ item: ''});
    }

    render() {
        return (
            <>
                <form className="todos-input todos" onSubmit={this.handleOnSubmit}>
                    <input type="text" name="item" value={this.state.item} onChange={this.handleOnChange} placeholder="Add Todo" required ></input>
                    <input style={{ cursor: 'pointer' }} type="submit" value=" + "></input>
                </form>
            </>
        )
    }
}

export default connect(null, { addTodo })(TodoForm)