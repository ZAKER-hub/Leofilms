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
    GET_ONE_MOVIE_FAILED
} from '../types/movies'

export const getAllMoviesStarted = () => ({ type: GET_ALL_MOVIES_STARTED })
export const getAllMoviesSuccess = data => ({ type: GET_ALL_MOVIES_SUCCESS, payload: data })
export const getAllMoviesFailed = error => ({ type: GET_ALL_MOVIES_FAILED, payload: error })

export const getPopularMoviesStarted = () => ({ type: GET_POPULAR_MOVIES_STARTED })
export const getPopularMoviesSuccess = data => ({ type: GET_POPULAR_MOVIES_SUCCESS, payload: data })
export const getPopularMoviesFailed = error => ({ type: GET_POPULAR_MOVIES_FAILED, payload: error })

export const getNewMoviesStarted = () => ({ type: GET_NEW_MOVIES_STARTED })
export const getNewMoviesSuccess = data => ({ type: GET_NEW_MOVIES_SUCCESS, payload: data })
export const getNewMoviesFailed = error => ({ type: GET_NEW_MOVIES_FAILED, payload: error })

export const searchMoviesStarted = () => ({ type: SEARCH_MOVIES_STARTED })
export const searchMoviesSuccess = data => ({ type: SEARCH_MOVIES_SUCCESS, payload: data })
export const searchMoviesFailed = error => ({ type: SEARCH_MOVIES_FAILED, payload: error })

export const getOneMoviesStarted = () => ({ type: GET_ONE_MOVIE_STARTED })
export const getOneMoviesSuccess = data => ({ type: GET_ONE_MOVIE_SUCCESS, payload: data })
export const getOneMoviesFailed = error => ({ type: GET_ONE_MOVIE_FAILED, payload: error })