import { useState, useEffect } from 'react';
import Header from './components/Header';
import TierList from './components/TierList';
import ModpackCard from './components/ModpackCard';
import Modal from './components/Modal';
import CompareModal from './components/CompareModal';
import CompareButton from './components/CompareButton';
import Footer from './components/Footer';
import { modpacks } from './data';

function App() {
  const [selectedAspect, setSelectedAspect] = useState('overall');
  const [selectedToCompare, setSelectedToCompare] = useState([]);
  const [modalModpack, setModalModpack] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  const handleToggleCompare = (id) => {
    setSelectedToCompare(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleOpenModal = (id) => {
    const modpack = modpacks.find(m => m.id === id);
    setModalModpack(modpack);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalModpack(null);
    document.body.style.overflow = 'auto';
  };

  const handleOpenCompareModal = () => {
    setIsCompareModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseCompareModal = () => {
    setIsCompareModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleHighlightCard = (id) => {
    const card = document.getElementById(`card-${id}`);
    if (card) {
      card.style.transition = 'all 0.3s ease';
      card.style.boxShadow = '0 0 30px 10px var(--color-a-tier)';
      setTimeout(() => {
        card.style.boxShadow = '';
      }, 1500);
    }
  };

  const selectedModpacks = modpacks.filter(modpack => 
    selectedToCompare.includes(modpack.id)
  );

  // Close modals when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.classList.contains('modal-backdrop')) {
        if (isModalOpen) handleCloseModal();
        if (isCompareModalOpen) handleCloseCompareModal();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isModalOpen, isCompareModalOpen]);

  return (
    <div className="min-h-screen text-gray-200">
      <Header />
      
      <TierList 
        selectedAspect={selectedAspect}
        onAspectChange={setSelectedAspect}
        onHighlightCard={handleHighlightCard}
      />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="font-minecraft text-2xl md:text-3xl text-center text-amber-400 mb-8">
          Semua Modpack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {modpacks.map(modpack => (
            <ModpackCard
              key={modpack.id}
              modpack={modpack}
              isSelected={selectedToCompare.includes(modpack.id)}
              onToggleCompare={handleToggleCompare}
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>
      </main>

      <Footer />

      <Modal
        isOpen={isModalOpen}
        modpack={modalModpack}
        onClose={handleCloseModal}
      />

      <CompareModal
        isOpen={isCompareModalOpen}
        selectedModpacks={selectedModpacks}
        onClose={handleCloseCompareModal}
      />

      <CompareButton
        selectedCount={selectedToCompare.length}
        onClick={handleOpenCompareModal}
      />
    </div>
  );
}

export default App;
