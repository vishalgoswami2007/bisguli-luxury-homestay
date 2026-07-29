import { ArrowRight, MessageCircle, Phone, Sparkles } from "lucide-react";

function PackageCTA() {
  function openWhatsApp() {
    const phoneNumber = "91XXXXXXXXXX";

    const message =
      "Hello! I would like to book a stay at Bisguli Homestay. Please share availability and package details.";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#081910] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-35rem w-35rem -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F0A14A]/10 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-[#F0A14A]/20 bg-gradient-to from-[#10271A] via-[#0D1E14] to-[#09150F] p-8 shadow-[0_30px_100px_rgba(0,0,0,.35)] sm:p-12 lg:p-16">

        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-[#F0A14A]/25 bg-[#F0A14A]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F0A14A]">
            <Sparkles size={15} />
            Ready To Visit Bisguli?
          </div>

          <h2 className="mt-6 text-4xl font-semibold leading-tight text-[#F8F0DF] sm:text-5xl lg:text-6xl">
            Escape the city.
            <br />
            Experience the Himalayas.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            Spend peaceful mornings, breathtaking sunsets, delicious homemade
            food and authentic Kumaoni hospitality with your friends and family.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <button
              onClick={openWhatsApp}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F0A14A] px-8 py-4 text-sm font-bold text-[#06140D] transition duration-300 hover:-translate-y-1 hover:bg-[#F6B35E] hover:shadow-[0_18px_45px_rgba(240,161,74,.35)]"
            >
              <MessageCircle size={18} />
              Book on WhatsApp
            </button>

            <a
              href="tel:+91XXXXXXXXXX"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-[#F8F0DF] transition duration-300 hover:border-[#F0A14A]/40 hover:bg-white/10"
            >
              <Phone size={18} />
              Call Us
            </a>

          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-3xl font-bold text-[#F0A14A]">100%</h3>
              <p className="mt-2 text-sm text-white/55">
                Authentic Village Experience
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-3xl font-bold text-[#F0A14A]">24×7</h3>
              <p className="mt-2 text-sm text-white/55">
                Booking Assistance
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-3xl font-bold text-[#F0A14A]">★★★★★</h3>
              <p className="mt-2 text-sm text-white/55">
                Premium Hospitality
              </p>
            </div>

          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-[#F0A14A]">

            <span className="text-sm font-semibold tracking-wide uppercase">
              See You In Bisguli
            </span>

            <ArrowRight size={18} />

          </div>

        </div>
      </div>
    </section>
  );
}

export default PackageCTA;