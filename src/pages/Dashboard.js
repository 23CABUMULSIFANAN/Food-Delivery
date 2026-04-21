import React from 'react'
import AdminNav from '../components/Admin/AdminNav'
import { Link } from 'react-router-dom'
import "./Dashboard.css"
import { products } from '../components/images/New folder/Assets'
import { menu_list } from '../components/images/New folder/Assets'



 const totalproducts=products.length
 console.log(totalproducts);
const totalcategory=menu_list.length
console.log(totalcategory );

export default function Dashboard({cart,setCart}) {

 
  return (
    <div>
      <AdminNav></AdminNav>
      <div className='container-fluid'>
        <div className='row '>
        <div className='col-12 col-md-6 col-lg-3 sidebar'>
          <h3 className='admin-head'>Admin Dashboard</h3>
          <div className='admin-items'>
            
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/cate">Categories</Link>


          </div>
        </div>
        <div className='col-12 col-md-6 col-lg-9'>
         <div className='container'>
           <h2 className='heading'>Dashboard</h2>
          <div className='row'>
            <div className='col-12 col-md-6 dash-item'>
              <div className='dash-box'>
<h5>Total Products</h5>
<h2 className='num'>{totalproducts}</h2>
              </div>
              
            </div>
            <div className='col-12 col-md-6 dash-item'>
              <div className='dash-box1'>
<h5>Total Categories</h5>
<h2 className='num'>{totalcategory}</h2>
              </div>
              
            </div>
            <div className='col-12 col-md-6 dash-item'>
              <div className='dash-box2'>
<h5>Total Users</h5>
<h2 className='num'>121</h2>
              </div>
              
            </div>
            <div className='col-12 col-md-6 dash-item'>
              <div className='dash-box3'>
<h5>Active Users</h5>
<h2 className='num'>67</h2>
              </div>
              
            </div>
          </div>
         </div>

        </div>

      </div>
      
      </div>
     
      

    </div>
  )
}
