import React from "react";
import { Link } from "react-router-dom";

export default function GetQuoteBtn() {
  return (
    <>
      {/* <a
      href="https://wa.me/919932012125?text=Hello%20TP%20India%20Network%2C%20I%20want%20to%20connect!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#05943a] text-white px-2 py-1 rounded-full shadow-lg text-3xl
     "
    >
      <i className="ri-whatsapp-fill"></i>
    </a> */}

      <Link
        to="/get-quote"
        className="fixed bottom-6 right-20  hover:scale-110 transition-all animate-pulse z-50   px-4 py-3 border border-[var(--accent-color)] rounded-4xl bg-[var(--accent-color)] hover:text-white     "
      >
        Get Quotes Now
      </Link>
    </>
  );
}
