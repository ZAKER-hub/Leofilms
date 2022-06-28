import { Link } from 'react-router-dom'
import styles from './test-link.module.css'

const TestLink = () => (
    <div className={styles.section}>
        <h2 className={styles.title}>Подберём для вас фильмы по методике Карла Леонгарда</h2>
        <h4 className={styles.subtitle}>Это займёт  не много времени и абсолютно <span>бесплатно</span>.</h4>
        <Link to="/test" className={styles.link}>Пройти тест</Link>
    </div>
)

export default TestLink