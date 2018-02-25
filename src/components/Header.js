import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light mb-3'>
        <div className='container'>

          <ul className='nav navbar-nav'>
            <li className='nav-item'>
              <button
                className='btn btn-outline-success my-2 my-sm-0'
              >
                Sign In
              </button>
            </li>
          </ul>

        </div>
      </nav>
    )
  }
}

export default Header
