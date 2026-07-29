import { useEffect, useState } from "react";

function LoadingScreen() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (hide) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-[#03150D]">
      <div className="text-center">
        <img
          src="/logo.png"
          alt="Bisguli Logo"
          className="mx-auto h-24 w-24 animate-pulse object-contain"
        />

        <h1 className="mt-6 font-serif text-5xl font-bold text-[#F8F0DF]">
          Bisguli
        </h1>

        <p className="mt-3 tracking-[0.3em] text-sm uppercase text-[#F0A14A]">
          Himalayan Village Stay
        </p>

        <div className="mx-auto mt-10 h-1 w-48 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-full animate-[loading_1.8s_linear] rounded-full bg-[#F0A14A]" />
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;