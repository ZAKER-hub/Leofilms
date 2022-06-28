import { Navbar, Footer } from '@/components'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './layout.module.css'

const Layout = ({ children }) => (
    <>
        <Navbar />
        <main className={cx(styles.container, 'wrapper')}>
            {children}
        </main>
        <Footer />
    </>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout