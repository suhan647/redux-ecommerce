import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { useSelector } from 'react-redux'

const Header = () => {

  const count = useSelector((state) =>state.cart);

  return (
    <div className='header'>
      {/* <p>Products</p>
      <p>Cart <sup>{0}</sup></p> */}
      <Link className='link' to='/'>Products</Link>
      <Link className='link' to='/cart'>Cart <sup>{count.length}</sup></Link>
    </div>
  )
}

export default Header