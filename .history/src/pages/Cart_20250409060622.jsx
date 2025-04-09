import { useCart } from '../context/CartContext';

import styles from '../styles/Cart.module.css';

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  if (cartItems.length === 0) {
    return <p>Seu carrinho está vazio.</p>;
  }

  return (
    <>
      <h2>Seu Carrinho</h2>
      <div className={styles.containerCart}>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <h4>{item.title}</h4>
            <p>Quantidade: {item.quantity}</p>
            <p>Preço: R$ {(item.price * item.quantity).toFixed(2)}</p>
            <button
              className={styles.btn}
              onClick={() => increaseQuantity(item.id)}
            >
              +
            </button>
            <button
              className={styles.btn}
              onClick={() => decreaseQuantity(item.id)}
            >
              -
            </button>
            <button
              className={styles.btn}
              onClick={() => removeFromCart(item.id)}
            >
              Remover
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
