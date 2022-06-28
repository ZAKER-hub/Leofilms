import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '@/store/actions/users'
import { useForm } from '@/hooks/useForm'
import styles from './login.module.css'

const Schema = {
    email: { required: true, isEmail: true },
    password: { required: true, min: 6 }
}

const Login = props => {
    const history = useHistory()

    const onSubmit = async values => {
        await props.loginUser(values)
        history.push('/account')
    }

    const { values, handleChange, handleSubmit, errors } = useForm({
        email: '',
        password: '',
    }, onSubmit, Schema)

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.group}>
                <label htmlFor="email">E-mail</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                />
                {errors.email
                    ? <span className={styles.error}>{errors.email}</span>
                    : <span>Введите электронную почту, например: username12@mail.ru</span>
                }
            </div>

            <div className={styles.group}>
                <label htmlFor="password">Пароль</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                />
                {errors.password
                    ? <span className={styles.error}>{errors.password}</span>
                    : <span>Введите свой пароль</span>
                }
            </div>

            <div className={styles.link}>
                Нет аккаунта?&nbsp;
                <Link to="/register">Зарегистрируйтесь</Link>
            </div>

            <button type="submit">Авторизация</button>
        </form>
    )
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: body => dispatch(login(body))
    }
}

export default connect(null, mapDispatchToProps)(Login)