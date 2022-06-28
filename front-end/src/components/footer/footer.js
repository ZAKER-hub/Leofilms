import styles from './footer.module.css'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <footer className={styles.container}>
            <div className="wrapper">
                <p className={styles.copyright}>
                    LeoFilms Russia - фильмы и сериалы бесплатно, 2021 г.
                </p>
                <div className={styles.scroll} onClick={scrollToTop} />
            </div>
        </footer>
    )
}

export default Footer