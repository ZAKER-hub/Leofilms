import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { MovieSlider } from '@/components'
import { logout } from '@/store/actions/users'
import UserAvatar from '@/assets/UserAvatar.png'
import styles from './account.module.css'

const Account = ({ user, isAuth, loading, logoutUser }) => {
    if (!loading && !isAuth) {
        return <Redirect to={{
            pathname: "/login", state: {
                msg: 'Авторизируйтесь, чтобы получить доступ к личному кабинету'
            }}}
        />
    }

    return (
        <div>
            <div className={styles.profile}>
                <img src={UserAvatar} alt=""/>

                <ul className={styles.info}>
                    <li>Логин: <span>{user.nickname}</span></li>
                    <li>E-mail: <span>{user.email}</span></li>
                </ul>
            </div>

            <MovieSlider title="Любимые" movies={user.favoriteMovies} />

            <MovieSlider title="Смотреть позже" movies={user.watchLaterMovies} />

            <button onClick={logoutUser} className={styles.button}>Выйти</button>
        </div>
    )
}

const mapStateToProps = state => ({ ...state.users })

const mapDispatchToProps = dispatch => {
    return {
        logoutUser: () => dispatch(logout())
    }
}

Account.propTypes = {
    user: PropTypes.object.isRequired,
    isAuth: PropTypes.bool.isRequired,
    logoutUser: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)