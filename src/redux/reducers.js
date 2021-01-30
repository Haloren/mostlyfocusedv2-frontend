import { combineReducers } from 'redux';

import weatherReducers from './weatherReducers';
import usersReducers from './usersReducers';

export default combineReducers({
    users: usersReducers,
    weather: weatherReducers
}) 