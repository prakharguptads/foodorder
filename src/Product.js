import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const [value, setValue] = useStateValue('select');

  const onChange = e =>{
    setValue(e.target.value)
  }

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>

      </div>

      <img src={image} alt="" />

      <div className="form-group" align="center">
          <label htmlFor="select1" >Size   </label>
          <select  onChange={onChange.bind(value)} className="form-control">
            <option value="Select">Selct the Option</option>
            <option value="first">First</option>
            <option value="Second">Second</option>
            <option value="Third">Third</option>
          </select>
        </div>
      
      <button onClick={addToBasket}>Add to Basket</button>
      
    </div>
  );
}

export default Product;
