import React, { Component, Fragment } from 'react'
import { reduxForm, Field } from 'redux-form'

class Signin extends Component {
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

  handleFormSubmit = ({email, password}) => {
    console.log(email, password)
    // Log user in
  }

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
        <button type='submit' className='btn btn-primary'>Sign in</button>
      </form>
    )
  }
}

export default reduxForm({form: 'signin'})(Signin)
