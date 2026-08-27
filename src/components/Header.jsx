import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Search, Heart, UserRound, MapPin, ChevronDown, Menu, X
} from "lucide-react";
import Logo from "./Logo";

export default function Header({ onNotify }) {
  const [mobile, setMobile] = useState(false);

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