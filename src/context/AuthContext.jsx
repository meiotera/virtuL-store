import { createContext, useContext, useState, useEffect } from 'react';
import { login, createNewUser } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem('token'));

  const auth = async (formData) => {
    try {
      console.log(formData);
      const res = await login(formData);

      if (res.status === 200) {
        const tokenData = await res.json();
        setToken(tokenData.token);
        localStorage.setItem('token', tokenData.token);
        setUser({ username: formData.username });
        return res;
      }
    } catch (error) {
      console.error('Erro ao logar:', error);
      throw error;
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
  };

  const createUser = async (formData) => {
    try {
      const res = await createNewUser(formData);

      console.log('reg', formData);

      if (res.ok || res.status === 200) {
        // salva novo usuário localmente (simulação)
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({
          username: formData.username,
          password: formData.password,
        });
        localStorage.setItem('users', JSON.stringify(users));

        return { ok: true };
      } else {
        return { ok: false };
      }
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      throw error;
    }
  };

  useEffect(() => {
    if (token) {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ user, token, auth, logout, createUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
