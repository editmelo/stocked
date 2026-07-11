"use client";

import { useState } from "react";

const CONTACT_EMAIL = "andre@stockedplus.com";
const CONTACT_PHONE = "317-389-8962";

export function Contact() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `New inquiry from ${name || "(name)"}${business ? ` at ${business}` : ""}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Business: ${business}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        ``,
        `Message:`,
        message,
      ].join("\n")
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
        {/* Left: Heading + contact info */}
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-600">
            Get in touch
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-balance">
            Let's talk shop.
          </h2>
          <p className="mt-5 text-lg text-pine/70 text-pretty leading-relaxed max-w-md">
            Tell us a little about your business and what you need. We'll get
            back to you within one business day.
          </p>

          <div className="mt-10 space-y-5">
            <ContactRow
              icon={<EmailIcon />}
              label="Email"
              value={CONTACT_EMAIL}
              href={`mailto:${CONTACT_EMAIL}`}
            />
            <ContactRow
              icon={<PhoneIcon />}
              label="Phone"
              value={CONTACT_PHONE}
              href={`tel:${CONTACT_PHONE.replace(/\D/g, "")}`}
            />
            <ContactRow
              icon={<PinIcon />}
              label="Based in"
              value="Indianapolis, Indiana"
            />
            <ContactRow
              icon={<ClockIcon />}
              label="Response time"
              value="Within 1 business day"
            />
          </div>
        </div>

        {/* Right: Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="rounded-[1.75rem] bg-bone p-8 md:p-10 border border-pine/10 shadow-soft"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field
                label="Your name"
                value={name}
                onChange={setName}
                placeholder="Jane Smith"
                required
              />
              <Field
                label="Business name"
                value={business}
                onChange={setBusiness}
                placeholder="Smith Retail Co."
              />
              <Field
                label="Email"
                type="email"
                value={email}
                onChange={setEmail}
                placeholder="you@business.com"
                required
              />
              <Field
                label="Phone"
                type="tel"
                value={phone}
                onChange={setPhone}
                placeholder="(555) 123-4567"
              />
            </div>

            <Field
              label="How can we help?"
              value={message}
              onChange={setMessage}
              placeholder="A little about your store, the work you need done, and timing..."
              textarea
              required
              className="mt-5"
            />

            <button
              type="submit"
              className="mt-7 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-teal-600 text-cream px-7 py-4 text-base font-semibold shadow-lifted hover:bg-teal-700 transition-colors"
            >
              Send message
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <p className="mt-4 text-xs text-pine/55">
              Submitting will open your email app with a pre-filled message —
              just hit send to reach us.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const valueEl = (
    <span className="font-display font-bold text-lg text-pine">{value}</span>
  );

  return (
    <div className="flex items-start gap-4">
      <span className="mt-1 size-10 flex-shrink-0 rounded-xl bg-sage-100 text-teal-700 flex items-center justify-center">
        {icon}
      </span>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-pine/55">
          {label}
        </div>
        <div className="mt-0.5">
          {href ? (
            <a href={href} className="hover:text-teal-700 transition-colors">
              {valueEl}
            </a>
          ) : (
            valueEl
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  textarea = false,
  required = false,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  className?: string;
}) {
  const baseClass =
    "w-full rounded-xl bg-cream border border-pine/10 px-4 py-3 text-base text-pine placeholder:text-pine/40 focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent transition";

  return (
    <label className={`block ${className}`}>
      <span className="block text-sm font-semibold text-pine/75 mb-1.5">
        {label}
        {required && <span className="text-sage-600 ml-0.5">*</span>}
      </span>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          rows={5}
          className={`${baseClass} resize-none`}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          className={baseClass}
        />
      )}
    </label>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2A14 14 0 013 6a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 22s7-7.5 7-13a7 7 0 10-14 0c0 5.5 7 13 7 13z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
