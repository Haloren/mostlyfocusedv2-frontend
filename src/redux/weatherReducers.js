const initialUserState = {
    weather: []
}

const weatherReducers = (state=initialUserState, action) => {

    switch (action.type){
        case 'FETCH_WEATHER':
            return {...state, weather: action.payload}

    default:
        return {...state}
    }
}

export default weatherReducers