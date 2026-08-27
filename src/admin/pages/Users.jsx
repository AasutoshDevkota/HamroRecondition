import { useState } from "react";
import {
  Users as UsersIcon,
  CheckCircle2,
  UserPlus,
  ShieldAlert,
  ShieldCheck,
  Download,
  Plus,
  SlidersHorizontal,
  ChevronDown,
  Calendar,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  X,
  Mail,
  Phone,
  MapPin,
  CalendarCheck,
  BadgeCheck,
  Star,
  MessageSquareText,
  UserRound,
  Ban,
} from "lucide-react";

const STATS = [
  { label: "Total Users", value: "3,456", change: "+8.4% from last month", up: true, icon: UsersIcon, tint: "bg-blue-50 text-blue-600" },
  { label: "Active Users", value: "3,102", change: "+7.2% from last month", up: true, icon: CheckCircle2, tint: "bg-green-50 text-green-600" },
  { label: "New Users", value: "354", change: "+12.6% from last month", up: true, icon: UserPlus, tint: "bg-amber-50 text-amber-600" },
  { label: "Suspended Users", value: "28", change: "-1.8% from last month", up: false, icon: ShieldAlert, tint: "bg-red-50 text-brand-red" },
  { label: "Verified Users", value: "2,745", change: "+9.3% from last month", up: true, icon: ShieldCheck, tint: "bg-violet-50 text-violet-600" },
];

const TABS = ["All Users", "Buyers", "Sellers", "Verified", "Suspended"];

