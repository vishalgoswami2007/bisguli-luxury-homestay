function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}) {
  const variants = {
    primary:
      "bg-[#F0A14A] text-[#071A12] hover:bg-[#FFD39B] shadow-[0_15px_35px_rgba(240,161,74,0.22)]",

    secondary:
      "border border-white/15 bg-white/8 text-white hover:bg-white/15 backdrop-blur-md",

    forest:
      "bg-[#14532D] text-white hover:bg-[#0C3B24] shadow-[0_14px_30px_rgba(20,83,45,0.22)]",

    light:
      "border border-[#14532D]/15 bg-white text-[#14532D] hover:bg-[#EEF5EA]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-full px-6 py-3.5
        text-sm font-semibold
        transition-all duration-300
        hover:-translate-y-1
        active:translate-y-0
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;