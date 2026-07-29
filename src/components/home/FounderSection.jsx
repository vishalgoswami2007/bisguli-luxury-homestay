import {
  Sprout,
  Code2,
  Leaf,
  MapPin,
  Quote,
  Sparkles,
} from "lucide-react";

import Container from "../common/Container";

const founders = [
  {
    name: "Mohan Nath",
    role: "Co-Founder",
    tag: "Farmer • Orchard Care • Village Host",
    image: "/founders/mohan-nath.jpg",
    icon: Sprout,
    description:
      "Mohan Nath is a lifelong farmer and a proud resident of Bisguli Village. For decades, he has cared for orchards, protected traditional farming practices and welcomed guests with genuine Himalayan hospitality.",
    vision:
      "His dream is to help people experience the peace, simplicity, fresh food and natural beauty of authentic village life.",
  },
  {
    name: "Vishal Goswami",
    role: "Founder",
    tag: "Full Stack MERN Developer • AI Builder",
    image: "/founders/vishal-goswami.jpg",
    icon: Code2,
    description:
      "Vishal Goswami is the founder of Bisguli and a Full Stack MERN Developer. He is building a modern digital platform that connects travelers with meaningful Himalayan village experiences.",
    vision:
      "His vision is to use technology to support local families, preserve village culture and introduce Bisguli to travelers across India and beyond.",
  },
];

function FounderSection() {
  return (
    <section
      id="our-story"
      className="relative overflow-hidden bg-[#06110B] py-24 sm:py-28"
    >
      {/* Decorative background glow */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#14532D]/25 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#F0A14A]/10 blur-[130px]" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_25%,transparent_75%,rgba(255,255,255,0.02))]" />

      <Container className="relative z-10">
        {/* Section heading */}

        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F0A14A]/25 bg-[#F0A14A]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#F0A14A]">
            <Leaf size={16} />
            Our Story
          </div>

          <h2 className="mt-7 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            A Farmer&apos;s Dream.
            <span className="mt-2 block text-[#F0A14A]">
              A Developer&apos;s Vision.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
            Bisguli is built by two generations sharing one purpose — preserving
            authentic village life while making it accessible through
            technology.
          </p>
        </div>

        {/* Founder cards */}

        <div className="mt-16 space-y-12 lg:mt-20 lg:space-y-16">
          {founders.map((founder, index) => {
            const Icon = founder.icon;

            return (
              <article
                key={founder.name}
                className="group relative overflow-hidden rounded-32px border border-white/10 bg-white/0.045 shadow-2xl shadow-black/30 backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to- from-[#14532D]/15 via-transparent to-[#F0A14A]/5 opacity-80" />

                <div
                  className={`relative grid items-stretch lg:grid-cols-[0.9fr_1.1fr] ${
                    index % 2 !== 0
                      ? "lg:grid-cols-[1.1fr_0.9fr]"
                      : ""
                  }`}
                >
                  {/* Founder image */}

                  <div
                    className={`relative min-h-420px overflow-hidden sm:min-h-520px ${
                      index % 2 !== 0 ? "lg:order-2" : ""
                    }`}
                  >
                    <img
                      src={founder.image}
                      alt={`${founder.name}, ${founder.role} of Bisguli`}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to- from-[#06110B] via-[#06110B]/15 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-sm text-white/80 backdrop-blur-md">
                        <MapPin size={15} className="text-[#F0A14A]" />
                        Bisguli, Uttarakhand
                      </div>
                    </div>
                  </div>

                  {/* Founder content */}

                  <div
                    className={`relative flex flex-col justify-center p-7 sm:p-10 lg:p-14 ${
                      index % 2 !== 0 ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#F0A14A]/25 bg-[#F0A14A]/10 text-[#F0A14A]">
                      <Icon size={27} />
                    </div>

                    <p className="mt-7 text-sm font-semibold uppercase tracking-[0.3em] text-[#F0A14A]">
                      {founder.role}
                    </p>

                    <h3 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
                      {founder.name}
                    </h3>

                    <p className="mt-4 text-sm font-medium text-white/50 sm:text-base">
                      {founder.tag}
                    </p>

                    <div className="mt-7 h-px w-24 bg-gradient-to- from-[#F0A14A] to-transparent" />

                    <p className="mt-7 text-base leading-8 text-white/68">
                      {founder.description}
                    </p>

                    <div className="mt-6 rounded-2xl border border-white/8 bg-black/15 p-5">
                      <div className="flex items-start gap-3">
                        <Sparkles
                          size={20}
                          className="mt-1 shrink-0 text-[#F0A14A]"
                        />

                        <p className="leading-7 text-white/75">
                          {founder.vision}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Quote */}

        <div className="relative mt-16 overflow-hidden rounded-32px border border-[#F0A14A]/20 bg-gradient-to- from-[#123C25] via-[#0C2618] to-[#07140D] px-6 py-12 text-center shadow-2xl shadow-black/30 sm:px-12 sm:py-16">
          <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-[#F0A14A]/10 blur-3xl" />

          <Quote
            size={48}
            className="relative mx-auto text-[#F0A14A]/70"
            strokeWidth={1.5}
          />

          <blockquote className="relative mx-auto mt-6 max-w-4xl text-2xl font-semibold leading-relaxed text-white sm:text-3xl lg:text-4xl">
            One generation preserved the village.
            <span className="block text-[#F0A14A]">
              The next generation is sharing it with the world.
            </span>
          </blockquote>

          <p className="relative mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-white/45">
            The people behind Bisguli
          </p>
        </div>
      </Container>
    </section>
  );
}

export default FounderSection;