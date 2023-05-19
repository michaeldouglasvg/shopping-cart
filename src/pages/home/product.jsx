import React from 'react';

const Product = () => {
  return (
   <div className='ProductCard'>
    <div className='Image'></div>
    <div className='Title'><h2>Product title</h2></div>
    <div className='Amount'><p><b>$20.3</b></p></div>
    <div className='Button'><button>Add to Cart</button></div>
   </div>
  );
}

export default Product;
