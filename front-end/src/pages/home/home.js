import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    PopularMovies,
    NewMovies,
    Genres,
    TestLink
} from './components'
import styles from './home.module.css'
import { getPopularMovies, getNewMovies } from '@/store/actions/movies'

const Home = props => {
    useEffect(() => {
        props.getPopularMovies()
        props.getNewMovies()
    }, [])

    return (
        <div>
            <div className={styles.title}>
                <h1>LEOFILMS - бесплатные фильмы онлайн</h1>
            </div>
            <PopularMovies movies={props.popularMovies} />
            <TestLink />
            <Genres />
            <NewMovies movies={props.newMovies} />
        </div>
    )
}

const mapStateToProps = state => ({ ...state.movies })

const mapDispatchToProps = dispatch => {
    return {
        getPopularMovies: () => dispatch(getPopularMovies()),
        getNewMovies: () => dispatch(getNewMovies())
    }
}

Home.propTypes = {
    getPopularMovies: PropTypes.func.isRequired,
    getNewMovies: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    newMovies: PropTypes.arrayOf(PropTypes.object.isRequired),
    popularMovies: PropTypes.arrayOf(PropTypes.object.isRequired)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)