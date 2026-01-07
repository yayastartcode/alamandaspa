import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/config";

export function WhatsAppButton() {
  const handleClick = () => {
    window.open(
      getWhatsAppLink(
        "Halo, saya ingin bertanya tentang layanan Anda tentang Momhom SPA dan Massage"
      ),
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat via WhatsApp
      </span>

      {/* Ping Animation */}
      <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
    </button>
  );
}
