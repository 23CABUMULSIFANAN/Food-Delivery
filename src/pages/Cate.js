import React from 'react'
import { menu_list } from '../components/images/New folder/Assets'
import "./Category.css"
import { useNavigate, useParams } from 'react-router-dom'


export default function Cate({products}) {
const {category}=useParams()
const navigate=useNavigate()
const display = category && products
  ? products.filter(
      (item) =>
        item.category?.toLowerCase() === category.toLowerCase()
    )
  : products || [];
  return (
   
  <div>
    <h1 className='produ-head'>All Categories</h1>
    <div className='container'>
    <div className='row'>
      <div className='col-12 col-md-6 col-lg-3'>
          <div className='row'>
        {
      menu_list.map((items)=>{
        return(
          <div className='col-12' key={items.id} onClick={()=>navigate(`/cate/${items.slug}`)}>
            <div className='cat-box'>
              <img src={items.menu_img} className='cat-image' alt='pro'></img>
              <h5 className='mt-3'>{items.menu_name}</h5>
              
            </div>
          </div>
        )
      })
    }
      </div>
      </div>
      <div className='col-12 col-md-6 col-lg-9'>
{category && (

  <div className='add'>
    <button
      className='add-btn'
      onClick={() => navigate(`/addproduct/${category}`)}
    >
      ADD
    </button>
  </div>
)}
         <div className='container'>
              <div className='row'>
                {
              display.map((items)=>{
                return(
                  <div className='col-12 col-md-6 col-lg-3' key={items.product_id}>
                    <div className='pro-box'>
                      <img src={items.product_image} className='pro-image' alt='pro'></img>
                      <h5 className='mt-3 pro-name'>{items.product_name}</h5>
                      <p >Rs.{items.product_price}</p>
                    </div>
                  </div>
                )
              })
            }
              </div>
            </div>
      </div>
    </div>
    </div>
  </div>

  )
}
