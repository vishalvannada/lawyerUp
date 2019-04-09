import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from './header';
import {checkAuth} from "../../actions/otherActions";


class Home extends Component {

    render() {
        return (
            <div>
                <Header/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h2>
                    <code>Welcome User</code>
                </h2>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
})


export default connect(mapStateToProps, {checkAuth})(Home);
