import { ExternalLink, MapPin, Navigation } from "lucide-react";

import Container from "../common/Container";

function VillageMap() {
  // Google Maps search query
  const locationQuery =
    "Bisguli Talli Sethi Betalghat Nainital Uttarakhand";

  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    locationQuery,
  )}&output=embed`;

  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    locationQuery,
  )}`;

  return (
    <section
      id="location"
      className="relative overflow-hidden bg-[#071A12] py-24 text-white sm:py-28"
    >
      {/* Background decorations */}
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#2F6B45]/25 blur-[120px]" />

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#F0A14A]/10 blur-[120px]" />

      <Container className="relative z-10">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#F0A14A]">
              <MapPin size={15} />

              Find Bisguli
            </div>

            <h2 className="heading-font mt-6 max-w-2xl text-4xl font-semibold leading-tight text-[#FFF9E9] sm:text-5xl lg:text-6xl">
              Hidden in the green hills of Uttarakhand.
            </h2>
          </div>

          <div className="lg:ml-auto lg:max-w-xl">
            <p className="text-base leading-8 text-white/60">
              Bisguli is located near Talli Sethi in the Betalghat region
              of Nainital district. Open the map to explore the route and
              surrounding villages.
            </p>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#F0A14A] px-6 py-3.5 text-sm font-bold text-[#071A12] transition duration-300 hover:-translate-y-1 hover:bg-[#FFD39B]"
            >
              <Navigation size={17} />

              Open Directions

              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Map area */}
        <div className="mt-14 overflow-hidden rounded-[34px] border border-white/10 bg-white/5 p-3 shadow-[0_35px_90px_rgba(0,0,0,0.35)]">
          <div className="relative overflow-hidden rounded-[26px]">
            <iframe
              title="Bisguli Talli Sethi location map"
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-420px w-full border-0 sm:h-520px lg:h-600px"
              allowFullScreen
            />

            {/* Location label */}
            <div className="pointer-events-none absolute bottom-5 left-5 right-5 sm:right-auto">
              <div className="max-w-sm rounded-2xl border border-white/15 bg-[#071A12]/90 p-5 shadow-2xl backdrop-blur-xl">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F0A14A] text-[#071A12]">
                    <MapPin size={23} />
                  </div>

                  <div>
                    <p className="heading-font text-xl font-semibold text-[#FFF9E9]">
                      Bisguli Village
                    </p>

                    <p className="mt-1 text-sm leading-6 text-white/55">
                      Talli Sethi, Betalghat
                      <br />
                      Nainital, Uttarakhand
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Small information row */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F0A14A]">
              Region
            </p>

            <p className="mt-2 text-sm font-semibold text-[#FFF9E9]">
              Kumaon Hills
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F0A14A]">
              District
            </p>

            <p className="mt-2 text-sm font-semibold text-[#FFF9E9]">
              Nainital
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F0A14A]">
              Nearest Area
            </p>

            <p className="mt-2 text-sm font-semibold text-[#FFF9E9]">
              Talli Sethi, Betalghat
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default VillageMap;