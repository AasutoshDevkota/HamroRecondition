import { useState } from "react";
import {
  Settings as SettingsIcon,
  FileText,
  Bell,
  CreditCard,
  ListChecks,
  UserCog,
  Mail,
  Shield,
  Search,
  Cloud,
  RotateCcw,
  Upload,
  X,
  ChevronRight,
  Bike,
} from "lucide-react";

const NAV_ITEMS = [
  { key: "general", label: "General Settings", desc: "General site configuration", icon: SettingsIcon },
  { key: "site-info", label: "Site Information", desc: "Basic information about site", icon: FileText },
  { key: "notifications", label: "Notification Settings", desc: "Email & system notifications", icon: Bell },
  { key: "payments", label: "Payment Settings", desc: "Payment methods & configuration", icon: CreditCard },
  { key: "listings", label: "Listing Settings", desc: "Listing & approval configuration", icon: ListChecks },
  { key: "access", label: "User & Access", desc: "Roles, permissions & access", icon: UserCog },
  { key: "email-templates", label: "Email Templates", desc: "Manage email templates", icon: Mail },
  { key: "security", label: "Security Settings", desc: "Password & security options", icon: Shield },
  { key: "seo", label: "SEO Settings", desc: "SEO & meta configuration", icon: Search },
  { key: "backup", label: "Backup & Maintenance", desc: "Backup and system maintenance", icon: Cloud },
];

