import {
  CalendarCheck,
  CheckCircle2,
  CreditCard,
  MessageCircle,
  Mountain,
  PackageCheck,
  Sparkles,
} from "lucide-react";

const bookingSteps = [
  {
    id: "01",
    icon: PackageCheck,
    title: "Choose Your Package",
    description:
      "Select the Couple Escape, Family Retreat or Group Adventure package that suits your journey.",
  },
  {
    id: "02",
    icon: MessageCircle,
    title: "Contact Us",
    description:
      "Send us a WhatsApp message with your preferred package, travel dates and number of guests.",
  },
  {
    id: "03",
    icon: CalendarCheck,
    title: "Confirm Availability",
    description:
      "Our team will confirm room availability, package inclusions and the final booking amount.",
  },
  {
    id: "04",
    icon: CreditCard,
    title: "Pay Booking Advance",
    description:
      "Secure your stay by paying the confirmed advance amount through the available payment method.",
  },
  {
    id: "05",
    icon: Mountain,
    title: "Enjoy Your Stay",
    description:
      "Arrive at Bisguli, relax in the mountains and enjoy authentic village hospitality.",
  },
];

function BookingSteps() {
  function openWhatsApp() {
    const phoneNumber = "919588559330";

    const message =
      "Hello, I want to book a stay at Bisguli Homestay. Please share package availability and booking details.";

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#06140D] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="pointer-events-none absolute -left-40 bottom-0 h-30rem w-30rem rounded-full bg-emerald-900/20 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 top-0 h-28rem w-28rem rounded-full bg-[#F0A14A]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-1450px">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F0A14A]/25 bg-[#F0A14A]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F0A14A]">
            <Sparkles size={15} />
            Simple Booking Process
          </div>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-[#F8F0DF] sm:text-5xl lg:text-6xl">
            Book your Himalayan stay in five easy steps.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            No complicated forms. Contact us directly, confirm your dates and
            secure your Bisguli experience.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-7 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to- from-[#F0A14A]/60 via-white/15 to-transparent md:block lg:left-1/2 lg:h-px lg:w-[80%] lg:-translate-x-1/2 lg:translate-y-6" />

          <div className="grid gap-6 lg:grid-cols-5">
            {bookingSteps.map((step, index) => {
              const StepIcon = step.icon;

              return (
                <article
                  key={step.id}
                  className="group relative flex gap-5 rounded-[28px] border border-white/10 bg-[#0B1C12] p-6 transition duration-500 hover:-translate-y-2 hover:border-[#F0A14A]/35 hover:shadow-[0_25px_80px_rgba(0,0,0,0.3)] md:ml-16 lg:ml-0 lg:flex-col lg:text-center"
                >
                  <div className="absolute -left-65px top-6 hidden h-14 w-14 items-center justify-center rounded-full border border-[#F0A14A]/35 bg-[#0B1C12] text-sm font-bold text-[#F0A14A] md:flex lg:static lg:mx-auto">
                    {step.id}
                  </div>

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#F0A14A] transition duration-300 group-hover:border-[#F0A14A]/40 group-hover:bg-[#F0A14A] group-hover:text-[#06140D] lg:mx-auto lg:mt-1">
                    <StepIcon size={24} />
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-2 lg:justify-center">
                      <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#F0A14A] md:hidden">
                        Step {step.id}
                      </span>

                      {index === bookingSteps.length - 1 && (
                        <CheckCircle2
                          size={15}
                          className="text-emerald-400"
                        />
                      )}
                    </div>

                    <h3 className="text-xl font-semibold text-[#F8F0DF]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/50">
                      {step.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-14 rounded-[30px] border border-[#F0A14A]/20 bg-gradient-to- from-[#10271A] to-[#091A11] p-7 sm:p-9">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F0A14A]">
                Need Booking Help?
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-[#F8F0DF] sm:text-3xl">
                Talk directly with the Bisguli team.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/50">
                Share your dates, guest count and preferred experience. We will
                help you choose the right package and confirm the final amount.
              </p>
            </div>

            <button
              type="button"
              onClick={openWhatsApp}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#F0A14A] px-7 py-4 text-sm font-bold text-[#06140D] transition duration-300 hover:-translate-y-1 hover:bg-[#F6B35E] hover:shadow-[0_18px_40px_rgba(240,161,74,0.3)]"
            >
              <MessageCircle size={18} />
              Start Booking
            </button>
          </div>
        </div>

        <p className="mt-6 text-center text-xs leading-6 text-white/35">
          Booking is confirmed only after availability confirmation and receipt
          of the required advance payment.
        </p>
      </div>
    </section>
  );
}

export default BookingSteps;