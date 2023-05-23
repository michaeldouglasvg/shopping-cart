import React, { useState } from "react";
import { Food } from "../constants/foodapi"
import { createContext } from "react"

// initiallixng the context for the data
export const ShopContext = createContext(null);

const CartDefault = () => {
 let cart = {}
 for( let i = 1; i < Food.length + 1; i++){
  cart[i] = 0;
 }
 return cart;
}

export const ShopContextProvider = (props) => {

 const[cartDefault, setCartDefault] = useState(CartDefault())

 const getCartTotalAmunt = () => {
  let totalAmount = 0;

  for(const item in cartDefault){

   if(cartDefault[item] > 0){

    let itemInfo = Food.find((prod) => prod.id === Number(item));

    totalAmount += cartDefault[item] * itemInfo.prize;
   }
  }

  return totalAmount.toFixed(0);
 }

 const addToCart = (itemID) => {
  setCartDefault((prev) => ({...prev, [itemID]: prev[itemID] + 1}))
 }

 const removeFromCart = (itemID) => {
  setCartDefault((prev) => ({...prev, [itemID]: prev[itemID] - 1}))
 }

 const updateCartAmount = (newAmount, itemID) => {
  setCartDefault((prev) => ({...prev, [itemID]: newAmount}))
 }

 const contextValue = {cartDefault, addToCart, removeFromCart, updateCartAmount, getCartTotalAmunt};

 return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}