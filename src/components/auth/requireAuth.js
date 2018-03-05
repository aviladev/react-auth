import React, { Component } from 'react'

import { connect } from 'react-redux'

export default (ComposedComponent) => {
  class Authentication extends Component {
    componentWillMount () {
      if (!this.props.authenticated) {
        this.props.history.push('/')
      }
    }

    componentWillUpdate (nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push('/')
      }
    }

    render () {
      return <ComposedComponent {...this.props} />
    }
  }

  const mapStateToProps = ({
    auth: { authenticated }
  }) => (
    { authenticated }
  )

  return connect(mapStateToProps)(Authentication)
}
