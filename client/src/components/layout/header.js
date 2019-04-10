import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logoutUser} from "../../actions/authActions";

class Header extends Component {

    render() {
        const token = window.localStorage.getItem('jwtToken');
        console.log(token);
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <Link to="/home" className="navbar-brand">
                            LawyerUp <i className="fas fa-gavel ml-2"/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarText"
                                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            {/*<div className={`${token == null ? 'hidden' : ''}`}>*/}
                            <ul className={`navbar-nav ml-auto ${token !== null ? 'hidden' : ''}`}>
                                <li className="nav-item">
                                    <Link className={`nav-link ${window.location.href.includes('login')
                                        ? 'active' : ''}`} to='/login'>Login</Link>
                                </li>
                                <li className="nav-item ml-4">
                                    <Link className={`nav-link ${window.location.href.includes('signup')
                                        ? 'active' : ''}`} to='/signup'>Sign Up</Link>
                                </li>
                            </ul>
                            <ul className={`navbar-nav ml-auto ${token == null ? 'hidden' : ''}`}>
                                <div className="dropdown ml-4">
                                    <a className="btn btn-dark dropdown-toggle" href="#" role="button"
                                       id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                       aria-expanded="false">
                                        <i className="far fa-user"/>
                                    </a>

                                    <div className="dropdown-menu dropdown-menu-right"
                                         aria-labelledby="dropdownMenuLink">
                                        <Link className="dropdown-item" to="/profile">Profile</Link>
                                        <Link className="dropdown-item" to="/availability">Availability</Link>
                                        <div className="dropdown-divider"></div>
                                        <button onClick={() => {
                                            this.props.logoutUser();
                                        }} className="dropdown-item">Sign out
                                        </button>
                                    </div>
                                </div>

                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});


export default connect(mapStateToProps, {logoutUser})(Header);
