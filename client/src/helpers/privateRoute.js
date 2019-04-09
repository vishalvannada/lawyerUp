import React, {Component} from 'react';
import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";

class PrivateRoute extends Component {

    render() {
        const Here  = this.props.component;
        return (
            <Route render={props => (
                window.localStorage.getItem('jwtToken') !== null?
                    <Here/> :
                    <Redirect to={{pathname: '/login', props: props, state: {from: props.location}}}/>
            )}/>


        )
    }
}


export default connect(null, null)(PrivateRoute)
