const API = "http://loaclhost:3001"

// FETCH USER DATA
export function fetchUsers() {
    // debugger;
    return (dispatch) => {
        fetch(API + '/users')
        .then(resp => resp.json())
        .then(data => console.log(data))
    }
}