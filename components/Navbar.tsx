import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-ivory/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-site items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="group" aria-label="HH Jewelry — home">
          <Logo className="h-12 w-auto transition-opacity group-hover:opacity-80 md:h-14" />
        </Link>

        <div className="flex items-center gap-8 font-body text-sm uppercase tracking-[0.16em] text-ink">
          <Link href="/" className="hidden transition hover:text-gold-deep sm:inline">
            Home
          </Link>
          <Link href="/products" className="transition hover:text-gold-deep">
            Collection
          </Link>
          <Link
            href="/products"
            className="rounded-full border border-gold/60 px-5 py-2 text-xs transition hover:border-gold-deep hover:bg-gold/10"
          >
            Shop
          </Link>
        </div>
      </nav>
    </header>
  );
}
