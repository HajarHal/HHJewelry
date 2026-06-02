// Elegant "HH Jewelry" wordmark.
// Uses the Cormorant Garamond display face with a hairline-spaced
// "JEWELRY" set beneath an oversized "HH" monogram.

export default function Logo({
  className = "",
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  const main = invert ? "text-ivory" : "text-ink";
  const sub = invert ? "text-gold-soft" : "text-gold-deep";

  return (
    <span className={`flex flex-col items-start leading-none ${className}`}>
      <span
        className={`font-display text-[1.95rem] font-semibold leading-none tracking-[0.06em] ${main}`}
      >
        H<span className="text-gold-deep">H</span>
        <span className="font-normal italic tracking-normal"> Jewelry</span>
      </span>
      <span
        className={`mt-1 text-[0.55rem] uppercase tracking-luxe ${sub}`}
      >
        Fine accessories · Morocco
      </span>
    </span>
  );
}
