function SectionHeading({
  label,
  title,
  description,
  align = "center",
}) {
  const alignment =
    align === "left"
      ? "items-start text-left"
      : "items-center text-center";

  return (
    <div className={`flex flex-col ${alignment}`}>
      {label && (
        <span className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#e28a38]">
          {label}
        </span>
      )}

      <h2 className="heading-font max-w-3xl text-4xl font-semibold leading-tight text-[#17231c] sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#647068] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;