import React from 'react';
import { ProductConatiner, ShoppingPageStyles } from './signup.styled';
import Product from './product';
import { Food } from "../../constants/foodapi"

const Shopping = () => {
  return (
    <ShoppingPageStyles>
      <ProductConatiner>
       <div className='Producttitle'><h1>Our Products</h1></div>
       <div className='Products'>
        {Food.map((foodData) => {
          return  <Product foodData={foodData}/>
        })}
       </div>
      </ProductConatiner>
    </ShoppingPageStyles>
  );
}

export default Shopping;
