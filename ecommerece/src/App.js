import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import { CartProvider } from './context/CartContext';
import ProductList from './components/ProductsList';
import ProductDetails from './components/ProductsDetails';
import Cart from './components/Cart';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={ProductList} />
            <Route path="/product/:id" component={ProductDetails} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
