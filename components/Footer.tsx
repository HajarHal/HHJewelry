import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10 bg-cream/60">
      <div className="mx-auto max-w-site px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="font-display text-3xl font-semibold text-ink">
              H<span className="text-gold-deep">H</span>
              <span className="font-normal italic"> Jewelry</span>
            </h3>
            <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-stone">
              Luxury accessories for elegant women. Carefully selected, delivered
              across Morocco.
            </p>
          </div>

          <div>
            <p className="eyebrow">Explore</p>
            <ul className="mt-4 space-y-2 font-body text-sm text-stone">
              <li>
                <Link href="/" className="transition hover:text-gold-deep">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="transition hover:text-gold-deep">
                  Collection
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="transition hover:text-gold-deep">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">The promise</p>
            <ul className="mt-4 space-y-2 font-body text-sm text-stone">
              <li>Delivery across Morocco</li>
              <li>Payment on delivery</li>
              <li>Carefully selected pieces</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 hairline" />
        <p className="mt-6 text-center font-body text-xs uppercase tracking-[0.16em] text-stone/70">
          © {new Date().getFullYear()} HH Jewelry 
        </p>
      </div>
    </footer>
  );
}
