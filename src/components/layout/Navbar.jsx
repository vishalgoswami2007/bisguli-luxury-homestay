import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CalendarDays, Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  function scrollToSection(sectionId) {
    setIsOpen(false);

    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    navigate(`/?section=${sectionId}`);
  }

  function openPackagesPage() {
    setIsOpen(false);
    navigate("/packages");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const navLinks = [
    {
      label: "Home",
      id: "home",
    },
    {
      label: "Explore",
      id: "explore",
    },
    {
      label: "Seasons",
      id: "seasons",
    },
    {
      label: "Our Story",
      id: "our-story",
    },
    {
      label: "Plan Your Stay",
      id: "planner",
    },
    {
      label: "Packages",
      path: "/packages",
    },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#03150D]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-88px w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Logo */}

        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3"
        >
          <div className="flex h-13 w-13 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <img
              src="/logo.png"
              alt="Bisguli logo"
              className="h-10 w-10 object-contain"
            />
          </div>

          <div className="text-left">
            <h2 className="font-serif text-xl font-bold leading-none text-[#F8F0DF]">
              Bisguli
            </h2>

            <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55">
              Himalayan Village Stay
            </p>
          </div>
        </button>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) =>
            link.path ? (
              <button
                key={link.label}
                type="button"
                onClick={openPackagesPage}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition duration-300 ${
                  location.pathname === "/packages"
                    ? "border-[#F0A14A] bg-[#F0A14A] text-[#07140D]"
                    : "border-[#F0A14A]/35 text-[#F0A14A] hover:bg-[#F0A14A] hover:text-[#07140D]"
                }`}
              >
                {link.label}
              </button>
            ) : (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-semibold text-white/75 transition duration-300 hover:text-[#F0A14A]"
              >
                {link.label}
              </button>
            )
          )}
        </nav>

        {/* Desktop CTA */}

        <button
          type="button"
          onClick={() => scrollToSection("availability")}
          className="hidden items-center gap-2 rounded-full bg-[#F0A14A] px-6 py-3.5 font-semibold text-[#07140D] shadow-lg shadow-[#F0A14A]/15 transition duration-300 hover:-translate-y-0.5 hover:bg-[#F6B765] lg:inline-flex"
        >
          <CalendarDays size={15} />
          Check Availability
        </button>

        {/* Mobile Button */}

        <button
          type="button"
          onClick={() => setIsOpen((previous) => !previous)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-[#F0A14A]/40 hover:text-[#F0A14A] lg:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="border-t border-white/10 bg-[#03150D] px-5 py-5 shadow-2xl lg:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) =>
              link.path ? (
                <button
                  key={link.label}
                  type="button"
                  onClick={openPackagesPage}
                  className={`rounded-xl border px-4 py-3 text-left font-semibold transition duration-300 ${
                    location.pathname === "/packages"
                      ? "border-[#F0A14A] bg-[#F0A14A] text-[#07140D]"
                      : "border-[#F0A14A]/35 text-[#F0A14A] hover:bg-[#F0A14A] hover:text-[#07140D]"
                  }`}
                >
                  {link.label}
                </button>
              ) : (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className="rounded-xl px-4 py-3 text-left font-semibold text-white/75 transition hover:bg-white/5 hover:text-[#F0A14A]"
                >
                  {link.label}
                </button>
              )
            )}

            <button
              type="button"
              onClick={() => scrollToSection("availability")}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[#F0A14A] px-5 py-3.5 font-semibold text-[#07140D] transition hover:bg-[#F6B765]"
            >
              <CalendarDays size={18} />
              Check Availability
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;