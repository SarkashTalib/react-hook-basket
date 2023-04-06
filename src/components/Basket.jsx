import React from 'react'

export default function Basket({ basket, clearBasket, removeItem }) {
  return (
    <>
      {basket && (
        <table width={500}>
          <thead>
            <tr>
              <th>Products</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {basket.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>{item.price}</td>
                <td><button onClick={() => removeItem(item.id)}>remove item</button></td>
              </tr>
            ))}

          </tbody>

          <tfoot>
            <tr>
              <td>
                <button onClick={() => clearBasket()} >Clear all</button>
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </ >
  )
}
