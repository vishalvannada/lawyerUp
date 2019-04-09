import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router, Route, Switch} from "react-router-dom";
import {createBrowserHistory} from 'history';
import Home from './components/layout/home';
import Login from './components/auth/login';
import SignUp from './components/auth/signUp';
import Profile from './components/profile/profile';
import Error from './components/error';
import PrivateRoute from './helpers/privateRoute';
import AuthenticatedRoute from './helpers/authenticatedRoute';
import './App.css';

export const history = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router history={history}>
                    <Switch>
                        <AuthenticatedRoute path="/login" component={Login}/>
                        <AuthenticatedRoute path="/signup" component={SignUp}/>
                        <PrivateRoute path="/home" component={Home}/>
                        <PrivateRoute path="/profile" component={Profile}/>
                        <Route path="*" component={Error}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
})


// const mapDispatchToProps = dispatch => ({
//  simpleAction: () => dispatch(simpleAction())
// })

export default connect(mapStateToProps, null)(App);
