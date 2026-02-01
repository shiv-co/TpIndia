export default function ItemCard({ item, onAdd }) {
  const isAdded = item.quantity > 0;

  return (
    <div className="rounded-2xl overflow-hidden border border-[var(--border-color)] bg-black/60">
      <img
        src={item.image}
        alt={item.name}
        loading="lazy"
        className="w-full h-48 object-cover"
      />
      {item.quantity > 0 && (
        <span
          className="
    absolute top-3 right-3
    bg-[var(--accent-color)]
    text-xs px-2 py-1 rounded-full
  "
        >
          {item.quantity}x
        </span>
      )}

      <div className="p-4">
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <button
          disabled={isAdded}
          onClick={() => onAdd(item)}
          className={`
    mt-4 w-full py-2.5 rounded-xl font-medium transition
    ${
      isAdded
        ? "bg-green-600 cursor-not-allowed"
        : "bg-[var(--accent-color)] hover:opacity-90 active:scale-[0.98]"
    }
  `}
        >
          {isAdded ? "Added ✓" : "+ Add Item"}
        </button>
      </div>
    </div>
  );
}
