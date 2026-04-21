import React, { createContext, useState } from 'react'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Menu from './pages/Menu'
import About from './pages/About.js'
import Account from './pages/Account'
import Cart from './pages/Cart'
import { products as initialProduct } from './components/images/New folder/Assets.js'
import Admin from './pages/Admin.js'
import Login from './components/Admin/Login.js'
import Dashboard from './pages/Dashboard.js'
import Cate from './pages/Cate.js'
import Payment from './pages/Payment.js'
import Addproduct from './pages/Addproduct.js'

export const Total=createContext()
export default function App() {
  const [cart,setCart]=useState({})
 const [products, setProducts] = useState(initialProduct);

  return (
    <div>
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path='/menu'   element={<Menu cart={cart} setCart={setCart}></Menu>}></Route>
            <Route path='/menu/:category'  element={<Menu cart={cart} setCart={setCart} ></Menu>}></Route>
          
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/account' element={<Account></Account>}></Route>
            <Route path='/cart'   element={<Cart cart={cart} setCart={setCart}></Cart>}></Route>
            <Route path='/admin' element={<Admin></Admin>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/dashboard' element={<Dashboard cart={cart} setCart={setCart}> </Dashboard>}></Route>
      
            <Route path='/cate' element={<Cate cart={cart}></Cate>}></Route>
            <Route path='/cate/:category' element={<Cate cart={cart} products={products}></Cate>}></Route>
            <Route path='/payment' element={<Payment cart={cart}></Payment>}></Route>
            <Route path='/addproduct/:category' element={<Addproduct products={products} setProducts={setProducts}></Addproduct>}></Route>

        </Routes>
        </BrowserRouter>
   
    </div>  
  )
}
