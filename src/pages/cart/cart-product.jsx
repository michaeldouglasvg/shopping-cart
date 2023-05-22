import React, { useContext} from 'react';
import { ShopContext } from "../../context/shop-context"


const CartProduct = (props) => {

 const{id, image, title, prize} = props.data;
 const { addToCart, cartDefault, removeFromCart, updateCartAmount } = useContext(ShopContext);

  return (
    <>
      <div className='ProductCard'>
        <div className='Image'>
        <img src={image} alt={id}/>
        </div>
        <div className='Leftcard'>
        <div className='Title'><h2>{title}</h2></div>
        <div className='Amount'><p><b>${prize}</b></p></div>
        <div className='Buttons'>
          <button onClick={() => {addToCart(id)}}>+</button>
          <input value={cartDefault[id]} onChange={(e) => {updateCartAmount(Number(e.target.value), id)}}/>
          <button onClick={() => {removeFromCart(id)}}>-</button>
        </div>
        </div>
      </div>
    </>
  );
}

export default CartProduct;
