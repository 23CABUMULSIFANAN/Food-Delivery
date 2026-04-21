import React from 'react'
import "./Category.css"
import { menu_list } from '../images/New folder/Assets.js'
import { useNavigate } from 'react-router-dom'
export default function Category() {
  const navigate =useNavigate()
  return (
    <div className='menu container'>
        <h1 className='menu-h1'>Menu Categories</h1>
       <div className='row'>
         {
          menu_list.map((item)=>{
            return (
             <div key={item.id} className='col-12 d-flex justify-content-sm-center col-md-6 col-lg-4'>
               <div  className='cat-div' onClick={()=>navigate(`/menu/${item.slug}`)}>
                <img src={item.menu_img} className='menu-image' alt='items'></img>
                <h5 className='menu-names'>{item.menu_name}</h5>
              </div>
             </div>
            )
          })
        }
       </div>
        
    </div>
  )
}
