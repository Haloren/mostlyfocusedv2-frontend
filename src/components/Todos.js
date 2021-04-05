import React from 'react';

import { connect } from 'react-redux';
import { deleteTodo } from '../redux/actionCreators';

const Todos = (props) => {
    // console.log("Todos", props.user)
    const handleOnDelete = (todo) => {
        // debugger;
        props.deleteTodo(todo.id, todo.user_id )
    }

    return (
        <div className="list-container todos">
            <br></br>
            <h1> Todos List </h1>  
            <hr></hr>
            <ul>
                {props.user && props.user.todos.map(todo =>
                    <li key={todo.id} className="list-item">
                        <button className="delete-btn" onClick={() => handleOnDelete(todo)}> X </button>
                        <h4>{todo.item}</h4>
                        <input type="checkbox" className="checkbox"></input>
                    </li>
                )}
            </ul>            
        </div>
    )
}

export default connect(null, { deleteTodo })(Todos)