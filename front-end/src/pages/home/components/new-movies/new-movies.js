import PropTypes from 'prop-types'
import { MovieSlider } from '@/components'

const NewMovies = ({ movies }) => (
    <MovieSlider
        title="Новинки на сайте"
        movies={movies}
    />
)

NewMovies.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}

export default NewMovies