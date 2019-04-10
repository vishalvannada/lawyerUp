import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from "../layout/header";
import AvailabilityForm from './availabilityForm';
import {saveAvailability, getAvailability} from "../../actions/otherActions";
import jwt_decode from "jwt-decode";
import {bindActionCreators} from "redux/es/redux";


class Availability extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: null,
            loading: 'initial',
            availability : {
                monday: {
                    first: false,
                    second: false,
                    third: false,
                    fourth: false,
                    fifth: false,
                    sixth: false,
                    seventh: false,
                },
                tuesday: {
                    first: false,
                    second: false,
                    third: false,
                    fourth: false,
                    fifth: false,
                    sixth: false,
                    seventh: false,
                },
                wednesday: {
                    first: false,
                    second: false,
                    third: false,
                    fourth: false,
                    fifth: false,
                    sixth: false,
                    seventh: false,
                },
                thursday: {
                    first: false,
                    second: false,
                    third: false,
                    fourth: false,
                    fifth: false,
                    sixth: false,
                    seventh: false,
                },
                friday: {
                    first: false,
                    second: false,
                    third: false,
                    fourth: false,
                    fifth: false,
                    sixth: false,
                    seventh: false,
                },
            }
        };
    }

    loadData() {
        let promise = new Promise((resolve, reject) => {
            this.props.getAvailability('vishal.vannada@sjsu.edu');
            setTimeout(() => {
                resolve(this.props.user);
            }, 1000);
        });


        return promise;
    }

    componentDidMount() {

        this.setState({ loading: 'true' });
        this.loadData()
            .then((data) => {
                console.log(data);
                this.setState({
                    availability: this.props.user.availability,
                });
            });
    }

    onSubmit() {
        const decoded = jwt_decode(window.localStorage.getItem('jwtToken'));
        console.log(decoded);
        this.props.saveAvailability({
            availability: this.state.availability,
            email: decoded.email
        });
    }

    handleChangeValue = (event, day) => {
        let obj = {...this.state};
        obj['availability'][day][event.target.name] = !this.state['availability'][day][event.target.name];
        console.log(this.state);
        this.setState(obj);
    };


    render() {
        console.log(this.state);
        return (
            <div>
                <Header/>
                <br/>
                <br/>


                <div className="container text-center">
                    <h3>Hello! Submit your available times for a week.</h3>
                    <br/>
                    <hr/>
                    <AvailabilityForm day="monday"
                                      first={this.state.availability.monday.first}
                                      second={this.state.availability.monday.second}
                                      third={this.state.availability.monday.third}
                                      fourth={this.state.availability.monday.fourth}
                                      fifth={this.state.availability.monday.fifth}
                                      sixth={this.state.availability.monday.sixth}
                                      seventh={this.state.availability.monday.seventh}
                                      onChange={(a, e) => this.handleChangeValue(a, e)}/>
                    <hr/>
                    <AvailabilityForm day="tuesday"
                                      first={this.state.availability.tuesday.first}
                                      second={this.state.availability.tuesday.second}
                                      third={this.state.availability.tuesday.third}
                                      fourth={this.state.availability.tuesday.fourth}
                                      fifth={this.state.availability.tuesday.fifth}
                                      sixth={this.state.availability.tuesday.sixth}
                                      seventh={this.state.availability.tuesday.seventh}
                                      onChange={(a, e) => this.handleChangeValue(a, e)}/>
                    <hr/>
                    <AvailabilityForm day="wednesday"
                                      first={this.state.availability.wednesday.first}
                                      second={this.state.availability.wednesday.second}
                                      third={this.state.availability.wednesday.third}
                                      fourth={this.state.availability.wednesday.fourth}
                                      fifth={this.state.availability.wednesday.fifth}
                                      sixth={this.state.availability.wednesday.sixth}
                                      seventh={this.state.availability.wednesday.seventh}
                                      onChange={(a, e) => this.handleChangeValue(a, e)}/>
                    <hr/>
                    <AvailabilityForm day="thursday"
                                      first={this.state.availability.thursday.first}
                                      second={this.state.availability.thursday.second}
                                      third={this.state.availability.thursday.third}
                                      fourth={this.state.availability.thursday.fourth}
                                      fifth={this.state.availability.thursday.fifth}
                                      sixth={this.state.availability.thursday.sixth}
                                      seventh={this.state.availability.thursday.seventh}
                                      onChange={(a, e) => this.handleChangeValue(a, e)}/>
                    <hr/>
                    <AvailabilityForm day="friday"
                                      first={this.state.availability.friday.first}
                                      second={this.state.availability.friday.second}
                                      third={this.state.availability.friday.third}
                                      fourth={this.state.availability.friday.fourth}
                                      fifth={this.state.availability.friday.fifth}
                                      sixth={this.state.availability.friday.sixth}
                                      seventh={this.state.availability.friday.seventh}
                                      onChange={(a, e) => this.handleChangeValue(a, e)}/>
                </div>

                <br/>
                <button onClick={() => {
                    this.onSubmit()
                }} className="btn btn-primary">Submit Times
                </button>

            </div>
        );
    }
}

function mapStateToProps(state){
    return ({user: state.availability})
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({saveAvailability, getAvailability}, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Availability);
