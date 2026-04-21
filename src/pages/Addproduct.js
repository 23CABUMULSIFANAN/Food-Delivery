
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Addproduct.css"

export default function Addproduct({setProducts}) {
  const { category } = useParams();
  
const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      
      product_name: formData.name,
      product_price: formData.price,
      product_image: formData.image,
      category: category
    };

    setProducts((prev) => [...prev, newProduct]);
    navigate(`/cate/${category}`)
  };

  

  return (
    <form className="new" onSubmit={handleSubmit}>
      <h2 className="my-4">Add Product to {category}</h2>

      <input
        type="text"
        name="name"
        placeholder="Product Name"
        onChange={handleChange}
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        onChange={handleChange}
      />

      <input
        type="text"
        name="image"
        placeholder="Image URL"
        onChange={handleChange}
      />

      <button type="submit" className="new-btn">Add Product</button>
    </form>
  );
}
