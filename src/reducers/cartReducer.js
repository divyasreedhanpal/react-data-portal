import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cartItems',
  initialState: {
    cartItems: [],
    data: {}
  },
  reducers: {
    addCart: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const { id, selected } = action.payload;
      // const existingCartItem = state.cartItems.find(e => e.id === id)
      // console.log(existingCartItem);
      // console.log(action.payload);
      const index = state.cartItems.findIndex(e => {
        return e.id === id;
      }); //
      
      
      if (index !== -1) {
        const updatedObject = {...state.cartItems[index], selected: selected};
      
        state.cartItems = [
          ...state.cartItems.slice(0, index),
          updatedObject,
          ...state.cartItems.slice(index + 1),
        ];
      } else {
        state.cartItems.push(action.payload)
      }
    },
    removeCart: state => {
      state.cartItems.push({})
    },
    currentData: (state, action) => {
      state.data = action.payload;
    },
  }
})

// Action creators are generated for each case reducer function
export const { addCart, removeCart, currentData } = cartSlice.actions

export default cartSlice.reducer