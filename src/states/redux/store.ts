import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cartSlice';
import wishlistReducer from './wishlist/wishlistSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
