import BrainsImage from '@/assets/brains.svg'
import styles from './modal.module.css'

const Modal = () => {
    return (
        <>
            <div className={styles.modal}>
                <h2 className={styles.title}>Подберём для вас фильмы по методике Карла Леонгарда</h2>
                <div className={styles.body}>
                    <img src={BrainsImage} alt="" />
                    <p>Это займёт не много времени и абсолютно <span>бесплатно</span>.</p>
                </div>
            </div>
            <div className={styles.overlay} />
        </>
    )
}

export default Modal