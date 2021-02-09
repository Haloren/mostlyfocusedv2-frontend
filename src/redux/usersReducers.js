const initialUserState = {
    users: []
}

const usersReducers = (state=initialUserState, action) => {
    // console.log("UserReducer", state)
    // debugger;
    switch (action.type){
        case 'FETCH_USERS':
            return {users: action.payload}

        case 'ADD_TODO':
            // debugger;
            let userTodoAdd = state.users.map(user => {
                if (user.id === action.payload.id) {
                    return action.payload
                } else {
                    return user
                }
            })
            return {...state, users: userTodoAdd}

        case 'DELETE_TODO':
            debugger;
            let userTodoDelete = state.users.map(user => {
                if (user.id === action.payload.id) {
                    return action.payload
                } else {
                    return user
                }
            })
            return {...state, users: userTodoDelete}

        default:
            return {...state}
    }
}

export default usersReducers