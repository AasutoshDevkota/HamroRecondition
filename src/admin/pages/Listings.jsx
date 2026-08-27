import { useState } from "react";
import {
  ChevronRight,
  Download,
  Plus,
  Search,
  ChevronDown,
  SlidersHorizontal,
  Calendar,
  X,
  Pencil,
  Trash2,
  MoreVertical,
  ChevronLeft,
  Bike,
  PauseCircle,
  CheckCircle2,
} from "lucide-react";

const STATS = [
  { label: "Total Listings", value: "1,248", change: "12.5% from last month", icon: Bike, tint: "bg-red-50 text-brand-red" },
  { label: "Active Listings", value: "984", change: "11.2% from last month", icon: Bike, tint: "bg-amber-50 text-amber-600" },
  { label: "Pending Listings", value: "128", change: "8.4% from last month", icon: PauseCircle, tint: "bg-blue-50 text-blue-600" },
  { label: "Sold Listings", value: "256", change: "10.7% from last month", icon: CheckCircle2, tint: "bg-green-50 text-green-600" },
];

const LISTINGS = [
  { id: 1, name: "KTM Duke 200 BS6", meta: "18,500 km  •  2021", category: "Sports Bike", price: "NPR 2,45,000", status: "Active", views: 245, inquiries: 12, added: "May 20, 2024", addedTime: "10:45 AM", img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=100&h=100&fit=crop" },
  { id: 2, name: "Vespa SXL 125", meta: "9,800 km  •  2020", category: "Scooter", price: "NPR 2,10,000", status: "Active", views: 187, inquiries: 8, added: "May 19, 2024", addedTime: "09:15 AM", img: "https://images.unsplash.com/photo-1519376681982-9de3d3c9d2a5?w=100&h=100&fit=crop" },
  { id: 3, name: "Yamaha R15 V3", meta: "25,000 km  •  2019", category: "Sports Bike", price: "NPR 2,35,000", status: "Pending", views: 156, inquiries: 6, added: "May 18, 2024", addedTime: "04:30 PM", img: "https://images.unsplash.com/photo-1558980664-10e7170b5df9?w=100&h=100&fit=crop" },
  { id: 4, name: "Bajaj Pulsar 220F", meta: "32,000 km  •  2019", category: "Commuter Bike", price: "NPR 1,85,000", status: "Active", views: 132, inquiries: 5, added: "May 17, 2024", addedTime: "11:20 AM", img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=100&h=100&fit=crop" },
  { id: 5, name: "Honda CB Hornet", meta: "28,000 km  •  2019", category: "Commuter Bike", price: "NPR 1,55,000", status: "Sold", views: 210, inquiries: 10, added: "May 16, 2024", addedTime: "03:45 PM", img: "https://images.unsplash.com/photo-1547549082-6bc09f2049ae?w=100&h=100&fit=crop" },
  { id: 6, name: "Royal Enfield Classic 350", meta: "12,500 km  •  2022", category: "Classic Bike", price: "NPR 2,80,000", status: "Active", views: 98, inquiries: 4, added: "May 15, 2024", addedTime: "02:25 PM", img: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=100&h=100&fit=crop" },
  { id: 7, name: "Honda Dio BS6", meta: "6,200 km  •  2021", category: "Scooter", price: "NPR 1,48,000", status: "Pending", views: 75, inquiries: 3, added: "May 14, 2024", addedTime: "10:10 AM", img: "https://images.unsplash.com/photo-1580310614729-ccd69652491d?w=100&h=100&fit=crop" },
];

const STATUS_STYLES = {
  Active: "text-green-600",
  Pending: "text-amber-500",
  Sold: "text-slate-500",
};
const STATUS_DOT = {
  Active: "bg-green-500",
  Pending: "bg-amber-500",
  Sold: "bg-slate-400",
};

export default function Listings() {
  const [search, setSearch] = useState("");
  const [checkedRows, setCheckedRows] = useState([]);

  const toggleRow = (id) =>
    setCheckedRows((prev) => (prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]));

  const filtered = LISTINGS.filter((l) => l.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      {/* Page header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Listings</h1>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-400">
            <span>Dashboard</span>
            <ChevronRight size={14} />
            <span className="font-medium text-brand-red">Listings</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50">
            <Download size={15} />
            Export
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-brand-red px-5 py-2.5 text-sm font-bold text-white hover:bg-red-600">
            <Plus size={16} />
            Add Vehicle
          </button>
        </div>
      </div>

      {/* Stat cards */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map(({ label, value, change, icon: Icon, tint }) => (
          <div key={label} className="card p-5">
            <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${tint}`}>
              <Icon size={19} />
            </div>
            <p className="text-sm text-slate-400">{label}</p>
            <p className="mt-1 text-2xl font-extrabold text-slate-900">{value}</p>
            <p className="mt-1 text-xs font-semibold text-green-600">↑ {change}</p>
          </div>
        ))}
      </div>

      {/* Filter bar */}
      <div className="card mb-0 flex flex-wrap items-center gap-3 rounded-b-none border-b-0 p-4">
        <div className="relative min-w-[220px] flex-1">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search listings..."
            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-brand-red"
          />
        </div>
        <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50">
          All Categories
          <ChevronDown size={14} className="text-slate-400" />
        </button>
        <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50">
          All Brands
          <ChevronDown size={14} className="text-slate-400" />
        </button>
        <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50">
          All Status
          <ChevronDown size={14} className="text-slate-400" />
        </button>
        <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50">
          <SlidersHorizontal size={14} />
          Filters
        </button>
        <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50">
          <Calendar size={14} className="text-slate-400" />
          May 20 – Jun 20, 2024
          <X size={13} className="text-slate-400" />
        </button>
      </div>

      {/* Table */}
      <div className="card overflow-hidden rounded-t-none">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[920px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-xs font-semibold uppercase tracking-wide text-slate-400">
                <th className="w-10 px-5 py-3">
                  <input type="checkbox" className="rounded border-slate-300" />
                </th>
                <th className="px-3 py-3">Vehicle</th>
                <th className="px-3 py-3">Category</th>
                <th className="px-3 py-3">Price</th>
                <th className="px-3 py-3">Status</th>
                <th className="px-3 py-3 text-right">Views</th>
                <th className="px-3 py-3 text-right">Inquiries</th>
                <th className="px-3 py-3">Added On</th>
                <th className="px-3 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((l) => (
                <tr key={l.id} className="border-b border-slate-50 last:border-0 hover:bg-slate-50">
                  <td className="px-5 py-3.5" onClick={(e) => e.stopPropagation()}>
                    <input
                      type="checkbox"
                      checked={checkedRows.includes(l.id)}
                      onChange={() => toggleRow(l.id)}
                      className="rounded border-slate-300"
                    />
                  </td>
                  <td className="px-3 py-3.5">
                    <div className="flex items-center gap-3">
                      <img src={l.img} alt={l.name} className="h-11 w-11 rounded-lg object-cover" />
                      <div>
                        <p className="font-semibold text-slate-800">{l.name}</p>
                        <p className="text-xs text-slate-400">{l.meta}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-3.5 text-slate-600">{l.category}</td>
                  <td className="px-3 py-3.5 font-bold text-brand-red">{l.price}</td>
                  <td className="px-3 py-3.5">
                    <span className={`flex items-center gap-1.5 text-sm font-medium ${STATUS_STYLES[l.status]}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[l.status]}`} />
                      {l.status}
                    </span>
                  </td>
                  <td className="px-3 py-3.5 text-right text-slate-600">{l.views}</td>
                  <td className="px-3 py-3.5 text-right text-slate-600">{l.inquiries}</td>
                  <td className="px-3 py-3.5 text-slate-600">
                    <p>{l.added}</p>
                    <p className="text-xs text-slate-400">{l.addedTime}</p>
                  </td>
                  <td className="px-3 py-3.5">
                    <div className="flex items-center justify-end gap-1.5">
                      <button className="rounded-md border border-slate-200 p-1.5 text-slate-500 hover:bg-slate-50">
                        <Pencil size={14} />
                      </button>
                      <button className="rounded-md border border-red-100 p-1.5 text-brand-red hover:bg-red-50">
                        <Trash2 size={14} />
                      </button>
                      <button className="rounded-md p-1.5 text-slate-400 hover:bg-slate-100">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 px-5 py-4">
          <p className="text-xs text-slate-400">Showing 1 to {filtered.length} of 1,248 listings</p>
          <div className="flex items-center gap-1.5">
            <button className="rounded-md border border-slate-200 p-1.5 text-slate-400 hover:bg-slate-50">
              <ChevronLeft size={15} />
            </button>
            {[1, 2, 3].map((n) => (
              <button
                key={n}
                className={`h-8 w-8 rounded-md text-xs font-semibold ${
                  n === 1 ? "bg-brand-red text-white" : "border border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                {n}
              </button>
            ))}
            <span className="px-1 text-xs text-slate-400">...</span>
            <button className="h-8 w-8 rounded-md border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50">
              125
            </button>
            <button className="rounded-md border border-slate-200 p-1.5 text-slate-400 hover:bg-slate-50">
              <ChevronRight size={15} />
            </button>
          </div>
          <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50">
            10 / page
            <ChevronDown size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}