const USERS = [
  {
    id: 1,
    name: "Ramesh Shrestha",
    email: "ramesh@example.com",
    phone: "9801234567",
    role: "Seller",
    status: "Active",
    joined: "May 10, 2024",
    joinedTime: "10:45 AM",
    listings: 12,
    inquiries: 8,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    location: "Kathmandu, Nepal",
    verified: true,
    rating: 4.8,
    activity: [
      { label: "New listing added", detail: "KTM Duke 200 BS6", time: "2h ago", color: "bg-green-500" },
      { label: "Inquiry received", detail: "Vespa SXL 125", time: "1d ago", color: "bg-blue-500" },
      { label: "Profile updated", detail: "", time: "3d ago", color: "bg-amber-500" },
    ],
  },
  { id: 2, name: "Anisha Maharjan", email: "anisha@example.com", phone: "9845678901", role: "Buyer", status: "Active", joined: "May 9, 2024", joinedTime: "09:15 AM", listings: 0, inquiries: 5, avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 3, name: "Sujan Pathak", email: "sujan@example.com", phone: "9852345678", role: "Seller", status: "Active", joined: "May 8, 2024", joinedTime: "04:30 PM", listings: 7, inquiries: 3, avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
  { id: 4, name: "Dipesh Karki", email: "dipesh@example.com", phone: "9811122334", role: "Buyer", status: "Suspended", joined: "May 7, 2024", joinedTime: "11:20 AM", listings: 0, inquiries: 1, avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
  { id: 5, name: "Niraj Gurung", email: "niraj@example.com", phone: "9867890123", role: "Seller", status: "Active", joined: "May 6, 2024", joinedTime: "03:45 PM", listings: 3, inquiries: 2, avatar: "https://randomuser.me/api/portraits/men/56.jpg" },
  { id: 6, name: "Prabin Shrestha", email: "prabin@example.com", phone: "9841237890", role: "Buyer", status: "Active", joined: "May 5, 2024", joinedTime: "02:25 PM", listings: 0, inquiries: 4, avatar: "https://randomuser.me/api/portraits/men/64.jpg" },
  { id: 7, name: "Santoshi Lama", email: "santoshi@example.com", phone: "9856781234", role: "Buyer", status: "Verified", joined: "May 4, 2024", joinedTime: "01:10 PM", listings: 1, inquiries: 2, avatar: "https://randomuser.me/api/portraits/women/68.jpg" },
];

const ROLE_STYLES = {
  Seller: "bg-green-50 text-green-700",
  Buyer: "bg-blue-50 text-blue-700",
};

function StatusBadge({ status }) {
  if (status === "Active")
    return (
      <span className="flex items-center gap-1.5 text-sm font-medium text-green-600">
        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
        Active
      </span>
    );
  if (status === "Suspended")
    return (
      <span className="flex items-center gap-1.5 text-sm font-medium text-brand-red">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
        Suspended
      </span>
    );
  return (
    <span className="flex items-center gap-1.5 text-sm font-medium text-emerald-600">
      <BadgeCheck size={14} />
      Verified
    </span>
  );
}

export default function Users() {
  const [activeTab, setActiveTab] = useState("All Users");
  const [selected, setSelected] = useState(USERS[0]);
  const [checkedRows, setCheckedRows] = useState([]);

  const toggleRow = (id) =>
    setCheckedRows((prev) => (prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]));

  const filtered =
    activeTab === "All Users"
      ? USERS
      : USERS.filter((u) => {
          if (activeTab === "Buyers") return u.role === "Buyer";
          if (activeTab === "Sellers") return u.role === "Seller";
          if (activeTab === "Verified") return u.status === "Verified";
          if (activeTab === "Suspended") return u.status === "Suspended";
          return true;
        });

  return (
    <div>
      {/* Page header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Users</h1>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-400">
            <span>Dashboard</span>
            <ChevronRight size={14} />
            <span className="font-medium text-brand-red">Users</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50">
            <Download size={15} />
            Export Users
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-brand-red px-5 py-2.5 text-sm font-bold text-white hover:bg-red-600">
            <Plus size={16} />
            Add New User
          </button>
        </div>
      </div>

      {/* Stat cards */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {STATS.map(({ label, value, change, up, icon: Icon, tint }) => (
          <div key={label} className="card p-5">
            <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${tint}`}>
              <Icon size={19} />
            </div>
            <p className="text-sm text-slate-400">{label}</p>
            <p className="mt-1 text-2xl font-extrabold text-slate-900">{value}</p>
            <p className={`mt-1 text-xs font-semibold ${up ? "text-green-600" : "text-brand-red"}`}>
              {up ? "↑" : "↓"} {change}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_360px]">
        {/* Table card */}
        <div className="card overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-5 pt-4">
            <div className="flex items-center gap-6">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative pb-3 text-sm font-semibold transition-colors ${
                    activeTab === tab ? "text-brand-red" : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute -bottom-px left-0 h-0.5 w-full bg-brand-red" />
                  )}
                </button>
              ))}
            </div>

            <div className="mb-3 flex items-center gap-2">
              <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50">
                <SlidersHorizontal size={14} />
                Filters
              </button>
              <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50">
                All Roles
                <ChevronDown size={14} />
              </button>
              <button className="flex items-center rounded-lg border border-slate-200 p-2 text-slate-500 hover:bg-slate-50">
                <Calendar size={14} />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  <th className="w-10 px-5 py-3">
                    <input type="checkbox" className="rounded border-slate-300" />
                  </th>
                  <th className="px-3 py-3">User</th>
                  <th className="px-3 py-3">Role</th>
                  <th className="px-3 py-3">Status</th>
                  <th className="px-3 py-3">Joined Date</th>
                  <th className="px-3 py-3 text-right">Listings</th>
                  <th className="px-3 py-3 text-right">Inquiries</th>
                  <th className="w-10 px-3 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((u) => (
                  <tr
                    key={u.id}
                    onClick={() => setSelected(u)}
                    className={`cursor-pointer border-b border-slate-50 last:border-0 hover:bg-slate-50 ${
                      selected?.id === u.id ? "bg-red-50/40" : ""
                    }`}
                  >
                    <td className="px-5 py-3.5" onClick={(e) => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        checked={checkedRows.includes(u.id)}
                        onChange={() => toggleRow(u.id)}
                        className="rounded border-slate-300"
                      />
                    </td>
                    <td className="px-3 py-3.5">
                      <div className="flex items-center gap-3">
                        <img src={u.avatar} alt={u.name} className="h-9 w-9 rounded-full object-cover" />
                        <div>
                          <p className="font-semibold text-slate-800">{u.name}</p>
                          <p className="text-xs text-slate-400">{u.email}</p>
                          <p className="text-xs text-slate-400">{u.phone}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-3.5">
                      <span className={`rounded-md px-2.5 py-1 text-xs font-bold ${ROLE_STYLES[u.role]}`}>
                        {u.role}
                      </span>
                    </td>
                    <td className="px-3 py-3.5">
                      <StatusBadge status={u.status} />
                    </td>
                    <td className="px-3 py-3.5 text-slate-600">
                      <p>{u.joined}</p>
                      <p className="text-xs text-slate-400">{u.joinedTime}</p>
                    </td>
                    <td className="px-3 py-3.5 text-right text-slate-600">{u.listings}</td>
                    <td className="px-3 py-3.5 text-right text-slate-600">{u.inquiries}</td>
                    <td className="px-3 py-3.5 text-right" onClick={(e) => e.stopPropagation()}>
                      <button className="rounded-md p-1.5 text-slate-400 hover:bg-slate-100">
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 px-5 py-4">
            <p className="text-xs text-slate-400">Showing 1 to 10 of 3,456 users</p>
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
                346
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

        {/* User details panel */}
        <div className="card h-fit p-5">
          {selected ? (
            <>
              <div className="mb-4 flex items-start justify-between">
                <h3 className="text-base font-bold text-slate-900">User Details</h3>
                <button onClick={() => setSelected(null)} className="text-slate-400 hover:text-slate-600">
                  <X size={18} />
                </button>
              </div>

              <div className="flex items-center gap-3">
                <img src={selected.avatar} alt={selected.name} className="h-14 w-14 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-slate-900">{selected.name}</p>
                  <span className={`mt-0.5 inline-block rounded-md px-2 py-0.5 text-xs font-bold ${ROLE_STYLES[selected.role] || "bg-slate-100 text-slate-600"}`}>
                    {selected.role}
                  </span>
                </div>
                <span className="ml-auto rounded-full bg-green-50 px-2.5 py-1 text-xs font-bold text-green-600">
                  {selected.status}
                </span>
              </div>

              <div className="mt-5 space-y-2.5 text-sm text-slate-600">
                <p className="flex items-center gap-2">
                  <Mail size={14} className="text-slate-400" />
                  {selected.email}
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={14} className="text-slate-400" />
                  {selected.phone}
                </p>
                {selected.location && (
                  <p className="flex items-center gap-2">
                    <MapPin size={14} className="text-slate-400" />
                    {selected.location}
                  </p>
                )}
                <p className="flex items-center gap-2">
                  <CalendarCheck size={14} className="text-slate-400" />
                  Joined on {selected.joined} • {selected.joinedTime}
                </p>
                {selected.verified && (
                  <p className="flex items-center gap-2 font-semibold text-emerald-600">
                    <BadgeCheck size={14} />
                    Email Verified
                  </p>
                )}
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2 rounded-xl bg-slate-50 py-4 text-center">
                <div>
                  <p className="text-lg font-extrabold text-slate-900">{selected.listings}</p>
                  <p className="text-xs text-slate-400">Listings</p>
                </div>
                <div>
                  <p className="text-lg font-extrabold text-slate-900">{selected.inquiries}</p>
                  <p className="text-xs text-slate-400">Inquiries</p>
                </div>
                <div>
                  <p className="flex items-center justify-center gap-1 text-lg font-extrabold text-slate-900">
                    {selected.rating ?? "—"}
                    {selected.rating && <Star size={13} className="fill-amber-400 text-amber-400" />}
                  </p>
                  <p className="text-xs text-slate-400">Rating</p>
                </div>
              </div>

              {selected.activity && (
                <div className="mt-5">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-sm font-bold text-slate-800">Recent Activity</p>
                    <button className="text-xs font-semibold text-brand-red">View All</button>
                  </div>
                  <div className="space-y-3">
                    {selected.activity.map((a, i) => (
                      <div key={i} className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-2">
                          <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${a.color}`} />
                          <div>
                            <p className="text-sm font-medium text-slate-700">{a.label}</p>
                            {a.detail && <p className="text-xs text-slate-400">{a.detail}</p>}
                          </div>
                        </div>
                        <span className="whitespace-nowrap text-xs text-slate-400">{a.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-5 grid grid-cols-2 gap-2">
                <button className="flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-50">
                  <MessageSquareText size={14} />
                  Send Message
                </button>
                <button className="flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-50">
                  <UserRound size={14} />
                  View Profile
                </button>
              </div>
              <button className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-lg bg-brand-red py-2.5 text-xs font-bold text-white hover:bg-red-600">
                <Ban size={14} />
                Suspend User
              </button>
            </>
          ) : (
            <div className="flex h-64 flex-col items-center justify-center text-center text-slate-400">
              <UsersIcon size={26} className="mb-2" />
              <p className="text-sm">Select a user to see details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}