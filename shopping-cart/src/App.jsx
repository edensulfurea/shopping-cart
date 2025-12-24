import { useState } from 'react';
import './App.css';
import CartList from './cartList';

const initialProducts = [
  { id: 1, name: 'Lasagna', quantity: 2, price: 11 },
  { id: 2, name: 'Gnocchi', quantity: 4, price: 10 },
  { id: 3, name: 'Tagliatelle al pesto', quantity: 3, price: 9 }
];

export default function App() {
  const [products, setProducts] = useState(initialProducts);

  // 🔼 AUMENTA QUANTITÀ
  function handleIncrease(id) {
    setProducts(products =>
      products.map(product =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  }

  // 🔽 DIMINUISCE QUANTITÀ
  function handleDecrease(id) {
    setProducts(products =>
      products.map(product =>
        product.id === id && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  }

  return (
    <div>
      <h1>Shopping Cart</h1>

      <CartList
        products={products}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
    </div>
  );
}
