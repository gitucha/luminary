import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div className='bg-purple-950 rounded-b-lg p-4 px-3 '>
        <Link to='/home'> Home</Link>
        <Link to='/category'> categories</Link>
        <Link to='/profile'> profile</Link>
        <Link to='/contact'> contact</Link>
        </div>
    </div>
  )
}

export default Navbar