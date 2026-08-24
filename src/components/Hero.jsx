import { ShieldCheck, Search, Plus, MapPin, Star, Bike, ClipboardCheck, Gauge } from "lucide-react";

const FEATURES = [
  {
    icon: Bike,
    title: "Wide Selection",
    subtitle: "100+ Bikes & Scooters",
  },
  {
    icon: ClipboardCheck,
    title: "Easy Process",
    subtitle: "Simple Buy & Sell Process",
  },
  {
    icon: ShieldCheck,
    title: "Expert Support",
    subtitle: "We're Here to Help",
  },
  {
    icon: Gauge,
    title: "Ride with Confidence",
    subtitle: "Quality You Can Trust",
  },
];

const AVATAR_URLS = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/men/54.jpg",
  "https://randomuser.me/api/portraits/men/76.jpg",
];

export default function Hero({ onBrowse, onSell }) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative mx-auto max-w-[1400px] px-6 pb-8 pt-6 sm:px-10">
        {/* Background photo */}
        <div className="absolute inset-0 overflow-hidden ">
          <div className="absolute inset-0 bg-[url('/bg-image.png')] bg-cover bg-[position:70%_30%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-white/5" />
        </div>

        {/* Content — explicit stacking layer, always painted above the background */}
        <div className="relative z-10">
          {/* Top badges */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-bold tracking-[.14em] text-slate-700 ">
              <span className="flex h-5 w-5 items-center justify-center rounded-full  text-red-600 ">
                <ShieldCheck className="h-4 w-4" strokeWidth={3} />
              </span>
              TRUSTED. VERIFIED. RELIABLE.
            </div>

            <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[12px] font-semibold text-slate-800 shadow-sm sm:flex">
              <span className="text-lg leading-none">#1</span>
              <span className="leading-tight">
                Platform for
                <br />
                Used Bikes in Nepal
              </span>
            </div>
          </div>

          {/* Headline */}
          <div className="mt-10 max-w-[640px] sm:mt-1">
            <h1 className="text-[44px] font-extrabold uppercase leading-[1.25] tracking-tight text-brand-ink sm:text-[58px]">
             Buy &amp; Sell
             <br />
             <span className="text-brand-red">Second Hand</span>
             <br />
             Bikes &amp; Scooters
            </h1>

            <span className="mt-5 block h-1 w-16 rounded-full bg-brand-red" />

            <p className="mt-5 max-w-[420px] text-[15px] leading-6 text-slate-500">
              Find the best deals on quality used bikes and scooters in Nepal.
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <button
                onClick={onBrowse}
                className="flex items-center gap-2 rounded-full bg-brand-red px-7 py-3.5 text-[13px] font-bold tracking-wide text-white shadow-lg transition hover:bg-brand-red/80"
              >
                <Search className="h-4 w-4" strokeWidth={2.5} />
                BROWSE BIKES
              </button>
              <button
                onClick={onSell}
                className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-[13px] font-bold tracking-wide text-brand-ink transition hover:border-slate-600"
              >
                <Plus className="h-4 w-4" strokeWidth={2.5} />
                SELL YOUR BIKE
              </button>
            </div>

            {/* Location + social proof */}
            <div className="mt-2 w-72 flex flex-wrap items-center rounded-2xl bg-white/90 px-5 py-4 backdrop-blur-sm sm:gap-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center -space-x-2">
                  {AVATAR_URLS.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="h-8 w-8 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-brand-red text-[11px] font-bold text-white">
                    1K+
                  </span>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-brand-ink">Happy Customers</p>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500">
                    <span className="flex text-brand-red">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-brand-red text-brand-red" />
                      ))}
                    </span>
                    4.8/5
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature strip */}
          <div className="mt-5 grid grid-cols-2 gap-6 rounded-2xl border border-slate-200 bg-white/95 px-6 py-6 backdrop-blur-sm sm:grid-cols-4 sm:gap-4">
            {FEATURES.map(({ icon: Icon, title, subtitle }) => (
              <div key={title} className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red/0 text-brand-red">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <div>
                  <p className="text-[13px] font-bold text-brand-ink">{title}</p>
                  <p className="text-[11px] text-slate-500">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}