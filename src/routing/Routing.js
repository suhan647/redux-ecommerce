import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Cart from '../components/Cart'
import Header from '../components/Header'
import Products from '../components/Products'

const Routing = () => {
  return (
    <>
    <Header/>
    <Routes>
        <Route path='/' index element={<Products />} />
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
    
    </>
  )
}

export default Routing