import { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import cx from 'classnames'
import LogoIcon from '@/assets/navbar-logo.svg'
import MenuIcon from '@/assets/navbar-menu.svg'
import CloseIcon from '@/assets/navbar-close.svg'
import SearchIcon from '@/assets/navbar-search.svg'
import UserIcon from '@/assets/navbar-user.svg'
import styles from './navbar.module.css'

const links = [
    {
        path: '/movies',
        title: 'Фильмы'
    },
    {
        path: '/popular',
        title: 'Популярное',
    },
    {
        path: '/new',
        title: 'Новое'
    },
    {
        path: '/test',
        title: 'Пройти тест'
    }
]

const Navbar = props => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const [searchField, setSearchField] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    const history = useHistory()

    const closeMobileMenu = () => setMobileMenu(false)
    const toggleMobileMenu = () => setMobileMenu(!mobileMenu)

    const toggleSearchField = () => {
        if (window.innerWidth <= 1000) {
            setSearchField(!searchField)
        }
    }

    const handleSearch = e => {
        if (e.keyCode === 13) {
            if (searchValue.trim().length) {
                history.push(`/search?query=${searchValue}`)
            }
        }
    }

    return (
        <nav className={styles.container}>
            <div className="wrapper">
                <img
                    className={styles.menuIcon}
                    src={mobileMenu ? CloseIcon : MenuIcon}
                    alt="Menu"
                    onClick={toggleMobileMenu}
                />

                <NavLink to="/" className={styles.logo}>
                    <img src={LogoIcon} alt="Logo" />
                    <h4>LEOFILMS</h4>
                </NavLink>

                <ul className={
                    cx({
                        [styles.menu]: true,
                        [styles.active]: mobileMenu
                    })
                }>
                    {links.map(link =>
                        <li key={link.title} onClick={closeMobileMenu}>
                            <NavLink exact to={link.path} activeStyle={{
                                borderBottom: '2px solid #fff',
                                paddingBottom: '2px'
                            }}>
                                {link.title}
                            </NavLink>
                        </li>
                    )}
                </ul>

                <div className={cx({
                    [styles.search]: true,
                    [styles.active]: searchField
                })}>
                    <input
                        type="text"
                        value={searchValue}
                        onChange={e => setSearchValue(e.target.value)}
                        placeholder="Впишите название"
                        onKeyDown={handleSearch}
                    />
                    <img
                        className={styles.searchIcon}
                        onClick={toggleSearchField}
                        src={searchField ? CloseIcon : SearchIcon}
                        alt="Search"
                    />
                </div>

                <NavLink to="/account">
                    <img src={UserIcon} className={styles.userIcon} alt="Account" />
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar