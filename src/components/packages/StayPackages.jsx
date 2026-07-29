import {
  BedDouble,
  Check,
  Flame,
  Heart,
  Home,
  MessageCircle,
  Mountain,
  Sparkles,
  Star,
  Users,
  Utensils,
  Wifi,
} from "lucide-react";

const packages = [
  {
    id: 1,
    name: "Couple Escape",
    tagline: "A peaceful mountain getaway designed for two.",
    price: "₹2,499",
    originalPrice: "₹2,999",
    duration: "per night",
    guests: "2 Guests",
    badge: "Perfect for Couples",
    icon: Heart,
    featured: false,

    features: [
      {
        icon: BedDouble,
        text: "Private comfortable room",
      },
      {
        icon: Utensils,
        text: "Homemade breakfast",
      },
      {
        icon: Mountain,
        text: "Mountain and village views",
      },
      {
        icon: Wifi,
        text: "Wi-Fi access",
      },
      {
        icon: Home,
        text: "Free parking",
      },
    ],
  },

  {
    id: 2,
    name: "Family Retreat",
    tagline: "Relax, reconnect and experience village life together.",
    price: "₹4,999",
    originalPrice: "₹5,999",
    duration: "per night",
    guests: "Up to 4 Guests",
    badge: "Most Popular",
    icon: Star,
    featured: true,

    features: [
      {
        icon: BedDouble,
        text: "Two comfortable rooms",
      },
      {
        icon: Utensils,
        text: "Breakfast and dinner",
      },
      {
        icon: Flame,
        text: "Private bonfire experience",
      },
      {
        icon: Mountain,
        text: "Guided village walk",
      },
      {
        icon: Wifi,
        text: "Wi-Fi and free parking",
      },
    ],
  },

  {
    id: 3,
    name: "Group Adventure",
    tagline: "Create unforgettable mountain memories with your group.",
    price: "₹8,999",
    originalPrice: "₹10,499",
    duration: "per night",
    guests: "Up to 8 Guests",
    badge: "Best for Groups",
    icon: Users,
    featured: false,

    features: [
      {
        icon: BedDouble,
        text: "Multiple comfortable rooms",
      },
      {
        icon: Utensils,
        text: "Breakfast and dinner",
      },
      {
        icon: Flame,
        text: "Group bonfire night",
      },
      {
        icon: Mountain,
        text: "Village walk experience",
      },
      {
        icon: Sparkles,
        text: "Custom group assistance",
      },
    ],
  },
];

