// src/admin/pages/Dashboard.jsx
import {
  Bike,
  Users,
  MessageSquare,
  CreditCard,
  Wallet,
  TrendingUp,
  Calendar,
  ChevronDown,
  MoreVertical,
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
  BarChart,
  Bar,
  Legend,
} from "recharts";

const KPI_CARDS = [
  {
    icon: Bike,
    label: "Total Listings",
    value: "1,248",
    change: "+12.5%",
    positive: true,
    bg: "bg-red-50",
    color: "text-brand-red",
  },
  {
    icon: Users,
    label: "Total Users",
    value: "3,456",
    change: "+8.4%",
    positive: true,
    bg: "bg-blue-50",
    color: "text-blue-500",
  },
  {
    icon: MessageSquare,
    label: "Total Inquiries",
    value: "864",
    change: "+15.3%",
    positive: true,
    bg: "bg-amber-50",
    color: "text-amber-500",
  },
  {
    icon: CreditCard,
    label: "Total Sales",
    value: "256",
    change: "+10.7%",
    positive: true,
    bg: "bg-emerald-50",
    color: "text-emerald-500",
  },
  {
    icon: Wallet,
    label: "Total Revenue",
    value: "NPR 58,60,000",
    change: "+18.6%",
    positive: true,
    bg: "bg-rose-50",
    color: "text-rose-500",
  },
];

const LISTINGS_OVERVIEW = [
  { date: "May 20", listings: 480 },
  { date: "May 22", listings: 520 },
  { date: "May 24", listings: 460 },
  { date: "May 27", listings: 380 },
  { date: "May 29", listings: 430 },
  { date: "Jun 01", listings: 520 },
  { date: "Jun 03", listings: 610 },
  { date: "Jun 05", listings: 590 },
  { date: "Jun 08", listings: 820 },
  { date: "Jun 10", listings: 700 },
  { date: "Jun 13", listings: 730 },
  { date: "Jun 17", listings: 690 },
  { date: "Jun 20", listings: 750 },
];

const CATEGORY_DATA = [
  { name: "Motorcycles", value: 612, color: "#e51f35" },
  { name: "Scooters", value: 398, color: "#1e293b" },
  { name: "Sports Bikes", value: 156, color: "#f59e0b" },
  { name: "Others", value: 82, color: "#10b981" },
];

const TOTAL_CATEGORY = CATEGORY_DATA.reduce((sum, c) => sum + c.value, 0);

const RECENT_LISTINGS = [
  {
    name: "KTM Duke 200 BS6",
    meta: "18,500 km • 2021",
    category: "Sports Bike",
    price: "NPR 2,45,000",
    status: "Active",
    image: "/demo1.png",
  },
  {
    name: "Vespa SXL 125",
    meta: "9,800 km • 2020",
    category: "Scooter",
    price: "NPR 2,10,000",
    status: "Active",
    image: "/scooter-category.png",
  },
  {
    name: "Yamaha R15 V3",
    meta: "25,000 km • 2019",
    category: "Sports Bike",
    price: "NPR 2,35,000",
    status: "Pending",
    image: "/bike-category.png",
  },
  {
    name: "Bajaj Pulsar 220F",
    meta: "32,000 km • 2019",
    category: "Commuter Bike",
    price: "NPR 1,85,000",
    status: "Active",
    image: "/demo2.png",
  },
  {
    name: "Honda CB Hornet",
    meta: "28,000 km • 2019",
    category: "Commuter Bike",
    price: "NPR 1,55,000",
    status: "Inactive",
    image: "/demo1.png",
  },
];

const STATUS_STYLES = {
  Active: "bg-emerald-500",
  Pending: "bg-amber-500",
  Inactive: "bg-slate-300",
};

const STATUS_TEXT_STYLES = {
  Active: "text-emerald-600",
  Pending: "text-amber-600",
  Inactive: "text-slate-400",
};

