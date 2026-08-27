// app/contact/page.jsx
"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ShieldCheck,
  BadgeCheck,
  Headphones,
  Heart,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: "url('/images/contact-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-white/70" />

        <div className="container-site relative py-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-bold tracking-wide text-gray-700">
            <ShieldCheck className="h-4 w-4 text-red-500" />
            WE'RE HERE TO HELP
          </span>

          <h1 className="mt-6 text-5xl font-extrabold text-slate-900">
            CONTACT <span className="text-red-500">US</span>
          </h1>
          <div className="mt-4 h-1 w-24 bg-red-500" />

          <p className="mt-4 max-w-md text-gray-600">
            Have questions or need help? We're here for you. Get in touch
            with our team and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Main grid */}
      <section className="container-site grid gap-6 py-12 lg:grid-cols-3">
        {/* Get in touch */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">GET IN TOUCH</h2>
          <div className="mt-1 mb-6 h-1 w-10 bg-red-500" />

          <div className="space-y-5">
            <ContactItem
              icon={<MapPin className="h-5 w-5 text-red-500" />}
              title="Visit Our Office"
              lines={["Kuleshwor, Kathmandu", "Bagmati Province, Nepal"]}
            />
            <ContactItem
              icon={<Phone className="h-5 w-5 text-red-500" />}
              title="Call Us"
              lines={["+977 9841 234 567", "Sun - Fri (10:00 AM - 6:00 PM)"]}
            />
            <ContactItem
              icon={<Mail className="h-5 w-5 text-red-500" />}
              title="Email Us"
              lines={[
                "info@reconditionhouse.com.np",
                "support@reconditionhouse.com.np",
              ]}
            />
            <ContactItem
              icon={<Clock className="h-5 w-5 text-red-500" />}
              title="Business Hours"
              lines={["Sunday - Friday", "10:00 AM - 6:00 PM"]}
              noBorder
            />
          </div>
        </div>

        {/* Send message form */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">
            SEND US A MESSAGE
          </h2>
          <div className="mt-1 mb-6 h-1 w-10 bg-red-500" />

          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <InputField placeholder="Your Name" icon="user" />
              <InputField placeholder="Your Email" icon="mail" />
            </div>
            <InputField placeholder="Phone Number" icon="phone" />

            <div className="relative">
              <select className="w-full appearance-none rounded-lg border border-gray-200 py-3 pl-4 pr-10 text-sm text-gray-500 focus:border-red-400 focus:outline-none">
                <option>How can we help you?</option>
                <option>General Inquiry</option>
                <option>Buying a Bike</option>
                <option>Selling a Bike</option>
                <option>Support</option>
              </select>
            </div>

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full resize-none rounded-lg border border-gray-200 p-4 text-sm placeholder-gray-400 focus:border-red-400 focus:outline-none"
            />

            <button
              type="submit"
              className="flex items-center gap-2 rounded-full bg-red-500 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-red-600"
            >
              <Send className="h-4 w-4" />
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Location / map */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">OUR LOCATION</h2>
          <div className="mt-1 mb-6 h-1 w-10 bg-red-500" />

          <div className="overflow-hidden rounded-xl border border-gray-200">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Kuleshwor,Kathmandu,Nepal&output=embed"
              className="h-64 w-full"
              loading="lazy"
            />
          </div>

          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="flex items-center gap-1 text-gray-500">
              <MapPin className="h-4 w-4" />
              Kuleshwor, Kathmandu, Bagmati Province, Nepal
            </span>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap font-semibold text-red-500 hover:underline"
            >
              View on Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="border-t border-gray-100 bg-white py-10">
        <div className="container-site grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Feature
            icon={<ShieldCheck className="h-6 w-6 text-red-500" />}
            title="Trusted & Verified"
            desc="Every bike is inspected and verified"
          />
          <Feature
            icon={<BadgeCheck className="h-6 w-6 text-red-500" />}
            title="Quality Assured"
            desc="Best quality bikes at best prices"
          />
          <Feature
            icon={<Headphones className="h-6 w-6 text-red-500" />}
            title="Customer Support"
            desc="We're here to help you anytime"
          />
          <Feature
            icon={<Heart className="h-6 w-6 text-red-500" />}
            title="1000+ Happy Riders"
            desc="Join thousands of satisfied customers"
          />
        </div>
      </section>
    </main>
  );
}

function ContactItem({ icon, title, lines, noBorder }) {
  return (
    <div
      className={`flex gap-4 ${
        noBorder ? "" : "border-b border-gray-100 pb-5"
      }`}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-slate-900">{title}</p>
        {lines.map((line) => (
          <p key={line} className="text-sm text-gray-500">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

function InputField({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm placeholder-gray-400 focus:border-red-400 focus:outline-none"
    />
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-red-200">
        {icon}
      </div>
      <div>
        <p className="font-bold text-slate-900">{title}</p>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
    </div>
  );
}