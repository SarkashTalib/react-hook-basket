import { useState } from 'react';
import './App.css'
import Basket from './components/Basket';
import ProductList from './components/ProductList';



function App() {

  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 50 },
  ];

  const [basket, setBasket] = useState([]);

  const addToBasket = (item) => {
    setBasket((prevBasket) => [...prevBasket, item]);
  };

  const clearBasket = () => {
    setBasket([]);
  };

  const removeItem = (id) => {
    setBasket((prevBasket) => prevBasket.filter((item) => item.id !== id))
  };

  return (
    <div className="App">
      <Basket basket={basket} clearBasket={clearBasket} removeItem={removeItem} />
      <hr />
      <ProductList products={products} addToBasket={(item) => addToBasket(item)} />
    </div>
  )
}

export default App;
