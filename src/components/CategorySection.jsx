import { ChevronRight } from "lucide-react";
import { categories, categoryImages } from "../data/bikes";

export default function CategorySection({ activeCategory, onCategoryChange, onNotify }) {
  return (
    <section className="container-site py-8 sm:py-9">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <div className="section-kicker" />
          <h2 className="section-title">Explore by Category</h2>
          <p className="mt-1 text-[14px] text-slate-500">
            Find your perfect ride from our wide range of reconditioned bikes and scooters.
          </p>
        </div>
        <button
          onClick={() => onNotify("Showing all categories")}
          className="hidden items-center gap-1 text-[10px] font-bold text-brand-red sm:flex"
        >
          View All Categories <ChevronRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
        {categories.map(([name, count, key], index) => (
          <button
            key={name}
            onClick={() => onCategoryChange(key)}
            className={`card group overflow-hidden p-2 text-center transition hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(20,37,58,.08)] ${
              activeCategory === key ? "border-brand-red bg-red-50/40" : ""
            }`}
          >
            <div className="h-24 overflow-hidden rounded-md bg-slate-100">
              <img src={categoryImages[index]} className="h-full w-full object-cover mix-blend-multiply transition group-hover:scale-105" alt="" />
            </div>
            <div className="mt-2 text-[11px] font-bold">{name}</div>
            <div className="mt-1 text-[9px] text-slate-400">{count}</div>
          </button>
        ))}
      </div>
    </section>
  );
}