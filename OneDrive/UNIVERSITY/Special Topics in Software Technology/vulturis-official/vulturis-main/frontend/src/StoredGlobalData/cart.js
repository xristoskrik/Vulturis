import {createSlice} from "@reduxjs/toolkit";
import ProductCart from '../Pages/Cart/ProductCart';  // Correct import path

//place to store the value of the cart

const initialState = {

    items: []
}

const cartSlice= createSlice({
        name: 'cart',
        initialState,
        reducers :{
            addToCart(state,action) //action = the data the users stores in the cart
            {                           //place to store the value of the cart
                const {productId, quantity} = action.payload;
                const indexProductId = (state.items).findIndex(item => item.productId === productId);
                if (indexProductId >= 0) //if product position is greater than 0 means the product exists in the cart
                    {
                        state.items[indexProductId].quantity += quantity ;//increasing the product's quantity in the cart 
                    }else 
                    {
                        state.items.push({productId , quantity});
                    } 
                state.items.push({productId, quantity});
            }
        }
})
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;