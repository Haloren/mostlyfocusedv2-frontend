import React from 'react';
import Todos from '../components/Todos'
import TodoForm from '../components/TodoForm';

class TodosContainer extends React.Component {
    render() {
        return (
            <>
                <TodoForm />
                <Todos />
            </>
        )
    }
}

export default (TodosContainer);