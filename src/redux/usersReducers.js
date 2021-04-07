const initialUserState = {
    users: []
}

const usersReducers = (state=initialUserState, action) => {
    // console.log("UserReducer", state)
    // debugger;
    switch (action.type){
        case 'FETCH_USERS':
            return {users: action.payload}

        case 'UPDATE_USER':
            // debugger;
            let userUpdate = state.users.map(user => {
                if (user.id == action.payload.id) {
                    return action.payload.user
                } else {
                    return user
                }
            })
            return {...state, users: userUpdate}

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

        case 'ADD_EVENT':
            let userEventAdd = state.users.map(user => {
                if (user.id === action.payload.id) {
                    return action.payload
                } else {
                    return user
                }
            })
            return {...state, users: userEventAdd}  

        case 'DELETE_TODO':
            // debugger;
            let userTodoDelete = state.users.map(user => {
                if (user.id === action.payload.id) {
                    return action.payload
                } else {
                    return user
                }
            })
            return {...state, users: userTodoDelete}  

        case 'DELETE_EVENT':
            // debugger;
            let userEventDelete = state.users.map(user => {
                if (user.id === action.payload.id) {
                    return action.payload
                } else {
                    return user
                }
            })
            return {...state, users: userEventDelete} 

        default:
            return {...state}
    }
}

export default usersReducers