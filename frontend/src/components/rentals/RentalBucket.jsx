import { MdDelete } from "react-icons/md";
import DateRangeSelector from "./DateRangeSelector";

export default function RentalBucket({
  bucket,
  updateQuantity,
  removeItem,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) {
  if (bucket.length === 0) return null;

  return (
    <aside
      className="
        fixed bottom-6 right-6 w-[360px]
        rounded-2xl border border-[var(--border-color)]
        bg-black/80 backdrop-blur
        shadow-2xl z-50
        flex flex-col
      "
    >
      {/* HEADER */}
      <div className="p-4 border-b border-white/10">
        <h3 className="font-bold text-lg">Your Rental Bucket</h3>
      </div>

      {/* ITEMS */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {bucket.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <div>
              <div className="flex items-center gap-4 mt-1">
                <p className="font-medium text-lg md:px-5">{item.name}</p>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>{" "}
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              className="text-red-400 text-sm"
            >
              <MdDelete  size={20}/>
            </button>
          </div>
        ))}
      </div>

      {/* 📅 DATE RANGE — THIS WAS MISSING */}
      <div className="p-4 border-t border-white/10">
        <DateRangeSelector
          startDate={startDate}
          endDate={endDate}
          onChange={(start, end) => {
            setStartDate(start);
            setEndDate(end);
          }}
        />
      </div>

      {/* WHATSAPP CTA */}
      <div className="p-4">
        <button
          disabled={!startDate || !endDate}
          className="w-full py-3 rounded-xl bg-[var(--accent-color)] text-white font-semibold disabled:opacity-40"
        >
          Send on WhatsApp
        </button>
      </div>
    </aside>
  );
}
