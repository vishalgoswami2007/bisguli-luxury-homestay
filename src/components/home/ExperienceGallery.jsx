import { ArrowUpRight, Camera } from "lucide-react";
import Container from "../common/Container";

function ExperienceGallery() {
  const experiences = [
    {
      title: "Village Homestay",
      category: "Stay",
      description:
        "Wake up to fresh mountain air, peaceful mornings and authentic Himalayan hospitality.",
      image: "/explore/homestay.jpg",
      size: "lg:col-span-2 lg:row-span-2",
    },
    {
      title: "Seasonal Orchards",
      category: "Nature",
      description:
        "Walk through orchards filled with apples, peaches, apricots and plums.",
      image: "/explore/orchard.webp",
      size: "",
    },
    {
      title: "Life in Bisguli",
      category: "Village",
      description:
        "Experience slow village life surrounded by forests and mountain landscapes.",
      image: "/explore/village.jpg",
      size: "",
    },
    {
      title: "Local Kumaoni Food",
      category: "Food",
      description:
        "Fresh homemade meals prepared with traditional Kumaoni recipes.",
      image: "/explore/food.jpg",
      size: "lg:col-span-2",
    },
  ];

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#06140D] py-28"
    >
      {/* Background Glow */}

      <div className="absolute -left-52 top-10 h-28rem w-28rem rounded-full bg-emerald-900/20 blur-[130px]" />

      <div className="absolute -right-40 bottom-0 h-26rem w-26rem rounded-full bg-[#F0A14A]/10 blur-[120px]" />

      <Container className="relative z-10">
        {/* Heading */}

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F0A14A]/20 bg-[#F0A14A]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#F0A14A]">
              <Camera size={14} />
              Village Experiences
            </div>

            <h2 className="heading-font mt-6 text-4xl font-semibold leading-tight text-[#F8F0DF] sm:text-5xl lg:text-6xl">
              Every corner tells a story.
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-white/60 lg:ml-auto">
            Discover peaceful mornings, village homes, orchards,
            traditional food and unforgettable Himalayan moments.
          </p>
        </div>

        {/* Gallery */}

        <div className="mt-20 grid auto-rows-280px gap-6 md:grid-cols-2 lg:grid-cols-4">
          {experiences.map((experience) => (
            <article
              key={experience.title}
              className={`group relative overflow-hidden rounded-[34px] border border-white/10 bg-[#102218] ${experience.size}`}
            >
              <img
                src={experience.image}
                alt={experience.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to from-[#04100A]/95 via-[#04100A]/25 to-transparent" />

              {/* Category */}

              <div className="absolute left-6 top-6">
                <span className="rounded-full border border-white/15 bg-black/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#F8F0DF] backdrop-blur-xl">
                  {experience.category}
                </span>
              </div>

              {/* Arrow */}

              <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition duration-300 backdrop-blur-xl group-hover:rotate-45 group-hover:border-[#F0A14A] group-hover:bg-[#F0A14A] group-hover:text-[#07140D]">
                <ArrowUpRight size={18} />
              </div>

              {/* Text */}

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="heading-font text-3xl font-semibold text-[#F8F0DF]">
                  {experience.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/60">
                  {experience.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Strip */}

        <div className="mt-14 rounded-[28px] border border-white/10 bg-white/0.04 px-8 py-7 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#F0A14A]">
            Experience • Nature • Culture
          </p>

          <h3 className="heading-font mt-4 text-3xl text-[#F8F0DF]">
            Every visit feels different with every season.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/55">
            Whether it's blooming orchards, misty mornings, golden sunsets or
            warm village evenings, Bisguli offers a different memory every time
            you visit.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default ExperienceGallery;