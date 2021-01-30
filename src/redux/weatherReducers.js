const initialUserState = {
    weather: []
}

const weatherReducers = (state=initialUserState, action) => {
    // debugger;
    switch (action.type){
        // case 'FETCH_WEATHER':
        //     return {weather: action.payload}

    default:
        return {...state}
    }
}

export default weatherReducers