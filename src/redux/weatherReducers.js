const initialUserState = {
    weather: []
}

const weatherReducers = (state=initialUserState, action) => {

    switch (action.type){
        case 'FETCH_WEATHER':
            return {...state, weather: action.payload}        

        case 'UPDATE_USER':
            debugger
            return {...state, weather: action.payload.weather }

        default:
            return {...state}
    }
}

export default weatherReducers