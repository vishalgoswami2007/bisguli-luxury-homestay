import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Star,
} from "lucide-react";

import Container from "../common/Container";

function HomestayHero() {
  return (
    <section className="relative overflow-hidden bg-[#03150D] pt-28 pb-20">
      {/* Background */}

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-emerald-900/30 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-400/10 blur-3xl" />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left */}

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/70">
              <Star size={14} className="text-[#F0A14A]" />

              Premium Village Stay
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-[#F8F0DF] lg:text-7xl">
              Stay where the
              <span className="block font-serif italic text-[#F0A14A]">
                mountains welcome you.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
              Wake up with Himalayan views, enjoy fresh local food,
              relax in peaceful surroundings, and experience the real
              village life of Bisguli.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F0A14A] px-7 py-4 font-semibold text-[#07140D] transition hover:-translate-y-1">
                Reserve Your Stay
                <ArrowRight size={18} />
              </button>

              <button className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white transition hover:border-[#F0A14A] hover:text-[#F0A14A]">
                <CalendarDays size={18} />

                Check Availability
              </button>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#F0A14A]" />
                Bisguli, Uttarakhand
              </div>

              <div className="flex items-center gap-2">
                <Star size={16} className="text-[#F0A14A]" />
                4.9 Guest Rating
              </div>
            </div>
          </div>

          {/* Right */}

          <div className="relative">
            <img
              src="/homestay/hero.jpg"
              alt="Bisguli Homestay"
              className="h-650px w-full rounded-32px object-cover"
            />

            {/* Floating Card */}

            <div className="absolute bottom-6 left-6 rounded-3xl border border-white/10 bg-[#07140D]/80 p-5 backdrop-blur-xl">
              <p className="text-sm text-white/60">
                Starting From
              </p>

              <h3 className="mt-2 text-3xl font-bold text-[#F0A14A]">
                ₹2,499
              </h3>

              <p className="mt-1 text-sm text-white/50">
                Per Night
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HomestayHero;