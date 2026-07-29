import {
  Sprout,
  Apple,
  Home,
  Laptop,
  Rocket,
  Quote,
} from "lucide-react";

import Container from "../common/Container";

const journeySteps = [
  {
    year: "1985",
    title: "The Roots of a Dream",
    icon: Sprout,
    description:
      "Mohan Nath devoted his life to farming, caring for the land and preserving the traditions that define Bisguli.",
  },
  {
    year: "1998",
    title: "Orchards Became Our Identity",
    icon: Apple,
    description:
      "Seasonal fruits, local farming and the natural rhythm of village life became an important part of the Bisguli experience.",
  },
  {
    year: "2015",
    title: "Hospitality Became a Tradition",
    icon: Home,
    description:
      "Visitors experienced peaceful surroundings, fresh local meals and the warmth of genuine Himalayan village hospitality.",
  },
  {
    year: "2026",
    title: "A Digital Journey Began",
    icon: Laptop,
    description:
      "Vishal Goswami started building Bisguli's digital presence using modern MERN technologies to connect the village with travelers.",
  },
  {
    year: "Future",
    title: "A Destination with Purpose",
    icon: Rocket,
    description:
      "Our goal is to make Bisguli a loved rural tourism destination while supporting local families, culture and nature.",
  },
];

function OurJourney() {
  return (
    <section className="relative overflow-hidden bg-[#08150E] py-24 sm:py-28">
      {/* Background decoration */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#14532D]/20 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#F0A14A]/8 blur-[120px]" />

      <Container className="relative z-10">
        {/* Header */}

        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#F0A14A]">
            Our Journey
          </p>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            From a Farmer&apos;s Dream
            <span className="block text-[#F0A14A]">
              to a Digital Destination.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
            Every milestone reflects the same purpose — preserving village life,
            supporting local people and sharing Bisguli with the world.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative mx-auto mt-20 max-w-6xl">
          {/* Desktop center line */}

          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to from-transparent via-[#F0A14A]/60 to-transparent lg:block" />

          {/* Mobile line */}

          <div className="absolute bottom-0 left-27px top-0 w-px bg-gradient-to- from-[#F0A14A]/30 via-[#F0A14A]/60 to-transparent lg:hidden" />

          <div className="space-y-10 lg:space-y-16">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              const isRight = index % 2 !== 0;

              return (
                <div
                  key={`${step.year}-${step.title}`}
                  className="relative lg:grid lg:grid-cols-2 lg:gap-20"
                >
                  {/* Timeline marker */}

                  <div className="absolute left-0 top-7 z-20 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#F0A14A]/40 bg-[#0C2115] text-[#F0A14A] shadow-lg shadow-black/30 lg:left-1/2 lg:-translate-x-1/2">
                    <Icon size={25} />
                  </div>

                  {/* Card */}

                  <div
                    className={`ml-20 lg:ml-0 ${
                      isRight ? "lg:col-start-2" : "lg:col-start-1"
                    }`}
                  >
                    <article className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/0.045 p-7 shadow-xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#F0A14A]/35 sm:p-9">
                      <div className="absolute inset-0 bg-gradient-to from-[#14532D]/12 via-transparent to-[#F0A14A]/5 opacity-0 transition duration-300 group-hover:opacity-100" />

                      <div className="relative">
                        <div className="inline-flex rounded-full border border-[#F0A14A]/20 bg-[#F0A14A]/10 px-4 py-2 text-sm font-bold text-[#F0A14A]">
                          {step.year}
                        </div>

                        <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                          {step.title}
                        </h3>

                        <p className="mt-5 leading-8 text-white/65">
                          {step.description}
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final quote card */}

        <div className="relative mt-20 overflow-hidden rounded-[36px] border border-white/10 bg-[#06110B] px-6 py-14 text-center shadow-2xl shadow-black/30 sm:px-12 sm:py-16">
          <div className="absolute inset-0 bg-gradient-to from-[#14532D]/25 via-transparent to-[#F0A14A]/8" />

          <Quote
            size={44}
            className="relative mx-auto text-[#F0A14A]"
            strokeWidth={1.5}
          />

          <h3 className="relative mx-auto mt-6 max-w-4xl text-2xl font-semibold leading-relaxed text-white sm:text-3xl lg:text-4xl">
            We are not building just a homestay.
            <span className="block text-[#F0A14A]">
              We are preserving a way of life for future generations.
            </span>
          </h3>

          <div className="relative mx-auto mt-8 h-px w-24 bg-[#F0A14A]/60" />

          <p className="relative mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-white/45">
            The Bisguli Vision
          </p>
        </div>
      </Container>
    </section>
  );
}

export default OurJourney;