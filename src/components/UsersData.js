import React from 'react';

import Todos from '../components/Todos';
import Events from '../components/Events';
import WeatherUpdate from '../components/WeatherUpdate'
import TodoForm from './TodoForm';
import EventForm from './EventForm';

const UsersData = (props) => {
    // console.log("UsersData", props.users[0])
    
    let user = props.users && props.users[0]

    return (
        <>
            {/* <h1>Hello {props.users[0].name}</h1> */}
            <Todos user = { user } />
            <Events user = { user } />
            <WeatherUpdate user = { user } />
            <TodoForm user = { user } />
            <EventForm user = { user } />
        </>
    )
}

export default UsersData