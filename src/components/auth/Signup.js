import React, { Component, Fragment } from 'react'
import { reduxForm, Field } from 'redux-form'

class Signup extends Component {
  handleFormSubmit = (fields) => {
    console.log(fields)
  }

  renderInput = field => (
    <Fragment>
      <input
        className='form-control'
        {...field.input}
        type={field.type}
        id={field.id}
      />
      {
        field.meta.touched &&
        field.meta.error &&
        <span className='error'> {field.meta.error} </span>
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

export default reduxForm({ form: 'signup' })(
  Signup
)
