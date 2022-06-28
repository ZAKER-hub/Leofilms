import { useHistory } from 'react-router-dom'
import genres from '@/data/genres'
import styles from './genres.module.css'

const Genres = () => {
    const history = useHistory()

    const handleClick = genre => {
        history.push({ pathname: '/movies', state: [genre] })
    }

    return (
        <div className="section">
            <h2 className="section-title">Жанры</h2>
            <div className={styles.list}>
                {genres.map(genre =>
                    <button
                        key={genre}
                        className={styles.button}
                        onClick={() => handleClick(genre)}
                    >{genre}</button>
                )}
            </div>
        </div>
    )
}

export default Genres