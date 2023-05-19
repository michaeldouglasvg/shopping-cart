import React from 'react';
import { ProductConatiner, ShoppingPageStyles } from './signup.styled';
import Product from './product';

const Shopping = () => {
  return (
    <ShoppingPageStyles>
      <ProductConatiner>
       <div className='Producttitle'><h1>Our Products</h1></div>
       <div className='Products'>
        <Product />
        <Product />
        <Product />
        <Product />
       </div>
      </ProductConatiner>
    </ShoppingPageStyles>
  );
}

export default Shopping;
