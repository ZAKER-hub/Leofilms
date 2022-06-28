import {
    USER_LOGIN_STARTED,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_LOGOUT,
    USER_ADD_FAVORITE_MOVIE,
    USER_ADD_WATCH_LATER_MOVIE,
    USER_SAVE_TEST_RESULT
} from '../types/users'

const initialState = {
    user: {},
    isAuth: false,
    loading: false,
    error: null
}

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_LOGIN_STARTED:
            return { ...state, user: {}, isAuth: false, error: null, loading: true }
        case USER_LOGIN_SUCCESS:
            return { ...state, user: payload.user, isAuth: true, loading: false, error: null  }
        case USER_LOGIN_FAILURE:
            return { ...state, user: {}, isAuth: false, loading: false, error: payload }
        case USER_LOGOUT:
            return { ...state, user: {}, isAuth: false }
        case USER_ADD_FAVORITE_MOVIE:
            return {
                ...state,
                user: {
                    ...state.user,
                    favoriteMovies: [
                        ...state.user.favoriteMovies,
                        payload
                    ]
                },
                loading: false,
                error: null
            }
        case USER_ADD_WATCH_LATER_MOVIE:
            return {
                ...state,
                user: {
                    ...state.user,
                    watchLater: [
                        ...state.user.watchLater,
                        payload
                    ]
                },
                loading: false,
                error: null
            }
        case USER_SAVE_TEST_RESULT:
            return {
                ...state,
                user: {
                    ...state.user,
                    testResult: payload
                },
                loading: false,
                error: null
            }
        default:
            return state
    }
}