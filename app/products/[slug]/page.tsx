import Link from "next/link";
import { notFound } from "next/navigation";
import OrderForm from "@/components/OrderForm";
import { getProductBySlug, products, formatMAD } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  return { title: product ? `${product.name} — HH Jewelry` : "HH Jewelry" };
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const onSale = product.oldPrice && product.oldPrice > product.price;

  return (
    <div className="mx-auto max-w-site px-6 py-12 md:px-10 md:py-16">
      <nav className="mb-8 font-body text-xs uppercase tracking-[0.16em] text-stone">
        <Link href="/" className="transition hover:text-gold-deep">
          Home
        </Link>{" "}
        / {" "}
        <Link href="/products" className="transition hover:text-gold-deep">
          Collection
        </Link>{" "}
        / <span className="text-ink">{product.name}</span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* IMAGE */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="overflow-hidden rounded-[2rem] border border-gold/30 bg-cream shadow-[0_30px_80px_-50px_rgba(31,27,24,0.45)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.imageUrl}
              alt={product.name}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>

        {/* INFO + FORM */}
        <div>
          <p className="eyebrow">{product.category}</p>
          <h1 className="mt-3 font-display text-4xl font-medium text-ink md:text-5xl">
            {product.name}
          </h1>

          <div className="mt-4 flex items-baseline gap-4">
            <span className="font-display text-3xl text-ink">{formatMAD(product.price)}</span>
            {onSale && (
              <span className="font-body text-lg text-stone/60 line-through">
                {formatMAD(product.oldPrice!)}
              </span>
            )}
          </div>

          <p className="mt-6 font-body text-lg font-light leading-relaxed text-stone">
            {product.description}
          </p>

          <dl className="mt-8 space-y-3 border-y border-ink/10 py-6 font-body text-sm">
            <div className="flex justify-between">
              <dt className="text-stone">Material</dt>
              <dd className="text-ink">{product.material}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-stone">Available colors</dt>
              <dd className="text-ink">{product.colors.join(" · ")}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-stone">Delivery</dt>
              <dd className="text-ink">Across Morocco · Pay on delivery</dd>
            </div>
          </dl>

          <div className="mt-10 rounded-2xl border border-gold/30 bg-cream/50 p-6 md:p-8">
            <h2 className="font-display text-2xl font-medium text-ink">Place your order</h2>
            <p className="mt-1 font-body text-sm text-stone">
              Fill in your details — we&apos;ll call to confirm before shipping.
            </p>
            <div className="mt-6">
              <OrderForm
                productId={product.id}
                productName={product.name}
                colors={product.colors}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
