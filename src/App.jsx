import { useState, useEffect, useCallback } from 'react';
import { getRecords, createRecord, deleteRecord } from './utils/sheetdb';
import { ToastProvider, useToast } from './context/ToastContext';

// import Header from './components/Header';
import Hero from './components/Hero';
import Filters from './components/Filters';
import History from './components/History';
import RegisterModal from './components/RegisterModal';
import FloatingButton from './components/FloatingButton';

function AppContent() {
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({ name: '', date: '', value: '' });

  const toast = useToast();

  const normalizeValue = (v) => {
    if (v === null || v === undefined || v === '') return null;
    return Number(String(v).replace(',', '.'));
  };

  const fetchRecords = useCallback(async () => {
    try {
      setIsLoading(true);

      const data = await getRecords();

      const normalized = data.map((r) => ({
        ...r,
        value: normalizeValue(r.value)
      }));

      const sorted = normalized.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );

      setRecords(sorted);
    } catch (error) {
      console.error('Error fetching records:', error);
      toast.addToast('Não foi possível carregar os registros.', 'error');
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchRecords();
  }, [fetchRecords]);

  const handleSave = async (formData) => {
    try {
      await createRecord({
        id: Date.now().toString(),
        user_name: formData.user_name,
        product_name: formData.product_name,
        value: normalizeValue(formData.value), // 🔥 GARANTIDO NUMBER
        date: formData.date,
        created_at: new Date().toISOString()
      });

      toast.addToast('☕ Café registrado com sucesso!', 'success');
      await fetchRecords();
    } catch (error) {
      console.error('Error saving record:', error);
      toast.addToast('Não foi possível registrar o café.', 'error');
      throw error;
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteRecord(id);

      toast.addToast('Café removido com sucesso!', 'success');
      await fetchRecords();
    } catch (error) {
      console.error('Error deleting record:', error);
      toast.addToast('Não foi possível remover o registro.', 'error');
    }
  };

  const filteredRecords = records.filter((record) => {
    if (filters.name) {
      const searchTerm = filters.name.toLowerCase();

      const matchesName =
        record.user_name.toLowerCase().includes(searchTerm) ||
        record.product_name.toLowerCase().includes(searchTerm);

      if (!matchesName) return false;
    }

    if (filters.date) {
      const recordDate = new Date(record.date)
        .toISOString()
        .split('T')[0];

      if (recordDate !== filters.date) return false;
    }

    if (filters.value) {
      const normalize = (v) => {
        if (v === null || v === undefined) return '';
        return String(v).replace(',', '.');
      };

      const recordValue = normalize(record.value);
      const filterValue = normalize(filters.value);

      if (!recordValue.includes(filterValue)) {
        return false;
      }
    }

    return true;
  });

  return (
    <>
      {/* <Header /> */}

      <main>
        <Hero onRegisterClick={() => setIsModalOpen(true)} />

        <Filters
          filters={filters}
          onFilterChange={setFilters}
        />

        <History
          records={filteredRecords}
          isLoading={isLoading}
          onDelete={handleDelete}
        />
      </main>

      <FloatingButton onClick={() => setIsModalOpen(true)} />

      <RegisterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
      />
    </>
  );
}

function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}

export default App;