const RECENT_INQUIRIES = [
  {
    initials: "RB",
    name: "Rohan Bikram",
    detail: "Interested in KTM Duke 200",
    time: "2m ago",
    status: "New",
  },
  {
    initials: "SP",
    name: "Sujan Pathak",
    detail: "Interested in Vespa SXL 125",
    time: "25m ago",
    status: "New",
  },
  {
    initials: "AS",
    name: "Anisha Shrestha",
    detail: "Interested in Yamaha R15 V3",
    time: "1h ago",
    status: "In Progress",
  },
  {
    initials: "DK",
    name: "Dipesh Karki",
    detail: "Interested in Bajaj Pulsar 220F",
    time: "2h ago",
    status: "In Progress",
  },
  {
    initials: "NG",
    name: "Niraj Gurung",
    detail: "Interested in Honda CB Hornet",
    time: "3h ago",
    status: "Closed",
  },
];

const INQUIRY_STATUS_STYLES = {
  New: "bg-red-50 text-brand-red",
  "In Progress": "bg-blue-50 text-blue-600",
  Closed: "bg-emerald-50 text-emerald-600",
};

const SALES_REVENUE_DATA = [
  { date: "May 20", sales: 42, revenue: 26 },
  { date: "May 27", sales: 38, revenue: 24 },
  { date: "Jun 03", sales: 35, revenue: 22 },
  { date: "Jun 10", sales: 48, revenue: 30 },
  { date: "Jun 17", sales: 45, revenue: 28 },
];

