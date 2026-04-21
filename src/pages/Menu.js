
import Nav from '../components/Nav'
import { useNavigate, useParams } from 'react-router-dom'
import { products } from '../components/images/New folder/Assets.js'
import "./Menu.css"
import Footer from '../components/Footer.js'

export default function Menu({cart,setCart}) {
  const navigate=useNavigate()
  const {category}=useParams()
  console.log(cart);
  
//  const [cart,setCart]=useState({})



const addToCart = (id) => {
  setCart(prev => ({
    ...prev,
    [id]: (prev[id] || 0) + 1
  }));
};

const decrease = (id) => {
  setCart(prev => {
    if (!prev[id]) return prev;

    if (prev[id] === 1) {
      const updated = { ...prev };
      delete updated[id]; // remove completely
      return updated;
    }

    return {
      ...prev,
      [id]: prev[id] - 1
    };
  });
};
         const categoryList = ["burger","pizza","friedchicken","frenchfries","drinks","wings"];

const displayCategories = category ? [category] : categoryList;
  return (
    <div>
        <Nav></Nav>
      
        {
         <div className='container menu-sec'>
          <div className='row'>
            <div className='col-12 col-md-6 col-lg-3'>
              
          <aside>
       <h2 className='select-h1'>Select Menu</h2>
    
      <div className='sel-div'>
       <p className='sel-p'  onClick={() => navigate('/menu')}>All</p><hr></hr>
       <p className='sel-p' onClick={()=>navigate('/menu/burger')}>Burger</p><hr></hr>
       <p className='sel-p' onClick={()=>navigate('/menu/pizza')}>Pizza</p><hr></hr>
       <p className='sel-p' onClick={()=>navigate('/menu/friedchicken')}>Fried Chicken</p><hr></hr>
       <p className='sel-p' onClick={()=>navigate('/menu/frenchfries')}>French Fries</p><hr></hr>
       <p className='sel-p' onClick={()=>navigate('/menu/drinks')}>Drinks</p><hr></hr>
       <p className='sel-p' onClick={()=>navigate('/menu/wings')}>Wings</p>
      </div>

      </aside>
            </div>
<div className='col-12 col-md-6 col-lg-9 '>
  {
    
    displayCategories.map((cat) => {

      const items = products.filter(item => item.category === cat);

      if (items.length === 0) return null;

      return (
        <div key={cat}>
          <h2 className="category-title">{cat.toUpperCase()}</h2>

          <div className='row'>
            {items.map((item) => (
              <div className='col-12  col-lg-4' key={item.product_id}>
               <div className='menu-box'>
                 <img src={item.product_image} alt='product' className='product-img' />
                <h5 className='pro-name'>{item.product_name.toUpperCase()}</h5>
                
                <p className='pro-price'>Rs.{item.product_price}</p>
               <div className='d-flex gap-4 pro-btn'>
                <button className='pro-btns'  onClick={()=>decrease(item.product_id) }>-</button>
                <h6 className='value'>{cart[item.product_id]||"Add"}</h6>
                  <button className='pro-btns' onClick={()=>addToCart(item.product_id)}>+</button>
               </div>
               </div>
              </div>
            ))}
          </div>
        </div>
      );
    })
  }
</div>
           </div>
           </div>
        }
        <Footer></Footer>
    </div>
   
  )
}
