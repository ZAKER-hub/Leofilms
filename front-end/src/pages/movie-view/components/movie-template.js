import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addToFavorite, addToWatchLater } from '@/store/actions/users'
import styles from './movie-template.module.css'

const MovieTemplate = props => {
    const { movie } = props

    const addToFavorite = () => props.addToFavorite(props.user.id, movie)
    const addToWatchLater = () => props.addToWatchLater(props.user.id, movie)

    return (
        <>
            {Object.keys(movie).length ?
                <div>
                    <div className={styles.info}>
                        <img src={movie.poster} alt="" />
                        <div className={styles.about}>
                            <h2>{movie.title_ru || movie.title_en}</h2>
                            <p>Рейтинг: <span>{movie.rating.toFixed(1)}</span></p>
                            <p>Жанр: <span>{movie.genres.join(', ')}</span></p>
                            <p>Год выхода: <span>{movie.year}</span></p>
                            <p>Режиссёр: <span>{movie.producer}</span></p>
                            <p>Страна: <span>{movie.countries.join(', ')}</span></p>
                            <p>Актёры: <span>{movie.actors}</span></p>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h3>Описание фильма</h3>
                        <p>{movie.description}</p>
                    </div>
                    <div>
                        <iframe
                            src={movie.player}
                            frameBorder="0"
                            width="100%"
                            height="500px"
                            allowFullScreen
                        />
                    </div>
                    {props.isAuth
                        ? <div className={styles.buttons}>
                            <button onClick={addToWatchLater}>Добавить в "Смотреть позже"</button>
                            <button onClick={addToFavorite}>Добавить в "Любимое"</button>
                        </div>
                        : null
                    }
                </div>
                : null
            }
        </>
    )
}

MovieTemplate.propTypes = {
    movie: PropTypes.shape({
        poster: PropTypes.string,
        title_ru: PropTypes.string,
        title_en: PropTypes.string,
        year: PropTypes.number,
        genres: PropTypes.array.isRequired,
        countries: PropTypes.array.isRequired,
        rating: PropTypes.number.isRequired
    }).isRequired,
    addToFavorite: PropTypes.func.isRequired,
    addToWatchLater: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({ ...state.users })

const mapDispatchToProps = dispatch => {
    return {
        addToFavorite: (user_id, movie_id) => dispatch(addToFavorite(user_id, movie_id)),
        addToWatchLater: (user_id, movie_id) => dispatch(addToWatchLater(user_id, movie_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieTemplate)