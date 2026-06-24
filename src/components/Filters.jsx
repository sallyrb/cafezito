import styles from './Filters.module.css';

export default function Filters({ filters, onFilterChange }) {
  const handleNameChange = (e) => {
    onFilterChange({ ...filters, name: e.target.value });
  };

  const handleDateChange = (e) => {
    onFilterChange({ ...filters, date: e.target.value });
  };

  const handleValueChange = (e) => {
    const value = e.target.value.replace(/[^0-9.,]/g, '');
    onFilterChange({ ...filters, value });
  };

  const clearFilters = () => {
    onFilterChange({ name: '', date: '', value: '' });
  };

  const hasFilters = filters.name || filters.date || filters.value;

  return (
    <section className={styles.filters}>
      <div className={styles.filtersContainer}>
        <h3 className={styles.filtersTitle}>^ Filtrar Registros ^</h3>
        <div className={styles.filtersRow}>
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel} htmlFor="filter-name">Nome</label>
            <input
              id="filter-name"
              type="text"
              className={styles.filterInput}
              placeholder="Ex.: Claudinho"
              value={filters.name}
              onChange={handleNameChange}
            />
          </div>
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel} htmlFor="filter-date">Data</label>
            <input
              id="filter-date"
              type="date"
              className={styles.filterInput}
              value={filters.date}
              onChange={handleDateChange}
            />
          </div>
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel} htmlFor="filter-value">Valor</label>
            <input
              id="filter-value"
              type="text"
              className={styles.filterInput}
              placeholder="R$ 5,50"
              value={filters.value}
              onChange={handleValueChange}
            />
          </div>
          {hasFilters && (
            <button className={styles.clearButton} onClick={clearFilters}>
              Limpar Filtros
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
