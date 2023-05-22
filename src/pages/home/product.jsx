import React, { useContext} from 'react';
import { ShopContext } from "../../context/shop-context"

const Product = (props) => {
  const{id, image, title, prize} = props.foodData;
  const { addToCart, cartDefault } = useContext(ShopContext);

  const cartItemAmount = cartDefault[id];


  return (
   <div className='ProductCard' key={id}>
    <div className='Image'><img src={image} alt={id}/></div>
    <div className='Title'><h2>{title}</h2></div>
    <div className='Amount'><p><b>${prize}</b></p></div>
    <div className='Button'><button onClick={() => {addToCart(id)}}>Add to Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}</button></div>
   </div>
  );
}

export default Product;
