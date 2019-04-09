import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../layout/header';
import {registerUser} from "../../actions/authActions";
import {Field, reduxForm} from "redux-form";


const required = value => value ? undefined : 'Required';
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;
const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or greater` : undefined;
const maxLength15 = maxLength(15);
const minLength8 = minLength(8);
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined;
const minValue18 = minValue(18)
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined;
const tooOld = value =>
    value && value > 65 ? 'You might be too old for this' : undefined;
const aol = value =>
    value && /.+@aol\.com/.test(value) ?
        'Really? You still use AOL for your email?' : undefined;


class SignUp extends Component {

    renderField = ({input, label, type, meta: {touched, error, warning}}) => {
        const className = `form-control input-login ${touched && error ? 'border-red' : ''}`;
        return (
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">{label}</label>
                <input {...input} placeholder={label} type={type} className={className}
                       aria-describedby="emailHelp"/>
                {touched && ((error && <span className="text-danger">{error}</span>) ||
                    (warning && <span className="text-warning">{warning}</span>))}
            </div>
        )
    }

    onSubmit(values) {
        console.log(values);
        this.props.registerUser(values);
    }

    render() {
        const {handleSubmit, pristine, reset, submitting} = this.props;
        console.log("hete");
        return (
            <div>
                <Header/>

                <br/>
                <br/>
                <form className="app-form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field name="username" type="text"
                           component={this.renderField} label="Username"
                           validate={required}
                    />
                    <Field name="email" type="email"
                           component={this.renderField} label="Email"
                           validate={email}
                           warn={aol}
                    />

                    <Field name="password" type="password"
                           component={this.renderField} label="Password"
                           validate={[required, minLength8, maxLength15]}
                           warn={tooOld}
                    />

                    <Field name="age" type="number"
                           component={this.renderField} label="Age"
                           validate={[required, number, minValue18]}
                           warn={tooOld}
                    />
                    <div>
                        <button type="submit" className="btn btn-primary" disabled={submitting}>Sign Up</button>
                        <button type="button" className="btn btn-primary" style={{'marginLeft': '4%'}}
                                disabled={pristine || submitting} onClick={reset}>Clear Values
                        </button>
                    </div>
                </form>


                {/*<iframe width="350" height="430" allow="microphone;"*/}
                {/*        src="https://console.dialogflow.com/api-client/demo/embedded/c7724262-36ed-4603-a276-be6411fac3af"></iframe>*/}


            </div>
        );
    }
}

const mapStateToProps = state => {
    return ({error: state.user})
}


export default reduxForm({
    form: 'signupForm'
})(connect(mapStateToProps, {registerUser})(SignUp));
