import React from 'react'
import Product from './Product'

export default function ProductList({ products, addToBasket }) {

  return (
    <div>
      {products.map((product) => (
        <Product product={product} key={product.id} addToBasket={addToBasket} />
      ))}
    </div>
  )
}
