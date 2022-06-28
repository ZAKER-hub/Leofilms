import {
    registerUserStarted,
    registerUserSuccess,
    registerUserFailure,
    loginUserStarted,
    loginUserSuccess,
    loginUserFailure,
    logoutUser,
    addFavoriteMovieSuccess,
    addWatchLaterMovieSuccess,
    saveTestResultSuccess
} from '../actionCreators/users'

import UserService from '@/services/UserService'

export const register = body => {
    return async dispatch => {
        dispatch(registerUserStarted())

        try {
            const data = await UserService.register(body)

            dispatch(registerUserSuccess(data))
        } catch (error) {
            dispatch(registerUserFailure(error.message))
        }
    }
}

export const login = body => {
    return async dispatch => {
        dispatch(loginUserStarted())

        try {
            const data = await UserService.login(body)

            dispatch(loginUserSuccess(data))
            localStorage.setItem('token', data.token)
        } catch (error) {
            dispatch(loginUserFailure(error.message))
        }
    }
}

export const logout = () => {
    return async dispatch => {
        localStorage.removeItem('token')

        dispatch(logoutUser())
    }
}

export const auth = () => {
    return async dispatch => {
        try {
            const data = await UserService.auth(localStorage.getItem('token') || '')
            dispatch(loginUserSuccess(data))
            localStorage.setItem('token', data.token)
        } catch (error) {
            localStorage.removeItem('token')
        }
    }
}

export const addToFavorite = (user_id, movie) => {
    return async dispatch => {
        try {
            const data = await UserService.addToFavorite(user_id, movie)
            dispatch(addFavoriteMovieSuccess(data))
        } catch (error) {

        }
    }
}

export const addToWatchLater = (user_id, movie) => {
    return async dispatch => {
        try {
            const data = await UserService.addToWatchLater(user_id, movie)
            dispatch(addWatchLaterMovieSuccess(data))
        } catch (error) {

        }
    }
}

export const saveTestResult = (user_id, result) => {
    return async dispatch => {
        try {
            const data = await UserService.saveTestResult(user_id, result)
            dispatch(saveTestResultSuccess(data))
        } catch (error) {

        }
    }
}