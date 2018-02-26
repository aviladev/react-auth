import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light mb-3'>
        <div className='container'>

          <ul className='nav navbar-nav'>
            <li className='nav-item'>
              <NavLink to='/signin'
                className='btn btn-outline-success my-2 my-sm-0'
              >
                Sign In
              </NavLink>
            </li>
          </ul>

        </div>
      </nav>
    )
  }
}

export default Header
