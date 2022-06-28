import PropTypes from 'prop-types'
import { MovieSlider } from '@/components'

const PopularMovies = ({ movies }) => (
    <MovieSlider
        title="Популярные фильмы"
        movies={movies}
    />
)

PopularMovies.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}

export default PopularMovies