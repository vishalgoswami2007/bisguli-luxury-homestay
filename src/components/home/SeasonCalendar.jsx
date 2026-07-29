import {
  Apple,
  CalendarDays,
  CloudRain,
  Leaf,
} from "lucide-react";

import Container from "../common/Container";

function SeasonCalendar() {
  const seasons = [
    {
      month: "March - April",
      title: "Spring Bloom",
      description:
        "Fresh greenery, blooming trees and peaceful weather for village walks.",
      icon: Leaf,
      fruits: ["Flowers", "Fresh Greens"],
      bestFor: "Quiet Stay",
    },
    {
      month: "May - June",
      title: "Peach & Plum Season",
      description:
        "Colourful orchards, pleasant weather and fresh seasonal fruits.",
      icon: Apple,
      fruits: ["Peach", "Plum", "Apricot"],
      bestFor: "Fruit Experience",
    },
    {
      month: "July - August",
      title: "Monsoon Escape",
      description:
        "Mist-covered hills, deep green forests and peaceful rainy evenings.",
      icon: CloudRain,
      fruits: ["Local Produce", "Green Valleys"],
      bestFor: "Nature Lovers",
    },
    {
      month: "October - November",
      title: "Autumn Village Stay",
      description:
        "Clear skies, pleasant weather and relaxing mountain views.",
      icon: CalendarDays,
      fruits: ["Apple", "Walnut"],
      bestFor: "Family Stay",
    },
  ];

  return (
    <section
      id="seasons"
      className="relative overflow-hidden bg-[#071A12] py-24 text-white sm:py-28"
    >
      <div className="absolute left-120px top-20 h-96 w-96 rounded-full bg-[#2F6B45]/25 blur-[120px]" />

      <div className="absolute bottom-150px right-80px h-450px w-450px rounded-full bg-[#F0A14A]/10 blur-[120px]" />

      <Container className="relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#F0A14A]">
              Seasonal Calendar
            </p>

            <h2 className="heading-font mt-5 max-w-2xl text-4xl font-semibold leading-tight text-[#FFF9E9] sm:text-5xl lg:text-6xl">
              Every season tells a different Bisguli story.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-white/55 lg:ml-auto">
            Choose the right time for orchards, misty hills, mountain
            views or a peaceful family stay.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {seasons.map((season, index) => {
            const Icon = season.icon;
            const featured = index === 1;

            return (
              <article
                key={season.month}
                className={`
                  group rounded-[30px] border p-7 transition duration-300
                  hover:-translate-y-1 sm:p-8
                  ${
                    featured
                      ? "border-[#F0A14A]/50 bg-[#F0A14A] text-[#071A12]"
                      : "border-white/10 bg-white/5 text-white backdrop-blur-md hover:bg-white/8"
                  }
                `}
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p
                      className={`text-xs font-bold uppercase tracking-[0.2em] ${
                        featured ? "text-[#704314]" : "text-[#F0A14A]"
                      }`}
                    >
                      {season.month}
                    </p>

                    <h3
                      className={`heading-font mt-3 text-3xl font-semibold ${
                        featured ? "text-[#071A12]" : "text-[#FFF9E9]"
                      }`}
                    >
                      {season.title}
                    </h3>
                  </div>

                  <div
                    className={`
                      flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl
                      ${
                        featured
                          ? "bg-[#071A12] text-[#F0A14A]"
                          : "bg-white/10 text-[#F0A14A]"
                      }
                    `}
                  >
                    <Icon size={25} />
                  </div>
                </div>

                <p
                  className={`mt-5 text-sm leading-7 ${
                    featured ? "text-[#273429]" : "text-white/55"
                  }`}
                >
                  {season.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {season.fruits.map((fruit) => (
                    <span
                      key={fruit}
                      className={`
                        rounded-full border px-4 py-2 text-xs font-semibold
                        ${
                          featured
                            ? "border-[#071A12]/15 bg-[#071A12]/10 text-[#071A12]"
                            : "border-white/10 bg-white/5 text-white/75"
                        }
                      `}
                    >
                      {fruit}
                    </span>
                  ))}
                </div>

                <div
                  className={`mt-7 flex items-center justify-between border-t pt-5 ${
                    featured
                      ? "border-[#071A12]/15"
                      : "border-white/10"
                  }`}
                >
                  <span
                    className={`text-sm ${
                      featured ? "text-[#3C4A3E]" : "text-white/45"
                    }`}
                  >
                    Best for
                  </span>

                  <span
                    className={`text-sm font-semibold ${
                      featured ? "text-[#071A12]" : "text-[#F0A14A]"
                    }`}
                  >
                    {season.bestFor}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default SeasonCalendar;