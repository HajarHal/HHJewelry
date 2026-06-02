"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  productId: number;
  productName: string;
  colors: string[];
};

const MOROCCAN_CITIES = [
  "Casablanca",
  "Rabat",
  "Marrakech",
  "Fès",
  "Tanger",
  "Agadir",
  "Meknès",
  "Oujda",
  "Kénitra",
  "Tétouan",
  "Other",
];

export default function OrderForm({ productId, productName, colors }: Props) {
  const router = useRouter();
  const [form, setForm] = useState({
    customerName: "",
    phone: "",
    city: "",
    address: "",
    quantity: 1,
    color: colors[0] ?? "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  }

  function validate() {
    const next: Record<string, string> = {};
    if (!form.customerName.trim()) next.customerName = "Please enter your name.";
    if (!form.phone.trim()) next.phone = "Phone number is required.";
    else if (!/^[0-9+\s-]{8,}$/.test(form.phone.trim()))
      next.phone = "Enter a valid phone number.";
    if (!form.city.trim()) next.city = "Please choose your city.";
    if (!form.address.trim()) next.address = "Delivery address is required.";
    if (form.quantity < 1) next.quantity = "Quantity must be at least 1.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError("");
    if (!validate()) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, productId }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        router.push(`/order/success?ref=${data.order.id}`);
      } else {
        setServerError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label className="field-label" htmlFor="customerName">
          Full name
        </label>
        <input
          id="customerName"
          className="field"
          placeholder="Your full name"
          value={form.customerName}
          onChange={(e) => update("customerName", e.target.value)}
        />
        {errors.customerName && (
          <p className="mt-1 text-xs text-red-700">{errors.customerName}</p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="phone">
            Phone number
          </label>
          <input
            id="phone"
            inputMode="tel"
            className="field"
            placeholder="06 00 00 00 00"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-700">{errors.phone}</p>}
        </div>

        <div>
          <label className="field-label" htmlFor="city">
            City
          </label>
          <select
            id="city"
            className="field"
            value={form.city}
            onChange={(e) => update("city", e.target.value)}
          >
            <option value="">Select your city</option>
            {MOROCCAN_CITIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors.city && <p className="mt-1 text-xs text-red-700">{errors.city}</p>}
        </div>
      </div>

      <div>
        <label className="field-label" htmlFor="address">
          Full delivery address
        </label>
        <textarea
          id="address"
          rows={3}
          className="field resize-none"
          placeholder="Street, building, apartment, neighbourhood…"
          value={form.address}
          onChange={(e) => update("address", e.target.value)}
        />
        {errors.address && <p className="mt-1 text-xs text-red-700">{errors.address}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="color">
            Color / model
          </label>
          {colors.length > 0 ? (
            <select
              id="color"
              className="field"
              value={form.color}
              onChange={(e) => update("color", e.target.value)}
            >
              {colors.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          ) : (
            <input
              id="color"
              className="field"
              placeholder="Preferred color / model"
              value={form.color}
              onChange={(e) => update("color", e.target.value)}
            />
          )}
        </div>

        <div>
          <label className="field-label">Quantity</label>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="h-11 w-11 rounded-xl border border-ink/15 font-body text-lg text-ink transition hover:border-gold-deep hover:text-gold-deep"
              onClick={() => update("quantity", Math.max(1, form.quantity - 1))}
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="w-8 text-center font-body text-base">{form.quantity}</span>
            <button
              type="button"
              className="h-11 w-11 rounded-xl border border-ink/15 font-body text-lg text-ink transition hover:border-gold-deep hover:text-gold-deep"
              onClick={() => update("quantity", form.quantity + 1)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div>
        <label className="field-label" htmlFor="notes">
          Notes <span className="lowercase tracking-normal">(optional)</span>
        </label>
        <textarea
          id="notes"
          rows={2}
          className="field resize-none"
          placeholder="Anything we should know for delivery"
          value={form.notes}
          onChange={(e) => update("notes", e.target.value)}
        />
      </div>

      {serverError && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{serverError}</p>
      )}

      <button type="submit" className="btn-gold w-full" disabled={submitting}>
        {submitting ? "Placing order…" : "Confirm Order"}
      </button>

      <p className="text-center font-body text-xs text-stone">
        Payment on delivery · We&apos;ll call you to confirm
      </p>
    </form>
  );
}
