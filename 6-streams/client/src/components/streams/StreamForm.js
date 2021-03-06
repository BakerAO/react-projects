import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
    onSubmit = (formValues) => {
        this.props.onFormSubmit(formValues);
    }

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            );
        }
    }

    renderInput = (formProps) => {
        // Check out the default meta properties for a Redux-Form Field
        // console.log(formProps.meta);

        const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete="off" />
                {this.renderError(formProps.meta)}
            </div>
        );
    }

    render() {
        // this.props.handleSubmit() comes from Redux-Forms
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">
                    Submit
                </button>
            </form>
        );
    }
};

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }

    return errors;
}

export default reduxForm({
    form: 'streamForm',
    validate: validate
})(StreamForm);
