// src/pages/Buy.jsx
import { useMemo, useState } from "react";
import {
  SlidersHorizontal,
  Heart,
  MapPin,
  BadgeCheck,
  LayoutGrid,
  List as ListIcon,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  RotateCcw,
  X,
} from "lucide-react";

const CATEGORIES = [
  { label: "All Categories", count: 156 },
  { label: "Sports Bike", count: 25 },
  { label: "Commuter Bike", count: 67 },
  { label: "Scooter", count: 32 },
  { label: "Cruiser", count: 12 },
  { label: "Others", count: 20 },
];

const BRANDS = [
  { label: "Bajaj", count: 45 },
  { label: "TVS", count: 28 },
  { label: "Yamaha", count: 26 },
  { label: "Honda", count: 22 },
  { label: "Suzuki", count: 18 },
];

const POPULAR_SEARCHES = [
  "Pulsar 220F",
  "Apache RTR 160",
  "Yamaha FZS",
  "Vespa",
  "Honda CB Hornet",
];

const LISTINGS = [
  {
    id: 1,
    name: "KTM Duke 200 BS6",
    category: "Sports Bike",
    year: 2021,
    km: "18,500 km",
    brand: "KTM",
    price: "NPR 2,45,000",
    location: "Kathmandu",
    image: "/demo1.png",
    verified: true,
  },
  {
    id: 2,
    name: "Bajaj Pulsar 220F",
    category: "Commuter Bike",
    year: 2019,
    km: "32,000 km",
    brand: "Bajaj",
    price: "NPR 1,85,000",
    location: "Lalitpur",
    image: "/demo2.png",
    verified: true,
  },
  {
    id: 3,
    name: "Vespa SXL 125",
    category: "Scooter",
    year: 2020,
    km: "9,800 km",
    brand: "Vespa",
    price: "NPR 2,10,000",
    location: "Bhaktapur",
    image: "/scooter-category.png",
    verified: true,
  },
  {
    id: 4,
    name: "Yamaha R15 V3",
    category: "Sports Bike",
    year: 2019,
    km: "25,000 km",
    brand: "Yamaha",
    price: "NPR 2,35,000",
    location: "Kathmandu",
    image: "/bike-category.png",
    verified: true,
  },
  {
    id: 5,
    name: "TVS Apache RTR 160 4V",
    category: "Commuter Bike",
    year: 2021,
    km: "15,000 km",
    brand: "TVS",
    price: "NPR 2,05,000",
    location: "Lalitpur",
    image: "/demo1.png",
    verified: true,
  },
  {
    id: 6,
    name: "Royal Enfield Classic 350",
    category: "Cruiser",
    year: 2018,
    km: "21,000 km",
    brand: "Royal Enfield",
    price: "NPR 2,75,000",
    location: "Kathmandu",
    image: "/demo2.png",
    verified: true,
  },
  {
    id: 7,
    name: "Honda CB Shine",
    category: "Commuter Bike",
    year: 2019,
    km: "28,000 km",
    brand: "Honda",
    price: "NPR 1,55,000",
    location: "Chitwan",
    image: "/bike-category.png",
    verified: true,
  },
  {
    id: 8,
    name: "Honda Dio BS6",
    category: "Scooter",
    year: 2021,
    km: "11,000 km",
    brand: "Honda",
    price: "NPR 1,48,000",
    location: "Pokhara",
    image: "/scooter-category.png",
    verified: true,
  },
];

