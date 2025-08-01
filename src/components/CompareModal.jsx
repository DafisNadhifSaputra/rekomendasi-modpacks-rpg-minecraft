import { tierCategories } from '../data';

const CompareModal = ({ isOpen, selectedModpacks, onClose }) => {
  if (!isOpen) return null;

  if (selectedModpacks.length < 2) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop">
        <div className="bg-gray-800 rounded-2xl shadow-2xl w-full max-w-7xl max-h-[90vh] overflow-y-auto transform modal-content">
          <p className="p-8 text-center">Pilih minimal 2 modpack untuk dibandingkan.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop">
      <div className="bg-gray-800 rounded-2xl shadow-2xl w-full max-w-7xl max-h-[90vh] overflow-y-auto transform modal-content">
        <div className="p-4 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-minecraft text-2xl md:text-3xl text-amber-400">
              Perbandingan Modpack
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-4xl font-bold"
            >
              &times;
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-700">
                  <th className="p-3 text-left font-semibold text-amber-500">Fitur</th>
                  {selectedModpacks.map((modpack) => (
                    <th key={modpack.id} className="p-3 text-left font-minecraft text-amber-400">
                      {modpack.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.keys(tierCategories).map((catKey) => (
                  <tr key={catKey} className="border-b border-gray-700">
                    <td className="p-3 font-semibold text-gray-300">
                      {tierCategories[catKey]}
                    </td>
                    {selectedModpacks.map((modpack) => (
                      <td key={modpack.id} className="p-3 align-top text-center">
                        <span className={`tier-label !text-base !py-1 !px-3 tier-${modpack.tiers[catKey].toLowerCase()}`}>
                          {modpack.tiers[catKey]}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareModal;
