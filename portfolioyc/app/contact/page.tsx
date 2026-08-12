'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Send, Linkedin, Github } from 'lucide-react';

/** Transparent, borderless-until-focus field that sits straight on the page. */
function Field({
  id,
  name,
  label,
  type = 'text',
  value,
  onChange,
  textarea = false,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  textarea?: boolean;
}) {
  const shared =
    'peer block w-full bg-transparent px-0 pt-6 pb-3 text-base text-black ' +
    'border-0 border-b-2 border-black/20 appearance-none outline-none ' +
    'focus:border-black focus:ring-0 transition-colors duration-300 placeholder-transparent';

  return (
    <div className="group relative">
      {textarea ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required
          rows={4}
          placeholder={label}
          className={`${shared} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required
          placeholder={label}
          className={shared}
        />
      )}

      <label
        htmlFor={id}
        className="pointer-events-none absolute left-0 top-0 text-[12px] font-bold uppercase
                   tracking-[0.16em] text-black transition-all duration-300
                   peer-placeholder-shown:top-6 peer-placeholder-shown:text-base
                   peer-placeholder-shown:font-medium peer-placeholder-shown:normal-case
                   peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-black
                   peer-focus:top-0 peer-focus:text-[12px] peer-focus:font-bold
                   peer-focus:uppercase peer-focus:tracking-[0.16em] peer-focus:text-black"
      >
        {label}
      </label>
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error ?? 'Failed to send message.');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Something went wrong. Try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen px-4 pb-28 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* ---- Header, straight on the page ---- */}
        <div className="mb-16 px-2 animate-fade-in-up md:mb-20">
          <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.2em] text-black">
            Get in touch
          </p>
          <h1 className="mb-6 text-5xl font-light leading-tight tracking-tight text-black md:text-6xl">
            Let's build <span className="font-bold">something great.</span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-black">
            Whether you have a question, a project idea, or just want to connect,
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 px-2 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          {/* ---- Contact details ---- */}
          <div
            className="animate-fade-in-up space-y-10"
            style={{ animationDelay: '150ms' }}
          >
            <div>
              <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.18em] text-black">
                Email
              </p>
              <a
                href="mailto:yanis.chelghoum@epitech.eu"
                className="group inline-flex items-center gap-3 text-lg font-semibold text-black transition-colors hover:opacity-60"
              >
                <Mail className="h-5 w-5 text-black transition-transform duration-300 group-hover:scale-110" strokeWidth={2} />
                yanis.chelghoum@epitech.eu
              </a>
            </div>

            <div>
              <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.18em] text-black">
                Location
              </p>
              <p className="inline-flex items-center gap-3 text-lg font-semibold text-black">
                <MapPin className="h-5 w-5 text-black" strokeWidth={2} />
                Strasbourg, France
              </p>
            </div>

            <div>
              <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.18em] text-black">
                Elsewhere
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/yanis-chelghoum-2536b4276/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-black text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white"
                >
                  <Linkedin className="h-5 w-5" strokeWidth={2} />
                </a>
                <a
                  href="https://github.com/yanischelghoum"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-black text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white"
                >
                  <Github className="h-5 w-5" strokeWidth={2} />
                </a>
              </div>
            </div>

            <p className="border-t-2 border-black/20 pt-8 text-[15px] font-medium text-black">
              Looking forward to our chat.
            </p>
          </div>

          {/* ---- Form, no container ---- */}
          <form
            onSubmit={handleSubmit}
            className="animate-fade-in-up space-y-10"
            style={{ animationDelay: '300ms' }}
          >
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <Field
                id="name"
                name="name"
                label="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
              <Field
                id="email"
                name="email"
                type="email"
                label="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <Field
              id="subject"
              name="subject"
              label="Subject"
              value={formData.subject}
              onChange={handleChange}
            />

            <Field
              id="message"
              name="message"
              label="Message"
              value={formData.message}
              onChange={handleChange}
              textarea
            />

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`group inline-flex items-center justify-center gap-2 rounded-full px-10 py-4
                            font-semibold text-white transition-all duration-300
                            hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/25
                            disabled:cursor-not-allowed disabled:opacity-70 ${
                              submitted
                                ? 'bg-green-700 hover:bg-green-800'
                                : 'bg-black hover:bg-neutral-800'
                            }`}
              >
                <span className={isSubmitting ? 'animate-pulse' : ''}>
                  {isSubmitting
                    ? 'Sending...'
                    : submitted
                    ? 'Message sent!'
                    : 'Send Message'}
                </span>
                {!isSubmitting && !submitted && (
                  <Send
                    className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    strokeWidth={2}
                  />
                )}
              </button>

              {error && (
                <p
                  role="alert"
                  className="text-[14px] font-semibold text-red-700"
                >
                  {error}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
