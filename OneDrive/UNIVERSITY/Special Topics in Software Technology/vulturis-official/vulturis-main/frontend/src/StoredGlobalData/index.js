//place to configure and manage the entire store 
//configureStore is a utility function from reduxjs toolkit that helps configure the store easily

import cartReducer from './cart';
import {configureStore} from "@reduxjs/toolkit";
//reducer is responsible for handling the state related to the shopping cart
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        //In real applications many other states like user ... 
    }
})

