import { useCart } from '../context/CartContext';
import styles from '../styles/Cart.module.css';

const Cart = () => {
  const {
    cartItems,
    incQuantity,
    decQuantity,
    removeFromCart,
    clearCart,
    finalizaCompra,
  } = useCart();

  if (cartItems.length === 0) {
    return <p className={styles.empty}>Seu carrinho está vazio 🛒</p>;
  }

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const handleFinalizarCompra = async () => {
    const userId = 1;

    try {
      const res = await finalizaCompra(userId);

      if (res.status === 200) {
        alert('Compra finalizada com sucesso!');
        clearCart();
      } else {
        alert('Erro ao finalizar a compra.');
      }
    } catch (error) {
      alert('Erro inesperado ao finalizar a compra.', error);
    }
  };

  return (
    <div className={styles.cartWrapper}>
      <h2>🛍️ Seu Carrinho</h2>
      <div className={styles.containerCart}>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <div className={styles.itemHeader}>
              <h4>{item.title}</h4>
              <button
                className={styles.removeBtn}
                onClick={() => removeFromCart(item.id)}
              >
                ✖
              </button>
            </div>

            <p className={styles.price}>
              Total: R${' '}
              <strong>{(item.price * item.quantity).toFixed(2)}</strong>
            </p>

            <div className={styles.controls}>
              <button onClick={() => decQuantity(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => incQuantity(item.id)}>+</button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.totalPrice}>
        <strong>Total: R$ {totalPrice.toFixed(2)}</strong>
      </div>

      <div className={styles.checkoutBtnContainer}>
        <button className={styles.checkoutBtn} onClick={handleFinalizarCompra}>
          Finalizar Compra
        </button>
      </div>
    </div>
  );
};

export default Cart;
