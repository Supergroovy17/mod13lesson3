// types.ts
export interface ShoppingCartItem {
    id: number;
    name: string;
    price: number;
  }
  
  export type CartAction =
    | { type: 'ADD_ITEM'; payload: ShoppingCartItem }
    | { type: 'REMOVE_ITEM'; payload: number }
    | { type: 'CALCULATE_TOTAL' };
  
  export interface CartState {
    items: ShoppingCartItem[];
    total: number;
  }
  