"use client";
import { useEffect, useState } from "react";
type Photo = { url: string; pathname: string };
export default function Gallery({ photos }: { photos: Photo[] }) {
  const [active, setActive] = useState<Photo | null>(null);
  useEffect(() => {
    if (!active) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setActive(null); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);
  return <>
    <div className="gallery">
      {photos.map((photo, index) => <button className="galleryItem" key={photo.pathname} type="button" onClick={() => setActive(photo)} aria-label={`Powiększ zdjęcie ${index + 1}`}>
        <img src={photo.url} alt={`Chata Polska Rawicz, zdjęcie ${index + 1}`} loading="lazy" />
        <span className="galleryZoom" aria-hidden="true">↗</span>
      </button>)}
    </div>
    {active && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Podgląd zdjęcia" onClick={() => setActive(null)}>
      <button className="lightboxClose" type="button" onClick={() => setActive(null)} aria-label="Zamknij podgląd">×</button>
      <figure onClick={(event) => event.stopPropagation()}>
        <img src={active.url} alt="Chata Polska Rawicz, powiększone zdjęcie" />
        <figcaption>Naciśnij Escape lub kliknij poza zdjęciem, aby zamknąć</figcaption>
      </figure>
    </div>}
  </>;
}