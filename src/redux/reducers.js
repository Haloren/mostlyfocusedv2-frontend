const initialUserState = {
    users: []
}

const reducers = (state=initialUserState, action) => {
    // debugger;
    switch (action.type){
        // case 'FETCH_USERS':
        //     return {users: action.payload}

    default:
        return {...state}
    }
}

export default reducers