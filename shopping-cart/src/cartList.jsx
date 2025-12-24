export default function CartList({products}){
    return(
        <ul>
         {products.map(product=>(
            <li key={product.id}>
               {product.name} — €{product.price} (qty: {product.quantity})
            </li>
         ))}
        </ul>
    )

}