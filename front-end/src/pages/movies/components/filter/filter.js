import PropTypes from 'prop-types'
import cx from 'classnames'
import genreList from '@/data/genres'
import styles from './filter.module.css'
import { RangeInput } from '@/components'

const Filter = ({ params, setParams, showMovies }) => {
    const setGenre = item => {
        if (params.genres.includes(item)) {
            setParams({ ...params, genres: params.genres.filter(genre => genre !== item) })
        } else {
            setParams({ ...params, genres: [...params.genres, item] })
        }
    }

    return (
        <div className={styles.container}>
            <h2>Фильтры</h2>
            <div>
                <div className={styles.controlGroup}>
                    <label>Год:</label>
                    <RangeInput
                        min={1970}
                        max={2021}
                        numFixed={0}
                        values={params.year}
                        setValues={e => setParams({ ...params, year: e })}
                        step={1}
                    />
                </div>
                <div className={styles.controlGroup}>
                    <label>Рейтинг:</label>
                    <RangeInput
                        min={0}
                        max={10}
                        numFixed={1}
                        values={params.rating}
                        setValues={e => setParams({ ...params, rating: e })}
                        step={0.1}
                    />
                </div>
                <div className={styles.controlGroup}>
                    <label htmlFor="">Жанры:</label>
                    <ul className={styles.selectBox}>
                        {genreList.map(item =>
                            <li
                                key={item}
                                onClick={() => setGenre(item)}
                                className={cx({
                                    [styles.checked]: params.genres.includes(item)
                                })}
                            >{item}</li>
                        )}
                    </ul>
                </div>

                <button className={styles.button} onClick={showMovies}>
                    Показать
                </button>
            </div>
        </div>
    )
}

Filter.propTypes = {
    params: PropTypes.shape({
        year: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
        rating: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
        genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    })
}

export default Filter