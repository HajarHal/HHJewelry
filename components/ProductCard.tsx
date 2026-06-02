import Link from "next/link";
import { Product, formatMAD } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const onSale = product.oldPrice && product.oldPrice > product.price;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col"
    >
      <div className="relative overflow-hidden rounded-2xl bg-cream">
        {onSale && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-ink px-3 py-1 font-body text-[0.6rem] uppercase tracking-[0.2em] text-ivory">
            Sale
          </span>
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>

      <div className="mt-4 flex flex-col gap-1">
        <p className="eyebrow">{product.category}</p>
        <h3 className="font-display text-xl font-medium text-ink transition group-hover:text-gold-deep">
          {product.name}
        </h3>
        <p className="line-clamp-2 font-body text-sm leading-relaxed text-stone">
          {product.description}
        </p>
        <div className="mt-2 flex items-baseline gap-3">
          <span className="font-body text-base text-ink">{formatMAD(product.price)}</span>
          {onSale && (
            <span className="font-body text-sm text-stone/60 line-through">
              {formatMAD(product.oldPrice!)}
            </span>
          )}
        </div>
        <span className="mt-3 font-body text-xs uppercase tracking-[0.18em] text-gold-deep opacity-0 transition group-hover:opacity-100">
          Order now →
        </span>
      </div>
    </Link>
  );
}
