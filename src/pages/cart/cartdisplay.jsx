import React from 'react';
import { CartProductDisplay, CardProducts } from "./cart.styled"

const Cartdisplay = () => {
  return (
    <CartProductDisplay>
      <CardProducts>
       <div className='Producttitle'><h1>Your Cart</h1></div>
       <div className='Productssection'>
       <div className='Products'>
        <div className='ProductCard'>
          <div className='Image'>
           Image
           {/* <img src={image} alt={id}/> */}
           </div>
          <div className='Leftcard'>
           <div className='Title'><h2>Title</h2></div>
           <div className='Amount'><p><b>$20.3</b></p></div>
           <div className='Buttons'>
            <button>+</button>
            <input placeholder='1' value="20393"/>
            <button>-</button>
           </div>
          </div>
         </div>
        </div>

        {/* Right section */}
        <div className='Shoppingsummary'>
         <div className='Topsummary'>
          <h1>Shopping Details</h1>
          <p>Subtotal</p>
          <p><b>$20203.3</b></p>
         </div>
         <div className='Paymethods'>
          <h1>Chose payment Options</h1>

         </div>
        </div>
       </div>
      </CardProducts>
    </CartProductDisplay>
  );
}

export default Cartdisplay;