export default function Dashboard() {
  return (
    <div>
      {/* Header row */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">
            Dashboard Overview
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Welcome back! Here's what's happening with your platform.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
          <Calendar size={16} />
          May 20 – Jun 20, 2024
          <ChevronDown size={14} />
        </button>
      </div>

      {/* KPI cards */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {KPI_CARDS.map(({ icon: Icon, label, value, change, positive, bg, color }) => (
          <div
            key={label}
            className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${bg} ${color}`}>
                <Icon size={20} />
              </span>
              <p className="text-sm text-slate-500">{label}</p>
            </div>
            <p className="mt-3 text-2xl font-extrabold text-slate-900">{value}</p>
            <p className={`mt-1 flex items-center gap-1 text-xs font-semibold ${positive ? "text-emerald-600" : "text-red-500"}`}>
              <TrendingUp size={13} />
              {change} from last month
            </p>
          </div>
        ))}
      </div>

      {/* Listings overview + Category donut */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1.6fr_1fr]">
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 font-bold text-slate-900">
              <TrendingUp size={17} className="text-brand-red" />
              Listings Overview
            </h2>
            <button className="flex items-center gap-1 rounded-md border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600">
              This Month <ChevronDown size={13} />
            </button>
          </div>

          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={LISTINGS_OVERVIEW}>
                <defs>
                  <linearGradient id="listingsFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#e51f35" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="#e51f35" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="date" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ borderRadius: 10, border: "1px solid #e2e8f0", fontSize: 12 }}
                  formatter={(value) => [value, "Listings"]}
                />
                <Area
                  type="monotone"
                  dataKey="listings"
                  stroke="#e51f35"
                  strokeWidth={2.5}
                  fill="url(#listingsFill)"
                  activeDot={{ r: 5 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 font-bold text-slate-900">
              <Bike size={17} className="text-brand-red" />
              Listings by Category
            </h2>
            <button className="flex items-center gap-1 rounded-md border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600">
              This Month <ChevronDown size={13} />
            </button>
          </div>

          <div className="relative mt-4 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={CATEGORY_DATA}
                  dataKey="value"
                  innerRadius={65}
                  outerRadius={95}
                  paddingAngle={2}
                >
                  {CATEGORY_DATA.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: 10, border: "1px solid #e2e8f0", fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-xl font-extrabold text-slate-900">{TOTAL_CATEGORY}</p>
              <p className="text-xs text-slate-400">Total</p>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            {CATEGORY_DATA.map((cat) => (
              <div key={cat.name} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-slate-600">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: cat.color }} />
                  {cat.name}
                </span>
                <span className="font-semibold text-slate-800">
                  {cat.value} ({Math.round((cat.value / TOTAL_CATEGORY) * 100)}%)
                </span>
              </div>
            ))}
            <div className="flex items-center justify-between border-t border-slate-100 pt-2 text-sm font-bold text-slate-900">
              <span>Total</span>
              <span>{TOTAL_CATEGORY}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent listings + Recent inquiries */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1.6fr_1fr]">
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-slate-900">Recent Listings</h2>
            <button className="text-xs font-semibold text-brand-red hover:underline">
              View All
            </button>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-xs uppercase tracking-wide text-slate-400">
                  <th className="pb-3 font-semibold">Listing</th>
                  <th className="pb-3 font-semibold">Category</th>
                  <th className="pb-3 font-semibold">Price</th>
                  <th className="pb-3 font-semibold">Status</th>
                  <th className="pb-3"></th>
                </tr>
              </thead>
              <tbody>
                {RECENT_LISTINGS.map((listing) => (
                  <tr key={listing.name} className="border-t border-slate-50">
                    <td className="py-3 pr-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={listing.image}
                          alt={listing.name}
                          className="h-10 w-14 rounded-lg object-cover"
                        />
                        <div>
                          <p className="font-semibold text-slate-800">{listing.name}</p>
                          <p className="text-xs text-slate-400">{listing.meta}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 pr-4 text-slate-600">{listing.category}</td>
                    <td className="py-3 pr-4 font-bold text-brand-red">{listing.price}</td>
                    <td className="py-3 pr-4">
                      <span className={`flex items-center gap-1.5 text-xs font-semibold ${STATUS_TEXT_STYLES[listing.status]}`}>
                        <span className={`h-2 w-2 rounded-full ${STATUS_STYLES[listing.status]}`} />
                        {listing.status}
                      </span>
                    </td>
                    <td className="py-3 text-right">
                      <button className="text-slate-400 hover:text-slate-600">
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-slate-900">Recent Inquiries</h2>
            <button className="text-xs font-semibold text-brand-red hover:underline">
              View All
            </button>
          </div>

          <div className="mt-4 space-y-4">
            {RECENT_INQUIRIES.map((inquiry) => (
              <div key={inquiry.name} className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">
                  {inquiry.initials}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-800">{inquiry.name}</p>
                  <p className="truncate text-xs text-slate-400">{inquiry.detail}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs text-slate-400">{inquiry.time}</span>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${INQUIRY_STATUS_STYLES[inquiry.status]}`}>
                    {inquiry.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sales & Revenue overview */}
      <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-slate-900">Sales &amp; Revenue Overview</h2>
          <button className="flex items-center gap-1 rounded-md border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600">
            This Month <ChevronDown size={13} />
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[240px_1fr]">
          <div className="space-y-5">
            <SummaryStat icon={Bike} label="Total Sales" value="256" change="+10.7%" />
            <SummaryStat icon={Wallet} label="Total Revenue" value="NPR 58,60,000" change="+18.6%" />
            <SummaryStat icon={CreditCard} label="Avg. Sale Price" value="NPR 2,28,125" change="+6.3%" />
          </div>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={SALES_REVENUE_DATA} barGap={6}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="date" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: 10, border: "1px solid #e2e8f0", fontSize: 12 }} />
                <Legend
                  iconType="circle"
                  wrapperStyle={{ fontSize: 12 }}
                  formatter={(value) => (value === "sales" ? "Sales" : "Revenue (NPR)")}
                />
                <Bar dataKey="sales" fill="#e51f35" radius={[4, 4, 0, 0]} maxBarSize={28} />
                <Bar dataKey="revenue" fill="#1e293b" radius={[4, 4, 0, 0]} maxBarSize={28} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

function SummaryStat({ icon: Icon, label, value, change }) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-brand-red">
        <Icon size={19} />
      </span>
      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <p className="text-lg font-extrabold text-slate-900">{value}</p>
        <p className="text-xs font-semibold text-emerald-600">↑ {change}</p>
      </div>
    </div>
  );
}