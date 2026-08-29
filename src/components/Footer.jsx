// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Music2 } from "lucide-react";
import Logo from "./Logo";
import FooterColumn from "./FooterColumn";

export default function Footer() {
  return (
    <footer className="bg-[#000000] py-8 text-slate-300">
      <div className="container-site grid grid-cols-2 gap-8 lg:grid-cols-4">
        <div className="col-span-2 lg:col-span-1">
          <Logo />
          <p className="mt-4 text-[14px]">Better Rides. Brighter Journeys.</p>
          <div className="mt-3 flex gap-2">
            <Facebook size={15} />
            <Instagram size={15} />
            <Youtube size={15} />
          </div>
        </div>

        <FooterColumn
          title="Quick Links"
          links={[
            { label: "Buy", to: "/buy" },
            { label: "Sell", to: "/sell" },
            { label: "About Us", to: "/about-us" },
            { label: "Contact", to: "/contact" },
          ]}
        />
        <FooterColumn
          title="Categories"
          links={[
            { label: "All Vehicles", to: "/buy" },
            { label: "Motorcycles", to: "/buy?type=motorcycle" },
            { label: "Scooters", to: "/buy?type=scooter" },
          ]}
        />

        <div className="col-span-2 lg:col-span-1">
          <h3 className="text-[14px] font-bold text-white">Contact Us</h3>
          <div className="mt-3 space-y-2 text-[14px]">
            <p>Kathmandu, Nepal</p>
            <p>977 9812345678</p>
            <p>info@reconditionhouse.com</p>
          </div>
        </div>
      </div>

      <div className="container-site mt-7 flex flex-col items-center gap-3 border-t border-white/10 pt-4 text-[12px] sm:grid sm:grid-cols-3 sm:items-center sm:gap-2">
        <span className="text-center sm:text-left">
          © 2026 Recondition House Nepal. All rights reserved.
        </span>

        <div className="text-center text-white/50">
          Developed by{" "}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white/70 hover:text-white transition-colors"
          >
            CraftBase Studio
          </a>
        </div>

        <div className="flex justify-center gap-6 sm:justify-end">
          <Link
            to="/privacy-policy"
            className="text-white/70 hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-and-conditions"
            className="text-white/70 hover:text-white transition-colors"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
