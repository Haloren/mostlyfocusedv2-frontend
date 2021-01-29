const API = "http://localhost:3001"

// FETCH DATA FROM DATABASE
export function fetchUsers() {
    return (dispatch) => {
        fetch(API + '/users')
        .then(resp => resp.json())
        .then(data => console.log(data))
        // .then(users => dispatch({
        //     type: 'FETCH_USERS',
        //     payload: users
        // }))
    }
}