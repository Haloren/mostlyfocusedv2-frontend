import React from 'react';

const Todos = (props) => {
    // console.log("Todos", props.user)
    return (
        <div className="list-container todos">
            <h1> Todos List </h1>  
            <hr></hr>
            <ul>
                {props.user && props.user.todos.map(todo =>
                    <li key={todo.id} className="list-item">
                        <button className="delete-btn"> X </button>
                        <h4>{todo.item}</h4>
                        <input type="checkbox" className="checkbox"></input>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default (Todos)