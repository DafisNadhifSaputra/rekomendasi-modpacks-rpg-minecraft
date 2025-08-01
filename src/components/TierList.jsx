import { modpacks, tierCategories } from '../data';

const TierList = ({ selectedAspect, onAspectChange, onHighlightCard }) => {
  const createTierList = (aspect) => {
    const tiers = { 'S': [], 'A': [], 'B': [], 'C': [], 'D': [] };
    const sortedModpacks = [...modpacks].sort((a, b) => a.title.localeCompare(b.title));
    
    sortedModpacks.forEach(modpack => {
      const tier = modpack.tiers[aspect];
      if (tiers[tier]) {
        tiers[tier].push(modpack);
      }
    });

    return Object.keys(tiers).map(tier => {
      if (tiers[tier].length === 0) return null;
      
      return (
        <div key={tier} className="tier-row">
          <div className={`tier-label tier-${tier.toLowerCase()}`}>{tier}</div>
          <div className="tier-items-container">
            {tiers[tier].map(modpack => (
              <a
                key={modpack.id}
                href={`#card-${modpack.id}`}
                className="tier-item"
                onClick={() => onHighlightCard(modpack.id)}
              >
                {modpack.title}
              </a>
            ))}
          </div>
        </div>
      );
    }).filter(Boolean);
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="font-minecraft text-2xl md:text-3xl text-center text-amber-400 mb-8">
        Tier List Berdasarkan Aspek
      </h2>
      
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
        {Object.keys(tierCategories).map(key => (
          <button
            key={key}
            className={`filter-btn font-semibold py-2 px-4 rounded-lg ${
              selectedAspect === key ? 'active' : ''
            }`}
            onClick={() => onAspectChange(key)}
          >
            {tierCategories[key]}
          </button>
        ))}
      </div>

      <div>
        {createTierList(selectedAspect)}
      </div>
    </section>
  );
};

export default TierList;
