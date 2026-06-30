import MasonryCard from "./MasonryCard";

export default function MasonryGallery({ images, onImageClick }) {
  return (
    <section className="w-full">
      <div
        className="
          columns-1
          sm:columns-2
          lg:columns-3
          xl:columns-4
          gap-6
        "
      >
        {images.map((item) => (
          <MasonryCard
            key={item.id}
            item={item}
            onClick={onImageClick}
          />
        ))}
      </div>
    </section>
  );
}