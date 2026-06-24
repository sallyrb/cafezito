import styles from './FloatingButton.module.css';

export default function FloatingButton({ onClick }) {
  return (
    <button className={styles.floatingButton} onClick={onClick}>
      ☕ Adicionar Cafezinho
    </button>
  );
}
