import { useEffect } from "react";
import { connect } from 'react-redux'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
    Home,
    Movies,
    NewMovies,
    PopularMovies,
    MovieView,
    Search,
    LeongardTest,
    Account,
    Login,
    Register
} from '@/pages'
import Layout from '@/layouts/layout'
import '@/styles.css'
import { auth } from '@/store/actions/users'

const App = ({ auth }) => {
    useEffect(() => {
        auth()
    }, [])

    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/movies" component={Movies}/>
                    <Route exact path="/new" component={NewMovies} />
                    <Route exact path="/popular" component={PopularMovies} />
                    <Route exact path="/movies/:id" component={MovieView}/>
                    <Route exact path="/search" component={Search} />
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/test" component={LeongardTest}/>
                    <Route exact path="/account" component={Account}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        auth: () => dispatch(auth())
    }
}

App.propTypes = {
    auth: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(App)