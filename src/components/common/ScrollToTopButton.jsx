import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowButton(window.scrollY > 300);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-999 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#0D2217]/90 text-[#F0A14A] shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#143523] hover:shadow-orange-400/20 ${
        showButton
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-5 opacity-0"
      }`}
    >
      <ChevronUp size={24} />
    </button>
  );
}

export default ScrollToTopButton;