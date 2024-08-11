
import  { useReducer } from 'react';
import cartReducer from '../types/reducer';
import { CartState, ShoppingCartItem } from '../types/types';

const ShoppingCart = (): JSX.Element => {
  const initialState: CartState = { items: [], total: 0 };
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (item: ShoppingCartItem): void => {
    dispatch({ type: 'ADD_ITEM', payload: item });
    dispatch({ type: 'CALCULATE_TOTAL' });
  };

  const removeItem = (id: number): void => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
    dispatch({ type: 'CALCULATE_TOTAL' });
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        <h2>Items:</h2>
        <ul>
          {state.items.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total: ${state.total}</p>
        <button onClick={() => addItem({ id: Date.now(), name: 'New Item', price: 10 })}>
          Add Item
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
