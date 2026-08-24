export default function FeatureItem({ icon, title, text }) {
  return (
    <div>
      <div className="mb-2 text-white">{icon}</div>
      <div className="text-[10px] font-bold">{title}</div>
      <p className="mt-1 text-[8px] leading-3 text-slate-300">{text}</p>
    </div>
  );
}