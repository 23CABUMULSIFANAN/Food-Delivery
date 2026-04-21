import React from 'react'
import Nav from '../components/Nav'
import Cartitems from '../components/Cart/Cartitems'

export default function Cart({cart,setCart,total,setTotal}) {
  
  return (
    <div>
        <Nav></Nav>
        <Cartitems cart={cart} setCart={setCart} total={total} setTotal={setTotal}></Cartitems>
    </div>
  )
}
