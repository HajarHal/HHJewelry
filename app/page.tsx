import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts } from "@/lib/products";

const VALUES = [
  {
    title: "Elegant by design",
    body: "Each piece is chosen for its line, its finish, its restraint. Nothing loud, everything considered.",
  },
  {
    title: "Carefully selected",
    body: "A small, edited collection. We add a piece only when it earns its place.",
  },
  {
    title: "Delivery across Morocco",
    body: "From Casablanca to Oujda your order arrives wherever you are.",
  },
  {
    title: "Payment on delivery",
    body: "Order with confidence. You pay only when the piece is in your hands.",
  },
];

const FAQ = [
  {
    q: "How do I order?",
    a: "Choose a piece, open its page, and fill in the order form with your name, phone, city and address. We'll call you to confirm before shipping — no online payment needed.",
  },
  {
    q: "When will I receive my order?",
    a: "Most orders across Morocco arrive within 2 to 4 working days after we confirm them by phone.",
  },
  {
    q: "Can I return a product?",
    a: "Yes. If a piece isn't right for you, you can return it within 7 days in its original condition. Reach out and we'll arrange it.",
  },
];

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-32 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-gold/15 blur-3xl" />
        <div className="mx-auto grid max-w-site items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
          <div className="flex flex-col">
            <p className="eyebrow animate-fade">Fine accessories · Morocco</p>
            <h1 className="mt-6 font-display text-5xl font-medium leading-[1.08] text-ink animate-rise sm:text-6xl">
              Luxury accessories
              <br />
              for <span className="italic text-gold-deep">elegant</span> women
            </h1>
            <p className="mt-6 max-w-md font-body text-lg font-light leading-relaxed text-stone animate-rise [animation-delay:120ms]">
              A small, considered collection — delivered across Morocco, paid on
              delivery.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4 animate-rise [animation-delay:240ms]">
              <Link href="/products" className="btn-gold">
                Shop the collection
              </Link>
              <Link href="/#why" className="btn-outline">
                Why HH Jewelry
              </Link>
            </div>
          </div>

          <div className="relative animate-fade [animation-delay:200ms]">
            <div className="flex items-center justify-center overflow-hidden rounded-[2rem] border border-gold/30 bg-gradient-to-br from-cream to-ivory p-10 shadow-[0_30px_80px_-40px_rgba(31,27,24,0.4)] sm:p-14">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="HH Jewelry"
                className="aspect-square w-full max-w-sm object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-site px-6 py-16 md:px-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">The edit</p>
            <h2 className="mt-3 font-display text-4xl font-medium text-ink md:text-5xl">
              Featured pieces
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden font-body text-sm uppercase tracking-[0.16em] text-gold-deep transition hover:text-ink sm:inline"
          >
            View all →
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="bg-cream/70 py-20">
        <div className="mx-auto max-w-site px-6 md:px-10">
          <div className="mx-auto max-w-xl text-center">
            <p className="eyebrow">Why HH Jewelry</p>
            <h2 className="mt-3 font-display text-4xl font-medium text-ink md:text-5xl">
              Considered, not crowded
            </h2>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-ivory p-8">
                <h3 className="font-display text-2xl font-medium text-ink">{v.title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-stone">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-6 py-24 md:px-10">
        <div className="text-center">
          <p className="eyebrow">Good to know</p>
          <h2 className="mt-3 font-display text-4xl font-medium text-ink md:text-5xl">
            Questions, answered
          </h2>
        </div>

        <div className="mt-12 divide-y divide-ink/10">
          {FAQ.map((item) => (
            <details key={item.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between font-display text-2xl font-medium text-ink">
                {item.q}
                <span className="font-body text-gold-deep transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 font-body leading-relaxed text-stone">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/products" className="btn-gold">
            Shop the collection
          </Link>
        </div>
      </section>
    </>
  );
}
