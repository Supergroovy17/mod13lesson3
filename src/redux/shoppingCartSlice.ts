// shoppingCartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ShoppingCartItem {
  id: number;
  name: string;
  price: number;
}

interface ShoppingCartState {
  items: ShoppingCartItem[];
  total: number;
}

const initialState: ShoppingCartState = {
  items: [],
  total: 0,
};

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ShoppingCartItem>) => {
      state.items.push(action.payload);
      state.total += action.payload.price;
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload);
      if (itemIndex !== -1) {
        state.total -= state.items[itemIndex].price;
        state.items.splice(itemIndex, 1);
      }
    },
    calculateTotal: (state) => {
      state.total = state.items.reduce((sum, item) => sum + item.price, 0);
    },
  },
});

export const { addItem, removeItem, calculateTotal } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
