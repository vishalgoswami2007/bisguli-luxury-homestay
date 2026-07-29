import {
  ArrowRight,
  Clock3,
  MapPin,
  Mountain,
  Navigation,
  Sparkles,
} from "lucide-react";

const tours = [
  {
    id: 1,
    title: "Kainchi Dham",
    image: "/tour/baba.jpg",
    distance: "Approx. 65 km",
    duration: "Full-day trip",
    description:
      "A peaceful spiritual journey to the famous Neem Karoli Baba Ashram.",
  },
  {
    id: 2,
    title: "Nainital",
    image: "/tour/mandir4.jpg",
    distance: "Approx. 75 km",
    duration: "Full-day trip",
    description:
      "Explore Naini Lake, Mall Road, scenic viewpoints and the charm of Nainital.",
  },
  {
    id: 3,
    title: "Mukteshwar",
    image: "/tour/mandir5.jpg",
    distance: "Approx. 55 km",
    duration: "Full-day trip",
    description:
      "Visit peaceful forests, mountain viewpoints and the historic Mukteshwar Temple.",
  },
  {
    id: 4,
    title: "Bhimtal",
    image: "/tour/mandir6.jpg",
    distance: "Approx. 70 km",
    duration: "Full-day trip",
    description:
      "Enjoy a calm lakeside journey with peaceful views and relaxed local exploration.",
  },
  {
    id: 5,
    title: "Sattal",
    image: "/tour/mandir3.jpg",
    distance: "Approx. 72 km",
    duration: "Full-day trip",
    description:
      "Discover a beautiful group of lakes surrounded by dense forest and birdlife.",
  },
  {
    id: 6,
    title: "Almora",
    image: "/tour/almora.jpg",
    distance: "Approx. 80 km",
    duration: "Full-day trip",
    description:
      "Experience Kumaoni heritage, local markets, traditional food and mountain culture.",
  },
];

function NearbyTours() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#06140D] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="pointer-events-none absolute -left-40 top-20 h-30rem w-30rem rounded-full bg-emerald-900/20 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-30rem w-30rem rounded-full bg-[#F0A14A]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-1450px">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F0A14A]/25 bg-[#F0A14A]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F0A14A]">
              <Navigation size={15} />
              Nearby Tours
            </div>

            <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-[#F8F0DF] sm:text-5xl lg:text-6xl">
              Explore the most beautiful places around Bisguli.
            </h2>
          </div>

          <div className="lg:pl-10">
            <p className="max-w-xl text-base leading-8 text-white/60 sm:text-lg">
              We are preparing guided day trips to nearby temples, lakes,
              mountain towns and cultural destinations.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#F0A14A]/20 bg-[#F0A14A]/10 px-4 py-2 text-sm font-semibold text-[#F0A14A]">
              <Sparkles size={15} />
              Tours launching soon
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {tours.map((tour) => (
            <article
              key={tour.id}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#0B1C12] shadow-[0_25px_80px_rgba(0,0,0,0.25)] transition duration-500 hover:-translate-y-2 hover:border-[#F0A14A]/35"
            >
              <div className="relative h-72 overflow-hidden bg-[#102218]">
                <img
                  src={tour.image}
                  alt={tour.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to- from-[#06140D] via-[#06140D]/20 to-transparent" />

                <div className="absolute left-5 top-5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#F0A14A]/35 bg-[#06140D]/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#F0A14A] backdrop-blur-md">
                    <Sparkles size={13} />
                    Coming Soon
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-3xl font-semibold text-[#F8F0DF]">
                    {tour.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/60">
                    <MapPin size={14} className="text-[#F0A14A]" />
                    {tour.distance}
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/60">
                    <Clock3 size={14} className="text-[#F0A14A]" />
                    {tour.duration}
                  </span>
                </div>

                <p className="mt-5 min-h-78px text-sm leading-7 text-white/55">
                  {tour.description}
                </p>

                <div className="mt-6 border-t border-white/10 pt-6">
                  <button
                    type="button"
                    disabled
                    className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white/35"
                  >
                    Tour Coming Soon
                    <ArrowRight size={17} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-[30px] border border-[#F0A14A]/20 bg-gradient-to- from-[#10271A] to-[#091A11] p-7 sm:p-9">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#F0A14A]/25 bg-[#F0A14A]/10 text-[#F0A14A]">
                <Mountain size={24} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F0A14A]">
                  Future Experiences
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-[#F8F0DF] sm:text-3xl">
                  Complete your stay with local sightseeing.
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/50">
                  Transport, guide support and customized day-tour packages will
                  be introduced soon.
                </p>
              </div>
            </div>

            <div className="shrink-0 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/55">
              Launching Soon
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NearbyTours;