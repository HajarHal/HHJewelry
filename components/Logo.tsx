// HH Jewelry logo — renders the brand mark image (public/logo.png).
// Size it with the `className` prop, e.g. <Logo className="h-14 w-auto" />.

export default function Logo({
  className = "h-14 w-auto",
  alt = "HH Jewelry",
}: {
  className?: string;
  alt?: string;
}) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/logo.png" alt={alt} className={className} />;
}
