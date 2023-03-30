import React from 'react'

export default function Basket({ basket, clearBasket, removeItem }) {
  return (
    <div>
      <h1>basket</h1>
      {basket.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <button onClick={() => removeItem(item.id)}>remove item</button>
        </div>
      ))}
      <button onClick={() => clearBasket()} >Clear all</button>
    </div>
  )
}
