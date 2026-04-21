import React, { useEffect, useState } from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'


    const admin={
        username:"admin123",
        password:"admin"
    }
export default function Login() {
  const navigate=useNavigate()
  const[err,setErr]=useState({
    username:false,
    password:false
  })


   useEffect(()=>{
     localStorage.setItem("user",JSON.stringify(admin))
   },[])
    const [val,setVal]=useState({
        username:"",
        password:""
    })
    function handleChange(e){
        const{name,value}=e.target
       setVal(prev=>({
        ...prev,[name]:value    
       }))
       
       
    }
    const values=JSON.parse(localStorage.getItem("user"))||{}
    const {username,password}=values
    
    function handleSubmit(e){
        let error={
            username:false,
            password:false
        }
        if(!val.username){
            error.username=true
        }
        else if(!val.password){
            error.password=true
        }
        setErr(error)
        
        e.preventDefault()
        if(val.username===username && val.password ===password){
         navigate(`/dashboard`)

        }
        
      


    }
   
    console.log(val);
  return (
   <div className='container-fluid login-row'>
    <div className='row '>
        <div className='col-12 login-inp'>
            <h3 className='text-center m-3'>Admin Login</h3>
            <form onSubmit={handleSubmit}>
                <div className='form-container'>
                <label>UserName:</label>
                <input type='text' name='username' onChange={handleChange}></input>
                            </div>
                 <div className='form-container'>
                <label>Password:</label>
                <input type='text' name='password' onChange={handleChange}></input>
                            </div>
                    <button className='login-btn' >Login</button>
                    {err.username?<p style={{color:"red"}}>*Enter your name</p>:null}
                    {err.password?<p style={{color:"red"}}>*Enter your password</p>:null}

        </form>
        </div>
    </div>
   </div>
  )
}
