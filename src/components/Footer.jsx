import {
  Facebook, Instagram, Youtube, Music2
} from "lucide-react";
import Logo from "./Logo";
import FooterColumn from "./FooterColumn";

export default function Footer() {
  return (
    <footer className="bg-[#142536] py-8 text-slate-300">
      <div className="container-site grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 text-[10px]">Better Rides. Brighter Journeys.</p>
        </div>

        <FooterColumn title="Quick Links" links={["Home", "Buy Bike", "Sell Bike", "About Us", "Contact"]} />
        <FooterColumn title="Categories" links={["Bikes", "Scooters", "Sports Bikes", "Commuter Bikes", "Premium / Imported"]} />

        <div>
          <h3 className="text-[10px] font-bold text-white">Contact Us</h3>
          <div className="mt-3 space-y-2 text-[9px]">
            <p>📍 Kathmandu, Nepal</p>
            <p>☎ +977 9800000000</p>
            <p>✉ info@reconditionhouse.com</p>
          </div>
          <div className="mt-3 flex gap-2">
            <Facebook size={15} />
            <Instagram size={15} />
            <Youtube size={15} />
            <Music2 size={15} />
          </div>
        </div>
      </div>

      <div className="container-site mt-7 flex flex-col justify-between gap-2 border-t border-white/10 pt-4 text-[8px] sm:flex-row">
        <span>© 2025 Recondition House Nepal. All rights reserved.</span>
        <span>Privacy Policy &nbsp; | &nbsp; Terms & Conditions</span>
      </div>
    </footer>
  );
}