import CoffeeCard from './CoffeeCard';
import styles from './History.module.css';

export default function History({ records, isLoading, onDelete }) {
  if (isLoading) {
    return (
      <section className={styles.history}>
        <h3 className={styles.historyTitle}>^ Histórico ^</h3>
        <div className={styles.loading}>Carregando registros...</div>
      </section>
    );
  }

  return (
    <section className={styles.history}>
      <h3 className={styles.historyTitle}>^ Histórico ^</h3>
      {records.length === 0 ? (
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>☕</div>
          <p className={styles.emptyText}>Nenhum café registrado ainda.</p>
          <p className={styles.emptySubtext}>Seu primeiro café está esperando!</p>
        </div>
      ) : (
        <div className={styles.recordsList}>
          {records.map(record => (
            <CoffeeCard key={record.id} record={record} onDelete={onDelete} />
          ))}
        </div>
      )}
    </section>
  );
}
