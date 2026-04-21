import { Link } from "react-router-dom";
import { products } from "../images/New folder/Assets";
import "./Cartitems.css"



export default function Cartitems({ cart }) {
 
console.log("cart:", cart);
console.log("keys:", Object.keys(cart));

if(Object.keys(cart).length === 0){
  return(
    <h2 className="cart-head">Your cart is empty</h2>
  )
}
   const grandTotal = Object.keys(cart).reduce((sum, id) => {
  const product = products.find(p => p.product_id === Number(id));
  if (!product) return sum;

  return sum + product.product_price * cart[id];
}, 0);

return (
  <div className="container">
    <div className="row">
      <h2 className="cart-head">Your Items</h2>
      <div className="col-12 col-md-8">
    {Object.keys(cart).map((id) => {
      const product = products.find(p => p.product_id === Number(id));
      const quantity =cart[id]
      const total = product.product_price * quantity;
      if (!product) return null;

   
      return (
 
       
            <div className="container ">
                <div key={id} className="row cart-items">
              
           
              <div className="col-12 col-md-4 proimage">
                 <img src={product.product_image} alt="product" className="img-pro"></img>
                  </div>
             
               <div className="col-12 col-md-8 prodetails"> 
                 <h2 className="proname">{product.product_name}</h2>
                 <h6 className="pt-2">Quantity:{quantity}</h6>
                 <h5>Total: Rs.{total}</h5>
                
               </div>
             
              </div>
              
         
       
            </div>
            
          
        
      );
      
     
    })}
   </div>
   <div className="col-12 col-md-4 check-div">
    <h2 className="checkout-head">Checkout</h2>
  <div className="totals">
    <h4 className="price">Total Price :{grandTotal}</h4>
    <Link to={"/payment"}><button className="buy-btn" >Buy Now</button></Link>
   

  </div>

   </div>
     </div>
</div>
);
}