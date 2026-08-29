// src/admin/pages/AddVehicle.jsx
import { useState } from "react";
import {
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  Calendar,
  Camera,
  Send,
  Lightbulb,
  X,
} from "lucide-react";

const CATEGORIES = ["Sports Bike", "Commuter Bike", "Scooter", "Cruiser", "Others"];
const BRANDS = ["Bajaj", "TVS", "Yamaha", "Honda", "Suzuki", "KTM", "Royal Enfield", "Vespa"];
const CONDITIONS = ["Excellent", "Good", "Fair", "Needs Work"];
const TRANSMISSIONS = ["Manual", "Automatic"];
const FUEL_TYPES = ["Petrol", "Electric", "Hybrid"];
const CITIES = ["Kathmandu", "Lalitpur", "Bhaktapur", "Pokhara", "Chitwan"];
const YEARS = Array.from({ length: 20 }, (_, i) => `${2025 - i}`);

const EMPTY_FORM = {
  title: "",
  category: "",
  brand: "",
  model: "",
  year: "",
  km: "",
  condition: "",
  transmission: "",
  fuelType: "",
  cc: "",
  price: "",
  negotiable: false,
  location: "",
  city: "",
  area: "",
  phone: "",
  description: "",
};

export default function AddVehicle() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [images, setImages] = useState([]); // { url, file }
  const [activeImage, setActiveImage] = useState(0);

  const update = (field) => (e) => {
    const value = e?.target ? e.target.value : e;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files || []).slice(0, 10 - images.length);
    const next = files.map((file) => ({ url: URL.createObjectURL(file), file }));
    setImages((prev) => [...prev, ...next].slice(0, 10));
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setActiveImage(0);
  };

  const nextImage = () => setActiveImage((i) => (i + 1) % Math.max(images.length, 1));
  const prevImage = () =>
    setActiveImage((i) => (i - 1 + Math.max(images.length, 1)) % Math.max(images.length, 1));

  return (
    <div>
      {/* Page header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Add New Vehicle</h1>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-400">
            <span>Dashboard</span>
            <ChevronRight size={14} />
            <span>Listings</span>
            <ChevronRight size={14} />
            <span className="font-medium text-brand-red">Add New Vehicle</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50">
            Cancel
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-brand-red px-5 py-2.5 text-sm font-bold text-white hover:bg-red-600">
            <Send size={15} />
            Save & Publish
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_340px]">
        {/* Left column - form */}
        <div className="space-y-6">
          {/* Basic Information */}
          <div className="card p-6">
            <SectionTitle step={1} title="Basic Information" />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Vehicle Title" required>
                <input
                  value={form.title}
                  onChange={update("title")}
                  placeholder="e.g. Yamaha R15 V3"
                  className="input"
                />
              </Field>

              <Field label="Category" required>
                <Select value={form.category} onChange={update("category")} placeholder="Select category">
                  {CATEGORIES.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </Select>
              </Field>

              <Field label="Brand" required>
                <Select value={form.brand} onChange={update("brand")} placeholder="Select brand">
                  {BRANDS.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </Select>
              </Field>

              <Field label="Model" required>
                <input
                  value={form.model}
                  onChange={update("model")}
                  placeholder="e.g. R15 V3"
                  className="input"
                />
              </Field>

              <Field label="Year" required>
                <div className="relative">
                  <Select value={form.year} onChange={update("year")} placeholder="Select year">
                    {YEARS.map((y) => (
                      <option key={y}>{y}</option>
                    ))}
                  </Select>
                  <Calendar
                    size={15}
                    className="pointer-events-none absolute right-9 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                </div>
              </Field>

              <Field label="KM Driven" required>
                <input
                  value={form.km}
                  onChange={update("km")}
                  placeholder="e.g. 25000"
                  inputMode="numeric"
                  className="input"
                />
              </Field>

              <Field label="Condition" required>
                <Select value={form.condition} onChange={update("condition")} placeholder="Select condition">
                  {CONDITIONS.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </Select>
              </Field>

              <Field label="Transmission" required>
                <Select value={form.transmission} onChange={update("transmission")} placeholder="Select transmission">
                  {TRANSMISSIONS.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </Select>
              </Field>

              <Field label="Fuel Type" required>
                <Select value={form.fuelType} onChange={update("fuelType")} placeholder="Select fuel type">
                  {FUEL_TYPES.map((f) => (
                    <option key={f}>{f}</option>
                  ))}
                </Select>
              </Field>

              <Field label="CC / Engine Capacity">
                <input
                  value={form.cc}
                  onChange={update("cc")}
                  placeholder="e.g. 155cc"
                  className="input"
                />
              </Field>
            </div>
          </div>

          {/* Pricing & Location */}
          <div className="card p-6">
            <SectionTitle step={2} title="Pricing & Location" />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              <Field label="Price (NPR)" required>
                <input
                  value={form.price}
                  onChange={update("price")}
                  placeholder="e.g. 245000"
                  inputMode="numeric"
                  className="input"
                />
              </Field>

              <Field label="Negotiable">
                <Toggle checked={form.negotiable} onChange={(v) => update("negotiable")(v)} />
              </Field>

              <Field label="Location" required>
                <Select value={form.location} onChange={update("location")} placeholder="Select location">
                  {CITIES.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </Select>
              </Field>

              <Field label="City" required>
                <Select value={form.city} onChange={update("city")} placeholder="Select city">
                  {CITIES.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </Select>
              </Field>

              <Field label="Area">
                <Select value={form.area} onChange={update("area")} placeholder="Select area">
                  <option>Central</option>
                  <option>Suburb</option>
                  <option>Outskirts</option>
                </Select>
              </Field>

              <Field label="Phone Number" required>
                <div className="flex items-center gap-2 rounded-lg border border-slate-200 px-3">
                  <span className="text-sm text-slate-500">🇳🇵 +977</span>
                  <input
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="98XXXXXXXX"
                    inputMode="tel"
                    className="w-full border-0 bg-transparent py-2.5 text-sm outline-none placeholder:text-slate-400"
                  />
                </div>
              </Field>
            </div>
          </div>

          {/* Description */}
          <div className="card p-6">
            <SectionTitle step={3} title="Description" />

            <Field label="Description" required>
              <textarea
                value={form.description}
                onChange={update("description")}
                maxLength={1000}
                rows={5}
                placeholder="Describe your vehicle, its features, condition, and any other important details..."
                className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-brand-red"
              />
              <p className="mt-1 text-right text-xs text-slate-400">
                {form.description.length} / 1000
              </p>
            </Field>
          </div>

          {/* Vehicle Images */}
          <div className="card p-6">
            <div className="mb-4 flex items-center justify-between">
              <SectionTitle step={4} title="Vehicle Images" noMargin />
              <span className="text-sm text-slate-400">{images.length} / 10</span>
            </div>
            <p className="-mt-3 mb-4 text-sm text-slate-400">
              Upload clear images of your vehicle (Max 3 images)
            </p>

            <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-200 py-10 text-center hover:border-brand-red">
              <Camera size={24} className="text-slate-400" />
              <p className="text-sm font-semibold text-slate-600">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-slate-400">PNG, JPG up to 10MB each</p>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>

            {images.length > 0 && (
              <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5">
                {images.map((img, i) => (
                  <div key={i} className="group relative aspect-square overflow-hidden rounded-lg border border-slate-200">
                    <img src={img.url} alt="" className="h-full w-full object-cover" />
                    <button
                      onClick={() => removeImage(i)}
                      className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-slate-600 opacity-0 shadow transition-opacity group-hover:opacity-100"
                      aria-label="Remove image"
                    >
                      <X size={13} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right column - preview & summary */}
        <div className="space-y-6">
          {/* Listing Preview */}
          <div className="card p-5">
            <h3 className="mb-4 text-sm font-bold text-slate-900">Listing Preview</h3>

            <div className="relative aspect-video overflow-hidden rounded-xl bg-slate-100">
              {images.length > 0 ? (
                <img
                  src={images[activeImage]?.url}
                  alt=""
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-slate-400">
                  No image yet
                </div>
              )}

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow hover:bg-white"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow hover:bg-white"
                    aria-label="Next image"
                  >
                    <ChevronRight size={16} />
                  </button>
                </>
              )}
            </div>

            <div className="mt-3 flex gap-2 overflow-x-auto">
              {Array.from({ length: Math.max(images.length, 4) }).slice(0, 4).map((_, i) => (
                <button
                  key={i}
                  onClick={() => images[i] && setActiveImage(i)}
                  className={`flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border ${
                    activeImage === i && images[i] ? "border-brand-red" : "border-slate-200"
                  }`}
                >
                  {images[i] ? (
                    <img src={images[i].url} alt="" className="h-full w-full object-cover" />
                  ) : (
                    <Camera size={16} className="text-slate-300" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Listing Summary */}
          <div className="card p-5">
            <h3 className="mb-4 text-sm font-bold text-slate-900">Listing Summary</h3>
            <div className="space-y-3 text-sm">
              <SummaryRow label="Title" value={form.title} />
              <SummaryRow label="Category" value={form.category} />
              <SummaryRow
                label="Brand / Model"
                value={[form.brand, form.model].filter(Boolean).join(" / ")}
              />
              <SummaryRow label="Year" value={form.year} />
              <SummaryRow label="KM Driven" value={form.km} />
              <SummaryRow
                label="Price"
                value={form.price ? `NPR ${Number(form.price).toLocaleString()}` : ""}
                highlight
              />
              <SummaryRow label="Location" value={form.city} />
            </div>
          </div>

          {/* Tips */}
          <div className="card space-y-2 border-red-100 bg-red-50/50 p-5">
            <p className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <Lightbulb size={16} className="text-brand-red" />
              Tips
            </p>
            <ul className="space-y-1.5 text-xs text-slate-500">
              <li className="flex gap-1.5">
                <span className="text-brand-red">›</span>
                Add clear and original photos for better visibility.
              </li>
              <li className="flex gap-1.5">
                <span className="text-brand-red">›</span>
                Provide accurate information to build trust.
              </li>
              <li className="flex gap-1.5">
                <span className="text-brand-red">›</span>
                Listings with details get more inquiries.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ step, title, noMargin }) {
  return (
    <p className={`flex items-center gap-2.5 text-base font-bold text-slate-900 ${noMargin ? "" : "mb-5"}`}>
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-red text-xs font-bold text-white">
        {step}
      </span>
      {title}
    </p>
  );
}

function Field({ label, required, children }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-slate-700">
        {label}
        {required && <span className="text-brand-red"> *</span>}
      </label>
      {children}
    </div>
  );
}

function Select({ value, onChange, placeholder, children }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className="input appearance-none pr-9 text-slate-700"
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {children}
      </select>
      <ChevronDown
        size={15}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
      />
    </div>
  );
}

function Toggle({ checked, onChange }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`flex h-9 w-16 items-center rounded-full border border-slate-200 px-1 transition-colors ${
        checked ? "bg-brand-red" : "bg-slate-100"
      }`}
      aria-pressed={checked}
    >
      <span
        className={`h-6 w-6 rounded-full bg-white shadow transition-transform ${
          checked ? "translate-x-7" : "translate-x-0"
        }`}
      />
    </button>
  );
}

function SummaryRow({ label, value, highlight }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-slate-400">{label}</span>
      <span
        className={`max-w-[55%] truncate text-right font-semibold ${
          highlight ? "text-brand-red" : "text-slate-700"
        }`}
      >
        {value || "-"}
      </span>
    </div>
  );
}