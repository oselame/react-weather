import { combineReducers } from 'redux';

import WeaterReducer from './weatherReducer';

const rootReducer = combineReducers({
    weather: WeaterReducer
});

export default rootReducer;