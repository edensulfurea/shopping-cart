export default cartItem({product}){
    return(
        <li>
        {product.name} — €{product.price} (qty: {product.quantity})
        </li>
    )
}