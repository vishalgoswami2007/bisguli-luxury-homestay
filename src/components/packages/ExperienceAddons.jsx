import {
  Binoculars,
  Camera,
  Flame,
  Footprints,
  Leaf,
  MessageCircle,
  MoonStar,
  Sparkles,
  Sunrise,
  UtensilsCrossed,
} from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Bonfire Night",
    description:
      "Enjoy a warm bonfire under the stars with peaceful mountain surroundings.",
    price: "₹499",
    priceLabel: "per setup",
    badge: "Optional",
    icon: Flame,
  },
  {
    id: 2,
    title: "Traditional Kumaoni Dinner",
    description:
      "Taste freshly prepared local Kumaoni food made with traditional village flavours.",
    price: "₹399",
    priceLabel: "per person",
    badge: "Optional",
    icon: UtensilsCrossed,
  },
  {
    id: 3,
    title: "Guided Village Walk",
    description:
      "Explore Bisguli village, local homes, farms and everyday mountain life.",
    price: "₹299",
    priceLabel: "per group",
    badge: "Included in Family Plan",
    icon: Footprints,
  },
  {
    id: 4,
    title: "Sunrise Trek",
    description:
      "Start your morning with a guided walk to a peaceful sunrise viewpoint.",
    price: "₹699",
    priceLabel: "per group",
    badge: "Optional",
    icon: Sunrise,
  },
  {
    id: 5,
    title: "Farming Experience",
    description:
      "Spend time in local farms and learn about seasonal crops and village farming.",
    price: "₹499",
    priceLabel: "per group",
    badge: "Optional",
    icon: Leaf,
  },
  {
    id: 6,
    title: "Photography Walk",
    description:
      "Capture mountain landscapes, village architecture and natural surroundings.",
    price: "₹999",
    priceLabel: "per group",
    badge: "Optional",
    icon: Camera,
  },
  {
    id: 7,
    title: "Bird Watching",
    description:
      "Discover local Himalayan birds during a calm early-morning nature walk.",
    price: "₹599",
    priceLabel: "per group",
    badge: "Optional",
    icon: Binoculars,
  },
  {
    id: 8,
    title: "Stargazing Evening",
    description:
      "Enjoy a slow evening beneath the clear mountain sky away from city lights.",
    price: "₹399",
    priceLabel: "per group",
    badge: "Optional",
    icon: MoonStar,
  },
];

function ExperienceAddons() {
  function openWhatsApp(experience) {
    const phoneNumber = "919588559330";

    const message = `Hello, I want to add the ${experience.title} experience to my Bisguli Homestay booking. The listed price is ${experience.price} ${experience.priceLabel}. Please share details.`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#081910] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="pointer-events-none absolute -left-40 bottom-0 h-30rem w-30rem rounded-full bg-emerald-900/20 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 top-10 h-28rem w-28rem rounded-full bg-[#F0A14A]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-1450px">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F0A14A]/25 bg-[#F0A14A]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F0A14A]">
              <Sparkles size={15} />
              Experience Add-ons
            </div>

            <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[#F8F0DF] sm:text-5xl lg:text-6xl">
              Add meaningful village experiences to your stay.
            </h2>
          </div>

          <div className="lg:pl-10">
            <p className="max-w-xl text-base leading-8 text-white/60 sm:text-lg">
              Choose from local food, peaceful walks, bonfire evenings and
              nature-based experiences to make your Bisguli journey more
              memorable.
            </p>

            <p className="mt-4 text-sm leading-6 text-white/40">
              Activities depend on weather, season and local availability.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {experiences.map((experience) => {
            const ExperienceIcon = experience.icon;

            return (
              <article
                key={experience.id}
                className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#0C2015] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.2)] transition duration-500 hover:-translate-y-2 hover:border-[#F0A14A]/35 hover:shadow-[0_30px_90px_rgba(0,0,0,0.32)] sm:p-7"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#F0A14A]/0 blur-[55px] transition duration-500 group-hover:bg-[#F0A14A]/10" />

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#F0A14A] transition duration-300 group-hover:border-[#F0A14A]/40 group-hover:bg-[#F0A14A] group-hover:text-[#06140D]">
                    <ExperienceIcon size={24} />
                  </div>

                  <span
                    className={`max-w-145px rounded-full border px-3 py-2 text-right text-[11px] font-semibold leading-4 ${
                      experience.badge.includes("Included")
                        ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                        : "border-white/10 bg-white/5 text-white/55"
                    }`}
                  >
                    {experience.badge}
                  </span>
                </div>

                <div className="relative z-10 mt-7 flex-1">
                  <h3 className="text-2xl font-semibold text-[#F8F0DF]">
                    {experience.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/55">
                    {experience.description}
                  </p>
                </div>

                <div className="relative z-10 mt-7 border-t border-white/10 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
                    Starting from
                  </p>

                  <div className="mt-2 flex items-end gap-2">
                    <span className="text-3xl font-semibold text-[#F8F0DF]">
                      {experience.price}
                    </span>

                    <span className="pb-1 text-xs text-white/40">
                      {experience.priceLabel}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => openWhatsApp(experience)}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-semibold text-[#F8F0DF] transition duration-300 hover:border-[#F0A14A]/40 hover:bg-[#F0A14A] hover:text-[#06140D]"
                  >
                    <MessageCircle size={17} />
                    Add to My Stay
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 rounded-[28px] border border-[#F0A14A]/15 bg-gradient-to- from-[#10271A] to-[#0A1B12] p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F0A14A]">
                Custom Experience
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-[#F8F0DF] sm:text-3xl">
                Want to create your own stay experience?
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/50">
                Tell us your group size, travel dates and preferred activities.
                We will help you create a personalized Bisguli stay plan.
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                openWhatsApp({
                  title: "custom experience plan",
                  price: "custom",
                  priceLabel: "",
                })
              }
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#F0A14A] px-7 py-4 text-sm font-bold text-[#06140D] transition duration-300 hover:-translate-y-1 hover:bg-[#F6B35E] hover:shadow-[0_18px_40px_rgba(240,161,74,0.3)]"
            >
              <MessageCircle size={18} />
              Request Custom Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceAddons;