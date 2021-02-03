const initialUserState = {
    weather: []
}

const weatherReducers = (state=initialUserState, action) => {

    switch (action.type){
        case 'FETCH_WEATHER':
            return {...state, weather: action.payload}

        case 'UPDATE_WEATHER':
            debugger;
            let userZipUpdate = state.users.map(user => {
                if (user.id === action.payload.id) {
                    return action.payload
                } else {
                    return user
                }
            })
            return {...state, users: userZipUpdate}        

        default:
            return {...state}
    }
}

export default weatherReducers