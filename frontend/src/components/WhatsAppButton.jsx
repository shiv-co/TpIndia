import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton({
  message = "Hello TP India Network, I want to connect!",
  className = "fixed bottom-6 right-6 bg-[#05943a] text-white px-1 py-1 rounded-full shadow-lg text-3xl hover:scale-110 transition-all animate-pulse z-50",
}) {
  const encodedMessage = encodeURIComponent(message);

  return (
    <a
      href={`https://wa.me/919932012125?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={className}
    >
      <FaWhatsapp />
    </a>
  );
}
