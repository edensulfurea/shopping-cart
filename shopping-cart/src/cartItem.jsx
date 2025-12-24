export default function CartItem({ product, onIncrease, onDecrease }) {
  return (
    <li>
      {product.name} – {product.quantity}

      <button onClick={() => onIncrease(product.id)}>
        +
      </button>

      <button onClick={() => onDecrease(product.id)}>
        –
      </button>
    </li>
  );
}
