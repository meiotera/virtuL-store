import styles from '../styles/Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.spinner} />
    </div>
  );
};

export default Loading;
