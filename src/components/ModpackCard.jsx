const ModpackCard = ({ modpack, isSelected, onToggleCompare, onOpenModal }) => {
  return (
    <div 
      id={`card-${modpack.id}`} 
      className={`card rounded-xl overflow-hidden shadow-lg p-6 flex flex-col ${isSelected ? 'selected' : ''}`}
    >
      <div className="checkbox-container">
        <input
          type="checkbox"
          id={`compare-${modpack.id}`}
          checked={isSelected}
          onChange={() => onToggleCompare(modpack.id)}
          className="h-6 w-6 rounded text-indigo-600 focus:ring-indigo-500 border-gray-500 bg-gray-700 cursor-pointer"
        />
      </div>
      <div className="cursor-pointer flex-grow" onClick={() => onOpenModal(modpack.id)}>
        <h2 className="font-minecraft text-xl text-amber-400 mb-3 pr-8">{modpack.title}</h2>
        <p className="text-gray-400 flex-grow mb-4">{modpack.shortDesc}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {modpack.tags.map((tag, index) => (
            <span key={index} className="tag text-xs font-semibold px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <button
        className="btn-primary font-bold py-2 px-4 rounded-lg w-full mt-auto"
        onClick={() => onOpenModal(modpack.id)}
      >
        Lihat Detail
      </button>
    </div>
  );
};

export default ModpackCard;
