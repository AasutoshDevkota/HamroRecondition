import { Handshake } from "lucide-react";
import { categoryImages, latestListings } from "../data/bikes";

export default function LatestListings({ onNotify }) {
  return (
    <section className="container-site py-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <div className="section-kicker" />
          <h2 className="section-title text-[20px]">Latest Listings</h2>
          <p className="mt-1 text-[12px] text-slate-500">New bikes and scooters added recently.</p>
        </div>

        <div className="hidden items-center gap-4 rounded-lg bg-slate-50 px-4 py-3 md:flex">
          <Handshake size={22} />
          <div>
            <div className="text-[12px] font-bold">Want to Sell Your Bike?</div>
            <div className="text-[10px] text-slate-400">Get the best price. Quick and easy process.</div>
          </div>
          <button
            onClick={() => onNotify("Sell your bike clicked")}
            className="rounded-md bg-brand-red px-4 py-2 text-[12px] font-bold text-white"
          >
            Sell Your Bike 
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 min-[1920px]:grid-cols-6">
        {latestListings.map(([name, year, km, price], index) => (
          <div key={name} className="card overflow-hidden">
            <img
              src={categoryImages[(index + 1) % categoryImages.length]}
              className="h-40 w-full object-cover sm:h-44"
              alt=""
            />
            <div className="p-4">
              <div className="text-base font-bold text-slate-900">{name}</div>
              <div className="mt-1 text-xs text-slate-400">{year} • {km}</div>
              <div className="mt-2 text-xl font-extrabold text-brand-red">{price}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}