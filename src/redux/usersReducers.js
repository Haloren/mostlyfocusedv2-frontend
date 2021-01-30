const initialUserState = {
    users: []
}

const usersReducers = (state=initialUserState, action) => {
    // debugger;
    switch (action.type){
        // case 'FETCH_USERS':
        //     return {users: action.payload}

    default:
        return {...state}
    }
}

export default usersReducers