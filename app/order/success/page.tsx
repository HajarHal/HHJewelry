import Link from "next/link";

export const metadata = {
  title: "Order Confirmed — HH Jewelry",
};

export default function OrderSuccessPage({
  searchParams,
}: {
  searchParams: { ref?: string };
}) {
  const ref = searchParams.ref;

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-6 py-28 text-center md:py-36">
      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gold bg-gold/10">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#B7934A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </div>

      <p className="eyebrow mt-8">Thank you</p>
      <h1 className="mt-3 font-display text-5xl font-medium text-ink">
        Your order is confirmed
      </h1>

      {ref && (
        <p className="mt-4 font-body text-sm uppercase tracking-[0.16em] text-stone">
          Reference · #{ref.padStart(4, "0")}
        </p>
      )}

      <p className="mt-6 font-body text-lg font-light leading-relaxed text-stone">
        We&apos;ve received your order and will call you shortly on the number you
        provided to confirm the details. Payment is made on delivery — no action
        needed for now.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link href="/products" className="btn-gold">
          Continue shopping
        </Link>
        <Link href="/" className="btn-outline">
          Back home
        </Link>
      </div>
    </div>
  );
}