function Toggle({ checked, onChange }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${
        checked ? "bg-brand-red" : "bg-slate-200"
      }`}
    >
      <span
        className={`inline-block h-5 w-5 rounded-full bg-white shadow transition-transform ${
          checked ? "translate-x-[22px]" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-slate-700">{label}</label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/30";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("general");

  const [form, setForm] = useState({
    siteName: "Recondition House Nepal",
    siteTagline: "Trusted. Verified. Reliable.",
    adminEmail: "admin@reconditionhouse.com",
    contactPhone: "977-9812345678",
    currency: "NPR (Nepalese Rupee)",
    timezone: "Asia/Kathmandu (UTC +05:45)",
    dateFormat: "MM/DD/YYYY",
    timeFormat: "12 Hour (AM/PM)",
    description:
      "Recondition House Nepal is a trusted platform to buy and sell quality used bikes and scooters across Nepal.",
  });

  const [toggles, setToggles] = useState({
    maintenanceMode: false,
    allowRegistration: true,
    requireEmailVerification: true,
  });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <div>
      {/* Page header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Settings</h1>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-400">
            <span>Dashboard</span>
            <ChevronRight size={14} />
            <span className="font-medium text-brand-red">Settings</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50">
            <RotateCcw size={15} />
            Reset to Defaults
          </button>
          <button className="rounded-lg bg-brand-red px-5 py-2.5 text-sm font-bold text-white hover:bg-red-600">
            Save Changes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[260px_1fr_320px]">
        {/* Left nav */}
        <div className="card h-fit p-2">
          {NAV_ITEMS.map(({ key, label, desc, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex w-full items-start gap-3 rounded-lg px-3 py-3 text-left transition-colors ${
                activeTab === key ? "bg-red-50" : "hover:bg-slate-50"
              }`}
            >
              <Icon
                size={18}
                className={`mt-0.5 shrink-0 ${activeTab === key ? "text-brand-red" : "text-slate-400"}`}
              />
              <span>
                <span
                  className={`block text-sm font-bold ${
                    activeTab === key ? "text-brand-red" : "text-slate-800"
                  }`}
                >
                  {label}
                </span>
                <span className="block text-xs text-slate-400">{desc}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Middle panel */}
        <div className="card p-6">
          {activeTab === "general" ? (
            <>
              <h2 className="text-lg font-bold text-slate-900">General Settings</h2>
              <p className="mt-1 text-sm text-slate-400">
                Manage your platform general preferences and configurations.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Site Name">
                  <input className={inputClass} value={form.siteName} onChange={update("siteName")} />
                </Field>
                <Field label="Site Tagline">
                  <input className={inputClass} value={form.siteTagline} onChange={update("siteTagline")} />
                </Field>
                <Field label="Admin Email">
                  <input className={inputClass} value={form.adminEmail} onChange={update("adminEmail")} />
                </Field>
                <Field label="Contact Phone">
                  <input className={inputClass} value={form.contactPhone} onChange={update("contactPhone")} />
                </Field>
                <Field label="Default Currency">
                  <select className={inputClass} value={form.currency} onChange={update("currency")}>
                    <option>NPR (Nepalese Rupee)</option>
                    <option>USD (US Dollar)</option>
                    <option>INR (Indian Rupee)</option>
                  </select>
                </Field>
                <Field label="Timezone">
                  <select className={inputClass} value={form.timezone} onChange={update("timezone")}>
                    <option>Asia/Kathmandu (UTC +05:45)</option>
                    <option>Asia/Kolkata (UTC +05:30)</option>
                    <option>UTC</option>
                  </select>
                </Field>
                <Field label="Date Format">
                  <select className={inputClass} value={form.dateFormat} onChange={update("dateFormat")}>
                    <option>MM/DD/YYYY</option>
                    <option>DD/MM/YYYY</option>
                    <option>YYYY-MM-DD</option>
                  </select>
                </Field>
                <Field label="Time Format">
                  <select className={inputClass} value={form.timeFormat} onChange={update("timeFormat")}>
                    <option>12 Hour (AM/PM)</option>
                    <option>24 Hour</option>
                  </select>
                </Field>
              </div>

              {/* Site logo */}
              <div className="mt-6">
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">Site Logo</label>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex h-16 w-40 items-center justify-center gap-2 rounded-lg border border-dashed border-slate-200 px-3">
                    <Bike size={20} className="text-brand-red" />
                    <span className="text-xs font-extrabold leading-tight text-slate-800">
                      RECONDITION HOUSE
                      <br />
                      <span className="text-brand-red">NEPAL</span>
                    </span>
                  </div>
                  <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50">
                    <Upload size={15} />
                    Change Logo
                  </button>
                  <button className="flex items-center gap-2 rounded-lg border border-red-100 px-4 py-2.5 text-sm font-semibold text-brand-red hover:bg-red-50">
                    <X size={15} />
                    Remove
                  </button>
                </div>
                <p className="mt-1.5 text-xs text-slate-400">Recommended size: 200x60px (PNG or SVG)</p>
              </div>

              {/* Favicon */}
              <div className="mt-6">
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">Site Favicon</label>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-dashed border-slate-200">
                    <Bike size={18} className="text-brand-red" />
                  </div>
                  <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50">
                    <Upload size={15} />
                    Change Favicon
                  </button>
                  <button className="flex items-center gap-2 rounded-lg border border-red-100 px-4 py-2.5 text-sm font-semibold text-brand-red hover:bg-red-50">
                    <X size={15} />
                    Remove
                  </button>
                </div>
                <p className="mt-1.5 text-xs text-slate-400">Recommended size: 32x32px (ICO, PNG or SVG)</p>
              </div>

              {/* Description */}
              <div className="mt-6">
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">Site Description</label>
                <textarea
                  rows={3}
                  maxLength={160}
                  className={inputClass}
                  value={form.description}
                  onChange={update("description")}
                />
                <p className="mt-1 text-right text-xs text-slate-400">{form.description.length} / 160</p>
              </div>
            </>
          ) : (
            <div className="flex h-64 flex-col items-center justify-center text-center text-slate-400">
              <SettingsIcon size={28} className="mb-3" />
              <p className="text-sm font-semibold text-slate-500">
                {NAV_ITEMS.find((n) => n.key === activeTab)?.label}
              </p>
              <p className="mt-1 text-xs">This section isn't wired up yet.</p>
            </div>
          )}
        </div>

        {/* Right column */}
        <div className="space-y-6">
          <div className="card p-5">
            <h3 className="text-sm font-bold text-slate-900">Maintenance Mode</h3>
            <p className="mt-1 text-xs text-slate-400">
              Enable maintenance mode to put your site offline for visitors.
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-800">Maintenance Mode</p>
                <p className="text-xs text-slate-400">When enabled, only admins can access the site.</p>
              </div>
              <Toggle
                checked={toggles.maintenanceMode}
                onChange={(v) => setToggles((t) => ({ ...t, maintenanceMode: v }))}
              />
            </div>
          </div>

          <div className="card p-5">
            <h3 className="text-sm font-bold text-slate-900">Registration Settings</h3>
            <p className="mt-1 text-xs text-slate-400">Allow new users to register on the platform.</p>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-800">Allow User Registration</p>
                <p className="text-xs text-slate-400">Users will be able to create accounts.</p>
              </div>
              <Toggle
                checked={toggles.allowRegistration}
                onChange={(v) => setToggles((t) => ({ ...t, allowRegistration: v }))}
              />
            </div>
          </div>

          <div className="card p-5">
            <h3 className="text-sm font-bold text-slate-900">Email Verification</h3>
            <p className="mt-1 text-xs text-slate-400">
              Require email verification for new user registrations.
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-800">Require Email Verification</p>
                <p className="text-xs text-slate-400">Users must verify their email before login.</p>
              </div>
              <Toggle
                checked={toggles.requireEmailVerification}
                onChange={(v) => setToggles((t) => ({ ...t, requireEmailVerification: v }))}
              />
            </div>
          </div>

          <div className="card p-5">
            <h3 className="text-sm font-bold text-slate-900">Google reCAPTCHA</h3>
            <p className="mt-1 text-xs text-slate-400">Protect your site from spam and bots.</p>

            <div className="mt-4 space-y-3">
              <Field label="reCAPTCHA Site Key">
                <input type="password" className={inputClass} defaultValue="dummysitekeyvalue123456" />
              </Field>
              <Field label="reCAPTCHA Secret Key">
                <input type="password" className={inputClass} defaultValue="dummysecretkeyvalue123456" />
              </Field>
              <div className="flex items-center gap-2 pt-1">
                <span className="text-xs font-semibold text-slate-500">Status</span>
                <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-bold text-green-700">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}