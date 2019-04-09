import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from "../layout/header";

class Profile extends Component {

    render() {
        return (
            <div>
                <Header/>
                <div style={{'background': '#e8e8e8'}}>
                    <div className="container">
                        <br/>
                        <h4 className="text-left">Account</h4>
                        <hr/>
                        <br/>
                        <h3 className="text-left">Hi! User</h3>
                        <br/>
                    </div>
                </div>

                <br/>
                <div className="container">
                    <div className="row">
                        <div className="text-left col-lg-3">
                            <i style={{'font-size' : '100px'}} className="far fa-user-circle"/>
                        </div>

                        <div className="text-left col-lg-3">
                            Email
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});


export default connect(mapStateToProps, null)(Profile);
