import {
  ShieldCheck, BadgeDollarSign, UsersRound, Headphones
} from "lucide-react";
import FeatureItem from "./FeatureItem";

export default function WhyChooseUs({ onNotify }) {
  const features = [
    [<ShieldCheck size={25} strokeWidth={1.6} />, "Verified & Quality Checked", "Every bike is thoroughly inspected."],
    [<BadgeDollarSign size={25} strokeWidth={1.6} />, "Best Market Prices", "Get great value for your money."],
    [<UsersRound size={25} strokeWidth={1.6} />, "Trusted by Thousands", "Join our growing community of riders."],
    [<Headphones size={25} strokeWidth={1.6} />, "After-Sales Support", "We're always here to help."]
  ];

  return (
    <section className="relative overflow-hidden bg-[#172233] py-8 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-30" />

      <div className="container-site relative grid items-center gap-8 lg:grid-cols-[1.25fr_2.7fr]">
        <div>
          <div className="mb-2 text-3xl text-brand-red">⌁</div>
          <h2 className="text-[21px] font-extrabold">Why Choose Us?</h2>
          <p className="mt-2 max-w-[300px] text-[10px] leading-4 text-slate-200">
            We make buying and selling bikes and scooters in Nepal simple, safe and reliable.
          </p>
          <button
            onClick={() => onNotify("Learn more")}
            className="mt-5 rounded-md bg-brand-red px-5 py-2.5 text-[10px] font-bold"
          >
            Learn More →
          </button>
        </div>

        <div className="grid grid-cols-2 gap-5 border-t border-white/20 pt-6 sm:grid-cols-4 sm:border-l sm:border-t-0 sm:pl-8">
          {features.map(([icon, title, text]) => (
            <FeatureItem key={title} icon={icon} title={title} text={text} />
          ))}
        </div>
      </div>
    </section>
  );
}