import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchMessage } from '../actions'

class Feature extends Component {
  async componentWillMount () {
    this.props.fetchMessage()
  }

  render () {
    return (
      <div>{this.props.message}</div>
    )
  }
}

const mapStateToProps = ({
  feature: { message }
}) => ({ message })

export default connect(
  mapStateToProps,
  {fetchMessage}
)(Feature)
