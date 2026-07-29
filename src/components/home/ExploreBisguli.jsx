import {
  Apple,
  ArrowUpRight,
  BedDouble,
  Mountain,
  UtensilsCrossed,
} from "lucide-react";

import Container from "../common/Container";

function ExploreBisguli() {
  const experiences = [
    {
      icon: BedDouble,
      number: "01",
      title: "Village Homestay",
      description:
        "Stay in a peaceful Himalayan village home surrounded by forests, farms, and open mountain views.",
    },
    {
      icon: Apple,
      number: "02",
      title: "Seasonal Orchards",
      description:
        "Experience peach, plum, apricot, and apple seasons directly from local orchards.",
    },
    {
      icon: Mountain,
      number: "03",
      title: "Nature Trails",
      description:
        "Walk through quiet forest paths, village trails, and scenic viewpoints away from crowds.",
    },
    {
      icon: UtensilsCrossed,
      number: "04",
      title: "Local Kumaoni Food",
      description:
        "Enjoy simple homemade Kumaoni meals prepared with fresh ingredients and traditional flavours.",
    },
  ];

  return (
    <section
      id="explore"
      className="relative overflow-hidden bg-[#06140D] py-24 sm:py-28 lg:py-32"
    >
      {/* Background decoration */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-emerald-800/15 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#F0A14A]/10 blur-3xl" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to- from-transparent via-white/10 to-transparent" />

      <Container className="relative z-10">
        {/* Section heading */}

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F0A14A]/20 bg-[#F0A14A]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F0A14A]">
              Explore Bisguli
            </div>

            <h2 className="heading-font mt-6 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-[#F8F0DF] sm:text-5xl lg:text-6xl">
              A slower, quieter way to experience the hills.
            </h2>
          </div>

          <div className="lg:pl-10">
            <p className="max-w-xl text-base leading-8 text-white/60 sm:text-lg">
              Bisguli is more than a place to stay. It is a seasonal
              experience shaped by village homes, orchards, local food,
              forest trails, and genuine Himalayan hospitality.
            </p>
          </div>
        </div>

        {/* Experience cards */}

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;
            const isFeatured = index === 1;

            return (
              <article
                key={experience.title}
                className={`group relative min-h-360px overflow-hidden rounded-[30px] border p-7 transition duration-500 hover:-translate-y-2 ${
                  isFeatured
                    ? "border-[#F0A14A]/25 bg-[#123323] shadow-[0_28px_70px_rgba(0,0,0,0.28)]"
                    : "border-white/10 bg-white/0.045 shadow-[0_24px_60px_rgba(0,0,0,0.16)] hover:border-white/20 hover:bg-white/0.065"
                }`}
              >
                {/* Card glow */}

                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl transition duration-500 ${
                    isFeatured
                      ? "bg-[#F0A14A]/15"
                      : "bg-emerald-600/10 group-hover:bg-emerald-600/15"
                  }`}
                />

                {/* Icon and number */}

                <div className="relative flex items-start justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl border transition duration-300 group-hover:-translate-y-1 ${
                      isFeatured
                        ? "border-[#F0A14A]/30 bg-[#F0A14A] text-[#07140D]"
                        : "border-white/10 bg-white/5 text-[#F0A14A]"
                    }`}
                  >
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-semibold tracking-widest text-white/25">
                    {experience.number}
                  </span>
                </div>

                {/* Card content */}

                <div className="relative mt-14">
                  <h3 className="heading-font text-2xl font-semibold leading-tight text-[#F8F0DF] sm:text-3xl">
                    {experience.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/55">
                    {experience.description}
                  </p>
                </div>

                {/* Arrow button */}

                <div
                  className={`absolute bottom-7 right-7 flex h-11 w-11 items-center justify-center rounded-full border transition duration-300 group-hover:rotate-45 ${
                    isFeatured
                      ? "border-[#F0A14A]/30 bg-[#F0A14A]/10 text-[#F0A14A]"
                      : "border-white/10 bg-white/5 text-white/65 group-hover:border-[#F0A14A]/30 group-hover:text-[#F0A14A]"
                  }`}
                >
                  <ArrowUpRight size={18} />
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom message */}

        <div className="mt-12 flex flex-col gap-4 rounded-[26px] border border-white/10 bg-white/[0.035] px-7 py-6 sm:flex-row sm:items-center sm:justify-between lg:mt-16 lg:px-9">
          <div>
            <p className="text-sm font-semibold text-[#F0A14A]">
              Every season feels different
            </p>

            <p className="mt-2 text-sm leading-6 text-white/50">
              Come for the mountain views, stay for the rhythm of village life.
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              document.getElementById("planner")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-[#F8F0DF] transition duration-300 hover:border-[#F0A14A]/40 hover:bg-[#F0A14A] hover:text-[#07140D]"
          >
            Plan Your Stay
            <ArrowUpRight size={17} />
          </button>
        </div>
      </Container>
    </section>
  );
}

export default ExploreBisguli;