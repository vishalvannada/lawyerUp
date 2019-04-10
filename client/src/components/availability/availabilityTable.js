import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from "redux-form";

class AvailabilityTable extends Component {

    onSubmit(values) {
        console.log(values);
    }

    renderField = ({input}) => {
        return (
            <div className="form-group">
                <div className="form-check form-check-inline">
                    <input {...input} className="form-check-input btn btn-primary" type="checkbox" id="inlineCheckbox1"
                           value={true}/>
                </div>
            </div>
        )
    };

    render() {
        return (
            <div>
                <form onSubmit={() => this.onSubmit()}>
                    <Field name="checkBox" component={this.renderField}/>

                    <Field name="checkBox" component={this.renderField}/>

                    <Field name="checkBox" component={this.renderField}/>

                    <Field name="checkBox" component={this.renderField}/>

                    <Field name="checkBox" component={this.renderField}/>

                    <Field name="checkBox" component={this.renderField}/>

                    <Field name="checkBox" component={this.renderField}/>

                    <Field name="checkBox" component={this.renderField}/>
                </form>
            </div>
        );
    }
}



export default reduxForm({
    form: 'availabilityForm'
})(connect(null, null)(AvailabilityTable));

