import { useState } from "react";
import { rentalCategories } from "../data/rentalItems";

import CategoryCard from "../components/rentals/CategoryCard";
import ItemCard from "../components/rentals/ItemCard";
import RentalBucket from "../components/rentals/RentalBucket";
import DateRangeSelector from "../components/rentals/DateRangeSelector";
import WhatsAppButton from "../components/WhatsAppButton";
import GetQuoteBtn from "../components/getQuoteBtn";

export default function RentalsPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // SINGLE SOURCE OF TRUTH
  const [bucket, setBucket] = useState([]);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // ✅ ADD ITEM
  const addToBucket = (item) => {
    setBucket((prev) => {
      const exists = prev.find((i) => i.id === item.id);

      if (exists) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // ✅ UPDATE QUANTITY
  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      setBucket((prev) => prev.filter((i) => i.id !== id));
      return;
    }

    setBucket((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity } : i)),
    );
  };

  // ✅ REMOVE ITEM
  const removeItem = (id) => {
    setBucket((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 pt-28">
      {/* HEADER */}
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-3">
        Build Your{" "}
        <span className="text-[var(--accent-color)]">Rental Kit</span>
      </h1>
      <p className="text-center text-[var(--text-secondary)] mb-10">
        Select equipment • Choose quantity • Get quote on WhatsApp
      </p>
      <div className="flex justify-center gap-6 text-sm text-[var(--text-secondary)] mb-10">
  <span>✔ Professional Equipment</span>
  <span>✔ Trusted by Filmmakers</span>
  <span>✔ WhatsApp Support</span>
</div>

      <div className="flex justify-center gap-4 text-sm mb-8">
        <span className={selectedCategory ? "opacity-40" : "font-bold"}>
          Category
        </span>
        <span>→</span>
        <span className={selectedCategory ? "font-bold" : "opacity-40"}>
          Items
        </span>
        <span>→</span>
        <span className={startDate && endDate ? "font-bold" : "opacity-40"}>
          Dates
        </span>
        <span>→</span>
        <span className="opacity-40">WhatsApp</span>
      </div>

      {/* STEP 1 – CATEGORIES */}
      {!selectedCategory && (
        <div className="grid md:grid-cols-3 gap-8">
          {rentalCategories.map((cat) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              onSelect={() => setSelectedCategory(cat)}
            />
          ))}
        </div>
      )}

      {/* STEP 2 – ITEMS */}
      {selectedCategory && (
        <>
          <button
            onClick={() => setSelectedCategory(null)}
            className="mb-6 text-sm underline"
          >
            ← Back to Categories
          </button>

          <h2 className="text-2xl font-bold mb-6">{selectedCategory.title}</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {selectedCategory.items.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                onAdd={() => addToBucket(item)}
              />
            ))}
          </div>
        </>
      )}

      {/* DATE RANGE (ONLY IF BUCKET HAS ITEMS) */}
      <RentalBucket
  bucket={bucket}
  updateQuantity={updateQuantity}
  removeItem={removeItem}
  startDate={startDate}
  endDate={endDate}
  setStartDate={setStartDate}
  setEndDate={setEndDate}
/>
<WhatsAppButton />
<GetQuoteBtn />
      
    </section>
  );
}
