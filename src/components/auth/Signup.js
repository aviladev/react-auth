import React, { Component, Fragment } from 'react'
import { reduxForm, Field } from 'redux-form'

class Signup extends Component {
  handleFormSubmit = (fields) => {
    console.log(fields)
  }

  renderInput = ({
    input, type, id,
    meta: { touched, error }
  }) => (
    <Fragment>
      <input
        className={`form-control
          ${touched && error && 'is-invalid'}
          ${touched && !error && 'is-valid'}
        `}
        {...input}
        type={type}
        id={id}
      />
      {
        touched &&
        error &&
        <div className='invalid-feedback'> {error} </div>
      }
    </Fragment>
  )

  render () {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <fieldset className='form-group'>
          <label htmlFor='email'>Email:</label>
          <Field
            name='email'
            type='email'
            id='email'
            component={this.renderInput}
          />
        </fieldset>

        <fieldset className='form-group'>
          <label htmlFor='password'>Password:</label>
          <Field
            name='password'
            type='password'
            id='password'
            component={this.renderInput}
          />
        </fieldset>

        <fieldset className='form-group'>
          <label htmlFor='passwordConfirm'>Confirm Password:</label>
          <Field
            name='passwordConfirm'
            type='password'
            id='passwordConfirm'
            component={this.renderInput}
          />
        </fieldset>

        <button type='submit' className='btn btn-primary'>
          Sign Up
        </button>
      </form>
    )
  }
}

const validate = ({ email, password, passwordConfirm }) => {
  const errors = {}

  const emptyFields = [
    { name: 'email', field: email, message: 'Please enter an email' },
    { name: 'password', field: password, message: 'Please enter a password' },
    { name: 'passwordConfirm', field: passwordConfirm, message: 'Please enter a password confirmation' }
  ]

  emptyFields.forEach(({field, name, message}) => {
    if (!field) errors[name] = message
  })

  if (password !== passwordConfirm) {
    errors.passwordConfirm = 'Passwords must match'
    errors.password = 'Passwords must match'
  }

  return errors
}

export default reduxForm({
  validate, form: 'signup'
})(
  Signup
)
