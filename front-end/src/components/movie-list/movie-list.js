import PropTypes from 'prop-types'
import { MovieCard } from '@/components'
import styles from './movie-list.module.css'

const MovieList = ({ movies }) => (
    <div className={styles.grid}>
        {movies && movies.map(movie => (
            <MovieCard key={movie.kp_id} movie={movie} />
        ))}
    </div>
)

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object.isRequired)
}

export default MovieList