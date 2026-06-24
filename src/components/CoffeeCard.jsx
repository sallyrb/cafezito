import styles from './CoffeeCard.module.css';
import { Coffee, User, Calendar, Trash2 } from 'lucide-react';

export default function CoffeeCard({ record, onDelete }) {
  const formatDate = (dateStr) => {
    if (!dateStr) return '';

    const [year, month, day] = dateStr.split('-');

    return `${day}/${month}/${year}`;
  };

  const formatValue = (value) => {
    return `R$ ${parseFloat(value).toFixed(2).replace('.', ',')}`;
  };

  const handleDelete = () => {
    if (
      window.confirm(
        `Deseja realmente excluir o registro "${record.product_name}"?`
      )
    ) {
      onDelete(record.id);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.avatar}>
        <Coffee size={20} />
      </div>

      <div className={styles.cardContent}>
        <h4 className={styles.productName}>
          {record.product_name}
        </h4>

        <div className={styles.details}>
          <span className={styles.detail}>
            <User size={14} />
            {record.user_name}
          </span>

          <span className={styles.detail}>
            <Calendar size={14} />
            {formatDate(record.date)}
          </span>
        </div>
      </div>

      <div className={styles.cardRight}>
        <span className={styles.value}>
          {formatValue(record.value)}
        </span>

        <button
          className={styles.deleteButton}
          onClick={handleDelete}
          aria-label="Excluir registro"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
}