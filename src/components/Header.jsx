import { useState } from "react";
import {
  Search, Heart, UserRound, MapPin, ChevronDown, Menu, X
} from "lucide-react";
import Logo from "./Logo";

export default function Header({ onNotify }) {
  const [mobile, setMobile] = useState(false);

  const links = ["Home", "Buy", "Sell", "About Us", "Contact"];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
       <div className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between px-6 sm:px-10">
        <Logo />

        <nav className="hidden items-center gap-10 text-[14px] font-medium text-slate-600 lg:flex">
          {links.map((link, index) => (
            <a
              key={link}
              href={index === 0 ? "#top" : "#"}
              className={index === 0 ? "font-semibold text-brand-red" : "hover:text-brand-red"}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          {/* <button className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-[10px] font-semibold text-slate-600">
            <MapPin size={13} fill="currentColor" />
            Kathmandu
            <ChevronDown size={12} />
          </button> */}
          <Search size={17} />
          <Heart size={17} />
          <button
            onClick={() => onNotify("Login / Register clicked")}
            className="rounded-md bg-brand-red px-4 py-2.5 text-[13px] font-bold text-white"
          >
            Login / Register
          </button>
        </div>

        <button className="lg:hidden" onClick={() => setMobile(!mobile)}>
          {mobile ? <X /> : <Menu />}
        </button>
      </div>

      {mobile && (
        <div className="border-t bg-white px-5 py-4 lg:hidden">
          {links.map((link) => (
            <a key={link} href="#" className="block border-b py-3 text-sm font-semibold">
              {link}
            </a>
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