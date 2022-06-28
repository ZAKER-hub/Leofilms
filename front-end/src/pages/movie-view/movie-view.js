import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getOneMovie } from '@/store/actions/movies'
import { Loader, ErrorText } from '@/components'
import MovieTemplate from './components/movie-template'

const MovieView = props => {
    const { id } = useParams()
    const { currentMovie: movie } = props

    useEffect(() => {
        props.getOneMovie(id)
    }, [])

    const loading = props.loading ? <Loader /> : null
    const error = props.error ? <ErrorText /> : null
    const content = !(props.loading || props.error) ? <MovieTemplate movie={movie} /> : null

    return (
        <>
            {loading}
            {error}
            {content}
        </>
    )
}

const mapStateToProps = state => ({ ...state.movies })

const mapDispatchToProps = dispatch => {
    return {
        getOneMovie: id => dispatch(getOneMovie(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieView)