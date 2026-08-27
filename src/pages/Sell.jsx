// src/pages/Sell.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Bike,
  Calendar,
  Gauge,
  Tag,
  Camera,
  Check,
  UploadCloud,
  ArrowRight,
  FileEdit,
  ShieldCheck as ShieldIcon,
  Users,
  Headphones,
  HandCoins,
} from "lucide-react";

export default function Sell() {
  const [dragActive, setDragActive] = useState(false);

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: "url('/bg-image.png')" }}
        />
        <div className="absolute inset-0 bg-white/70" />

        <div className="container-site relative py-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-bold tracking-wide text-gray-700">
            <ShieldCheck className="h-4 w-4 text-red-500" />
            SELL WITH CONFIDENCE
          </span>

          <h1 className="mt-6 text-5xl font-extrabold text-slate-900">
            Sell Your Bike
            <br />
            <span className="text-red-500">The Right Way</span>
          </h1>
          <div className="mt-4 h-1 w-24 bg-red-500" />

          <p className="mt-4 max-w-md text-gray-600">
            Get the best value for your bike with a transparent, safe and
            hassle-free selling experience.
          </p>
        </div>
      </section>

      {/* List your bike form */}
      <section className="container-site py-12">
        <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">LIST YOUR BIKE</h2>
          <div className="mt-1 mb-6 h-1 w-10 bg-red-500" />

          <form className="grid gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <SelectField icon={<Bike size={17} />} placeholder="Select Brand" />
              <SelectField icon={<Bike size={17} />} placeholder="Select Model" />
              <SelectField icon={<Calendar size={17} />} placeholder="Select Year" />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <InputField icon={<Gauge size={17} />} placeholder="KM Driven" />
              <InputField icon={<Tag size={17} />} placeholder="Your Expected Price (NPR)" />
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragActive(true);
                }}
                onDragLeave={() => setDragActive(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragActive(false);
                }}
                className={`lg:col-span-2 flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed p-8 text-center transition-colors ${
                  dragActive ? "border-red-400 bg-red-50" : "border-gray-200"
                }`}
              >
                <div className="mb-1 flex items-center gap-2 self-start text-sm font-semibold text-slate-700">
                  <UploadCloud size={16} />
                  Upload Photos (Max 8)
                </div>
                <p className="self-start text-xs text-gray-400">
                  PNG, JPG up to 5MB each
                </p>
                <UploadCloud className="mt-4 h-8 w-8 text-gray-300" />
                <p className="text-sm text-gray-500">
                  Drag & drop your files here or click to{" "}
                  <span className="font-semibold text-red-500">browse</span>
                </p>
                <input type="file" multiple accept="image/*" className="hidden" />
              </div>

              <div className="rounded-xl bg-red-50 p-6">
                <p className="flex items-center gap-2 font-bold text-slate-900">
                  <Camera size={18} className="text-red-500" />
                  Photo Tips
                </p>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <Check size={15} className="text-red-500" />
                    Upload clear and well-lit photos
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={15} className="text-red-500" />
                    Add photos from all angles
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={15} className="text-red-500" />
                    Show the condition clearly
                  </li>
                </ul>
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 flex items-center justify-center gap-2 rounded-md bg-red-500 py-4 text-sm font-bold text-white transition-colors hover:bg-red-600"
            >
              List My Bike Now
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </section>

      {/* How it works */}
      <section className="container-site py-12 text-center">
        <p className="text-xs font-bold tracking-wide text-red-500">
          HOW IT WORKS
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
          Simple Steps to Sell Your Bike
        </h2>
        <div className="mx-auto mt-3 h-1 w-16 bg-red-500" />

        <div className="relative mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <StepCard
            step={1}
            icon={<FileEdit className="h-7 w-7 text-red-500" />}
            title="List Your Bike"
            desc="Fill in your bike details and upload photos in minutes."
          />
          <StepCard
            step={2}
            icon={<ShieldIcon className="h-7 w-7 text-red-500" />}
            title="We Inspect"
            desc="Our experts inspect your bike for quality and condition."
          />
          <StepCard
            step={3}
            icon={<Tag className="h-7 w-7 text-red-500" />}
            title="Get Best Offer"
            desc="Receive the best market price for your bike."
          />
          <StepCard
            step={4}
            icon={<HandCoins className="h-7 w-7 text-red-500" />}
            title="Sell & Get Paid"
            desc="Complete the sale and get paid instantly."
          />
        </div>
      </section>

      {/* Why sell with us */}
      <section className="container-site pb-16">
        <p className="text-center text-xs font-bold tracking-wide text-red-500">
          WHY SELL WITH US?
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 rounded-2xl border border-gray-100 bg-white p-10 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
          <Feature
            icon={<ShieldCheck className="h-7 w-7 text-red-500" />}
            title="Secure & Safe"
            desc="Your safety and security is our top priority."
          />
          <Feature
            icon={<Tag className="h-7 w-7 text-red-500" />}
            title="Best Market Price"
            desc="We help you get the best value for your bike."
          />
          <Feature
            icon={<Users className="h-7 w-7 text-red-500" />}
            title="Verified Buyers"
            desc="Connect with genuine and serious buyers."
          />
          <Feature
            icon={<Headphones className="h-7 w-7 text-red-500" />}
            title="End-to-End Support"
            desc="From listing to payment, we support you all the way."
          />
        </div>
      </section>

      {/* CTA strip */}
      <section className="container-site pb-16">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-slate-900 px-8 py-8 sm:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-red-400">
              <Check className="h-6 w-6 text-red-400" />
            </div>
            <div>
              <p className="text-xl font-bold text-white">
                Ready to <span className="text-red-500">sell</span> your bike?
              </p>
              <p className="text-sm text-gray-400">
                List your bike today and connect with thousands of serious
                buyers across Nepal.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href="#top"
              className="flex items-center gap-2 rounded-md bg-red-500 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-red-600"
            >
              List My Bike Now
              <ArrowRight size={16} />
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-slate-900 transition-colors hover:bg-gray-100"
            >
              Need Help?
              <Headphones size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function SelectField({ icon, placeholder }) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        {icon}
      </span>
      <select
        defaultValue=""
        className="w-full appearance-none rounded-lg border border-gray-200 py-3 pl-10 pr-8 text-sm text-gray-500 focus:border-red-400 focus:outline-none"
      >
        <option value="" disabled>
          {placeholder}
        </option>
      </select>
    </div>
  );
}

function InputField({ icon, placeholder }) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        {icon}
      </span>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-200 py-3 pl-10 pr-4 text-sm placeholder-gray-400 focus:border-red-400 focus:outline-none"
      />
    </div>
  );
}

function StepCard({ step, icon, title, desc }) {
  return (
    <div className="relative rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
      <span className="absolute -top-4 left-1/2 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
        {step}
      </span>
      <div className="mx-auto mt-2 flex h-14 w-14 items-center justify-center rounded-xl bg-red-50">
        {icon}
      </div>
      <p className="mt-4 font-bold text-slate-900">{title}</p>
      <p className="mt-1 text-sm text-gray-500">{desc}</p>
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
        {icon}
      </div>
      <p className="mt-3 font-bold text-slate-900">{title}</p>
      <p className="mt-1 text-sm text-gray-500">{desc}</p>
    </div>
  );
}