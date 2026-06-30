import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ArrowUpRight } from "lucide-react";

export default function MasonryCard({ item, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(item)}
      className="
        group
        relative
        block
        w-full
        mb-6
        break-inside-avoid
        overflow-hidden
        rounded-[28px]
        text-left
        outline-none
        transition-all
        duration-500
        ease-[cubic-bezier(0.16,1,0.3,1)]
        shadow-[0_18px_55px_rgba(15,23,42,0.12)]
        dark:shadow-black/40
        focus-visible:ring-2
        focus-visible:ring-[var(--accent-color)]
        focus-visible:ring-offset-4
        focus-visible:ring-offset-[var(--bg-color)]
        md:hover:-translate-y-2
        md:hover:shadow-[0_28px_80px_rgba(15,23,42,0.22)]
      "
    >
      {/* Image */}

      <div className="relative overflow-hidden rounded-[28px] bg-neutral-950">
        <LazyLoadImage
          src={item.image}
          alt={item.title}
          effect="blur"
          wrapperClassName="block w-full"
          className="
            block
            w-full
            h-auto
            object-cover
            transition-transform
            duration-700
            ease-[cubic-bezier(0.16,1,0.3,1)]
            md:group-hover:scale-[1.05]
          "
        />

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/85
            via-black/35
            to-transparent
            transition-all
            duration-500
            md:group-hover:from-black/92
          "
        />

        {/* Text */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            z-10
            p-5
            sm:p-6
            transition-transform
            duration-500
            md:group-hover:-translate-y-1
          "
        >
          {/* Category */}

          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-[var(--accent-color)]/40
              bg-black/35
              backdrop-blur-md
              px-3
              py-1.5
              text-[10px]
              font-bold
              uppercase
              tracking-[0.22em]
              text-white
              transition-all
              duration-500
              md:group-hover:border-[var(--accent-color)]
              md:group-hover:shadow-[0_0_24px_var(--accent-color)]
            "
          >
            {item.category}
          </span>

          {/* Title */}

          <h3
            className="
              mt-4
              text-xl
              md:text-2xl
              font-black
              leading-tight
              text-white
            "
          >
            {item.title}
          </h3>

          {/* Client */}

          <p
            className="
              mt-2
              text-sm
              leading-6
              text-white/75
            "
          >
            {item.client}
          </p>
        </div>

        {/* Arrow */}

        <div
          className="
            absolute
            bottom-5
            right-5
            z-20

            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-full

            border
            border-white/20

            bg-black/35
            backdrop-blur-xl

            text-white

            opacity-100
            md:opacity-0

            transition-all
            duration-500

            md:translate-y-2
            md:group-hover:translate-y-0
            md:group-hover:opacity-100
          "
        >
          <ArrowUpRight size={20} />
        </div>
      </div>
    </button>
  );
}