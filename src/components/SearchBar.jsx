import { Bike, ChevronDown, Search, Tag } from "lucide-react";

function SelectBox({ icon, label, value, onChange, options }) {
  return (
    <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-100 bg-white px-3 py-2">
      <span className="text-slate-500">{icon}</span>
      <span className="flex-1">
        <span className="block text-[8px] font-semibold text-slate-500">{label}</span>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="mt-0.5 w-full bg-transparent text-[10px] font-semibold outline-none"
        >
          <option value="">e.g. Honda, Yamaha</option>
          {options.map((option) => <option key={option}>{option}</option>)}
        </select>
      </span>
      <ChevronDown size={12} className="text-slate-400" />
    </label>
  );
}

export default function SearchBar({ values, onChange, onSearch }) {
  return (
    <div className="absolute bottom-8 left-1/2 w-[calc(100%-32px)] max-w-[900px] -translate-x-1/2 rounded-xl border border-slate-200 bg-white p-2 shadow-2xl">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_1fr_1fr_auto]">
        <SelectBox
          icon={<Bike size={14} />}
          label="Select Brand"
          value={values.brand}
          onChange={(brand) => onChange({ ...values, brand })}
          options={["Honda", "Yamaha", "Bajaj", "TVS", "Royal Enfield"]}
        />
        <SelectBox
          icon={<Bike size={14} />}
          label="Select Model"
          value={values.model}
          onChange={(model) => onChange({ ...values, model })}
          options={["Dio", "Pulsar", "FZ", "Shine", "Classic 350"]}
        />
        <SelectBox
          icon={<Tag size={14} />}
          label="Price Range"
          value={values.price}
          onChange={(price) => onChange({ ...values, price })}
          options={["Under Rs. 1,50,000", "Rs. 1,50,000 - 2,00,000", "Above Rs. 2,00,000"]}
        />
        <button
          onClick={onSearch}
          className="flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-brand-red px-7 text-xs font-bold text-white hover:bg-red-700"
        >
          <Search size={15} /> Search
        </button>
      </div>
    </div>
  );
}