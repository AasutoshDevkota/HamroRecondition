import { Bike } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative flex h-9 w-10 items-center justify-center">
        <div className="absolute inset-0 rounded-tl-xl border-[2.5px] border-brand-red border-b-0 rotate-[-4deg]" />
        <Bike size={24} className="relative text-brand-red" />
      </div>
      <div className="leading-none">
        <div className="text-[11px] font-extrabold text-brand-">
          RECONDITION HOUSE
        </div>
        <div className="mt-1 text-[11px] font-extrabold tracking-[.2em] text-brand-red">
          NEPAL
        </div>
      </div>
    </div>
  );
}