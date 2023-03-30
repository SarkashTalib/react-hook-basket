import React from 'react'

export default function Product({ product, addToBasket }) {



  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.price}</p>

      <button onClick={() => addToBasket(product)}>Add to cart</button>

    </div>
  )
}
