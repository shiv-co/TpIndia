import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
// import ImageLightbox from "../components/gallery/ImageLightbox";
import LightboxViewer from "../components/gallery/LightboxViewer";

// Images
import galleryHero from "../assets/gallery/hero_image_gallery_page.webp";
import MasonryGallery from "../components/gallery/MasonryGallery";
import { galleryImages } from "../data/galleryData";

const MotionDiv = motion.div;

const filters = [
  "All",
  "Corporate",
  "Documentary",
  "Events",
  "Political",
  "Products",
  "Drone",
  "Behind The Scenes",
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const filteredImages = galleryImages.filter((img) => {
    const categoryMatch =
      activeFilter === "All" || img.category === activeFilter;

    const searchMatch =
      img.title.toLowerCase().includes(search.toLowerCase()) ||
      img.client.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  const openLightbox = (item) => {
    const index = filteredImages.findIndex((img) => img.id === item.id);

    setSelectedIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };
  return (
    <main className="bg-[var(--bg-color)] text-[var(--text-primary)]">
      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden flex items-center justify-center">
        <img
          src={galleryHero}
          alt="Gallery Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/65 to-black/90" />

        {/* Accent Glow */}

        <div className="absolute inset-x-1/4 top-0 h-40 bg-[var(--accent-color)]/25 blur-3xl" />

        <div className="absolute -left-16 top-16 w-72 h-72 rounded-full bg-[var(--accent-color)]/20 blur-[120px]" />

        <div className="absolute -right-20 bottom-10 w-72 h-72 rounded-full bg-[var(--accent-color)]/20 blur-[140px]" />

        {/* Hero Content */}

        <MotionDiv
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-7xl mx-auto text-center px-6"
        >
          <p className="tracking-[0.25em] uppercase text-xs md:text-sm text-white/70 mb-4">
            TP India Network • Gallery
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
            Frames That Tell{" "}
            <span className="text-[var(--accent-color)]">Stories</span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-white/80 text-sm md:text-lg leading-relaxed">
            A collection of cinematic moments, premium events, documentaries,
            brand campaigns and visual storytelling crafted by TP India Network.
          </p>
        </MotionDiv>
      </section>

      {/* ================================================= */}
      {/* SEARCH + FILTER */}
      {/* ================================================= */}

      <section className="max-w-8xl mx-auto px-6 py-14">
        {/* Heading */}

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold">Explore Our Work</h2>

          <p className="text-[var(--text-secondary)] mt-3">
            Browse projects by category or search for a client, event or
            production.
          </p>
        </div>

        {/* Search */}

        <div className="max-w-2xl mx-auto relative">
          <Search
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search photographs..."
            className="
              w-full
              rounded-full
              border
              border-[var(--border-color)]
              bg-[var(--card-bg)]
              py-4
              pl-14
              pr-5
              outline-none
              text-[var(--text-primary)]
              placeholder:text-[var(--text-secondary)]
              focus:border-[var(--accent-color)]
            "
          />
        </div>

        {/* Filter Chips */}

        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`

                px-6
                py-3
                rounded-full
                transition-all
                duration-300
                border

                ${
                  activeFilter === filter
                    ? "bg-[var(--accent-color)] text-white border-[var(--accent-color)]"
                    : "border-[var(--border-color)] bg-[var(--card-bg)] hover:border-[var(--accent-color)]"
                }

              `}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* ================================================= */}
      {/* MASONRY GALLERY */}
      <section className="max-w-8xl mx-auto px-6 pb-24">
        <MasonryGallery
          images={filteredImages}
          activeFilter={activeFilter}
          search={search}
          onImageClick={openLightbox}
        />
        <LightboxViewer
          images={filteredImages}
          currentIndex={selectedIndex}
          setCurrentIndex={setSelectedIndex}
          isOpen={isLightboxOpen}
          onClose={closeLightbox}
        />
      </section>
      {/* ================================================= */}

     
    </main>
  );
}



