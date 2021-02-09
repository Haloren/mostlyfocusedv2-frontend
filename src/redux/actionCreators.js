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

// ADD DATA TO DATABASE
export const addTodo = (todo) => {
    return (dispatch) => {
        fetch(API + '/users/1/todos', {
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

// UPDATE DATA IN DATABASE
export const updateZip = (zip) => {
    return (dispatch) => {
        fetch(API + '/users/1', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(zip),
        })
        .then(resp => resp.json())
        .then(user => {
            if (user.message) {
                alert(zip.message)
            } else {
                dispatch({type: 'UPDATE_ZIP', payload: user})
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