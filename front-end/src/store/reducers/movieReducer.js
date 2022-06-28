import {
    GET_ALL_MOVIES_STARTED,
    GET_ALL_MOVIES_SUCCESS,
    GET_ALL_MOVIES_FAILED,

    GET_POPULAR_MOVIES_STARTED,
    GET_POPULAR_MOVIES_SUCCESS,
    GET_POPULAR_MOVIES_FAILED,

    GET_NEW_MOVIES_STARTED,
    GET_NEW_MOVIES_SUCCESS,
    GET_NEW_MOVIES_FAILED,

    SEARCH_MOVIES_STARTED,
    SEARCH_MOVIES_SUCCESS,
    SEARCH_MOVIES_FAILED,

    GET_ONE_MOVIE_STARTED,
    GET_ONE_MOVIE_SUCCESS,
    GET_ONE_MOVIE_FAILED,
} from '../types/movies'

const initialState = {
    movies: [],
    popularMovies: [],
    newMovies: [],
    searchMovies: [],
    currentMovie: {},
    total: 0,
    loading: false,
    error: null
}

export const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_MOVIES_STARTED:
            return { ...state, loading: true, error: null }
        case GET_ALL_MOVIES_SUCCESS:
            return { ...state, movies: payload.movies, total: payload.total, loading: false, error: null }
        case GET_ALL_MOVIES_FAILED:
            return { ...state, loading: false, error: payload }

        case GET_POPULAR_MOVIES_STARTED:
            return { ...state, loading: true, error: null }
        case GET_POPULAR_MOVIES_SUCCESS:
            return { ...state, popularMovies: payload, loading: false, error: null }
        case GET_POPULAR_MOVIES_FAILED:
            return { ...state, loading: false, error: payload }

        case GET_NEW_MOVIES_STARTED:
            return { ...state, loading: true, error: null }
        case GET_NEW_MOVIES_SUCCESS:
            return { ...state, newMovies: payload, loading: false, error: null }
        case GET_NEW_MOVIES_FAILED:
            return { ...state, loading: false, error: payload }

        case SEARCH_MOVIES_STARTED:
            return { ...state, loading: true, error: null }
        case SEARCH_MOVIES_SUCCESS:
            return { ...state, loading: false, error: null, searchMovies: payload }
        case SEARCH_MOVIES_FAILED:
            return { ...state, loading: false, error: payload }

        case GET_ONE_MOVIE_STARTED:
            return { ...state, loading: true, error: null }
        case GET_ONE_MOVIE_SUCCESS:
            return { ...state, loading: false, currentMovie: payload, error: null }
        case GET_ONE_MOVIE_FAILED:
            return { ...state, loading: false, error: payload }
        default:
            return state
    }
}