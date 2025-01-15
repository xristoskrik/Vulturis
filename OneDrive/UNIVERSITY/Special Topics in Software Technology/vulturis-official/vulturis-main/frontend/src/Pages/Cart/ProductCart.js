/*
import React from 'react';
import { Link } from 'react-router-dom';
import { prod } from './products';
import iconCart from 'C:/Users/Amanda/OneDrive/UNIVERSITY/Special Topics in Software Technology/vulturis-official/vulturis-main/frontend/src/Pages/images/Cart.png';
import {useSelector,useDispatch} from 'react-redux';
import {addToCart} from 'C:/Users/Amanda/OneDrive/UNIVERSITY/Special Topics in Software Technology/vulturis-official/vulturis-main/frontend/src/StoredGlobalData/cart'; //
import { createReducer } from '@reduxjs/toolkit'; //C:\Users\Amanda\OneDrive\UNIVERSITY\Special Topics in Software Technology\vulturis-official\vulturis-main\frontend\src\Pages\Cart\ProductCart.js
import {createSlice} from '@reduxjs/toolkit';
import { store } from './ProductCart';

const initialState = {
  items : []
}
const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers :  {
      addToCart(state,action){
        const {productId,quantity}= action.payload;
        state.items.push({productId , quantity});         //<------
      }
  }
});


const ProductCart = (props) => {
  const carts = useSelector(store => store.cart.items);
  console.log(carts);

  const divStyle = {
    backgroundColor: '#00C0C0', // Ocean blue
    color: 'white',
    padding: '20px', // Optional: add some padding for better visual
  };

  console.log(carts);

  const { id, name, price, image, slug } = props.data;

  const dispatch = useDispatch();

  const handleAddToCart = ()=>{
    
    dispatch(addToCart({
      productId : id ,
      quantity: 1
    }));

  }
  return (
    <div style={divStyle} className=' p-5 rounded-xl shadow-sm'>
      <Link to={slug}>
        <img src={image} alt='' className='w-full h-80 object-cover object-top drop-shadow-[0_10px_5px_#007]'></img>
      </Link>
      <h3 className='text-2xl py-3 text-center font-medium'>{JSON.stringify(name)} </h3>
      <div className='flex justify-between items-center'>
        <p>
          $<span className='text-2xl font-medium'>{JSON.stringify(price)}</span>
        </p>
        <button className='bg-blue-300 p-2 rounded-md text-sm hover:bg-blue-400 flex gap-2' onClick={handleAddToCart}>
          <img src={iconCart} alt=" " className='w-5'>
          </img>
          Add to Cart
         </button>
      </div>

    </div>
  );
}
 
//export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
//export default ProductCart;

*/

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {addToCart} from 'C:/Users/Amanda/OneDrive/UNIVERSITY/Special Topics in Software Technology/vulturis-official/vulturis-main/frontend/src/StoredGlobalData/cart';
import iconCart from '../images/Cart.png'; // Relative path

const ProductCart = (props) => {
  const { id, name, price, image, slug } = props.data;  // Destructure props correctly
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ productId: id, quantity: 1 }));
  };

  const divStyle = {
    backgroundColor: '#00C0C0', // Ocean blue
    color: 'white',
    padding: '20px', // Optional: add some padding for better visual
  };

  return (
    <div style={divStyle} className='p-5 rounded-xl shadow-sm'>
      <Link to={slug}>
        <img
          src={image}
          alt={name}  // Provide an alt description for accessibility
          className='w-full h-80 object-cover object-top drop-shadow-[0_10px_5px_#007]'
        />
      </Link>
      <h3 className='text-2xl py-3 text-center font-medium'>{name}</h3>  {/* Directly render name */}
      <div className='flex justify-between items-center'>
        <p>
          ${' '}
          <span className='text-2xl font-medium'>{price}</span>  {/* Directly render price */}
        </p>
        <button
          className='bg-blue-300 p-2 rounded-md text-sm hover:bg-blue-400 flex gap-2'
          onClick={handleAddToCart}
        >
          <img src={iconCart} alt="Add to cart" className='w-5' />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
