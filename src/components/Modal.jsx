const Section = ({ title, data }) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-amber-500 border-b-2 border-gray-700 pb-2 mb-3">
        {title}
      </h3>
      <p className="mb-4 italic text-gray-400">&quot;{data.summary}&quot;</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-green-400 mb-2">Kelebihan:</h4>
          <ul className="pro-con-list pro-list space-y-2">
            {data.pros.length > 0 ? (
              data.pros.map((pro, index) => <li key={index}>{pro}</li>)
            ) : (
              <li>Tidak ada yang menonjol.</li>
            )}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-red-400 mb-2">Kekurangan:</h4>
          <ul className="pro-con-list con-list space-y-2">
            {data.cons.length > 0 ? (
              data.cons.map((con, index) => <li key={index}>{con}</li>)
            ) : (
              <li>Tidak ada yang signifikan.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Modal = ({ isOpen, modpack, onClose }) => {
  if (!isOpen || !modpack) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop">
      <div className="bg-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto transform modal-content">
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-6">
            <h2 className="font-minecraft text-2xl md:text-3xl text-amber-400">
              {modpack.title}
            </h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white text-4xl font-bold"
            >
              &times;
            </button>
          </div>
          <div className="space-y-6 text-gray-300">
            <Section title="Sistem Misi & Narasi" data={modpack.details.quest} />
            <Section title="Mekanisme RPG & Progresi" data={modpack.details.rpg} />
            <Section title="Visual & Imersi Dunia" data={modpack.details.visual} />
            <Section title="Kinerja & Stabilitas" data={modpack.details.performance} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
