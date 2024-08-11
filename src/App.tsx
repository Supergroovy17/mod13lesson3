// App.tsx
import { Provider } from 'react-redux'
import store from './redux/store'
import ShoppingCart from './component/ShoppingCart'
import Counter from './component/Counter';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <div>
        <h1>Shopping Cart App</h1>
        <ShoppingCart />
        <Counter/>
      </div>
    </Provider>
  );
};

export default App;
