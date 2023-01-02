import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'
import {useDispatch} from 'react-redux'
import { add } from '../redux/slices/CartSlice'


const Products = () => {
  const [products, setProducts] = useState([])
  const [loading,setLoading] = useState(false)

  const dispatch = useDispatch()

  const getData = async() => {
    try {
      setLoading(true)
       let data = await axios.get('https://fakestoreapi.com/products')
       setProducts(data.data)
       setLoading(false)
      //  console.log("products",data);
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }

  // if(loading){
  //   <h1>loading....</h1>
  // }
  useEffect(() => {
    getData()
  },[])
 
  const HandleAdd = (items) => {
       dispatch(add(items))
  }
  return (
    (loading) ?<h2 style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Loading....</h2> : <div className='container'>
     {
      products.map((items,i) => {
        return <>
          <div key={i} className='card'>
          <div className='items'>
          <img src={items.image} alt={items.title} height='300' width='300' />
           <p>{items.title} | <span>{items.category}</span></p>
           <p>RS.{items.price}</p>
           <div className='cart_btn'>
           <button onClick={()=>HandleAdd(items)} className='btn'>Add To Cart</button>
           </div>
          </div>
          </div>
          </>
      })
     }
    </div>
  )
}

export default Products