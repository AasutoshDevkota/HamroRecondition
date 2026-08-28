import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Search, Heart, UserRound, MapPin, ChevronDown, Menu, X, MessageCircle
} from "lucide-react";
import Logo from "./Logo";
import { useMessages } from "../context/MessagesContext";

export default function Header({ onNotify }) {
  const [mobile, setMobile] = useState(false);
  const { unreadCount } = useMessages();

  const links = [
    { label: "Home", to: "/" },
    { label: "Buy", to: "/buy" },
    { label: "Sell", to: "/sell" },
    { label: "About Us", to: "/about-us" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between px-6 sm:px-10">
        <Logo />

        <nav className="hidden items-center gap-10 text-[14px] font-medium text-slate-600 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                isActive ? "font-semibold text-brand-red" : "hover:text-brand-red"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-5 md:flex">
            <Search size={17} />
            <Heart size={17} />
            <NavLink
              to="/messages"
              className={({ isActive }) =>
                `relative ${isActive ? "text-brand-red" : "text-slate-600 hover:text-brand-red"}`
              }
              aria-label="Messages"
            >
              <MessageCircle size={17} />
              {unreadCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-brand-red text-[10px] font-bold leading-none text-white">
                  {unreadCount > 9 ? "9+" : unreadCount}
                </span>
              )}
            </NavLink>
          </div>

          <button
            onClick={() => onNotify("Login / Register clicked")}
            className="rounded-md bg-brand-red px-4 py-2.5 text-[13px] font-bold text-white"
          >
            Login / Register
          </button>

          <button className="lg:hidden" onClick={() => setMobile(!mobile)}>
            {mobile ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobile && (
        <div className="border-t bg-white px-5 py-4 lg:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setMobile(false)}
              className={({ isActive }) =>
                `block border-b py-3 text-sm font-semibold ${
                  isActive ? "text-brand-red" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/messages"
            onClick={() => setMobile(false)}
            className={({ isActive }) =>
              `flex items-center justify-between border-b py-3 text-sm font-semibold ${
                isActive ? "text-brand-red" : ""
              }`
            }
          >
            <span>Messages</span>
            {unreadCount > 0 && (
              <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-brand-red px-1 text-[11px] font-bold text-white">
                {unreadCount > 9 ? "9+" : unreadCount}
              </span>
            )}
          </NavLink>
          <button
            onClick={() => onNotify("Login / Register clicked")}
            className="mt-4 w-full rounded-md bg-brand-red py-3 text-[14px] font-bold text-white"
          >
            Login / Register
          </button>
        </div>
      )}
    </header>
  );
}