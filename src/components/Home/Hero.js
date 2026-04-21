import React from 'react'
import chicken from "../images/chicken.png"
import "./Hero.css"
import { useNavigate } from 'react-router-dom';
export default function Hero() {
    const navigate=useNavigate()
  return (
    
        <div className='hero '>
            <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 col-md-7 col-lg-6'><img src={chicken} alt='burger' className='bur-img'></img></div>  
            <div className='col-12 col-md-5 col-lg-6'>
                <h3 className='hero-text1'>On Your First Deal</h3>
                <h1 className='hero-text2'>Get Flat <span className='percent'>25%</span> Offer</h1>
                <button className='hero-button' onClick={()=>navigate(`/menu`)}>SHOP NOW</button>
            </div>
            </div>
        </div>
    </div>
  )
}
