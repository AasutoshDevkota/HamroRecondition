import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  MapPin,
  BadgeCheck,
  Tag,
  Phone,
  MessageCircle,
  Star,
  ShieldCheck,
  Wallet,
  Gauge,
  Wrench,
  Calendar,
  Fuel,
  Settings2,
  UserRound,
} from "lucide-react";
import { bikes } from "../data/bikes";

export default function BikeDetail({ onNotify }) {
  const { id } = useParams();
  const bike = bikes.find((b) => b.id === id);
  const [activeImage, setActiveImage] = useState(0);
  const [saved, setSaved] = useState(false);

  if (!bike) {
    return (
      <main className="container-site py-20 text-center">
        <p className="text-lg font-semibold text-slate-900">Listing not found.</p>
        <Link to="/buy" className="mt-4 inline-block font-semibold text-brand-red hover:underline">
          ← Back to Buy Bikes
        </Link>
      </main>
    );
  }

  const images = bike.images?.length ? bike.images : [bike.image];

  const nextImage = () => setActiveImage((i) => (i + 1) % images.length);
  const prevImage = () => setActiveImage((i) => (i - 1 + images.length) % images.length);

  return (
    <main className="container-site py-8">
      <nav className="mb-4 flex items-center gap-1 text-sm text-gray-500">
        <Link to="/" className="hover:text-brand-red">Home</Link>
        <span>›</span>
        <Link to="/buy" className="hover:text-brand-red">Buy Bikes</Link>
        <span>›</span>
        <span className="font-medium text-slate-700">{bike.name}</span>
      </nav>

      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div>
          <div className="relative overflow-hidden rounded-2xl border border-gray-100">
            <span className="absolute left-3 top-3 z-10 rounded-md bg-brand-red px-2.5 py-1 text-xs font-bold text-white">
              {bike.tag}
            </span>
            <img src={images[activeImage]} alt={bike.name} className="h-96 w-full object-cover" />
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow"
                >
                  <ChevronRight size={18} />
                </button>
                <span className="absolute bottom-3 right-3 rounded-md bg-slate-900/70 px-2 py-1 text-xs font-semibold text-white">
                  {activeImage + 1} / {images.length}
                </span>
              </>
            )}
          </div>

          {images.length > 1 && (
            <div className="mt-3 flex gap-3 overflow-x-auto">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`h-16 w-20 shrink-0 overflow-hidden rounded-lg border-2 ${
                    activeImage === i ? "border-brand-red" : "border-transparent"
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}

          <div className="mt-8 rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h2 className="border-l-4 border-brand-red pl-3 text-lg font-bold text-slate-900">
              BIKE SPECIFICATIONS
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-3">
              <SpecItem icon={<Wrench size={17} />} label="Model" value={bike.name} />
              <SpecItem icon={<Calendar size={17} />} label="Year" value={bike.year} />
              <SpecItem icon={<Gauge size={17} />} label="KM Driven" value={bike.km} />
              <SpecItem icon={<Settings2 size={17} />} label="Engine Capacity" value={bike.engineCapacity} />
              <SpecItem icon={<Fuel size={17} />} label="Fuel Type" value={bike.fuelType} />
              <SpecItem icon={<Settings2 size={17} />} label="Transmission" value={bike.transmission} />
              <SpecItem icon={<UserRound size={17} />} label="Ownership" value={bike.ownership} />
            </div>
          </div>

          {bike.about && (
            <div className="mt-6 rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h2 className="border-l-4 border-brand-red pl-3 text-lg font-bold text-slate-900">
                ABOUT THIS BIKE
              </h2>
              <p className="mt-4 text-sm text-gray-600">{bike.about}</p>

              {bike.highlights?.length > 0 && (
                <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {bike.highlights.map((point) => (
                    <p key={point} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-brand-red">✔</span>
                      {point}
                    </p>
                  ))}
                </div>
              )}
            </div>
          )}

          {bike.features?.length > 0 && (
            <div className="mt-6 rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h2 className="border-l-4 border-brand-red pl-3 text-lg font-bold text-slate-900">
                FEATURES
              </h2>
              <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {bike.features.map((feature) => (
                  <div key={feature} className="flex flex-col items-center gap-2 rounded-xl border border-gray-100 p-4 text-center">
                    <Settings2 size={20} className="text-gray-500" />
                    <p className="text-xs font-medium text-slate-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {bike.address && (
            <div className="mt-6 rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h2 className="border-l-4 border-brand-red pl-3 text-lg font-bold text-slate-900">
                LOCATION
              </h2>
              <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-slate-800">
                <MapPin size={16} className="text-brand-red" />
                {bike.city}, Nepal
              </p>
              <p className="ml-6 text-sm text-gray-500">{bike.address}</p>

              <div className="mt-4 overflow-hidden rounded-xl border border-gray-200">
                <iframe
                  title="map"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(bike.address)}&output=embed`}
                  className="h-64 w-full"
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-brand-red">
                {bike.tag}
              </span>
              <button onClick={() => setSaved((s) => !s)} className="flex items-center gap-1 text-sm text-gray-500">
                <Heart size={15} className={saved ? "fill-brand-red text-brand-red" : ""} />
                Save
              </button>
            </div>

            <h1 className="mt-4 text-2xl font-extrabold text-slate-900">{bike.name}</h1>
            <p className="mt-1 text-sm text-gray-500">
              {bike.year} • {bike.km} • {bike.fuelType} • {bike.transmission}
            </p>

            <p className="mt-3 text-2xl font-extrabold text-brand-red">{bike.price}</p>
            <p className="mt-1 flex items-center gap-1 text-sm text-gray-500">
              <MapPin size={14} />
              {bike.city}, Nepal
            </p>

            <div className="mt-4 flex items-start gap-3 rounded-xl bg-red-50 p-4">
              <Tag size={18} className="mt-0.5 shrink-0 text-brand-red" />
              <div>
                <p className="text-sm font-bold text-slate-900">Get Best Price</p>
                <p className="text-xs text-gray-500">
                  This bike is priced fairly. Negotiate with the seller for even better deal!
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                onClick={() => onNotify?.("Seller contact revealed")}
                className="flex items-center justify-center gap-2 rounded-md bg-brand-red py-3 text-sm font-bold text-white transition-colors hover:opacity-90"
              >
                <Phone size={15} />
                Contact Seller
              </button>
              <button
                onClick={() => onNotify?.("Chat opened with seller")}
                className="flex items-center justify-center gap-2 rounded-md border border-gray-200 py-3 text-sm font-bold text-slate-800 transition-colors hover:bg-gray-50"
              >
                <MessageCircle size={15} />
                <a href="./messages">
                Chat with Seller
                </a>
              </button>
            </div>

            {bike.listingId && (
              <div className="mt-4 flex justify-between text-xs text-gray-400">
                <span>Listing ID: {bike.listingId}</span>
                <span>Posted on {bike.postedOn}</span>
              </div>
            )}
          </div>

          {bike.seller && (
            <div className="mt-6 rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h2 className="border-l-4 border-brand-red pl-3 text-sm font-bold text-slate-900">
                ABOUT THE SELLER
              </h2>

              <div className="mt-4 flex items-center gap-3">
                <img src={bike.seller.photo} alt={bike.seller.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-slate-900">{bike.seller.name}</p>
                  {bike.seller.verified && (
                    <p className="flex items-center gap-1 text-xs font-semibold text-green-600">
                      <BadgeCheck size={12} />
                      Verified Seller
                    </p>
                  )}
                  <p className="flex items-center gap-1 text-xs text-gray-500">
                    <Star size={12} className="fill-yellow-400 text-yellow-400" />
                    {bike.seller.rating} ({bike.seller.reviews} Reviews)
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-2 text-sm">
                <SellerRow label="Member Since" value={bike.seller.memberSince} />
                <SellerRow label="Total Listings" value={`${bike.seller.totalListings} Bikes`} />
                <SellerRow label="Response Rate" value={bike.seller.responseRate} />
                <SellerRow label="Avg. Response Time" value={bike.seller.avgResponseTime} />
              </div>

              <button className="mt-4 w-full rounded-md border border-gray-200 py-2.5 text-sm font-semibold text-slate-800 hover:bg-gray-50">
                View All Listings
              </button>
            </div>
          )}

          <div className="mt-6 rounded-2xl bg-red-50 p-6">
            <div className="flex items-center gap-3">
              <Wallet className="h-9 w-9 text-brand-red" />
              <div>
                <p className="font-bold text-slate-900">NEED FINANCING?</p>
                <p className="text-sm text-gray-500">Check loan options and EMI plans for this bike.</p>
              </div>
            </div>
            <button className="mt-4 w-full rounded-md bg-white py-2.5 text-sm font-bold text-brand-red shadow-sm">
              Check EMI Options
            </button>
          </div>

          <div className="mt-6 rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h2 className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <ShieldCheck size={16} className="text-brand-red" />
              SAFETY TIPS
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>✔ Meet the seller in a public place</li>
              <li>✔ Inspect the bike thoroughly</li>
              <li>✔ Check all documents carefully</li>
              <li>✔ Test ride before buying</li>
              <li>✔ Never pay in advance</li>
            </ul>
            <p className="mt-3 text-xs font-semibold text-brand-red">Stay safe while buying!</p>
          </div>
        </div>
      </div>
    </main>
  );
}

function SpecItem({ icon, label, value }) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-gray-400">{icon}</span>
      <div>
        <p className="text-xs text-gray-400">{label}</p>
        <p className="text-sm font-semibold text-slate-800">{value}</p>
      </div>
    </div>
  );
}

function SellerRow({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-500">{label}</span>
      <span className="font-semibold text-slate-800">{value}</span>
    </div>
  );
}