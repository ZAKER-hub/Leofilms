import { useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import questions from '@/data/questions'
import leongardTestResult from '@/utils/leongard-test'
import styles from './leongard-test.module.css'
import {saveTestResult} from '@/store/actions/users'

const LeongardTest = props => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState([])
    const [isTestFinished, setIsTestFinished] = useState(false)

    const history = useHistory()

    const handleAnswer = answer => {
        setAnswers([...answers, answer])
        setCurrentQuestion(currentQuestion + 1)

        if (currentQuestion === questions.length - 1) {
            setIsTestFinished(true)
        }
    }

    const finishTest = async () => {
        const result = leongardTestResult(answers)

        await props.saveTestResult(props.user.id, result)

        history.push({ pathname: '/movies', state: result })
    }

    const redirectToMovies = () => {
        history.push({ pathname: '/movies', state: props.user.testResult })
    }

    const progress = ((currentQuestion*100)/questions.length).toFixed(0)

    if (!props.isAuth) {
        return <Redirect to={{
            pathname: "/login", state: {
                error: 'Авторизируйтесь, чтобы пройти тест.'
            }}}
        />
    }

    return (
        <div className="section">
            <h2 className="section-title">Тест Леонгарда</h2>
            <div>
                <div className={styles.progress}>
                    <div style={{ width: `${progress}%` }}>
                        Вопрос {isTestFinished ? currentQuestion : currentQuestion + 1} из {questions.length} ({progress}%)
                    </div>
                </div>

                <div className={styles.question}>
                    <h3>
                        {isTestFinished
                            ? 'Нажмите "Завершить тест", чтобы просмотреть результаты'
                            : questions[currentQuestion]
                        }
                    </h3>
                </div>

                <div className={styles.buttons}>
                    {!isTestFinished ?
                        <>
                            <button onClick={() => handleAnswer(true)}>Да</button>
                            <button onClick={() => handleAnswer(false)}>Нет</button>
                        </>
                        : <button onClick={finishTest}>Завершить тест</button>
                    }
                </div>

                {props.user.testResult.length ?
                    <div className={styles.hasTestResult}>
                        <h2>
                            Вы уже проходили тест. Хотите перейти на страницу с отфильтрованными по вашему психотипу фильмами?
                        </h2>
                        <button onClick={redirectToMovies}>Перейти</button>
                    </div>
                    : null
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({ ...state.users })

const mapDispatchToProps = dispatch => {
    return {
        saveTestResult: (user_id, result) => dispatch(saveTestResult(user_id, result))
    }
}

LeongardTest.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    saveTestResult: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(LeongardTest)