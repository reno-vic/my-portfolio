"use client";

import { useState } from "react";

type SubmitState = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    setSubmitState("sending");
    setStatusMessage("");

    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      form.reset();
      setSubmitState("sent");
      setStatusMessage("Message sent. I will get it in my inbox and reply as soon as I can.");
    } catch (error) {
      setSubmitState("error");
      setStatusMessage(error instanceof Error ? error.message : "Message failed. Please try again.");
    }
  };

  return (
    <form className="glossy-panel p-6 md:p-8 rounded-2xl bg-surface-container-lowest" onSubmit={handleSubmit}>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" type="text" />
      </div>

      <Field label="Name">
        <input name="name" className="form-input" id="name" placeholder="YOUR NAME" type="text" required />
      </Field>

      <Field label="Email" className="mt-5">
        <input name="email" className="form-input" id="email" placeholder="HELLO@EXAMPLE.COM" type="email" required />
      </Field>

      <Field label="Leave a message" className="mt-5">
        <textarea
          name="message"
          className="form-input resize-y min-h-36"
          id="message"
          placeholder="TELL ME, WHAT SHALL WE BUILD, FIX, OR IMPROVE?"

          rows={5}
          required
        />
      </Field>

      {statusMessage ? (
        <p
          className={`mt-4 p-3 rounded font-label-caps text-label-caps ${
            submitState === "sent"
              ? "text-[#5b6900] bg-[#d0ed00]/20"
              : "text-error bg-error-container"
          }`}
          role={submitState === "error" ? "alert" : "status"}
        >
          {statusMessage}
        </p>
      ) : null}

      <button className="w-full bg-primary-container text-on-primary font-label-caps text-label-caps py-4 rounded-lg mt-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_2px_4px_rgba(255,95,31,0.2)] hover:scale-[1.01] transition-all duration-200 uppercase tracking-widest active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 flex items-center justify-center gap-2" type="submit" disabled={submitState === "sending"}>
        {submitState === "sending" ? "Sending..." : "Send Message"}
        <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>
          {submitState === "sending" ? "progress_activity" : "send"}
        </span>
      </button>
    </form>
  );
}

function Field({
  children,
  className = "",
  label
}: {
  children: React.ReactNode;
  className?: string;
  label: string;
}) {
  return (
    <label className={`block font-label-caps text-label-caps text-on-surface mb-2 uppercase ${className}`}>
      {label}
      {children}
    </label>
  );
}
