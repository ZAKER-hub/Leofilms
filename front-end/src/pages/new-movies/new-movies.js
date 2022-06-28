import { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { MovieList, Loader, ErrorText } from '@/components'
import { getNewMovies } from '@/store/actions/movies'

const NewMovies = props => {
    useEffect(() => {
        props.getNewMovies()
    }, [])

    const loading = props.loading ? <Loader /> : null
    const content = !(props.loading || props.error) ? <MovieList movies={props.newMovies} /> : null
    const error = props.error ? <ErrorText /> : null

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
        getNewMovies: () => dispatch(getNewMovies())
    }
}

NewMovies.propTypes = {
    getNewMovies: PropTypes.func.isRequired,
    newMovies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}


export default connect(mapStateToProps, mapDispatchToProps)(NewMovies)