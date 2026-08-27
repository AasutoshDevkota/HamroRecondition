import { Link } from "react-router-dom";
import {
  Facebook, Instagram, Youtube, Music2
} from "lucide-react";
import Logo from "./Logo";
import FooterColumn from "./FooterColumn";

export default function Footer() {
  return (
    <footer className="bg-[#000000] py-8 text-slate-300">
      <div className="container-site grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 text-[14px]">Better Rides. Brighter Journeys.</p>
          <div className="mt-3 flex gap-2">
            <Facebook size={15} />
            <Instagram size={15} />
            <Youtube size={15} />
          </div>
        </div>

        <FooterColumn title="Quick Links" links={["Buy", "Sell", "About Us", "Contact"]} />
        <FooterColumn title="Categories" links={["All Vehicles", "Motorcycles", "Scooters"]} />

        <div>
          <h3 className="text-[14px] font-bold text-white">Contact Us</h3>
          <div className="mt-3 space-y-2 text-[14px]">
            <p>Kathmandu, Nepal</p>
            <p>977 9812345678</p>
            <p>info@reconditionhouse.com</p>
          </div>
        </div>
      </div>

      <div className="container-site mt-7 flex flex-col justify-between gap-2 border-t border-white/10 pt-4 text-[12px] sm:flex-row">
        <span>© 2026 Recondition House Nepal. All rights reserved.</span>
        <div className="flex gap-6">
          <Link to="/privacy-policy" className="text-white/70 hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms-and-conditions" className="text-white/70 hover:text-white transition-colors">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
 