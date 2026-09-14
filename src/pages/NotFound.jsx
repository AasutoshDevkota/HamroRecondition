import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Bike,
  Tag,
  CircleHelp,
  Headphones,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Menu,
} from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-[#111827]">
      {/* ================= 404 HERO ================= */}
      <main>

        <section className="px-6 pb-10 pt-20 text-center lg:pt-24">

          <div className="mx-auto max-w-[850px]">

            {/* 404 */}
            <h1 className="select-none text-[120px] font-black leading-[0.8] tracking-[-0.08em] text-[#D8343F] sm:text-[170px] lg:text-[210px]">
              404
            </h1>

            <h2 className="mt-8 text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl lg:text-5xl">
              OOPS! PAGE NOT FOUND
            </h2>

            <p className="mx-auto mt-6 max-w-[600px] text-lg leading-8 text-[#667085] sm:text-xl">
              The page you're looking for doesn't exist
              <br className="hidden sm:block" />
              or may have been moved.
              <br className="hidden sm:block" />
              Let's get you back on track.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <Link
                to="/"
                className="flex min-w-[210px] items-center justify-center gap-3 rounded-lg bg-[#D8343F] px-7 py-4 text-base font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#c42e38]"
              >
                <ArrowLeft size={20} />
                Back to Home
              </Link>

              <Link
                to="/buy"
                className="flex min-w-[210px] items-center justify-center gap-3 rounded-lg border-2 border-[#D8343F] bg-white px-7 py-4 text-base font-bold text-[#D8343F] transition hover:-translate-y-0.5 hover:bg-[#fff6f6]"
              >
                Explore Bikes
                <ArrowRight size={20} />
              </Link>

            </div>
          </div>
        </section>
      </main>
      {/* ================= FLOATING WHATSAPP ================= */}
      <a
        href="https://wa.me/9779812345678"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-105"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-8 w-8"
        >
          <path
            d="M20 11.5a8.5 8.5 0 0 1-12.8 7.35L3 20l1.2-4A8.5 8.5 0 1 1 20 11.5Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 9.2c.2 2.2 2.1 4.2 4.4 4.8.6.2 1.1 0 1.5-.4l.5-.6"
            strokeLinecap="round"
          />
        </svg>
      </a>

    </div>
  );
}


/* =========================================================
   COMPONENTS
========================================================= */

function QuickLink({ icon, text, to }) {
  return (
    <Link
      to={to}
      className="group flex flex-col items-center gap-4 px-4 text-center transition"
    >
      <div className="text-[#172033] transition group-hover:text-[#D8343F]">
        {icon}
      </div>

      <span className="text-sm font-medium text-[#172033] transition group-hover:text-[#D8343F]">
        {text}
      </span>
    </Link>
  );
}


function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-lg font-bold">
        {title}
      </h3>

      <div className="mt-6 space-y-4">
        {links.map(([name, url]) => (
          <Link
            key={name}
            to={url}
            className="block text-gray-300 transition hover:text-white"
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}


function SocialIcon({ icon }) {
  return (
    <a
      href="#"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-gray-300 transition hover:border-white hover:text-white"
    >
      {icon}
    </a>
  );
}
