import React, { useContext} from 'react';
import { ShopContext } from "../../context/shop-context"
import { CartProductDisplay, CardProducts } from "./cart.styled"
import { Food } from '../../constants/foodapi';
import CartProduct from './cart-product';
import { useNavigate } from 'react-router-dom';


const Cartdisplay = () => {
  const { cartDefault, getCartTotalAmunt } = useContext(ShopContext);

  const navigate = useNavigate();

  return (
    <CartProductDisplay>
      <CardProducts>
       <div className='Producttitle'><h1>Your Cart</h1></div>
       <div className='Productssection'>
       <div className='Products'>

        {Food.map((product) => {

          if(cartDefault[product.id] !== 0){

            return <CartProduct data={product} />;

          }

          return null;
        })}
        </div>

        {/* Right section */}
        {getCartTotalAmunt() !== 0 ? (
        <div className='Shoppingsummary'>
         <div className='Topsummary'>
          <h1>Shopping Details</h1>
          <p>Subtotal</p>
          <p><b>${getCartTotalAmunt()}</b></p>
         </div>
         <div className='Paymethods'>
          <h1>Choose payment Options</h1>

         </div>
         <button className='ShoppingBtn' onClick={() => {navigate("/shopping")}}>Continue shopping</button>
        </div>
        ) : <><p>Your cart is empty...
          </p>
          <button className='ShoppingBtn' onClick={() => {navigate("/shopping")}}>Go to shopping</button></>}
       </div>
      </CardProducts>
    </CartProductDisplay>
  );
}

export default Cartdisplay;
