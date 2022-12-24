import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <h1>TODO-LIST</h1>
        <div className="link">
            <ul type='none'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='contact'>Contact</Link></li>
            </ul>
        </div>

    </nav>
  )
}

export default Navbar