

import { useState } from "react";
import { products } from "../images/New folder/Assets";
import "./Details.css"


export default function Details({cart}) {
      const grandTotal = Object.keys(cart).reduce((sum, id) => {
      const product = products.find(p => p.product_id === Number(id));
      if (!product) return sum;
    
      return sum + product.product_price * cart[id];
    }, 0);
    const [res,setRes]=useState(
        {
            fname:"",
            lname:"",
            mobile:"",
            email:"",
            door:"",
            street:"",
            city:"",
            pin:"",
            cardname:"",
            cardnumber:"",
            manufacture:"",
            expyear:"",
            ccv:"",
            billpin:""
        }

    )
    const [err,setErr]=useState(
        {
            fname:false,
            lname:false,
            mobile:false,
            email:false,
            door:false,
            street:false,
            city:false,
            pin:false,
            cardname:false,
            cardnumber:false,
            manufacture:false,
            expyear:false,
            ccv:false,
            billpin:false


        }
    )
  
        function onChange(e){
            const {name,value}=e.target
            setRes(prev=>({
                ...prev,[name]:value
            }))
        
            
            

        }
        function Submit(e){
            e.preventDefault()
              let error= {
            fname:false,
            lname:false,
            mobile:false,
            email:false,
            door:false,
            street:false,
            city:false,
            pin:false,
            cardname:false,
            cardnumber:false,
            manufacture:false,
            expyear:false,
            ccv:false,
            billpin:false


        }
        if(!res.fname) error.fname=true
         if(!res.lname) error.lname=true
          if(!res.mobile) error.mobile=true
           if(!res.email) error.email=true
            if(!res.door) error.door=true
             if(!res.street) error.street=true
              if(!res.city) error.city=true
               if(!res.pin) error.pin=true
                if(!res.cardname) error.cardname=true
                 if(!res.cardnumber) error.cardnumber=true
                  if(!res.manufacture) error.manufacture=true
                   if(!res.expyear) error.expyear=true
                    if(!res.ccv) error.ccv=true
                     if(!res.billpin) error.billpin=true

        setErr(error)

        const isValid=Object.values(error).every(v=>v===false)
if(isValid){
    localStorage.setItem("customer",JSON.stringify(res))

  setRes({
    fname:"", lname:"", mobile:"", email:"",
    door:"", street:"", city:"", pin:"",
    cardname:"", cardnumber:"", manufacture:"",
    expyear:"", ccv:"", billpin:""
  });
}
      
          

        }
  return (
    <div>
        <h2 className='checkout-heads'>Check out</h2>
        <div className="container mt-4">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-7">
                    <h3 className="cus-detail">User details</h3>

                    <form className="user-form">
                        <div className="row">
                            <div className="col-12  col-lg-6">
                                <h4 className="mt-3">Contact Info:</h4>
                            </div>
                            <div className="col-12  col-lg-6 user-div">
                                <input type="text" name="fname" placeholder="First Name" onChange={onChange} ></input>
                                {err.fname?<p style={{color:"red"}}>* Enter your Firstname</p>:null}
                                <input type="text" name="lname" placeholder="Last Name" onChange={onChange}></input>
                                {err.lname?<p style={{color:"red"}}>* Enter your Lastname</p>:null}
                                <input type="text" name="mobile" placeholder="Mobile no" onChange={onChange}></input>
                                {err.mobile?<p style={{color:"red"}}>* Enter your Mobile-No</p>:null}
                                <input type="text" name="email" placeholder="Email" onChange={onChange}></input>
                                {err.email?<p style={{color:"red"}}>* Enter your Email</p>:null}
                            </div>
                        </div>
                    </form>
                        <div className="row user-form1">
                            <div className="col-12  col-lg-6">
                                <h4 className="cus-details">Pickup:</h4>
                            </div>
                             <div className="col-12 col-lg-6">
                               <ul>
                                <li> <button className="del"> Dine-In</button></li>
                                <li> <button className="del">Pick-Up</button></li>
                                <li> < button className="del">Delivery</button></li>
                               </ul>
                               
                             </div>

                        </div>
                         <div className="row user-form1">
                            <div className="col-12  col-lg-6">
                                <h4 className="cus-details mt-3">Address:</h4>
                            </div>
                             <div className="col-12 col-md-6 col-lg-6">
                                 <input type="text" name="door" placeholder="Door No,Flat No" onChange={onChange}></input>
                                 {err.door?<p style={{color:"red"}}>* Enter your Door-No</p>:null}
                                <input type="text" name="street" placeholder="Street Name,Landmark" onChange={onChange}></input>
                                {err.street?<p style={{color:"red"}}>* Enter your Street</p>:null}
                                <input type="text" name="city" placeholder="City" onChange={onChange}></input>
                                {err.city?<p style={{color:"red"}}>* Enter your City</p>:null}
                                <input type="text" name="pin" placeholder="Pin Code" onChange={onChange}></input>
                                {err.pin?<p style={{color:"red"}}>* Enter your PinCode</p>:null}
                              
                             </div>

                        </div>
                          <div className="row user-form2">
                            <div className="col-12 col-lg-6">
                                <h4 className="cus-details mt-3">Payment:</h4>
                            </div>
                             <div className="col-12  col-lg-6">
                                 <input type="text" name="cardname" placeholder="Name on Card" onChange={onChange}></input>
                                 {err.cardname?<p style={{color:"red"}}>* Enter your Card-Name</p>:null}
                                <input type="text" name="cardnumber" placeholder="Card Number" onChange={onChange}></input>
                                {err.cardnumber?<p style={{color:"red"}}>* Enter your Card-No</p>:null}
                               <div className="card-detail">
                                 <input className="cv" type="text" name="manufacture" placeholder="Exp .Mc" onChange={onChange}></input>
                                
                                <input className="cv" type="text" name="expyear" placeholder="Exp .Year" onChange={onChange}></input>
                               
                                   <input className="cv" type="text" name="ccv" placeholder="CCV"onChange={onChange}></input>
                                   {(err.ccv && err.manufacture && err.expyear)?<p style={{color:"red"}} >* Required field</p>:null}
                               </div>
                                <input type="text" name="billpin" placeholder="Billing Pin Code" onChange={onChange}></input>
                                {err.billpin?<p style={{color:"red"}}>* Enter the code</p>:null}
                                <h6 className="pt-3 ">Other option:</h6>
                              <input type="text"  placeholder="UPI Number"onChange={onChange}></input>
                              <br></br>
                              <input className="me-1"  type="checkbox" x></input>Cash on Delivery

                             </div>
                        </div>


                </div>
                <div className="col-12 col-md-6 col-lg-5 total-div">
                    <div className="totals-div">
                        <h4 className="price">Total Price :{grandTotal}</h4>
                        <button className="buy-btn" onClick={Submit}>Proceed to Pay</button>
                       
                    
                      </div>
                </div>
            </div>

        </div>

       </div>)}