export default function Buy() {
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [sortBy, setSortBy] = useState("Latest First");
  const [view, setView] = useState("grid");
  const [favorites, setFavorites] = useState([]);
  const [page, setPage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggleBrand = (brand) => {
    setSelectedBrands((current) =>
      current.includes(brand)
        ? current.filter((b) => b !== brand)
        : [...current, brand]
    );
  };

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id) ? current.filter((f) => f !== id) : [...current, id]
    );
  };

  const resetFilters = () => {
    setActiveCategory("All Categories");
    setSelectedBrands([]);
  };

  const filteredListings = useMemo(() => {
    return LISTINGS.filter((bike) => {
      const categoryMatch =
        activeCategory === "All Categories" || bike.category === activeCategory;
      const brandMatch =
        selectedBrands.length === 0 || selectedBrands.includes(bike.brand);
      return categoryMatch && brandMatch;
    });
  }, [activeCategory, selectedBrands]);

  const filtersContent = (
    <>
      <div className="mt-6 xl:mt-0">
        <p className="mb-3 text-sm font-bold text-slate-900">Categories</p>
        <div className="space-y-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(cat.label)}
              className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                activeCategory === cat.label
                  ? "bg-red-50 font-semibold text-red-500"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span>{cat.label}</span>
              <span>{cat.count}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 border-t border-gray-100 pt-6">
        <p className="mb-3 text-sm font-bold text-slate-900">Price Range</p>
        <input type="range" min="50000" max="800000" className="w-full accent-red-500" />
        <div className="mt-1 flex justify-between text-xs text-gray-500">
          <span>NPR 50,000</span>
          <span>NPR 8,00,000+</span>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-100 pt-6">
        <p className="mb-3 text-sm font-bold text-slate-900">Brand</p>
        <div className="space-y-2">
          {BRANDS.map((brand) => (
            <label
              key={brand.label}
              className="flex items-center justify-between text-sm text-gray-600"
            >
              <span className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand.label)}
                  onChange={() => toggleBrand(brand.label)}
                  className="accent-red-500"
                />
                {brand.label}
              </span>
              <span>{brand.count}</span>
            </label>
          ))}
        </div>
        <button className="mt-3 flex items-center gap-1 text-sm font-semibold text-red-500">
          View More <ChevronDown size={14} />
        </button>
      </div>

      <div className="mt-6 border-t border-gray-100 pt-6">
        <p className="mb-2 text-sm font-bold text-slate-900">Year</p>
        <select className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-500 focus:border-red-400 focus:outline-none">
          <option>Select Year</option>
        </select>
      </div>

      <div className="mt-6 border-t border-gray-100 pt-6">
        <p className="mb-2 text-sm font-bold text-slate-900">KM Driven</p>
        <select className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-500 focus:border-red-400 focus:outline-none">
          <option>Any KM</option>
        </select>
      </div>

      <button
        onClick={resetFilters}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-md border border-red-500 py-2.5 text-sm font-semibold text-red-500 transition-colors hover:bg-red-50"
      >
        <RotateCcw size={15} />
        Reset Filters
      </button>
    </>
  );

  return (
    <main className="container-site grid grid-cols-1 gap-8 py-10 xl:grid-cols-[280px_1fr]">
      {/* Sidebar filters - desktop (xl and up) */}
      <aside className="hidden h-fit rounded-2xl border border-gray-100 p-6 shadow-sm xl:block">
        <p className="flex items-center gap-2 font-bold text-slate-900">
          <SlidersHorizontal size={17} className="text-red-500" />
          FILTERS
        </p>
        {filtersContent}
      </aside>

      {/* Filter drawer - below xl */}
      {filtersOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div
            onClick={() => setFiltersOpen(false)}
            className="absolute inset-0 bg-black/30"
          />
          <div className="absolute inset-y-0 left-0 w-[85%] max-w-sm overflow-y-auto bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-2 font-bold text-slate-900">
                <SlidersHorizontal size={17} className="text-red-500" />
                FILTERS
              </p>
              <button
                onClick={() => setFiltersOpen(false)}
                className="rounded-md p-1.5 text-slate-400 hover:bg-slate-50 hover:text-slate-600"
                aria-label="Close filters"
              >
                <X size={20} />
              </button>
            </div>
            {filtersContent}
          </div>
        </div>
      )}

      {/* Results */}
      <section>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            Showing 1 – {filteredListings.length} of 156 bikes
          </p>

          <div className="flex items-center gap-3">
            {/* Small filter icon button - below xl only */}
            <button
              onClick={() => setFiltersOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-gray-600 hover:border-red-300 hover:text-red-500 xl:hidden"
              aria-label="Open filters"
            >
              <SlidersHorizontal size={16} />
            </button>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none rounded-md border border-gray-200 py-2 pl-3 pr-8 text-sm focus:border-red-400 focus:outline-none"
              >
                <option>Latest First</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>

            <div className="flex overflow-hidden rounded-md border border-gray-200">
              <button
                onClick={() => setView("grid")}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold ${
                  view === "grid"
                    ? "bg-red-50 text-red-500"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                <LayoutGrid size={15} />
                <span className="hidden sm:inline">Grid</span>
              </button>
              <button
                onClick={() => setView("list")}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold ${
                  view === "list"
                    ? "bg-red-50 text-red-500"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                <ListIcon size={15} />
                <span className="hidden sm:inline">List</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-sm text-gray-500">Popular Searches:</span>
          {POPULAR_SEARCHES.map((term) => (
            <button
              key={term}
              className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600 hover:border-red-300 hover:text-red-500"
            >
              {term}
            </button>
          ))}
          {(activeCategory !== "All Categories" || selectedBrands.length > 0) && (
            <button
              onClick={resetFilters}
              className="ml-auto flex items-center gap-1 text-xs font-semibold text-red-500"
            >
              Clear All <RotateCcw size={12} />
            </button>
          )}
        </div>

        <div
          className={`mt-6 grid gap-6 ${
            view === "grid"
              ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
              : "grid-cols-1"
          }`}
        >
          {filteredListings.map((bike) => (
            <BikeCard
              key={bike.id}
              bike={bike}
              isFavorite={favorites.includes(bike.id)}
              onFavorite={() => toggleFavorite(bike.id)}
              view={view}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <PageButton onClick={() => setPage((p) => Math.max(1, p - 1))}>
              <ChevronLeft size={16} />
            </PageButton>
            {[1, 2, 3].map((n) => (
              <PageButton
                key={n}
                active={page === n}
                onClick={() => setPage(n)}
              >
                {n}
              </PageButton>
            ))}
            <span className="px-1 text-gray-400">...</span>
            <PageButton active={page === 13} onClick={() => setPage(13)}>
              13
            </PageButton>
            <PageButton onClick={() => setPage((p) => Math.min(13, p + 1))}>
              <ChevronRight size={16} />
            </PageButton>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            Items per page:
            <select className="rounded-md border border-gray-200 px-2 py-1.5 focus:border-red-400 focus:outline-none">
              <option>12</option>
              <option>24</option>
              <option>48</option>
            </select>
          </div>
        </div>
      </section>
    </main>
  );
}

function BikeCard({ bike, isFavorite, onFavorite, view }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md ${
        view === "list" ? "flex" : ""
      }`}
    >
      <div className={`relative ${view === "list" ? "w-64 shrink-0" : ""}`}>
        <span className="absolute left-3 top-3 rounded-md bg-slate-900/80 px-2 py-1 text-xs font-semibold text-white">
          {bike.category}
        </span>
        <button
          onClick={onFavorite}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow"
        >
          <Heart
            size={15}
            className={isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"}
          />
        </button>
        <img
          src={bike.image}
          alt={bike.name}
          className="h-48 w-full object-cover"
        />
        {bike.verified && (
          <span className="absolute bottom-3 left-3 flex items-center gap-1 rounded-md bg-green-600 px-2 py-1 text-xs font-semibold text-white">
            <BadgeCheck size={13} />
            Verified
          </span>
        )}
      </div>

      <div className="p-4">
        <p className="font-bold text-slate-900">{bike.name}</p>
        <p className="mt-1 text-sm text-gray-500">
          {bike.year} • {bike.km} • {bike.brand}
        </p>
        <p className="mt-2 text-lg font-extrabold text-red-500">{bike.price}</p>
        <p className="mt-2 flex items-center gap-1 text-sm text-gray-500">
          <MapPin size={13} />
          {bike.location}
        </p>
      </div>
    </div>
  );
}

function PageButton({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex h-9 w-9 items-center justify-center rounded-md border text-sm font-semibold transition-colors ${
        active
          ? "border-red-500 bg-red-500 text-white"
          : "border-gray-200 text-gray-600 hover:border-red-300"
      }`}
    >
      {children}
    </button>
  );
}