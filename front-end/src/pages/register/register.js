import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { register } from '@/store/actions/users'
import { useForm } from '@/hooks/useForm'
import styles from './register.module.css'

const Schema = {
    nickname: { min: 2, max: 36, required: true },
    email: { required: true, isEmail: true },
    password: { required: true, min: 6 }
}

const Register = ({ registerUser }) => {
    const history = useHistory()

    const onSubmit = async values => {
        await registerUser(values)
        history.push('/login')
    }

    const { values, handleChange, handleSubmit, errors } = useForm({
        nickname: '',
        email: '',
        password: ''
    }, onSubmit, Schema)

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.group}>
                <label htmlFor="nickname">Никнейм</label>
                <input
                    type="text"
                    id="nickname"
                    name="nickname"
                    value={values.nickname}
                    onChange={handleChange}
                />
                {errors.nickname
                    ? <span className={styles.error}>{errors.nickname}</span>
                    : <span>Введите свой никнейм, например: username12</span>
                }
            </div>

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
                Есть аккаунт?&nbsp;
                <Link to="/login">Авторизируйтесь</Link>
            </div>

            <button type="submit">Регистрация</button>
        </form>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        registerUser: body => dispatch(register(body))
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(Register)