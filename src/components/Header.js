import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Header = () => {
  return (
    <div className='header'>
      {/* <p>Products</p>
      <p>Cart <sup>{0}</sup></p> */}
      <Link className='link' to='/'>Products</Link>
      <Link className='link' to='/cart'>Cart <sup>{0}</sup></Link>
    </div>
  )
}

export default Header