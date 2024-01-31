import styles from "./Loading.module.css";

const LoadingIndicator = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.loading}></div>
      </div>
    </>
  );
};

export default LoadingIndicator;
