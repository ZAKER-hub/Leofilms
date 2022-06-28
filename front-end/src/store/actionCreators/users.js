import {
    USER_REGISTER_STARTED,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
    USER_LOGIN_STARTED,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_LOGOUT,
    USER_ADD_FAVORITE_MOVIE,
    USER_ADD_WATCH_LATER_MOVIE,
    USER_SAVE_TEST_RESULT
} from '../types/users'

export const registerUserStarted = () => ({ type: USER_REGISTER_STARTED })
export const registerUserSuccess = data => ({ type: USER_REGISTER_SUCCESS, payload: data })
export const registerUserFailure = error => ({ type: USER_REGISTER_FAILURE, payload: error })

export const loginUserStarted = () => ({ type: USER_LOGIN_STARTED })
export const loginUserSuccess = data => ({ type: USER_LOGIN_SUCCESS, payload: data })
export const loginUserFailure = error => ({ type: USER_LOGIN_FAILURE, payload: error })

export const logoutUser = () => ({ type: USER_LOGOUT })

export const addFavoriteMovieSuccess = data => ({ type: USER_ADD_FAVORITE_MOVIE, payload: data })

export const addWatchLaterMovieSuccess = data => ({ type: USER_ADD_WATCH_LATER_MOVIE, payload: data })

export const saveTestResultSuccess = data => ({ type: USER_SAVE_TEST_RESULT, payload: data })