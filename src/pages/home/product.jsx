import React from 'react';

const Product = (props) => {
  const{id, image, title, prize} = props.foodData;
  return (
   <div className='ProductCard' key={id}>
    <div className='Image'><img src={image} alt={id}/></div>
    <div className='Title'><h2>{title}</h2></div>
    <div className='Amount'><p><b>${prize}</b></p></div>
    <div className='Button'><button>Add to Cart</button></div>
   </div>
  );
}

export default Product;
