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

      {/* ================= NAVBAR ================= */}
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex h-[88px] max-w-[1400px] items-center justify-between px-6 lg:px-10">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-[54px] w-[44px] items-center justify-center rounded-tl-[18px] border-[4px] border-r-0 border-[#D8343F]">
              <Bike
                size={27}
                strokeWidth={2.5}
                className="text-[#D8343F]"
              />
            </div>

            <div className="leading-none">
              <div className="text-[21px] font-extrabold tracking-tight text-[#172033]">
                RECONDITION
              </div>

              <div className="text-[21px] font-extrabold tracking-tight text-[#172033]">
                HOUSE
              </div>

              <div className="mt-1 text-[14px] font-bold tracking-[0.28em] text-[#D8343F]">
                NEPAL
              </div>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-10 lg:flex">
            <Link
              to="/buy"
              className="font-medium text-gray-700 transition hover:text-[#D8343F]"
            >
              Buy
            </Link>

            <Link
              to="/sell"
              className="font-medium text-gray-700 transition hover:text-[#D8343F]"
            >
              Sell
            </Link>

            <Link
              to="/about"
              className="font-medium text-gray-700 transition hover:text-[#D8343F]"
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className="font-medium text-gray-700 transition hover:text-[#D8343F]"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-5">
            <Link
              to="/login"
              className="hidden rounded-xl bg-[#D8343F] px-7 py-4 font-semibold text-white transition hover:bg-[#bd2d37] sm:block"
            >
              Login / Register
            </Link>

            <button
              aria-label="Menu"
              className="rounded-lg p-2 lg:hidden"
            >
              <Menu size={30} />
            </button>
          </div>
        </div>
      </header>


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


        {/* ================= ILLUSTRATION ================= */}
        <section className="relative mx-auto max-w-[1050px] overflow-hidden px-6 pb-12">

          <div className="relative mx-auto h-[330px] max-w-[900px]">

            {/* Mountains */}
            <div className="absolute bottom-[75px] left-0 h-[130px] w-full overflow-hidden opacity-40">
              <div className="absolute -left-10 bottom-0 h-[150px] w-[380px] rotate-[15deg] bg-[#EEF1F4]" />
              <div className="absolute left-[250px] bottom-0 h-[130px] w-[350px] -rotate-[13deg] bg-[#E5E9ED]" />
              <div className="absolute right-[-50px] bottom-0 h-[150px] w-[390px] rotate-[14deg] bg-[#EEF1F4]" />
            </div>

            {/* Road */}
            <div className="absolute bottom-0 left-1/2 h-[210px] w-[400px] -translate-x-1/2 rotate-[9deg] rounded-[50%] border-[55px] border-[#E6E9ED]" />

            {/* Road center line */}
            <div className="absolute bottom-[25px] left-1/2 h-[170px] w-[6px] -translate-x-1/2 rotate-[9deg] border-l-[5px] border-dashed border-white" />

            {/* Motorcycle illustration */}
            <div className="absolute bottom-[48px] left-1/2 z-10 -translate-x-[55%]">

              {/* Wheels */}
              <div className="absolute bottom-0 left-[15px] h-[70px] w-[70px] rounded-full border-[10px] border-[#172033] bg-white shadow-sm">
                <div className="absolute left-1/2 top-1/2 h-[22px] w-[22px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#172033]" />
              </div>

              <div className="absolute bottom-0 right-[-110px] h-[70px] w-[70px] rounded-full border-[10px] border-[#172033] bg-white shadow-sm">
                <div className="absolute left-1/2 top-1/2 h-[22px] w-[22px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#172033]" />
              </div>

              {/* Bike frame */}
              <div className="relative h-[130px] w-[220px]">

                <div className="absolute left-[45px] top-[55px] h-[8px] w-[125px] rotate-[10deg] bg-[#172033]" />

                <div className="absolute left-[70px] top-[25px] h-[8px] w-[70px] rotate-[58deg] bg-[#172033]" />

                <div className="absolute left-[125px] top-[32px] h-[8px] w-[75px] -rotate-[35deg] bg-[#172033]" />

                {/* Fuel tank */}
                <div className="absolute left-[80px] top-[8px] h-[52px] w-[90px] rounded-[45%] bg-[#D8343F] shadow-md" />

                {/* Seat */}
                <div className="absolute left-[35px] top-[18px] h-[17px] w-[75px] rounded-full bg-[#172033]" />

                {/* Front fork */}
                <div className="absolute right-[7px] top-[30px] h-[100px] w-[8px] rotate-[-15deg] bg-[#172033]" />

                {/* Handle */}
                <div className="absolute right-[-2px] top-[15px] h-[8px] w-[55px] rotate-[15deg] rounded-full bg-[#172033]" />

                {/* Exhaust */}
                <div className="absolute bottom-[27px] left-[85px] h-[9px] w-[95px] rounded-full bg-[#172033]" />

                {/* Headlight */}
                <div className="absolute right-[-10px] top-[28px] h-[20px] w-[20px] rounded-full border-4 border-[#172033] bg-white" />
              </div>
            </div>


            {/* Sign */}
            <div className="absolute bottom-[85px] right-[4%] z-20 hidden sm:block">

              <div className="relative mb-3 flex h-[58px] w-[205px] items-center justify-center bg-[#D8343F] shadow-sm [clip-path:polygon(0_0,85%_0,100%_50%,85%_100%,0_100%)]">
                <span className="pr-5 text-sm font-extrabold tracking-wide text-white">
                  PAGE NOT FOUND
                </span>
              </div>

              <div className="relative flex h-[48px] w-[165px] items-center justify-center bg-[#D8343F] shadow-sm [clip-path:polygon(0_0,82%_0,100%_50%,82%_100%,0_100%)]">
                <span className="pr-5 text-xs font-extrabold text-white">
                  LET'S FIND ANOTHER ROAD
                </span>
              </div>

              <div className="absolute left-[48%] top-[92px] h-[125px] w-[7px] bg-[#172033]" />
            </div>

          </div>
        </section>


        {/* ================= HELP SECTION ================= */}
        <section className="px-6 pb-20">

          <div className="mx-auto max-w-[1250px] rounded-2xl border border-[#E2E5E9] bg-[#F9FAFB] px-6 py-10 shadow-sm sm:px-10">

            <h3 className="text-center text-2xl font-bold text-[#172033]">
              Need help finding something?
            </h3>

            <div className="mt-10 grid grid-cols-2 divide-x divide-gray-200 md:grid-cols-4">

              <QuickLink
                icon={<Bike size={30} />}
                text="Browse All Bikes"
                to="/buy"
              />

              <QuickLink
                icon={<Tag size={30} />}
                text="Buy a Bike"
                to="/buy"
              />

              <QuickLink
                icon={<ArrowRight size={30} />}
                text="Sell Your Bike"
                to="/sell"
              />

              <QuickLink
                icon={<Headphones size={30} />}
                text="Contact Support"
                to="/contact"
              />

            </div>
          </div>
        </section>

      </main>


      {/* ================= FOOTER ================= */}
      <footer className="bg-[#111B2A] text-white">

        <div className="mx-auto max-w-[1400px] px-6 py-14 lg:px-10">

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

            {/* Brand */}
            <div>

              <Link to="/" className="flex items-start gap-3">

                <div className="flex h-[54px] w-[44px] items-center justify-center rounded-tl-[18px] border-[4px] border-r-0 border-[#D8343F]">
                  <Bike
                    size={27}
                    className="text-[#D8343F]"
                  />
                </div>

                <div className="leading-none">
                  <div className="text-xl font-extrabold">
                    RECONDITION
                  </div>

                  <div className="text-xl font-extrabold">
                    HOUSE
                  </div>

                  <div className="mt-1 text-xs font-bold tracking-[0.3em] text-[#D8343F]">
                    NEPAL
                  </div>
                </div>

              </Link>

              <p className="mt-7 text-gray-300">
                Better Rides. Brighter Journeys.
              </p>

              <div className="mt-7 flex gap-3">
                <SocialIcon icon={<Facebook size={17} />} />
                <SocialIcon icon={<Instagram size={17} />} />
                <SocialIcon icon={<Youtube size={17} />} />
              </div>
            </div>


            {/* Quick Links */}
            <FooterColumn
              title="Quick Links"
              links={[
                ["Buy", "/buy"],
                ["Sell", "/sell"],
                ["About Us", "/about"],
                ["Contact", "/contact"],
              ]}
            />


            {/* Categories */}
            <FooterColumn
              title="Categories"
              links={[
                ["All Vehicles", "/buy"],
                ["Motorcycles", "/buy?category=motorcycle"],
                ["Scooters", "/buy?category=scooter"],
              ]}
            />


            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold">
                Contact Us
              </h3>

              <div className="mt-7 space-y-5 text-gray-300">

                <div className="flex items-center gap-4">
                  <MapPin size={19} className="shrink-0" />
                  <span>Kathmandu, Nepal</span>
                </div>

                <a
                  href="tel:+9779812345678"
                  className="flex items-center gap-4 hover:text-white"
                >
                  <Phone size={19} />
                  <span>977 9812345678</span>
                </a>

                <a
                  href="mailto:info@reconditionhouse.com"
                  className="flex items-center gap-4 break-all hover:text-white"
                >
                  <Mail size={19} />
                  <span>info@reconditionhouse.com</span>
                </a>

              </div>
            </div>

          </div>


          {/* Bottom */}
          <div className="mt-12 border-t border-white/10 pt-7">

            <div className="flex flex-col gap-5 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">

              <p>
                © 2026 Recondition House Nepal. All rights reserved.
              </p>

              <div className="flex gap-5">
                <Link
                  to="/privacy-policy"
                  className="hover:text-white"
                >
                  Privacy Policy
                </Link>

                <span>|</span>

                <Link
                  to="/terms"
                  className="hover:text-white"
                >
                  Terms & Conditions
                </Link>
              </div>

            </div>

            <p className="mt-5 text-center text-sm text-gray-500">
              Developed by{" "}
              <span className="font-bold text-gray-300">
                CraftBase Studio
              </span>
            </p>

          </div>

        </div>
      </footer>


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
