import { useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Found my dream bike at the best price! The listing was genuine and the process was super smooth. Highly recommended!",
    rating: 5,
    name: "Ronish Thapa",
    location: "Kathmandu, Nepal",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    quote:
      "I sold my scooter within 3 days at a fair price. Great platform with verified buyers. Very trustworthy!",
    rating: 5,
    name: "Prabin Shrestha",
    location: "Lalitpur, Nepal",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    quote:
      "Loved the professional service and quick document verification. It gave me complete peace of mind while buying.",
    rating: 5,
    name: "Anisha Maharjan",
    location: "Kathmandu, Nepal",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  const next = () => setActive((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[26px] font-extrabold text-brand-ink sm:text-[30px]">
            What Our Customers Say?
          </h2>
          <span className="mx-auto mt-3 block h-1 w-14 rounded-full bg-brand-red" />
        </div>

        {/* Carousel */}
        <div className="relative mt-10 flex items-center justify-center">
          {/* Prev arrow */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 hidden h-9 w-9 items-center justify-center rounded-full text-slate-300 transition hover:text-brand-red sm:flex"
          >
            <ChevronLeft className="h-6 w-6" strokeWidth={2} />
          </button>

          {/* Cards */}
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.name}
                className={`rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition ${
                  i === active ? "sm:scale-[1.02] sm:shadow-md" : ""
                }`}
              >
                <Quote className="h-6 w-6 fill-brand-red text-brand-red" strokeWidth={0} />

                <p className="mt-4 text-[13.5px] leading-6 text-slate-600">{t.quote}</p>

                <div className="mt-4 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[13px] font-bold text-brand-ink">{t.name}</p>
                    <p className="text-[11px] text-slate-500">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 hidden h-9 w-9 items-center justify-center rounded-full text-slate-300 transition hover:text-brand-red sm:flex"
          >
            <ChevronRight className="h-6 w-6" strokeWidth={2} />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === active ? "w-5 bg-brand-red" : "w-2 bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}