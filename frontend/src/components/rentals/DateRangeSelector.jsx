export default function DateRangeSelector({ startDate, endDate, onChange }) {
  return (
    <div
      className="mt-5 rounded-2xl border border-[var(--border-color)]  bg-black/70 backdrop-blur p-5 ">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-sm tracking-wide text-[var(--text-primary)]">
          Rental Period
        </h4>
        <span className="text-xs text-[var(--text-secondary)]">
          Select start & end date
        </span>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-2 gap-3">
        {/* Start Date */}
        <div className="flex flex-col gap-1">
          <label className="text-xs text-[var(--text-secondary)]">
            From
          </label>
          <input
            type="date"
            min={new Date().toISOString().split("T")[0]}
            value={startDate || ""}
            onChange={(e) => onChange(e.target.value, endDate)}
            className="
              rounded-lg px-3 py-2 text-sm
              bg-black/60
              border border-[var(--border-color)]
              text-[var(--text-primary)]
              focus:outline-none focus:border-[var(--accent-color)]
            "
          />
        </div>

        {/* End Date */}
        <div className="flex flex-col gap-1">
          <label className="text-xs text-[var(--text-secondary)]">
            To
          </label>
          <input
            type="date"
            min={startDate || new Date().toISOString().split("T")[0]}
            value={endDate || ""}
            onChange={(e) => onChange(startDate, e.target.value)}
            className="
              rounded-lg px-3 py-2 text-sm
              bg-black/60
              border border-[var(--border-color)]
              text-[var(--text-primary)]
              focus:outline-none focus:border-[var(--accent-color)]
            "
          />
        </div>
      </div>

      {/* Helper Text */}
      {startDate && endDate && (
        <p className="mt-3 text-xs text-green-400">
          ✔ Rental period selected
        </p>
      )}
    </div>
  );
}
