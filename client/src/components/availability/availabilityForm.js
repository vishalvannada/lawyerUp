import React, {Component} from 'react';
import {connect} from "react-redux";


class AvailabilityForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            first: true,
            second: false,
            third: false,
            fourth: false,
            fifth: false,
            sixth: false,
            seventh: false,
            eight: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        console.log(event.target.value);
        const target = event.target;

        const value = target.value === 'on';
        const name = target.name;

        console.log(this.state.first);
        this.setState({
            [name]: value
        });
    }

    handleSubmit() {
        console.log(this.state);
    }


    render() {
        return (
            <div>
                <form>
                    <div className="row">

                        <h3 className="col-3">{this.props.day.toUpperCase()}</h3>
                        <label
                            className={`ml-3 btn btn-outline-info ${this.props.first ? 'active' : ''}`}>
                            <input name="first" type="checkbox" checked={this.props.first} className="hidden"
                                   onChange={(e) => {this.props.onChange(e, this.props.day)}}/> 10 - 11 AM
                        </label>

                        <label
                            className={`ml-3 btn btn-outline-info ${this.props.second ? 'active' : ''}`}>
                            <input name="second" type="checkbox" checked={this.props.second} className="hidden"
                                   onChange={(e) => {this.props.onChange(e, this.props.day)}}/> 11 - 12 PM
                        </label>

                        <label
                            className={`ml-3 btn btn-outline-info ${this.props.third ? 'active' : ''}`}>
                            <input name="third" type="checkbox" checked={this.props.third} className="hidden"
                                   onChange={(e) => {this.props.onChange(e, this.props.day)}}/> 12 - 1 PM
                        </label>

                        <label
                            className={`ml-3 btn btn-outline-info ${this.props.fourth ? 'active' : ''}`}>
                            <input name="fourth" type="checkbox" checked={this.props.fourth} className="hidden"
                                   onChange={(e) => {this.props.onChange(e, this.props.day)}}/> 1 - 2 PM
                        </label>

                        <label
                            className={`ml-3 btn btn-outline-info ${this.props.fifth ? 'active' : ''}`}>
                            <input name="fifth" type="checkbox" checked={this.props.fifth} className="hidden"
                                   onChange={(e) => {this.props.onChange(e, this.props.day)}}/> 2 - 3 PM
                        </label>

                        <label
                            className={`ml-3 btn btn-outline-info ${this.props.sixth ? 'active' : ''}`}>
                            <input name="sixth" type="checkbox" checked={this.props.sixth} className="hidden"
                                   onChange={(e) => {this.props.onChange(e, this.props.day)}}/> 3 - 4 PM
                        </label>

                        <label
                            className={`ml-3 btn btn-outline-info ${this.props.seventh ? 'active' : ''}`}>
                            <input name="seventh" type="checkbox" checked={this.props.seventh} className="hidden"
                                   onChange={(e) => {this.props.onChange(e, this.props.day)}}/> 4 - 5 PM
                        </label>
                    </div>
                </form>
            </div>
        )
    }
}

export default (connect(null, null)(AvailabilityForm));