function StayPackages() {
  function openWhatsApp(packageName, price) {
    const phoneNumber = "919588559330";

    const message = `Hello, I am interested in the ${packageName} package at Bisguli Homestay. The listed price is ${price} per night. Please share availability and booking details.`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="stay-packages"
      className="relative overflow-hidden bg-[#06140D] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Background glow */}

      <div className="pointer-events-none absolute -left-40 top-20 h-32rem w-32rem rounded-full bg-emerald-900/20 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-30rem w-30rem rounded-full bg-[#F0A14A]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-1450px">
        {/* Section heading */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F0A14A]/25 bg-[#F0A14A]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F0A14A]">
            <Sparkles size={15} />
            Choose Your Stay
          </div>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-[#F8F0DF] sm:text-5xl lg:text-6xl">
            A stay package for every kind of traveller.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            Select a peaceful couple escape, a relaxing family retreat or a
            memorable group adventure in the mountains.
          </p>
        </div>

        {/* Package cards */}

        <div className="mt-14 grid gap-7 lg:grid-cols-3 lg:items-stretch">
          {packages.map((stayPackage) => {
            const PackageIcon = stayPackage.icon;

            return (
              <article
                key={stayPackage.id}
                className={`group relative flex h-full flex-col overflow-hidden rounded-32px border p-6 transition duration-500 sm:p-8 ${
                  stayPackage.featured
                    ? "border-[#F0A14A]/60 bg-gradient-to- from-[#173222] to-[#0B1C12] shadow-[0_35px_100px_rgba(240,161,74,0.13)] lg:-translate-y-5"
                    : "border-white/10 bg-[#0B1C12] shadow-[0_25px_80px_rgba(0,0,0,0.25)] hover:-translate-y-3 hover:border-[#F0A14A]/30"
                }`}
              >
                {/* Featured glow */}

                {stayPackage.featured && (
                  <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#F0A14A]/15 blur-[70px]" />
                )}

                {/* Badge */}

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${
                      stayPackage.featured
                        ? "border-[#F0A14A]/40 bg-[#F0A14A] text-[#06140D]"
                        : "border-white/10 bg-white/5 text-[#F0A14A]"
                    }`}
                  >
                    <PackageIcon size={25} />
                  </div>

                  <span
                    className={`rounded-full border px-4 py-2 text-xs font-semibold ${
                      stayPackage.featured
                        ? "border-[#F0A14A]/40 bg-[#F0A14A]/15 text-[#F0A14A]"
                        : "border-white/10 bg-white/5 text-white/65"
                    }`}
                  >
                    {stayPackage.badge}
                  </span>
                </div>

                {/* Package title */}

                <div className="relative z-10 mt-8">
                  <p className="text-sm font-medium text-[#F0A14A]">
                    {stayPackage.guests}
                  </p>

                  <h3 className="mt-3 text-3xl font-semibold text-[#F8F0DF]">
                    {stayPackage.name}
                  </h3>

                  <p className="mt-4 min-h-56px text-sm leading-7 text-white/55">
                    {stayPackage.tagline}
                  </p>
                </div>

                {/* Price */}

                <div className="relative z-10 mt-8 border-y border-white/10 py-6">
                  <div className="flex flex-wrap items-end gap-3">
                    <span className="text-4xl font-semibold tracking-tight text-[#F8F0DF]">
                      {stayPackage.price}
                    </span>

                    <span className="pb-1 text-sm text-white/45">
                      {stayPackage.duration}
                    </span>
                  </div>

                  <div className="mt-2 flex items-center gap-3">
                    <span className="text-sm text-white/35 line-through">
                      {stayPackage.originalPrice}
                    </span>

                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                      Launch Offer
                    </span>
                  </div>

                  <p className="mt-4 text-xs leading-5 text-white/40">
                    Starting price. Final amount may vary according to season,
                    number of guests and selected experiences.
                  </p>
                </div>

                {/* Features */}

                <div className="relative z-10 mt-7 flex-1">
                  <p className="text-sm font-semibold text-[#F8F0DF]">
                    Package includes
                  </p>

                  <div className="mt-5 space-y-4">
                    {stayPackage.features.map((feature) => {
                      const FeatureIcon = feature.icon;

                      return (
                        <div
                          key={feature.text}
                          className="flex items-center gap-3"
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#F0A14A]">
                            <FeatureIcon size={16} />
                          </div>

                          <p className="text-sm text-white/65">
                            {feature.text}
                          </p>

                          <Check
                            size={16}
                            className="ml-auto shrink-0 text-emerald-400"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Buttons */}

                <div className="relative z-10 mt-9 space-y-3">
                  <button
                    type="button"
                    onClick={() =>
                      openWhatsApp(stayPackage.name, stayPackage.price)
                    }
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-bold transition duration-300 ${
                      stayPackage.featured
                        ? "bg-[#F0A14A] text-[#06140D] hover:-translate-y-1 hover:bg-[#F6B35E] hover:shadow-[0_18px_40px_rgba(240,161,74,0.3)]"
                        : "border border-white/15 bg-white/5 text-[#F8F0DF] hover:-translate-y-1 hover:border-[#F0A14A]/50 hover:bg-[#F0A14A] hover:text-[#06140D]"
                    }`}
                  >
                    <MessageCircle size={18} />
                    Reserve on WhatsApp
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      openWhatsApp(
                        stayPackage.name,
                        "Custom pricing requested"
                      )
                    }
                    className="inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white/55 transition duration-300 hover:text-[#F0A14A]"
                  >
                    Ask for custom plan
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Information strip */}

        <div className="mt-12 rounded-[28px] border border-white/10 bg-white/0.04 p-6 backdrop-blur-xl sm:p-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F0A14A]/10 text-[#F0A14A]">
                <Check size={19} />
              </div>

              <div>
                <h4 className="font-semibold text-[#F8F0DF]">
                  Flexible Packages
                </h4>

                <p className="mt-2 text-sm leading-6 text-white/50">
                  Meals and activities can be customized according to your
                  journey.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F0A14A]/10 text-[#F0A14A]">
                <Home size={19} />
              </div>

              <div>
                <h4 className="font-semibold text-[#F8F0DF]">
                  Direct Booking
                </h4>

                <p className="mt-2 text-sm leading-6 text-white/50">
                  Contact the Bisguli team directly without additional booking
                  platform fees.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F0A14A]/10 text-[#F0A14A]">
                <Mountain size={19} />
              </div>

              <div>
                <h4 className="font-semibold text-[#F8F0DF]">
                  Local Experience
                </h4>

                <p className="mt-2 text-sm leading-6 text-white/50">
                  Enjoy peaceful village life, homemade food and mountain
                  hospitality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StayPackages;