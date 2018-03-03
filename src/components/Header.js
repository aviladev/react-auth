import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends Component {
  renderLinks = () => this.props.authenticated
    ? (
      <li className='nav-item'>
        <NavLink
          className='btn btn-outline-warning ml-2'
          to='/signout'
        >
            Sign Out
        </NavLink>
      </li>
    )
    : (
      <Fragment>
        <li className='nav-item'>
          <NavLink
            to='/signin'
            className='btn btn-outline-success ml-2'
          >
            Sign In
          </NavLink>
        </li>

        <li className='nav-item'>
          <NavLink
            to='/signup'
            className='btn btn-outline-success ml-2'
          >
            Sign Up
          </NavLink>
        </li>
      </Fragment>
    )

  render () {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light mb-3'>
        <div className='container'>
          <NavLink to='/' className='navbar-brand'>React Auth</NavLink>

          <ul className='nav navbar-nav'>
            {this.renderLinks()}
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({
  auth: { authenticated }
}) => ({ authenticated })

export default connect(mapStateToProps)(Header)
