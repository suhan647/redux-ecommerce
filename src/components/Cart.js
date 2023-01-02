import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../redux/slices/CartSlice'
import { increment, decrement } from '../redux/slices/QuantitySlice'
import '../App.css'

const Cart = () => {

  const dispatch = useDispatch()
  const addedItems = useSelector(state => state.cart)

  const quantity = useSelector((state) => state.quantity.count)

  const removeItem = (id) => {
    dispatch(remove(id))
  }

  // console.log("addedItems",addedItems);

  let Cartprice= addedItems.reduce((acc, curr) => {
    return acc + curr.price
  },0)

  // let uniqueCart = [...new Set(Cartprice)]
  // console.log('uniqueCart',uniqueCart);

  // const increase = () => {
  // dispatch(increment())
  // }

  // const decrease = () => {
  //   dispatch(decrement())
  // }


  return (
    <div>
      <h1 style={{display:'flex', justifyContent:"center"}}>cart</h1>
      <div className='cart_container'>
        {addedItems.map((item) => {
          return (
            <div className='paper'>
              <img src={item.image} alt={item.title} height='100px' />
              <p>{item.title}</p>
              <button onClick={() => {dispatch(decrement())}}>-</button>
              <p>{quantity}</p>
              <button onClick={() => {dispatch(increment())}} >+</button>
              <h4>Rs.{item.price} </h4>
              <button onClick={() => removeItem(item.id)}>remove</button>
            </div>
            
          );
        })}
      </div>
      <h4>Cart Total : Rs.{Cartprice} /-</h4>
    </div>
  )
}

export default Cart