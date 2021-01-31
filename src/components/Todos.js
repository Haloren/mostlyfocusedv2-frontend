import React from 'react';

const Todos = (props) => {
    // console.log("Todos", props.user.todos)
    return (
        <div className="todos-container">
            <h1> Todos List </h1>  
            <ul>
                {props.user.todos && props.user.todos.map(todo =>
                    <li key={todo.id} className="list-item">
                        <input type="checkbox" className="checkbox"></input>
                        {todo.item}
                        <button className="delete-btn"> X </button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default (Todos)