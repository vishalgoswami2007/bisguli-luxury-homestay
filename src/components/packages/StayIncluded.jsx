import {
  Car,
  Coffee,
  Flame,
  Home,
  Mountain,
  ShieldCheck,
  Sparkles,
  Trees,
  Utensils,
  Wifi,
  Bath,
  HeartHandshake,
} from "lucide-react";

const facilities = [
  {
    icon: Home,
    title: "Comfortable Rooms",
    description: "Clean, spacious and cozy rooms designed for a peaceful mountain stay.",
  },
  {
    icon: Mountain,
    title: "Mountain Views",
    description: "Wake up to breathtaking Himalayan landscapes right outside your window.",
  },
  {
    icon: Utensils,
    title: "Homemade Food",
    description: "Fresh traditional Kumaoni meals prepared with local ingredients.",
  },
  {
    icon: Coffee,
    title: "Morning Tea",
    description: "Start your day with hot tea while enjoying the peaceful surroundings.",
  },
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    description: "Stay connected whenever you need internet access.",
  },
  {
    icon: Car,
    title: "Free Parking",
    description: "Secure parking space available for every guest.",
  },
  {
    icon: Bath,
    title: "Hot Water",
    description: "Hot water facility available throughout your stay.",
  },
  {
    icon: Flame,
    title: "Bonfire Area",
    description: "Spend memorable evenings around a cozy bonfire.",
  },
  {
    icon: Trees,
    title: "Village Nature",
    description: "Enjoy forests, fresh air and authentic Himalayan village life.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Stay",
    description: "A peaceful, family-friendly and secure environment.",
  },
  {
    icon: HeartHandshake,
    title: "Local Hospitality",
    description: "Experience warm hospitality from the Bisguli family.",
  },
  {
    icon: Sparkles,
    title: "Peaceful Atmosphere",
    description: "Relax away from crowds and reconnect with nature.",
  },
];

function StayIncluded() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#081910] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="pointer-events-none absolute -left-40 top-0 h-30rem w-30rem rounded-full bg-emerald-900/20 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-28rem w-[28rem rounded-full bg-[#F0A14A]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-1450px">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F0A14A]/20 bg-[#F0A14A]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F0A14A]">
            <Sparkles size={15} />
            Included With Every Stay
          </div>

          <h2 className="mt-6 text-4xl font-semibold leading-tight text-[#F8F0DF] sm:text-5xl lg:text-6xl">
            Everything you need for a peaceful stay.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            Every Bisguli stay includes thoughtfully selected amenities to make
            your Himalayan experience comfortable and memorable.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {facilities.map((facility) => {
            const Icon = facility.icon;

            return (
              <article
                key={facility.title}
                className="group rounded-[28px] border border-white/10 bg-[#0B1C12] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#F0A14A]/30 hover:shadow-[0_25px_80px_rgba(0,0,0,0.25)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#F0A14A] transition duration-300 group-hover:bg-[#F0A14A] group-hover:text-[#06140D]">
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-[#F8F0DF]">
                  {facility.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  {facility.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-14 rounded-[30px] border border-[#F0A14A]/20 bg-gradient-to- from-[#10271A] to-[#091A11] p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F0A14A]">
                Included In Every Booking
              </p>

              <h3 className="mt-3 text-3xl font-semibold text-[#F8F0DF]">
                No hidden charges. Just honest hospitality.
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55">
                Our goal is simple — provide a peaceful Himalayan stay with
                genuine village hospitality, clean rooms, homemade food and
                unforgettable memories.
              </p>
            </div>

            <div className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-[#F0A14A]">
              Included in All Packages
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StayIncluded;