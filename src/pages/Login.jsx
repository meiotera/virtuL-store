import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Login.module.css';

const Login = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: 'johnd',
    password: 'm38rmF$',
  });

  {
    /* CADASTRO 
  }
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
  });
  */
  }

  const [erro, setErro] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setErro('');

    try {
      const res = await auth(loginData);

      console.log(res);

      if (res.status === 200) {
        navigate('/cart');
      } else {
        setErro('Usuário ou senha inválidos.');
      }
    } catch (err) {
      setErro('Erro ao fazer login.', err);
    }
  };

  {
    /* CADASTRO 
  const handleCreateUser = async (e) => {
    e.preventDefault();
    setErro('');

    try {
      const res = await createUser(registerData);

      console.log('novo', res);
      if (res.ok || res.status === 200) {
        navigate('/cart');
      } else {
        setErro('Não foi possível realizar o cadastro.');
      }
    } catch (error) {
      setErro('Erro ao realizar o cadastro.', error);
    }
  };
  */
  }

  return (
    <div className={styles.formsContainer}>
      {/* LOGIN */}
      <div className={styles.container}>
        <h2 className={styles.title}>Login</h2>
        <form className={styles.form} onSubmit={handleLogin}>
          <div>
            <label className={styles.label}>Username:</label>
            <input
              className={styles.input}
              type="text"
              value={loginData.username}
              onChange={(e) =>
                setLoginData({ ...loginData, username: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className={styles.label}>Senha:</label>
            <input
              className={styles.input}
              type="password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              required
            />
          </div>
          {erro && <p className={styles.error}>{erro}</p>}
          <button className={styles.button} type="submit">
            Entrar
          </button>
        </form>
      </div>

      {/* CADASTRO 

      <div className={`${styles.container} ${styles.createAccountContainer}`}>
        <h2 className={styles.title}>Novo usuário</h2>
        <form className={styles.form} onSubmit={handleCreateUser}>
          <div>
            <label className={styles.label}>Username:</label>
            <input
              className={styles.input}
              type="text"
              value={registerData.username}
              onChange={(e) =>
                setRegisterData({ ...registerData, username: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className={styles.label}>Email:</label>
            <input
              className={styles.input}
              type="email"
              value={registerData.email}
              onChange={(e) =>
                setRegisterData({ ...registerData, email: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className={styles.label}>Senha:</label>
            <input
              className={styles.input}
              type="password"
              value={registerData.password}
              onChange={(e) =>
                setRegisterData({ ...registerData, password: e.target.value })
              }
              required
            />
          </div>
          {erro && <p className={styles.error}>{erro}</p>}
          <button className={styles.button} type="submit">
            Cadastrar
          </button>
        </form>
      </div>
      */}
    </div>
  );
};

export default Login;
