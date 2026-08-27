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
      <div className="relative h-28 bg-slate-100">
        <img src={bike.image} className="h-full w-full object-cover" alt={bike.name} />
        <span className="absolute left-2 top-2 rounded-md bg-emerald-500 px-2 py-1 text-[8px] font-bold text-white">
          {bike.tag}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onFavorite();
          }}
          className="absolute right-2 top-2 rounded-full bg-white/90 p-1.5 shadow"
          aria-label={`Favorite ${bike.name}`}
        >
          <Heart
            size={13}
            fill={favorite ? "#e51f35" : "none"}
            className={favorite ? "text-brand-red" : "text-slate-500"}
          />
        </button>
      </div>

      <button onClick={handleClick} className="w-full p-3 text-left">
        <div className="text-[10px] font-bold">{bike.name}</div>
        <div className="mt-1 text-[8px] text-slate-400">
          {bike.year} • {bike.km} • Reconditioned
        </div>
        <div className="mt-1 text-[12px] font-extrabold text-brand-red">{bike.price}</div>

        <div className="mt-2 flex items-center gap-1 text-[8px] text-slate-400">
          <MapPin size={10} /> {bike.city}
        </div>

        <div className="mt-2 flex flex-wrap gap-1">
          {bike.chips.map((chip) => (
            <span key={chip} className="rounded bg-slate-100 px-2 py-1 text-[7px] font-semibold text-slate-500">
              {chip}
            </span>
          ))}
        </div>
      </button>
    </div>
  );
}