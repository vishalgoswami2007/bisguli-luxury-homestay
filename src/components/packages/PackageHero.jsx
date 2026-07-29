import { ArrowLeft, CalendarDays, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

function PackageHero() {
  const navigate = useNavigate();

  function openWhatsApp() {
    const message =
      "Hello, I would like to know more about Bisguli Homestay packages.";

    window.open(
      `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }

  return (
    <section className="relative overflow-hidden border-b border-white/10 px-5 pb-20 pt-28 sm:px-8 lg:px-12 lg:pb-28 lg:pt-36">
      <div className="pointer-events-none absolute -left-40 top-20 h-30rem w-30rem rounded-full bg-emerald-900/25 blur-[130px]" />

      <div className="pointer-events-none absolute -right-32 top-0 h-28rem w-28rem rounded-full bg-[#F0A14A]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-1450px">
        <button
          type="button"
          onClick={() => navigate("/homestay")}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/75 transition duration-300 hover:border-[#F0A14A]/40 hover:bg-[#F0A14A] hover:text-[#06140D]"
        >
          <ArrowLeft size={18} />
          Back to Homestay
        </button>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F0A14A]/30 bg-[#F0A14A]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F0A14A]">
              <CalendarDays size={15} />
              Stay Packages
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-[#F8F0DF] sm:text-5xl lg:text-7xl">
              Choose a stay made for your Himalayan escape.
            </h1>
          </div>

          <div className="lg:pl-10">
            <p className="max-w-xl text-base leading-8 text-white/60 sm:text-lg">
              From peaceful couple stays to family holidays and group
              adventures, choose the experience that fits your journey.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => {
                  document
                    .getElementById("stay-packages")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F0A14A] px-7 py-4 text-sm font-bold text-[#06140D] transition duration-300 hover:-translate-y-1 hover:bg-[#F6B35E] hover:shadow-[0_18px_40px_rgba(240,161,74,0.3)]"
              >
                Explore Packages
              </button>

              <button
                type="button"
                onClick={openWhatsApp}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-[#F8F0DF] backdrop-blur-md transition duration-300 hover:border-[#F0A14A]/40 hover:bg-white/10"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PackageHero;