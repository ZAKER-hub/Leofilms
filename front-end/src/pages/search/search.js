import { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { MovieList, Loader, ErrorText } from '@/components'
import { searchMovies } from '@/store/actions/movies'

const Search = props => {
    const searchParams = new URLSearchParams(props.location.search)
    const searchQuery = searchParams.get('query')

    const loading = props.loading ? <Loader /> : null
    const content = !(props.loading || props.error) ? <MovieList movies={props.searchMovies} /> : null
    const error = props.error ? <ErrorText /> : null

    useEffect(() => {
        props.getMovies(searchQuery)
    }, [searchQuery])

    return (
        <div>
            {loading}
            {content}
            {error}
        </div>
    )
}

const mapStateToProps = state => ({ ...state.movies })

const mapDispatchToProps = dispatch => {
    return {
        getMovies: query => dispatch(searchMovies(query))
    }
}

Search.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    searchMovies: PropTypes.array.isRequired,
    getMovies: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)