import { ShoppingCart, Tag, IndianRupee, ShieldCheck, Headphones } from "lucide-react";

const FEATURES = [
  {
    icon: ShoppingCart,
    title: "Easy to Buy",
    description: "Browse thousands of bikes & scooters and buy with confidence.",
  },
  {
    icon: Tag,
    title: "Easy to Sell",
    description: "List your vehicle in minutes and reach genuine buyers.",
  },
  {
    icon: IndianRupee,
    title: "Best Price",
    description: "Get the best value for your vehicle with fair and transparent pricing.",
  },
  {
    icon: ShieldCheck,
    title: "Every Vehicle Verified",
    description: "Every vehicle is carefully inspected and verified for quality and safety.",
  },
  {
    icon: Headphones,
    title: "After Sales Service",
    description: "We're here to help even after the deal with dedicated support.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white px-8 py-14 shadow-sm sm:px-12">
          {/* Mountain watermark, bottom-left */}
          <svg
            viewBox="0 0 400 160"
            className="pointer-events-none absolute bottom-0 left-0 h-40 w-auto text-slate-100"
            fill="none"
          >
            <path
              d="M0 160 L60 70 L100 110 L150 40 L200 100 L240 60 L300 120 L340 80 L400 160 Z"
              fill="currentColor"
            />
          </svg>

          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr]">
            {/* Left copy block */}
            <div>
              <h2 className="mt-2 text-[30px] font-extrabold leading-tight text-brand-ink sm:text-[34px]">
                Why <span className="text-brand-red">Choose Us?</span>
              </h2>
              <span className="mt-4 block h-1 w-14 rounded-full bg-brand-red" />
              <p className="mt-5 max-w-[280px] text-[14px] leading-6 text-slate-500">
                We make buying and selling second hand bikes &amp; scooters
                easy, safe and reliable for everyone.
              </p>
            </div>

            {/* Feature columns */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-slate-100">
              {FEATURES.map(({ icon: Icon, title, description }) => (
                <div key={title} className="text-center lg:px-5 lg:first:pl-0 lg:last:pr-0">
                  <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-red/10">
                    <Icon className="h-9 w-9 text-brand-red" strokeWidth={1.75} />
                  </div>

                  <h3 className="mt-4 text-[15px] font-bold leading-snug text-brand-ink">
                    {title}
                  </h3>
                  <span className="mx-auto mt-2 block h-[3px] w-6 rounded-full bg-brand-red" />
                  <p className="mt-3 text-[13px] leading-6 text-slate-500">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}