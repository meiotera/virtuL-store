const BASE_URL = 'https://fakestoreapi.com';

export const login = async (formData) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  return res;
};

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

export const createNewUser = async (formData) => {
  const res = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();

  return data;
};

export const finalizarCompra = async (userId, cartItems) => {
  const formattedCart = {
    userId,
    date: new Date().toISOString(),
    products: cartItems.map((item) => ({
      productId: item.id,
      quantity: item.quantity,
    })),
  };

  try {
    const response = await fetch(`${BASE_URL}/carts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formattedCart),
    });

    const result = await response.json();
    console.log('Compra finalizada:', result);

    return { status: response.status, data: result };
  } catch (error) {
    console.error('Erro ao finalizar compra:', error);
    throw error;
  }
};
