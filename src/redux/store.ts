// store.ts
import { configureStore } from '@reduxjs/toolkit';
import shoppingCartReducer from './shoppingCartSlice';

const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
  },
});

export default store;