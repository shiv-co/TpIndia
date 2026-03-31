import { CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function PricingCard({
  name,
  price,
  billing,
  note,
  description,
  features,
  highlight,
  badgeNote,
  cta,
}) {
  return (
    <div
      className={`pricing2-card-wrap group relative ${
        highlight ? "pricing2-card-wrap--highlight xl:scale-[1.05]" : ""
      }`}
    >
      <div className="pricing2-card-glow absolute -inset-[1px] rounded-[1.6rem] blur transition duration-500 group-hover:opacity-100" />

      <article
        className={`pricing2-card relative rounded-2xl border p-7 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
          highlight ? "pricing2-card--highlight scale-[1.03]" : ""
        }`}
      >
        {highlight ? (
          <div className="pricing2-badge absolute -top-4 left-1/2 z-10 inline-flex -translate-x-1/2 flex-col rounded-full px-4 py-1.5 text-center text-white shadow-lg">
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">
              {highlight}
            </span>
            <span className="mt-0.5 text-[11px] text-white/90">{badgeNote}</span>
          </div>
        ) : null}

        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="pricing2-plan-name text-sm font-semibold uppercase tracking-[0.3em]">
              {name}
            </p>
            <p className="pricing2-price mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              {price}
            </p>
          </div>

          <span className="pricing2-sparkle inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg">
            <Sparkles size={18} strokeWidth={2.2} />
          </span>
        </div>

        <p className="pricing2-billing mt-4 text-sm font-semibold uppercase tracking-[0.18em]">
          {billing}
        </p>
        <p className="pricing2-note mt-2 text-xs leading-6">{note}</p>
        <p className="pricing2-description mt-5 min-h-14 text-sm leading-7">
          {description}
        </p>

        <ul className="mt-7 space-y-4">
          {features.map((feature) => (
            <li
              key={feature}
              className="pricing2-feature flex items-start gap-3 text-sm leading-7"
            >
              <span className="pricing2-check mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-pink-500">
                <CheckCircle2 size={16} strokeWidth={2.4} />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          to="/get-quote"
          className="pricing2-button mt-9 inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
        >
          {cta}
        </Link>
      </article>
    </div>
  );
}
