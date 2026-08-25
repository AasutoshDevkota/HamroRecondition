import { MessageCircle } from "lucide-react";

const PHONE_NUMBER = "9779800000000"; // replace with your actual number, country code + no leading 0 or +
const DEFAULT_MESSAGE = "Hi! I'm interested in your bikes & scooters listed on Recondition House Nepal.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/20 transition-transform hover:scale-105 active:scale-95"
    >
      {/* <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" /> */}
      <MessageCircle className="relative h-7 w-7 text-white" strokeWidth={2} fill="white" fillOpacity={0.15} />
    </a>
  );
}