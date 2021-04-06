const API = "http://localhost:3001"

// FETCH DATA FROM DATABASE
export function fetchUsers() {
    return (dispatch) => {
        fetch(API + '/users')
        .then(resp => resp.json())
        // .then(data => console.log(data))
        .then(users => dispatch({
            type: 'FETCH_USERS',
            payload: users
        }))
    }
}
export function fetchWeather() {
    return (dispatch) => {
        fetch(API + '/users/1')
        .then(resp => resp.json())
        .then(weather => dispatch({
            type: 'FETCH_WEATHER',
            payload: weather
        }))
    }
}

// UPDATE DATA IN DATABASE
export const updateUser = (zip, userId) => {
    // debugger;
    return (dispatch) => {
        fetch(API + `/users/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(zip),
        })
        .then(resp => resp.json())
        .then(resp => {
            if (resp.message) {
                alert(resp.message)
            } else {
                dispatch({type: 'UPDATE_USER', payload: resp})
            }
        })
    }
}

// ADD DATA TO DATABASE
export const addTodo = (todo, userId) => {
    return (dispatch) => {
        fetch(API + `/users/${userId}/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(todo),
        })
        .then(resp => resp.json())
        .then(user => {
            if (user.message) {
                alert(user.message)
            } else {
                dispatch({type: 'ADD_TODO', payload: user})
            }
        })
    }
}
export const addEvent = (event, userId) => {
    return (dispatch) => {
        fetch(API + `/users/${userId}/events`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(event),
        })
        .then(resp => resp.json())
        .then(user => {
            if (user.message) {
                alert(user.message)
            } else {
                dispatch({type: 'ADD_EVENT', payload: user})
            }
        })
    }
}

//DELETE DATA FROM DATABASE
export const deleteTodo = (todoId) => {
    return (dispatch) => {
        fetch(API + `/users/1/todos/${todoId}`, {
            method: 'DELETE',
            },
        )
        .then(resp => resp.json())
        .then(user => {
            if (user.message) {
                alert(user.message)
            } else {
                dispatch({type: 'DELETE_TODO', payload: user})
            }
        })
    }
}