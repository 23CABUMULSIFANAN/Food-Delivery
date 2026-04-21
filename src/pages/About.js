import React from 'react'
import Nav from '../components/Nav'
import { useNavigate } from 'react-router-dom'
import Image7 from "../../src/components/images/New folder/Image7.png"
import "./About.css"
import Footer from "../../src/components/Footer"
export default function About() {
  const navigate =useNavigate()
  return (
    <div>
        <Nav></Nav>
        <div className='container pb-3'>
          <div className='row my-4'>
            <div className='col-12 col-lg-6'>
              <h1 className='about-head'>About Our Story</h1>
              <p className='about-p'>Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

              <button onClick={()=>navigate(`/menu`)} className='about-btn'>View Menu</button>
            </div>
            <div className='col-12 col-lg-6'>
              <img src={Image7} width={550} height={350} alt='about' style={{borderRadius:"10px"}}></img>
            </div>
          </div>
        </div>
        <Footer></Footer>
    </div>
  )
}
