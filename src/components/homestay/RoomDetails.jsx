import {
  BedDouble,
  Car,
  Flame,
  Mountain,
  ShowerHead,
  Trees,
  Users,
  Wifi,
} from "lucide-react";

import Container from "../common/Container";

const roomFeatures = [
  {
    icon: Users,
    title: "Up to 2 Guests",
    description: "A comfortable stay for couples or solo travellers.",
  },
  {
    icon: BedDouble,
    title: "Comfortable Double Bed",
    description: "Clean bedding and a peaceful space for restful nights.",
  },
  {
    icon: ShowerHead,
    title: "Private Bathroom",
    description: "Attached bathroom with hot water and essential facilities.",
  },
  {
    icon: Mountain,
    title: "Mountain Views",
    description: "Wake up to quiet Himalayan landscapes and fresh air.",
  },
  {
    icon: Trees,
    title: "Orchard Access",
    description: "Walk through seasonal fruit orchards around the property.",
  },
  {
    icon: Wifi,
    title: "Wi-Fi Access",
    description: "Stay connected while enjoying the calm village environment.",
  },
  {
    icon: Flame,
    title: "Bonfire Experience",
    description: "Enjoy peaceful evenings around a warm outdoor bonfire.",
  },
  {
    icon: Car,
    title: "Free Parking",
    description: "Convenient parking space available near the homestay.",
  },
];

function RoomDetails() {
  return (
    <section className="relative overflow-hidden bg-[#03150D] py-24">
      {/* Background glows */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-emerald-900/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-400/10 blur-3xl" />

      <Container className="relative z-10">
        {/* Heading */}

        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#F0A14A]">
              Room Details
            </span>

            <h2 className="mt-6 max-w-2xl text-4xl font-bold leading-tight text-[#F8F0DF] sm:text-5xl">
              Simple comfort surrounded by
              <span className="block font-serif italic text-[#F0A14A]">
                authentic mountain life.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-white/60 lg:ml-auto lg:text-lg">
            Bisguli Homestay offers a peaceful and comfortable place to rest
            while keeping you close to orchards, village trails, local food and
            everyday Himalayan life.
          </p>
        </div>

        {/* Feature cards */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {roomFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-orange-300/30 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-300/20 bg-orange-300/10 text-[#F0A14A] transition duration-300 group-hover:scale-110">
                  <Icon size={23} />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-[#F8F0DF]">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Main room summary */}

        <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-[#081B12]">
          <div className="grid lg:grid-cols-2">
            {/* Image */}

            <div className="min-h-96 overflow-hidden">
              <img
                src="/homestay/images/room6.jpg"
                alt="Comfortable room at Bisguli Homestay"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Information */}

            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#F0A14A]">
                Your Private Mountain Room
              </p>

              <h3 className="mt-5 text-3xl font-bold text-[#F8F0DF] sm:text-4xl">
                Designed for peaceful mornings and restful nights
              </h3>

              <p className="mt-5 leading-8 text-white/60">
                The room combines essential modern comfort with the quiet,
                natural character of a Kumaon village home. It is ideal for
                travellers who value clean spaces, fresh food and meaningful
                local experiences.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-[#F0A14A]">2</p>
                  <p className="mt-1 text-sm text-white/50">Maximum guests</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-[#F0A14A]">1</p>
                  <p className="mt-1 text-sm text-white/50">Private room</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-[#F0A14A]">24/7</p>
                  <p className="mt-1 text-sm text-white/50">Hot water access</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-[#F0A14A]">Free</p>
                  <p className="mt-1 text-sm text-white/50">Parking included</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default RoomDetails;