import {
  Wifi,
  Car,
  Utensils,
  Coffee,
  Flame,
  Trees,
  ShowerHead,
  ShieldCheck,
  Mountain,
  BedDouble,
  Sunrise,
  Flower2,
} from "lucide-react";

import Container from "../common/Container";

const amenities = [
  {
    icon: Wifi,
    title: "High-Speed Wi-Fi",
    description: "Stay connected while enjoying peaceful mountain life.",
  },
  {
    icon: BedDouble,
    title: "Comfortable Rooms",
    description: "Clean rooms with cozy bedding for a relaxing stay.",
  },
  {
    icon: ShowerHead,
    title: "Hot Water",
    description: "24/7 hot water facility for a comfortable experience.",
  },
  {
    icon: Car,
    title: "Free Parking",
    description: "Safe parking space available inside the property.",
  },
  {
    icon: Utensils,
    title: "Home Cooked Meals",
    description: "Fresh traditional Kumaoni food prepared daily.",
  },
  {
    icon: Coffee,
    title: "Morning Tea",
    description: "Start your day with fresh tea and mountain views.",
  },
  {
    icon: Flame,
    title: "Bonfire Nights",
    description: "Enjoy cozy evenings under the Himalayan sky.",
  },
  {
    icon: Trees,
    title: "Fruit Orchards",
    description: "Walk through seasonal apple, peach and plum orchards.",
  },
  {
    icon: Mountain,
    title: "Mountain Views",
    description: "Beautiful panoramic Himalayan landscapes.",
  },
  {
    icon: Sunrise,
    title: "Sunrise Experience",
    description: "Wake up to breathtaking sunrise every morning.",
  },
  {
    icon: Flower2,
    title: "Peaceful Garden",
    description: "Relax in a calm natural environment.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Family Stay",
    description: "A secure and welcoming place for every guest.",
  },
];

function Amenities() {
  return (
    <section className="bg-[#06110B] py-24">
      <Container>
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#F0A14A]">
            Amenities
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#F8F0DF] sm:text-5xl">
            Everything You Need
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/60">
            Modern comfort blended with authentic Himalayan village living.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {amenities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[#F0A14A]/40 hover:bg-white/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0A14A]/10 text-[#F0A14A] transition duration-300 group-hover:scale-110">
                  <Icon size={26} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#F8F0DF]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}

        <div className="mt-20 rounded-32px border border-white/10 bg-gradient-to from-[#0A1F15] to-[#122A1C] p-10 text-center">
          <h3 className="text-3xl font-bold text-[#F8F0DF]">
            More Than Just a Stay
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/60">
            At Bisguli, you don't just book a room—you experience local
            culture, peaceful mornings, fresh mountain air, traditional food,
            and genuine Himalayan hospitality.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Amenities;