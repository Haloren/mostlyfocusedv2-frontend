import React from 'react';

const Todos = (props) => {
    console.log("Todos", props.user.todos)

    return (
        <>
            <h1> Todos List </h1>  
            <ul>
                {props.user.todos && props.user.todos.map(todo =>
                    <li key={todo.id} className="todo-item">
                        <input type="checkbox" className="checkbox"></input>
                        {todo.item}
                        <button className="delete-btn">X</button>
                    </li>
                )}
            </ul>
        </>
    )
}

export default (Todos)