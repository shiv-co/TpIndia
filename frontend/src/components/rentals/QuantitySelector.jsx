export default function QuantitySelector({ qty, onIncrease, onDecrease }) {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={onDecrease}
        disabled={qty <= 1}
        className="w-4 h-4 flex items-center justify-center rounded-full
        border border-[var(--border-color)] text-md
        hover:bg-white/10 disabled:opacity-40"
      >
        −
      </button>

      <span className="min-w-[24px] text-center font-semibold">
        {qty}
      </span>

      <button
        type="button"
        onClick={onIncrease}
        className="w-4 h-4 flex items-center justify-center rounded-full
        border border-[var(--border-color)] text-md
        hover:bg-white/10"
      >
        +
      </button>
    </div>
  );
}
