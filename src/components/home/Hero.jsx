import {
  ArrowRight,
  Leaf,
  MapPin,
  Mountain,
  Sparkles,
  CalendarDays,
  Package,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Container from "../common/Container";
import LiveWeatherCard from "./LiveWeatherCard";

function Hero() {
  const navigate = useNavigate();

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#03150D] pt-5"
    >
      {/* Background glows */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-emerald-900/30 blur-3xl sm:h-28rem sm:w-28rem" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-400/10 blur-3xl sm:h-28rem sm:w-28rem" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to from-white/0.02 via-transparent to-black/20" />

      <Container className="relative z-10">
        <div className="grid min-h-[calc(100vh-112px)] items-start gap-16 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24 lg:pt-12">

          {/* Left Content */}

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/65 backdrop-blur-xl">
              <Leaf size={15} className="text-[#F0A14A]" />

              ✨ Luxury Himalayan Village Experience
            </div>

            <h1 className="mt-10 max-w-3xl text-5xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#F8F0DF] sm:text-6xl lg:text-[4.8rem] xl:text-[5.6rem]">
              Escape to a village

              <span className="mt-3 block font-serif font-medium italic leading-[1.05] text-[#F0A14A]">
                shaped by seasons.
              </span>
            </h1>

            <p className="mt-9 max-w-xl text-base leading-8 text-white/65 sm:text-lg sm:leading-9">
              Discover peaceful mountain life, seasonal orchards, traditional
              food, and genuine village hospitality in Bisguli.
            </p>


            {/* CTA Buttons */}

        <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:flex-wrap">

          {/* Primary CTA */}

          <button
            type="button"
            onClick={() => navigate("/packages")}
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#F0A14A] px-8 py-4 font-semibold text-[#07140D] shadow-[0_18px_45px_rgba(240,161,74,.30)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#F6B765]"
          >
            <Package
              size={19}
              className="transition duration-300 group-hover:rotate-6"
            />

            View Packages

            <ArrowRight
              size={18}
              className="transition duration-300 group-hover:translate-x-1"
            />
          </button>

          {/* Secondary */}

          <button
            type="button"
            onClick={() => navigate("/homestay")}
            className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white/85 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#F0A14A]/40 hover:bg-white/10 hover:text-[#F0A14A]"
          >
            <Mountain
              size={19}
              className="transition duration-300 group-hover:-translate-y-1"
            />

            Explore Homestay
          </button>

          {/* Outline CTA */}

          <button
            type="button"
            onClick={() => scrollToSection("planner")}
            className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#F0A14A]/30 px-8 py-4 font-semibold text-[#F0A14A] transition duration-300 hover:-translate-y-1 hover:bg-[#F0A14A] hover:text-[#07140D]"
          >
            <CalendarDays size={18} />

            Plan Your Stay
          </button>

        </div>

            {/* Highlights */}

            <div className="mt-14 grid max-w-2xl gap-8 border-t border-white/10 pt-9 sm:grid-cols-3">
              <div className="group">
                <div className="flex items-center gap-2 text-[#F0A14A]">
                  <Mountain
                    size={18}
                    className="transition duration-300 group-hover:-translate-y-1"
                  />

                  <span className="text-sm font-semibold">
                    Mountain Escape
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-white/45">
                  Peaceful Kumaon village surroundings.
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-2 text-[#F0A14A]">
                  <Sparkles
                    size={18}
                    className="transition duration-300 group-hover:rotate-12"
                  />

                  <span className="text-sm font-semibold">
                    Seasonal Life
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-white/45">
                  Orchards, local food, and village experiences.
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-2 text-[#F0A14A]">
                  <MapPin
                    size={18}
                    className="transition duration-300 group-hover:-translate-y-1"
                  />

                  <span className="text-sm font-semibold">
                    Local Hospitality
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-white/45">
                  Hosted by a local Bisguli family.
                </p>
              </div>
            </div>
          </div>

          {/* Right Weather Card */}

          <div className="relative mx-auto w-full max-w-xl lg:ml-auto lg:pt-10">
            <div className="pointer-events-none absolute -inset-8 rounded-2rem bg-gradient-to- from-emerald-800/20 via-transparent to-orange-400/10 blur-3xl" />

            <div className="relative mb-6 ml-auto flex w-fit items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-4 py-2.5 text-xs font-medium text-emerald-100 backdrop-blur-xl">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

              Live from Bisguli region
            </div>

            <div className="relative transition duration-500 hover:-translate-y-1">
              <LiveWeatherCard />
            </div>

            <div className="relative mx-auto mt-6 flex max-w-md items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-center text-sm text-white/55 backdrop-blur-xl">
              <MapPin size={16} className="shrink-0 text-[#F0A14A]" />

              Weather shown for the Bisguli region
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Transition */}

      <div className="pointer-events-none absolute bottom-0 left-0 h-28 w-full bg-gradient-to from-[#06110B] to-transparent" />
    </section>
  );
}

export default Hero;