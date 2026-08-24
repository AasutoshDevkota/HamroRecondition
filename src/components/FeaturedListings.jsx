import BikeCard from "./BikeCard";

export default function FeaturedListings({
  bikes,
  favorites,
  onFavorite,
  onNotify
}) {
  return (
    <section className="container-site pb-10">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <div className="section-kicker" />
          <h2 className="section-title">Featured Reconditioned Bikes & Scooters</h2>
          <p className="mt-1 text-[10px] text-slate-500">
            Well-maintained. Fully checked. Ready for your next journey.
          </p>
        </div>
        <button
          onClick={() => onNotify("All featured listings")}
          className="rounded-md bg-brand-red px-4 py-2.5 text-[10px] font-bold text-white"
        >
          View All Listings →
        </button>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {bikes.map((bike) => (
          <BikeCard
            key={bike.name}
            bike={bike}
            favorite={favorites.includes(bike.name)}
            onFavorite={() => onFavorite(bike.name)}
            onClick={() => onNotify(`${bike.name} selected`)}
          />
        ))}
      </div>
    </section>
  );
}