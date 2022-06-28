import {
    getAllMoviesStarted,
    getAllMoviesSuccess,
    getAllMoviesFailed,

    getPopularMoviesStarted,
    getPopularMoviesSuccess,
    getPopularMoviesFailed,

    getNewMoviesStarted,
    getNewMoviesSuccess,
    getNewMoviesFailed,

    searchMoviesStarted,
    searchMoviesFailed,
    searchMoviesSuccess,

    getOneMoviesStarted,
    getOneMoviesSuccess,
    getOneMoviesFailed,
} from '../actionCreators/movies'

import MovieService from '@/services/MovieService'

export const getAllMovies = params => {
    return async dispatch => {
        dispatch(getAllMoviesStarted())

        try {
            const response = await MovieService.getAll(params)

            dispatch(getAllMoviesSuccess(response))
        } catch (error) {
            dispatch(getAllMoviesFailed(error.message))
        }
    }
}

export const getPopularMovies = () => {
    return async dispatch => {
        dispatch(getPopularMoviesStarted())

        try {
            const response = await MovieService.getPopular()

            dispatch(getPopularMoviesSuccess(response))
        } catch (error) {
            dispatch(getPopularMoviesFailed(error.message))
        }
    }
}

export const getNewMovies = () => {
    return async dispatch => {
        dispatch(getNewMoviesStarted())

        try {
            const response = await MovieService.getNew()

            dispatch(getNewMoviesSuccess(response))
        } catch (error) {
            dispatch(getNewMoviesFailed(error.message))
        }
    }
}

export const searchMovies = query => {
    return async dispatch => {
        dispatch(searchMoviesStarted())

        try {
            const response = await MovieService.search(query)

            dispatch(searchMoviesSuccess(response))
        } catch (error) {
            dispatch(searchMoviesFailed(error.message))
        }
    }
}

export const getOneMovie = id => {
    return async dispatch => {
        dispatch(getOneMoviesStarted())

        try {
            const response = await MovieService.getOne(id)

            dispatch(getOneMoviesSuccess(response))
        } catch (error) {
            dispatch(getOneMoviesFailed(error.message))
        }
    }
}