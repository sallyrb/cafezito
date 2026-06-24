import { useState } from 'react';
import styles from './RegisterModal.module.css';

export default function RegisterModal({ isOpen, onClose, onSave }) {
  const [form, setForm] = useState({
    user_name: '',
    product_name: '',
    value: '',
    date: new Date().toISOString().split('T')[0]
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'value') {
      const numericValue = value.replace(/[^0-9.,]/g, '');
      setForm(prev => ({ ...prev, [name]: numericValue }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.user_name.trim()) {
      newErrors.user_name = 'Por favor, informe seu nome.';
    }

    if (!form.product_name.trim()) {
      newErrors.product_name = 'Por favor, informe o produto.';
    }

    if (!form.value.trim()) {
      newErrors.value = 'Por favor, informe o valor.';
    } else {
      const numericValue = parseFloat(form.value.replace(',', '.'));
      if (isNaN(numericValue) || numericValue <= 0) {
        newErrors.value = 'Valor inválido.';
      }
    }

    if (!form.date) {
      newErrors.date = 'Por favor, selecione a data.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const numericValue = parseFloat(form.value.replace(',', '.'));
      await onSave({
        user_name: form.user_name.trim(),
        product_name: form.product_name.trim(),
        value: numericValue,
        date: form.date
      });

      setForm({
        user_name: '',
        product_name: '',
        value: '',
        date: new Date().toISOString().split('T')[0]
      });
      setErrors({});
      onClose();
    } catch (error) {
      console.error('Error saving:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setForm({
      user_name: '',
      product_name: '',
      value: '',
      date: new Date().toISOString().split('T')[0]
    });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>Registrar Café</h3>
          <button className={styles.closeButton} onClick={handleClose}>&times;</button>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="user_name">Nome</label>
            <input
              id="user_name"
              type="text"
              name="user_name"
              className={`${styles.input} ${errors.user_name ? styles.inputError : ''}`}
              placeholder="Seu nome"
              value={form.user_name}
              onChange={handleChange}
            />
            {errors.user_name && <span className={styles.error}>{errors.user_name}</span>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="product_name">Produto Comprado</label>
            <input
              id="product_name"
              type="text"
              name="product_name"
              className={`${styles.input} ${errors.product_name ? styles.inputError : ''}`}
              placeholder="Ex.: Espresso, Cappuccino, Latte"
              value={form.product_name}
              onChange={handleChange}
            />
            {errors.product_name && <span className={styles.error}>{errors.product_name}</span>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="value">Valor</label>
            <input
              id="value"
              type="text"
              name="value"
              className={`${styles.input} ${errors.value ? styles.inputError : ''}`}
              placeholder="R$ 5,50"
              value={form.value}
              onChange={handleChange}
            />
            {errors.value && <span className={styles.error}>{errors.value}</span>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="date">Data</label>
            <input
              id="date"
              type="date"
              name="date"
              className={`${styles.input} ${errors.date ? styles.inputError : ''}`}
              value={form.date}
              onChange={handleChange}
            />
            {errors.date && <span className={styles.error}>{errors.date}</span>}
          </div>

          <div className={styles.buttons}>
            <button type="button" className={styles.cancelButton} onClick={handleClose}>
              Cancelar
            </button>
            <button type="submit" className={styles.saveButton} disabled={isSubmitting}>
              {isSubmitting ? 'Salvando...' : 'Salvar Registro'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
