import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../services/api';
import styles from '../styles/Home.module.css';
import Loading from '../components/Loading';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentSlider, setCurrentSlider] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await getAllProducts();
      setProducts(data.filter((product) => product.rating.rate > 4));
      setLoading(false);
    };

    fetchData();
  }, []);

  // Alterna automaticamente os slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlider((prev) => (prev + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  if (products.length === 0 && loading) {
    return <Loading />;
  }

  return (
    <>
      <h2>Nossos destaques</h2>
      <div className={styles.container}>
        {/* Slider */}
        <div className={styles.slider}>
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`${styles.slide} ${
                index === currentSlider ? styles.active : ''
              }`}
            >
              <img
                src={product.image}
                alt={product.title}
                className={styles.image}
              />
              <div className={styles.caption}>
                <h3>{product.title}</h3>
                <p>Preço: R$ {product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores */}
        <div className={styles.indicators}>
          {products.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentSlider ? styles.active : ''
              }`}
              onClick={() => setCurrentSlider(index)}
            ></button>
          ))}
        </div>
      </div>

      <div className={styles.description}>
        <h2>Bem-vindo à Virtual Store</h2>
        <p>
          Na Virtual Store, você encontra uma ampla variedade de produtos de
          alta qualidade, desde roupas e acessórios até eletrônicos e itens para
          sua casa. Nosso objetivo é oferecer a melhor experiência de compra
          online, com produtos selecionados e preços competitivos.
        </p>
        <p>
          Aproveite nossas ofertas exclusivas e descubra produtos incríveis com
          avaliações excelentes. Compre com segurança e receba tudo no conforto
          da sua casa.
        </p>
        <p>
          Explore nossa loja e encontre tudo o que você precisa em um só lugar!
        </p>
      </div>
    </>
  );
};

export default Home;
