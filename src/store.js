import { configureStore } from '@reduxjs/toolkit';
import cartSlice  from './reducers/cartReducer';

export default configureStore({
  reducer: {
    cartItems : cartSlice
  }
});