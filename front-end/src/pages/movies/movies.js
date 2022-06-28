import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { MovieList, Pagination } from '@/components'
import Filter from './components/filter/filter'
import { getAllMovies } from '@/store/actions/movies'
import styles from './movies.module.css'
import { ErrorText, Loader } from '@/components'
import genreData from '@/data/genres'

const Movies = props => {
    const startGenres = props.location.state || genreData

    const [page, setPage] = useState(1)
    const [params, setParams] = useState({
        year: [2000, 2018],
        rating: [5.8, 10],
        genres: [...startGenres]
    })

    const showMovies = () => {
        props.getAllMovies({ ...params, page  })
    }

    useEffect(() => {
        showMovies()

        window.scrollTo(0, 0)
    }, [page])

    const loading = props.loading ? <Loader /> : null
    const error = props.error ? <ErrorText /> : null

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {loading}
                {error}
                {!(props.loading || props.error)
                    ? <>
                        <MovieList movies={props.movies} />
                        <Pagination
                            currentPage={page}
                            setCurrentPage={setPage}
                            total={props.total}
                        />
                    </>
                    : null
                }
            </div>
            <Filter
                params={params}
                setParams={setParams}
                showMovies={showMovies}
            />
        </div>
    )
}

Movies.propTypes = {
    getAllMovies: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    error: PropTypes.string
}

const mapStateToProps = state => ({ ...state.movies })

const mapDispatchToProps = dispatch => {
    return {
        getAllMovies: params => dispatch(getAllMovies(params))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)