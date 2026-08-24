export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-5 left-1/2 z-[70] -translate-x-1/2 rounded-full bg-brand-ink px-5 py-3 text-xs font-semibold text-white shadow-xl">
      {message}
    </div>
  );
}