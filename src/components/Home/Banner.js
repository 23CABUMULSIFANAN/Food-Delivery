import React from 'react'
import "./Banner.css"
import Delivery from "../images/Delivery.png"
import { useNavigate } from 'react-router-dom'
export default function Banner() {
  const navigate=useNavigate()
  return (
    <div className='banner'>
        <div className='container'>
          <div className='row d-flex justify-content-center align-items-center'>
            <div className='col-12 col-md-6'>
              <img src={Delivery} alt='delivery' className='del-image'></img>
            </div>
            <div className='col-12 col-md-6'>
              <h1 className='del-text'>Fastest Delivery</h1>
              <p>Get your delivery at your doorstep</p>
              <button className='del-btn' onClick={()=>navigate(`/menu`)}>ORDER NOW</button>
            </div>
          </div>
        </div>

    </div>
  )
}
