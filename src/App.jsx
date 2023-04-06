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
    // setBasket((prevBasket) => [...prevBasket, item]);
    setBasket((prevBasket) => {
      const itemIndex = prevBasket.findIndex((i) => i.id === item.id);

      if (itemIndex !== -1) {
        // this is where dup exists
        const newBasket = [...prevBasket]
        newBasket[itemIndex] = {
          ...newBasket[itemIndex],
          qty: newBasket[itemIndex].qty + 1,
        }
        return newBasket;
      } else {
        return [...prevBasket, { ...item, qty: 1 }]
      }
    })
    // check if id already exists

    // get the existing record that matches the id
  };

  const clearBasket = () => {
    setBasket([]);
  };

  const removeItem = (id) => {
    setBasket((prevBasket) =>
      prevBasket.reduce((acc, item) => {
        if (item.id === id) {
          if (item.qty > 1) {
            acc.push({ ...item, qty: item.qty - 1 });
          }
        } else {
          acc.push(item)
        }
        return acc;
      }, [])
    );
  }

  // const removeItem = (id) => {
  //   setBasket((prevBasket) =>
  //     prevBasket.map((item) => {
  //       if (item.id === id && item.qty > 0) {
  //         return { ...item, qty: item.qty - 1 }
  //       }
  //       return item;
  //     })
  //       .filter((item) => item.qty !== 0)
  //   );
  // };

  return (
    <div className="App">
      <Basket basket={basket} clearBasket={clearBasket} removeItem={removeItem} />
      <hr />
      <ProductList products={products} addToBasket={(item) => addToBasket(item)} />
    </div>
  )
}

export default App;
