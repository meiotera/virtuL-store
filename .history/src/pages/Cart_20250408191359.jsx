const Cart = () => {
  return (
    <div>
      <h2>Seu Carrinho</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>Quantidade: {item.quantity}</p>
          <p>Preço: R$ {(item.price * item.quantity).toFixed(2)}</p>
          <button onClick={() => increaseQuantity(item.id)}>+</button>
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
          <button onClick={() => removeFromCart(item.id)}>Remover</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
