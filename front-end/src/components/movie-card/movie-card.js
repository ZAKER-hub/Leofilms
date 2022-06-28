import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './movie-card.module.css'

const MovieCard = ({ movie }) => (
    <div className={styles.card} data-rating={movie.rating.toFixed(1)}>
        <Link to={`/movies/${movie.kp_id}`}>
            <div
                className={styles.poster}
                style={{
                    backgroundImage: `url(${movie.poster})`
                }}
            />
        </Link>
        <div>
            <h3 className={styles.title}>{movie.title_ru || movie.title_en}</h3>
            <p className={styles.subtitle}>
                <span>{movie.year}</span>
                <span>{movie.genres[0]}</span>
                <span>{movie.countries[0]}</span>
            </p>
        </div>
    </div>
)

MovieCard.propTypes = {
    movie: PropTypes.shape({
        poster: PropTypes.string.isRequired,
        title_ru: PropTypes.string,
        title_en: PropTypes.string,
        year: PropTypes.number.isRequired,
        genres: PropTypes.array.isRequired,
        countries: PropTypes.array.isRequired,
        rating: PropTypes.number.isRequired
    }).isRequired
}

export default MovieCard
