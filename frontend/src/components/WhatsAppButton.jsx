import React from "react";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919932012125?text=Hello%20TP%20India%20Network%2C%20I%20want%20to%20connect!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#05943a] text-white px-1 py-1 rounded-full shadow-lg text-3xl
      hover:scale-110 transition-all animate-pulse z-50"
    >
      {/* <i className="ri-whatsapp-fill"></i> */}
      <FaWhatsapp />
    </a>
  );
}
