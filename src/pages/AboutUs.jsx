// src/pages/AboutUs.jsx
import { Link } from "react-router-dom";
import {
  ShieldCheck,Tag,Users,Headphones,Bike,
  UsersRound,BadgeCheck,Handshake,ArrowRight,TrendingUp,
} from "lucide-react";

export default function AboutUs() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: "url('/bg-image.png')" }}
        />
        <div className="absolute inset-0 bg-white/70" />

        <div className="container-site relative grid gap-10 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-bold tracking-wide text-gray-700">
              <ShieldCheck className="h-4 w-4 text-red-500" />
              REBUILDING TRUST. RIDING TOGETHER.
            </span>

            <h1 className="mt-6 text-5xl font-extrabold text-slate-900">
              ABOUT <span className="text-red-500">US</span>
            </h1>
            <div className="mt-4 h-1 w-24 bg-red-500" />

            <p className="mt-5 max-w-md text-gray-600">
              Recondition House Nepal is Nepal's trusted platform for buying
              and selling quality used bikes and scooters. We make
              second-hand better — through inspection, transparency, and
              reliable service.
            </p>

            <Link
              to="/buy"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-red-500 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-red-600"
            >
              Explore Bikes
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="relative hidden lg:block">
            {/* hero bikes image is part of the background; leave empty or add foreground image here */}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container-site py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold tracking-wide text-red-500">
              OUR STORY
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              Driven by Passion.
              <br />
              <span className="text-red-500">Focused on Trust.</span>
            </h2>
            <div className="mt-4 h-1 w-16 bg-red-500" />

            <p className="mt-5 text-gray-600">
              Recondition House Nepal was founded with a simple mission – to
              create a safe, transparent and reliable marketplace for
              second-hand bikes and scooters in Nepal.
            </p>
            <p className="mt-4 text-gray-600">
              We understand the challenges buyers face and the trust it
              takes to sell your vehicle. That's why we built a platform
              where every bike is carefully inspected, fairly priced, and
              backed by genuine support.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <StoryCard
              icon={<ShieldCheck className="h-6 w-6 text-red-500" />}
              title="Trusted Inspections"
              desc="Every vehicle is thoroughly inspected by our experts."
            />
            <StoryCard
              icon={<Tag className="h-6 w-6 text-red-500" />}
              title="Fair Prices"
              desc="We ensure competitive and transparent pricing."
            />
            <StoryCard
              icon={<Users className="h-6 w-6 text-red-500" />}
              title="Easy Transactions"
              desc="Simple, smooth and secure buying & selling process."
            />
            <StoryCard
              icon={<Headphones className="h-6 w-6 text-red-500" />}
              title="After-Sales Support"
              desc="We're here even after you ride away."
            />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="container-site pb-16">
        <div className="grid grid-cols-2 gap-8 rounded-2xl border border-gray-100 bg-white p-10 shadow-sm sm:grid-cols-4">
          <Stat
            icon={<Bike className="h-7 w-7 text-red-500" />}
            value="2,500+"
            label="Bikes Sold"
            sub="and counting"
          />
          <Stat
            icon={<UsersRound className="h-7 w-7 text-red-500" />}
            value="1,000+"
            label="Happy Customers"
            sub="across Nepal"
          />
          <Stat
            icon={<BadgeCheck className="h-7 w-7 text-red-500" />}
            value="100%"
            label="Verified Vehicles"
            sub="Inspected & certified"
          />
          <Stat
            icon={<Handshake className="h-7 w-7 text-red-500" />}
            value="5+ Years"
            label="Of Trust"
            sub="in the automotive market"
          />
        </div>
      </section>

      {/* Our Values */}
      <section className="container-site pb-16 text-center">
        <p className="text-xs font-bold tracking-wide text-red-500">
          OUR VALUES
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
          What Drives Us Every Day
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          <Value
            icon={<ShieldCheck className="h-7 w-7 text-red-500" />}
            title="Integrity"
            desc="We believe in honest deals and complete transparency in everything we do."
          />
          <Value
            icon={<Users className="h-7 w-7 text-red-500" />}
            title="Customer First"
            desc="Our customers are at the heart of every decision we make."
          />
          <Value
            icon={<BadgeCheck className="h-7 w-7 text-red-500" />}
            title="Quality"
            desc="We never compromise on quality because your safety comes first."
          />
          <Value
            icon={<Handshake className="h-7 w-7 text-red-500" />}
            title="Respect"
            desc="We value our customers, partners, and every relationship we build."
          />
          <Value
            icon={<TrendingUp className="h-7 w-7 text-red-500" />}
            title="Growth"
            desc="We continuously innovate and improve to serve you better every day."
          />
        </div>
      </section>

      {/* CTA strip */}
      <section className="container-site pb-16">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-slate-900 px-8 py-8 sm:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-red-400">
              <ShieldCheck className="h-6 w-6 text-red-400" />
            </div>
            <div>
              <p className="text-xl font-bold text-white">
                Ready to <span className="text-red-500">buy</span> or{" "}
                <span className="text-red-500">sell</span> your bike?
              </p>
              <p className="text-sm text-gray-400">
                Join thousands of riders who trust Recondition House Nepal.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Link
              to="/buy"
              className="flex items-center gap-2 rounded-md bg-red-500 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-red-600"
            >
              Browse Bikes
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/sell"
              className="flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-slate-900 transition-colors hover:bg-gray-100"
            >
              Sell Your Bike
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function StoryCard({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
        {icon}
      </div>
      <p className="mt-4 font-bold text-slate-900">{title}</p>
      <p className="mt-1 text-sm text-gray-500">{desc}</p>
    </div>
  );
}

function Stat({ icon, value, label, sub }) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center">
        {icon}
      </div>
      <p className="mt-2 text-3xl font-extrabold text-slate-900">{value}</p>
      <p className="mt-1 text-sm font-semibold text-slate-700">{label}</p>
      <p className="text-xs text-gray-400">{sub}</p>
    </div>
  );
}

function Value({ icon, title, desc }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
        {icon}
      </div>
      <p className="mt-3 font-bold text-slate-900">{title}</p>
      <p className="mt-1 text-xs text-gray-500">{desc}</p>
    </div>
  );
}