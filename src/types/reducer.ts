// reducer.ts
import { CartAction, CartState } from './types';

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case 'CALCULATE_TOTAL':
      return {
        ...state,
        total: state.items.reduce((sum, item) => sum + item.price, 0),
      };
    default:
      return state;
  }
};

export default cartReducer;