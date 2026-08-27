import { useState, useRef, useEffect } from "react";
import {
  ChevronRight,
  Calendar,
  ChevronDown,
  SlidersHorizontal,
  RotateCcw,
  CalendarClock,
  ChevronDown as CaretDown,
  Download,
  FileDown,
  Bike,
  Users as UsersIcon,
  CreditCard,
  MessageSquare,
  ShoppingBag,
  FileText,
  TrendingUp as InsightUp,
  Users2,
  Sparkles,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const TABS = ["Overview", "Listings", "Users", "Sales & Revenue", "Inquiries", "Payments", "Performance"];

const STATS = [
  { label: "Total Listings", value: "1,248", change: "12.5% from Apr 20 – May 19", icon: Bike, tint: "bg-red-50 text-brand-red" },
  { label: "Total Users", value: "3,456", change: "8.4% from Apr 20 – May 19", icon: UsersIcon, tint: "bg-blue-50 text-blue-600" },
  { label: "Total Revenue", value: "NPR 58,60,000", change: "18.6% from Apr 20 – May 19", icon: CreditCard, tint: "bg-amber-50 text-amber-600" },
  { label: "Total Inquiries", value: "864", change: "15.3% from Apr 20 – May 19", icon: MessageSquare, tint: "bg-emerald-50 text-emerald-600" },
  { label: "Total Sales", value: "256", change: "10.7% from Apr 20 – May 19", icon: ShoppingBag, tint: "bg-violet-50 text-violet-600" },
];

const REVENUE_DATA = [
  { date: "May 20", revenue: 8 },
  { date: "May 23", revenue: 12 },
  { date: "May 27", revenue: 9 },
  { date: "May 30", revenue: 14 },
  { date: "Jun 03", revenue: 11 },
  { date: "Jun 06", revenue: 19 },
  { date: "Jun 10", revenue: 24 },
  { date: "Jun 13", revenue: 21 },
  { date: "Jun 17", revenue: 32 },
  { date: "Jun 20", revenue: 36 },
];

const CATEGORY_DATA = [
  { name: "Motorcycles", value: 612, pct: "49%", color: "#e51f35" },
  { name: "Scooters", value: 398, pct: "32%", color: "#14253a" },
  { name: "Sports Bikes", value: 156, pct: "12%", color: "#f59e0b" },
  { name: "Others", value: 82, pct: "7%", color: "#16a34a" },
];

const TOP_LISTINGS = [
  { name: "KTM Duke 200 BS6", meta: "18,500 km  •  2021", category: "Sports Bike", views: 2450, inquiries: 89, sales: 28, revenue: "6,86,000", img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=100&h=100&fit=crop" },
  { name: "Vespa SXL 125", meta: "9,800 km  •  2020", category: "Scooter", views: 1870, inquiries: 67, sales: 24, revenue: "5,04,000", img: "https://images.unsplash.com/photo-1519376681982-9de3d3c9d2a5?w=100&h=100&fit=crop" },
  { name: "Yamaha R15 V3", meta: "25,000 km  •  2019", category: "Sports Bike", views: 1650, inquiries: 61, sales: 20, revenue: "4,70,000", img: "https://images.unsplash.com/photo-1558980664-10e7170b5df9?w=100&h=100&fit=crop" },
  { name: "Bajaj Pulsar 220F", meta: "32,000 km  •  2019", category: "Commuter Bike", views: 1320, inquiries: 52, sales: 18, revenue: "3,33,000", img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=100&h=100&fit=crop" },
  { name: "Honda CB Hornet", meta: "28,000 km  •  2019", category: "Commuter Bike", views: 1180, inquiries: 42, sales: 16, revenue: "2,48,000", img: "https://images.unsplash.com/photo-1547549082-6bc09f2049ae?w=100&h=100&fit=crop" },
];

const PDF_FORMATS = ["A4 (Portrait)", "A4 (Landscape)", "Letter (Portrait)", "Letter (Landscape)"];

function useOutsideClose(onClose) {
  const ref = useRef(null);
  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);
  return ref;
}

export default function Reports() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [range, setRange] = useState("Daily");
  const [pdfOpen, setPdfOpen] = useState(false);
  const pdfRef = useOutsideClose(() => setPdfOpen(false));

  return (
    <div>
      {/* Page header */}
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Reports</h1>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-400">
            <span>Dashboard</span>
            <ChevronRight size={14} />
            <span className="font-medium text-brand-red">Reports</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50">
            <CalendarClock size={15} />
            Schedule Report
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50">
            <Download size={15} />
            Export
            <CaretDown size={14} />
          </button>

          <div className="relative" ref={pdfRef}>
            <button
              onClick={() => setPdfOpen((v) => !v)}
              className="flex items-center gap-2 rounded-lg bg-brand-red px-4 py-2.5 text-sm font-bold text-white hover:bg-red-600"
            >
              <FileDown size={15} />
              Download PDF
            </button>
            {pdfOpen && (
              <div className="absolute right-0 z-20 mt-2 w-52 overflow-hidden rounded-lg border border-slate-100 bg-white py-1.5 shadow-lg">
                {PDF_FORMATS.map((f) => (
                  <button
                    key={f}
                    onClick={() => setPdfOpen(false)}
                    className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-sm text-slate-600 hover:bg-slate-50"
                  >
                    <FileText size={15} className="text-slate-400" />
                    {f}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_300px]">
        {/* Main column */}
        <div>
          {/* Tabs */}
          <div className="mb-5 flex items-center gap-6 border-b border-slate-100">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-3 text-sm font-semibold transition-colors ${
                  activeTab === tab ? "text-brand-red" : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {tab}
                {activeTab === tab && <span className="absolute -bottom-px left-0 h-0.5 w-full bg-brand-red" />}
              </button>
            ))}
          </div>

          {/* Filter bar */}
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2.5">
              <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50">
                <Calendar size={15} className="text-slate-400" />
                May 20 – Jun 20, 2024
                <ChevronDown size={14} className="text-slate-400" />
              </button>
              <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50">
                This Month
                <ChevronDown size={14} className="text-slate-400" />
              </button>
              <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50">
                All Categories
                <ChevronDown size={14} className="text-slate-400" />
              </button>
            </div>
            <div className="flex items-center gap-2.5">
              <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50">
                <SlidersHorizontal size={14} />
                Filters
              </button>
              <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50">
                <RotateCcw size={14} />
                Reset
              </button>
            </div>
          </div>

          {/* Stat cards */}
          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {STATS.map(({ label, value, change, icon: Icon, tint }) => (
              <div key={label} className="card p-5">
                <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${tint}`}>
                  <Icon size={19} />
                </div>
                <p className="text-sm text-slate-400">{label}</p>
                <p className="mt-1 text-xl font-extrabold text-slate-900">{value}</p>
                <p className="mt-1 text-xs font-semibold text-green-600">↑ {change}</p>
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">
            {/* Revenue chart */}
            <div className="card p-5">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900">Revenue Overview</h3>
                <div className="relative">
                  <select
                    value={range}
                    onChange={(e) => setRange(e.target.value)}
                    className="appearance-none rounded-lg border border-slate-200 bg-white py-2 pl-3 pr-8 text-xs font-semibold text-slate-600 outline-none"
                  >
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
                  <ChevronDown size={13} className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-slate-500">
                <span className="h-2 w-2 rounded-full bg-brand-red" />
                Revenue (NPR)
              </div>

              <ResponsiveContainer width="100%" height={260}>
                <AreaChart data={REVENUE_DATA} margin={{ left: -20, right: 10 }}>
                  <defs>
                    <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#e51f35" stopOpacity={0.25} />
                      <stop offset="100%" stopColor="#e51f35" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="date" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                  <YAxis
                    tick={{ fontSize: 11, fill: "#94a3b8" }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `${v}M`}
                  />
                  <Tooltip formatter={(v) => [`NPR ${v}M`, "Revenue"]} />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#e51f35"
                    strokeWidth={2.5}
                    fill="url(#revenueFill)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Category donut */}
            <div className="card p-5">
              <h3 className="mb-4 text-base font-bold text-slate-900">Listings by Category</h3>
              <div className="relative mx-auto h-[190px] w-[190px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={CATEGORY_DATA}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={62}
                      outerRadius={90}
                      paddingAngle={2}
                      stroke="none"
                    >
                      {CATEGORY_DATA.map((c) => (
                        <Cell key={c.name} fill={c.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-4 space-y-2.5">
                {CATEGORY_DATA.map((c) => (
                  <div key={c.name} className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-slate-600">
                      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: c.color }} />
                      {c.name}
                    </span>
                    <span className="font-semibold text-slate-800">
                      {c.value} ({c.pct})
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                <span className="text-sm font-bold text-slate-900">Total</span>
                <span className="text-sm font-bold text-slate-900">1,248</span>
              </div>
            </div>
          </div>

          {/* Top performing listings */}
          <div className="card overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <h3 className="text-base font-bold text-slate-900">Top Performing Listings</h3>
              <button className="rounded-lg border border-slate-200 px-3.5 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50">
                View Full Report
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-100 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    <th className="px-5 py-3">Listing</th>
                    <th className="px-3 py-3">Category</th>
                    <th className="px-3 py-3 text-right">Views</th>
                    <th className="px-3 py-3 text-right">Inquiries</th>
                    <th className="px-3 py-3 text-right">Sales</th>
                    <th className="px-3 py-3 text-right">Revenue (NPR)</th>
                  </tr>
                </thead>
                <tbody>
                  {TOP_LISTINGS.map((l) => (
                    <tr key={l.name} className="border-b border-slate-50 last:border-0 hover:bg-slate-50">
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-3">
                          <img src={l.img} alt={l.name} className="h-10 w-10 rounded-lg object-cover" />
                          <div>
                            <p className="font-semibold text-slate-800">{l.name}</p>
                            <p className="text-xs text-slate-400">{l.meta}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-3.5 text-slate-600">{l.category}</td>
                      <td className="px-3 py-3.5 text-right text-slate-600">{l.views.toLocaleString()}</td>
                      <td className="px-3 py-3.5 text-right text-slate-600">{l.inquiries}</td>
                      <td className="px-3 py-3.5 text-right text-slate-600">{l.sales}</td>
                      <td className="px-3 py-3.5 text-right font-bold text-brand-red">{l.revenue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="space-y-6">
          <div className="card p-5">
            <h3 className="mb-4 text-sm font-bold text-slate-900">Report Summary</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Date Range</span>
                <span className="font-semibold text-slate-700">May 20 – Jun 20, 2024</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Report Type</span>
                <span className="font-semibold text-slate-700">Overview</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Generated On</span>
                <span className="font-semibold text-slate-700">Jun 20, 2024 02:30 PM</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Generated By</span>
                <span className="font-semibold text-slate-700">Admin (Super Admin)</span>
              </div>
            </div>
          </div>

          <div className="card p-5">
            <h3 className="mb-4 text-sm font-bold text-slate-900">Quick Insights</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600">
                  <InsightUp size={15} />
                </span>
                <p className="text-sm text-slate-600">
                  Revenue has increased by <span className="font-semibold text-slate-800">18.6%</span> compared to the previous period.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Users2 size={15} />
                </span>
                <p className="text-sm text-slate-600">
                  Sports Bikes inquiries are up by <span className="font-semibold text-slate-800">22%</span> this month.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                  <Sparkles size={15} />
                </span>
                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-slate-800">256</span> bikes were sold this month.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-red-50 p-4 text-xs text-slate-600">
            <span className="font-semibold text-slate-700">Tip:</span> Use filters to customize this report data.
          </div>
        </div>
      </div>
    </div>
  );
}