import { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { MovieList, Loader, ErrorText } from '@/components'
import { getPopularMovies } from '@/store/actions/movies'

const PopularMovies = props => {
    const loading = props.loading ? <Loader /> : null
    const content = !(props.loading || props.error) ? <MovieList movies={props.popularMovies} /> : null
    const error = props.error ? <ErrorText /> : null

    useEffect(() => {
        props.getPopularMovies()
    }, [])

    return (
        <>
            {loading}
            {content}
            {error}
        </>
    )
}

const mapStateToProps = state => ({ ...state.movies })

const mapDispatchToProps = dispatch => {
    return {
        getPopularMovies: () => dispatch(getPopularMovies())
    }
}


PopularMovies.propTypes = {
    getPopularMovies: PropTypes.func.isRequired,
    popularMovies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularMovies)