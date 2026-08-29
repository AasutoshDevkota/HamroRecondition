import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  ListChecks,
  Users,
  UserCog,
  MessageSquare,
  CalendarCheck,
  CreditCard,
  Star,
  UsersRound,
  BarChart3,
  Settings,
  PanelLeftClose,
  PanelLeftOpen,
  Search,
  Bell,
  ChevronDown,
  HelpCircle,
  Bike,
  Menu,
  X,
  PlusCircle,
} from "lucide-react";
import Logo from "../components/Logo";

const NAV_ITEMS = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/admin" },
  { label: "Listings", icon: ListChecks, to: "/admin/listings" },
  { label: "Add New Vehicle", icon: PlusCircle, to: "/admin/listings/add" },
//   { label: "Buyers", icon: Users, to: "/admin/buyers" },
//   { label: "Sellers", icon: UserCog, to: "/admin/sellers" },
  { label: "Messages", icon: MessageSquare, to: "/admin/messages" },
//   { label: "Bookings", icon: CalendarCheck, to: "/admin/bookings" },
  // { label: "Payments", icon: CreditCard, to: "/admin/payments" },
//   { label: "Reviews", icon: Star, to: "/admin/reviews" },
  { label: "Users", icon: UsersRound, to: "/admin/users" },
  { label: "Reports", icon: BarChart3, to: "/admin/reports" },
  { label: "Settings", icon: Settings, to: "/admin/settings" },
];

export default function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar - desktop (lg and up) */}
      <aside
        className={`hidden shrink-0 flex-col border-r border-slate-100 bg-white transition-all duration-200 lg:flex ${
          collapsed ? "w-20" : "w-64"
        }`}
      >
        <div className={`flex h-[68px] items-center justify-between border-b border-slate-100 px-5 ${collapsed ? "justify-center" : ""}`}>
          {collapsed ? (
            <Bike size={26} className="text-brand-red" />
          ) : (
            <Logo />
          )}

          {!collapsed && (
            <button
              onClick={() => setCollapsed(true)}
              className="rounded-md p-1.5 text-slate-400 hover:bg-slate-50 hover:text-slate-600"
              title="Collapse sidebar"
            >
              <PanelLeftClose size={20} />
            </button>
          )}
        </div>

        {collapsed && (
          <button
            onClick={() => setCollapsed(false)}
            className="mx-auto mt-3 rounded-md p-1.5 text-slate-400 hover:bg-slate-50 hover:text-slate-600"
            title="Expand sidebar"
          >
            <PanelLeftOpen size={20} />
          </button>
        )}

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {NAV_ITEMS.map(({ label, icon: Icon, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/admin"}
              title={collapsed ? label : undefined}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-red-50 text-brand-red"
                    : "text-slate-600 hover:bg-slate-50"
                } ${collapsed ? "justify-center" : ""}`
              }
            >
              <Icon size={18} />
              {!collapsed && label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-slate-100 p-4">
          {!collapsed && (
            <div className="rounded-xl bg-red-50 p-4">
              <p className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <HelpCircle size={16} className="text-brand-red" />
                Need Support?
              </p>
              <p className="mt-1 text-xs text-slate-500">
                We're here to help you
              </p>
              <button className="mt-3 w-full rounded-md border border-brand-red py-2 text-xs font-bold text-brand-red hover:bg-white">
                Contact Support
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* Sidebar - mobile drawer (below lg) */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-white transition-transform duration-200 lg:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-[68px] items-center justify-between border-b border-slate-100 px-5">
          <Logo />
          <button
            onClick={() => setMobileOpen(false)}
            className="rounded-md p-1.5 text-slate-400 hover:bg-slate-50 hover:text-slate-600"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {NAV_ITEMS.map(({ label, icon: Icon, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/admin"}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-red-50 text-brand-red"
                    : "text-slate-600 hover:bg-slate-50"
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-slate-100 p-4">
          <div className="rounded-xl bg-red-50 p-4">
            <p className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <HelpCircle size={16} className="text-brand-red" />
              Need Support?
            </p>
            <p className="mt-1 text-xs text-slate-500">
              We're here to help you
            </p>
            <button className="mt-3 w-full rounded-md border border-brand-red py-2 text-xs font-bold text-brand-red hover:bg-white">
              Contact Support
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay behind mobile drawer */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
        />
      )}

      {/* Main column */}
      <div className="flex min-h-screen flex-1 flex-col">
        {/* Topbar */}
        <header className="flex h-[68px] items-center justify-between gap-4 border-b border-slate-100 bg-white px-6">
          <button
            onClick={() => setMobileOpen(true)}
            className="rounded-md p-1.5 text-slate-500 hover:bg-slate-50 lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>

          <div className="relative hidden max-w-md flex-1 mx-auto sm:block">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-14 text-sm focus:border-brand-red focus:outline-none"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded border border-slate-200 px-1.5 py-0.5 text-[10px] font-semibold text-slate-400">
              ⌘K
            </span>
          </div>

          <div className="flex items-center gap-5">
            <button className="relative rounded-full p-2 text-slate-500 hover:bg-slate-50">
              <Bell size={19} />
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-red text-[9px] font-bold text-white">
                12
              </span>
            </button>

            <div className="flex items-center gap-2">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Admin"
                className="h-9 w-9 rounded-full object-cover"
              />
              <div className="hidden text-left sm:block">
                <p className="text-sm font-bold text-slate-900 leading-tight">Admin</p>
                <p className="text-xs text-slate-400 leading-tight">Super Admin</p>
              </div>
              <ChevronDown size={14} className="text-slate-400" />
            </div>
          </div>
        </header>

        {/* Routed page content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}