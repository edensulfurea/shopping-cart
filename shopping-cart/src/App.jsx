import { useState } from 'react'
import './App.css'
import CartList from './cartList';

const initialProducts= [
  {id:1,name:'Lasagna', quantity: 2, price: 11},
  {id:2, name:'Gnocchi', quantity:4, price:10},
  {id:3, name:'Tagliatelle al pesto', quantity: 3, price: 9}
]

export default function App() {
  const [products,setProducts]= useState(initialProducts);








  return (
    <div>
      <h1>Shopping Cart</h1>
      <CartList products={products}></CartList>
    </div>
  );
}
