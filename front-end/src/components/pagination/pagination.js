import PropTypes from 'prop-types'
import Arrow from '@/assets/arrow.svg'
import styles from './pagination.module.css'

const Pagination = ({ currentPage, setCurrentPage, total }) => (
    <>
        {total > 0
            ? <div className={styles.pagination}>
                <button onClick={() => setCurrentPage(1)}>
                    <img src={Arrow} alt=""/>
                </button>

                {currentPage > 1 &&
                    <button onClick={() => setCurrentPage(currentPage - 1)}>
                        {currentPage - 1}
                    </button>
                }

                <button className={styles.active}>{currentPage}</button>

                {currentPage < total - 1 &&
                    <button onClick={() => setCurrentPage(currentPage + 1)}>
                        {currentPage + 1}
                    </button>
                }

                <button onClick={() => setCurrentPage(total)}>
                    <img src={Arrow} alt=""/>
                </button>
            </div>
            : null
        }
    </>
)

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    setCurrentPage: PropTypes.func.isRequired,
    total: PropTypes.number.isRequired
}

export default Pagination