// export default function CategoryCard({ category, onSelect }) {
//   return (
//     <button
//       onClick={onSelect}
//       className="
//         group w-full text-left
//         rounded-2xl overflow-hidden
//         border border-[var(--border-color)]
//         bg-black/40 hover:bg-black/60
//         transition-all duration-300
//         hover:shadow-xl hover:-translate-y-1
//         focus:outline-none
//       "
//     >
//       {/* Image */}
//       <div className="relative w-full h-56 overflow-hidden">
//         <img
//           src={category.image}
//           alt={category.title}
//           className="
//             w-full h-full object-cover
//             transition-transform duration-500
//             group-hover:scale-105
//           "
//         />

//         {/* subtle overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//       </div>

//       {/* Content */}
//       <div className="p-5">
//         <h3 className="text-lg font-bold text-[var(--text-primary)]">
//           {category.title}
//         </h3>

//         <p className="mt-1 text-sm text-[var(--text-secondary)] leading-snug">
//           {category.subtitle}
//         </p>
//       </div>
//     </button>
//   );
// }

export default function CategoryCard({ category, onSelect }) {
  return (
    <button
      onClick={onSelect}
      className="rounded-2xl overflow-hidden border border-[var(--border-color)] bg-black/40 hover:bg-black/60 transition text-left"
    >
      <img
        src={category.image}
        loading="lazy"
        alt={category.title}
        className="w-full h-44 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-bold">{category.title}</h3>
        <p className="text-sm text-[var(--text-secondary)] mt-1">
          {category.subtitle}
        </p>
      </div>
    </button>
  );
}
