import { createSelector } from "reselect";

const selectCartReducer = (state)=> state.cart;

//corresponding to the INITIAL_STATES
export const selectCartItems = createSelector([selectCartReducer],(cart)=>cart.cartItems)

export const selectIsCartOpen = createSelector([selectCartReducer], (cart)=>cart.isCartOpen)

//Then the ones that have to do with the logic 
export const selectCartCount = createSelector([selectCartItems],(cartItems)=> cartItems.reduce((total, cartItem)=> total + cartItem.quantity,0 ));

export const selectCartTotal = createSelector([selectCartItems],(cartItems)=> cartItems.reduce((total, cartItem)=> total + cartItem.quantity * cartItem.price,0 ));

// const newCartCount = newCartItems.reduce((total, cartItem)=> total + cartItem.quantity,0 );

// const newCartTotal = newCartItems.reduce((total, cartItem)=> total + cartItem.quantity * cartItem.price,0 );
