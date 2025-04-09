const BASE_URL = 'https://fakestoreapi.com';

// buscar todos os produtos
export const getAllProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  const data = await res.json();

  return data;
};

export const getASingleProduct = async (id) => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  const data = await res.json();

  return data;
};

export const finalizarCompra = async (userId, cartItems) => {
  try {
    const formatedCart = {
      userId,
      date: new Date().toISOString(),
      products: cartItems.map(item => (
        productId: item.id,
        quantity: item.quantity,
      )) 
    }
  } catch (error) {
    
  }
}