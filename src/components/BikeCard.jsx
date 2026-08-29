import { Heart, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BikeCard({ bike, favorite, onFavorite, onClick }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();
    navigate(`/buy/${bike.id}`);
  };

  return (
    <div className="card overflow-hidden transition hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(20,37,58,.08)]">
      <div className="relative h-40 bg-slate-100 sm:h-44">
        <img src={bike.image} className="h-full w-full object-cover" alt={bike.name} />
        <span className="absolute left-2.5 top-2.5 rounded-md bg-emerald-500 px-2.5 py-1 text-[11px] font-bold text-white">
          {bike.tag}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onFavorite();
          }}
          className="absolute right-2.5 top-2.5 rounded-full bg-white/90 p-2 shadow"
          aria-label={`Favorite ${bike.name}`}
        >
          <Heart
            size={16}
            fill={favorite ? "#e51f35" : "none"}
            className={favorite ? "text-brand-red" : "text-slate-500"}
          />
        </button>
      </div>

      <button onClick={handleClick} className="w-full p-4 text-left">
        <div className="text-base font-bold text-slate-900">{bike.name}</div>
        <div className="mt-1 text-xs text-slate-400">
          {bike.year} • {bike.km} • Reconditioned
        </div>
        <div className="mt-2 text-lg font-extrabold text-brand-red">{bike.price}</div>

        <div className="mt-2.5 flex items-center gap-1 text-xs text-slate-500">
          <MapPin size={13} /> {bike.city}
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {bike.chips.map((chip) => (
            <span key={chip} className="rounded-md bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-600">
              {chip}
            </span>
          ))}
        </div>
      </button>
    </div>
  );
}