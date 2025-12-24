import CartItem from './cartItem';

export default function CartList({ products, onIncrease, onDecrease }) {
  return (
    <ul>
      {products.map(product => (
        <CartItem
          key={product.id}
          product={product}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      ))}
    </ul>
  );
}
