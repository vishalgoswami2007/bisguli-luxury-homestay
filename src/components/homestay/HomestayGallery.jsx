import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Images,
  Play,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function HomestayGallery() {
  const navigate = useNavigate();

  // Total 12 photos:
  // image.jpg + image1.jpg se image11.jpg
  const photos = [
    "/media/image.jpg",
    ...Array.from(
      { length: 11 },
      (_, index) => `/media/image${index + 1}.jpg`
    ),
  ];

  // Total 14 videos:
  // video1.mp4 se video14.mp4
  const videos = Array.from(
    { length: 14 },
    (_, index) => `/media/video${index + 1}.mp4`
  );

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const activePhoto = photos[activePhotoIndex];

  function openPhoto(index) {
    setActivePhotoIndex(index);
    setIsPreviewOpen(true);
  }

  function closePreview() {
    setIsPreviewOpen(false);
  }

  function showPreviousPhoto() {
    setActivePhotoIndex((currentIndex) =>
      currentIndex === 0 ? photos.length - 1 : currentIndex - 1
    );
  }

  function showNextPhoto() {
    setActivePhotoIndex((currentIndex) =>
      currentIndex === photos.length - 1 ? 0 : currentIndex + 1
    );
  }

  useEffect(() => {
    function handleKeyboard(event) {
      if (!isPreviewOpen) return;

      if (event.key === "Escape") {
        closePreview();
      }

      if (event.key === "ArrowLeft") {
        showPreviousPhoto();
      }

      if (event.key === "ArrowRight") {
        showNextPhoto();
      }
    }

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [isPreviewOpen]);

  useEffect(() => {
    document.body.style.overflow = isPreviewOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isPreviewOpen]);

  return (
    <>
      <main className="min-h-screen bg-[#06140D] text-white">
        {/* Page heading */}

        <section className="border-b border-white/10 px-5 pb-14 pt-28 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-1450px">
            <button
              type="button"
              onClick={() => navigate("/homestay")}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80 transition duration-300 hover:border-[#F0A14A]/40 hover:bg-[#F0A14A] hover:text-[#06140D]"
            >
              <ArrowLeft size={18} />
              Back to Homestay
            </button>

            <div className="mt-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#F0A14A]/30 bg-[#F0A14A]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#F0A14A]">
                <Images size={15} />
                Full Gallery
              </div>

              <h1 className="mt-6 text-4xl font-semibold leading-tight text-[#F8F0DF] sm:text-5xl lg:text-6xl">
                Explore Bisguli Homestay
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
                View all photos and videos of our rooms, surroundings and
                peaceful mountain experience.
              </p>
            </div>
          </div>
        </section>

        {/* Photos section */}

        <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-1450px">
            <div className="mb-9 flex items-end justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F0A14A]">
                  Homestay Photos
                </p>

                <h2 className="mt-3 text-3xl font-semibold text-[#F8F0DF] sm:text-4xl">
                  Photos
                </h2>
              </div>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/55">
                {photos.length} Photos
              </span>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {photos.map((photo, index) => (
                <button
                  key={photo}
                  type="button"
                  onClick={() => openPhoto(index)}
                  className={`group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/5 text-left shadow-[0_20px_60px_rgba(0,0,0,0.25)] ${
                    index === 0
                      ? "sm:col-span-2 sm:row-span-2"
                      : ""
                  }`}
                >
                  <div
                    className={
                      index === 0
                        ? "h-360px sm:h-full sm:min-h-540px"
                        : "h-300px"
                    }
                  >
                    <img
                      src={photo}
                      alt={`Bisguli Homestay ${index + 1}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to- from-black/70 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-5">
                    <p className="font-medium text-white">
                      Photo {index + 1}
                    </p>

                    <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs text-white backdrop-blur-md">
                      View
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Videos section */}

        <section className="border-t border-white/10 bg-[#081910] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-1450px">
            <div className="mb-9 flex items-end justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F0A14A]">
                  Homestay Videos
                </p>

                <h2 className="mt-3 text-3xl font-semibold text-[#F8F0DF] sm:text-4xl">
                  Videos
                </h2>
              </div>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/55">
                {videos.length} Videos
              </span>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {videos.map((video, index) => (
                <article
                  key={video}
                  className="overflow-hidden rounded-[26px] border border-white/10 bg-[#102218] shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
                >
                  <div className="relative aspect-video bg-black">
                    <video
                      src={video}
                      controls
                      preload="metadata"
                      playsInline
                      className="h-full w-full object-cover"
                    />

                    <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-2 text-xs font-medium text-white backdrop-blur-md">
                      <Play size={13} fill="currentColor" />
                      Video {index + 1}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-[#F8F0DF]">
                      Bisguli Homestay Video {index + 1}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Full photo preview */}

      {isPreviewOpen && (
        <div
          className="fixed inset-0 z-9999 flex flex-col bg-black/95 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
        >
          {/* Preview top bar */}

          <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-4 py-4 sm:px-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F0A14A]">
                Bisguli Homestay
              </p>

              <p className="mt-1 text-sm text-white/70">
                Photo {activePhotoIndex + 1} of {photos.length}
              </p>
            </div>

            <button
              type="button"
              onClick={closePreview}
              aria-label="Close preview"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
            >
              <X size={22} />
            </button>
          </div>

          {/* Full active photo */}

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-14 py-5 sm:px-24">
            <button
              type="button"
              onClick={showPreviousPhoto}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition hover:bg-[#F0A14A] hover:text-[#06140D] sm:left-6 sm:h-14 sm:w-14"
            >
              <ChevronLeft size={28} />
            </button>

            <img
              src={activePhoto}
              alt={`Bisguli Homestay ${activePhotoIndex + 1}`}
              className="max-h-full max-w-full rounded-2xl object-contain shadow-[0_30px_100px_rgba(0,0,0,0.6)]"
            />

            <button
              type="button"
              onClick={showNextPhoto}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition hover:bg-[#F0A14A] hover:text-[#06140D] sm:right-6 sm:h-14 sm:w-14"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Photo lineup */}

          <div className="shrink-0 border-t border-white/10 bg-black/50 px-4 py-4 backdrop-blur-xl">
            <p className="mb-3 text-center text-xs uppercase tracking-[0.18em] text-white/40">
              Select a photo
            </p>

            <div className="mx-auto flex max-w-6xl gap-3 overflow-x-auto pb-2">
              {photos.map((photo, index) => (
                <button
                  key={photo}
                  type="button"
                  onClick={() => setActivePhotoIndex(index)}
                  className={`h-16 w-24 shrink-0 overflow-hidden rounded-xl border-2 transition sm:h-20 sm:w-28 ${
                    activePhotoIndex === index
                      ? "border-[#F0A14A] opacity-100"
                      : "border-transparent opacity-45 hover:opacity-100"
                  }`}
                >
                  <img
                    src={photo}
                    alt={`Thumbnail ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HomestayGallery;