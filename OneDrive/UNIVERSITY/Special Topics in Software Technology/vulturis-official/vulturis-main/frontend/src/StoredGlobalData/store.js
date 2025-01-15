
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart';



const store = configureStore({
    reducer:{
      cart : cartReducer,
    }
  });
   export default store;
   export { cartReducer };
   //export { cartSlice };