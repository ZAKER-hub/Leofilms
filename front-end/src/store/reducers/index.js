import { combineReducers } from 'redux'

import { userReducer } from './userReducer'
import { movieReducer } from './movieReducer'

const rootReducer = combineReducers({
    users: userReducer,
    movies: movieReducer,
})

export default rootReducer