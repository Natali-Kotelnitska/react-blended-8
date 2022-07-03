import styles from 'Container.module.css';

export const Container = ({ children }) => {
  return <div classname={styles.container}>{children}</div>;
};
