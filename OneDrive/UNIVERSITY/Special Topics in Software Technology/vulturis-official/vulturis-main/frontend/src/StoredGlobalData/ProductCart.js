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
import PropTypes from 'prop-types';



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


/* const ProductCart = (props) => {
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
      <h3 className='text-2xl py-3 text-center font-medium'>{name} </h3>
      <div className='flex justify-between items-center'>
        <p>
          $<span className='text-2xl font-medium'>{price}</span>
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
//export default cartSlice.reducer;
//export default ProductCart;
};
// eslint-disable-next-line no-undef
export default cartSlice.reducer;
ProductCart.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

*/

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from 'C:/Users/Amanda/OneDrive/UNIVERSITY/Special Topics in Software Technology/vulturis-official/vulturis-main/frontend/src/StoredGlobalData/cart';
import PropTypes from 'prop-types';
import iconCart from 'C:/Users/Amanda/OneDrive/UNIVERSITY/Special Topics in Software Technology/vulturis-official/vulturis-main/frontend/src/Pages/images/Cart.png';

const ProductCart = (props) => { //using destructuring to pull properties like id, name, price, image, and slug from the data prop. You’ve provided a fallback ({}) in case data is not defined
  //ensures that even if data is not passed or is undefined, it won't cause a destructuring error, and the variables will be undefined instead of throwing an error.
  const cartItems = useSelector((state) => state.cart.items);
 console.log(cartItems);  // This will show the current items in the cart

  const { id, name, price, image, slug } = props.data || {}; // Safe destructuring with fallback
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({
      productId: id,
      quantity: 1
    }));
  };

  const divStyle = {
    backgroundColor: '#00C0C0', // Ocean blue
    color: 'white',
    padding: '20px',
  };

  return (
    <div style={divStyle} className='p-5 rounded-xl shadow-sm'>
      <Link to={slug}>
        <img src={image} alt='' className='w-full h-80 object-cover object-top drop-shadow-[0_10px_5px_#007]' />
      </Link>
      <h3 className='text-2xl py-3 text-center font-medium'>{JSON.stringify(name)}</h3>
      <div className='flex justify-between items-center'>
        <p>
          $<span className='text-2xl font-medium'>{JSON.stringify(price)}</span>
        </p>
        <button className='bg-blue-300 p-2 rounded-md text-sm hover:bg-blue-400 flex gap-2' onClick={handleAddToCart}>
          <img src={iconCart} alt="Cart icon" className='w-5' />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

ProductCart.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCart;

