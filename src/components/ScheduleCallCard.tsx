"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { contact } from "@/data/portfolio";

type SubmitState = "idle" | "sending" | "sent" | "error";
type IntlWithTimeZones = typeof Intl & {
  supportedValuesOf?: (key: "timeZone") => string[];
};

const fallbackTimeZones = [
  "Africa/Nairobi",
  "Africa/Lagos",
  "Africa/Johannesburg",
  "America/New_York",
  "America/Chicago",
  "America/Denver",
  "America/Los_Angeles",
  "Asia/Dubai",
  "Asia/Kolkata",
  "Asia/Singapore",
  "Asia/Tokyo",
  "Australia/Sydney",
  "Europe/Berlin",
  "Europe/London",
  "Europe/Paris",
  "UTC",
];

export default function ScheduleCallCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const schedulingUrl = contact.schedulingUrl.trim();
  const hasSchedulingUrl = /^https?:\/\//.test(schedulingUrl);
  const timeZones = useMemo(() => {
    const values = (Intl as IntlWithTimeZones).supportedValuesOf?.("timeZone") || fallbackTimeZones;
    return Array.from(new Set(["Africa/Nairobi", ...values, "UTC"])).sort((first, second) => {
      if (first === "Africa/Nairobi") return -1;
      if (second === "Africa/Nairobi") return 1;
      return first.localeCompare(second);
    });
  }, []);
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (hasSchedulingUrl) {
    return (
      <a
        href={schedulingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="glossy-card rounded-2xl p-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between border border-outline-variant/40 cursor-pointer"
      >
        <ScheduleCardContent buttonLabel="Book Now" />
      </a>
    );
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmitState("sending");
    setStatusMessage("");

    try {
      const response = await fetch("/api/schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          date: formData.get("date"),
          time: formData.get("time"),
          timezone: formData.get("timezone"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Call request failed. Please try again.");
      }

      form.reset();
      setSubmitState("sent");
      setStatusMessage("Call request sent. I will get the details and follow up with a confirmed time.");
    } catch (error) {
      setSubmitState("error");
      setStatusMessage(error instanceof Error ? error.message : "Call request failed. Please try again.");
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setStatusMessage("");
          setSubmitState("idle");
          setIsOpen(true);
        }}
        className="glossy-card rounded-2xl p-6 flex w-full cursor-pointer flex-col gap-5 text-left sm:flex-row sm:items-center sm:justify-between border border-outline-variant/40"
      >
        <ScheduleCardContent buttonLabel="Book Now" />
      </button>

      {isOpen && typeof document !== "undefined"
        ? createPortal(
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-on-surface/30 px-4 py-4 backdrop-blur-sm">
              <div className="glossy-panel w-full max-w-3xl overflow-visible rounded-[1.25rem] border border-white/60 bg-surface-container-lowest p-4 shadow-[0_24px_80px_rgba(27,28,27,0.24)] sm:p-5 md:p-6">
                <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-label-caps text-label-caps uppercase text-primary">Schedule a call</p>
                <h2 className="mt-1 font-headline-md text-2xl md:text-3xl text-on-surface">Pick a time that works.</h2>
                <p className="mt-1 font-body-md text-sm md:text-body-md text-on-surface-variant">
                  Share a preferred slot and I will get a notification with the details.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="cursor-pointer rounded-full bg-surface-container p-2 text-on-surface transition-colors duration-200 hover:bg-surface-container-high"
                aria-label="Close call scheduler"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
                </div>

            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="hidden" aria-hidden="true">
                <label htmlFor="schedule-website">Website</label>
                <input id="schedule-website" name="website" tabIndex={-1} autoComplete="off" type="text" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Field label="Name">
                  <input name="name" className="form-input" placeholder="YOUR NAME" type="text" required />
                </Field>
                <Field label="Email">
                  <input name="email" className="form-input" placeholder="HELLO@EXAMPLE.COM" type="email" required />
                </Field>
                <Field label="Date">
                  <input name="date" className="form-input" type="date" min={today} required />
                </Field>
                <Field label="Time">
                  <input name="time" className="form-input" type="time" required />
                </Field>
              </div>

              <Field label="Timezone" className="mt-3">
                <select name="timezone" className="form-input cursor-pointer" defaultValue="Africa/Nairobi" required>
                  {timeZones.map((timeZone) => (
                    <option key={timeZone} value={timeZone}>
                      {timeZone}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Quick context" className="mt-3">
                <textarea
                  name="message"
                  className="form-input min-h-20 resize-none"
                  placeholder="WHAT SHOULD WE TALK ABOUT?"
                  rows={3}
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

              <button
                className="mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary-container py-4 font-label-caps text-label-caps uppercase tracking-widest text-on-primary shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_2px_4px_rgba(255,95,31,0.2)] transition-all duration-200 hover:scale-[1.01] active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
                type="submit"
                disabled={submitState === "sending"}
              >
                {submitState === "sending" ? "Sending request..." : "Send call request"}
                <span className="material-symbols-outlined text-[18px]">
                  {submitState === "sending" ? "progress_activity" : "event_available"}
                </span>
              </button>
            </form>
          </div>
        </div>,
            document.body
          )
        : null}
    </>
  );
}

function ScheduleCardContent({ buttonLabel }: { buttonLabel: string }) {
  return (
    <>
      <div className="flex items-center gap-5">
        <span className="w-16 h-16 rounded-full bg-primary-container/10 text-primary-container flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-3xl">calendar_month</span>
        </span>
        <span>
          <span className="block font-headline-md text-2xl text-on-surface">Schedule a Call</span>
          <span className="block font-body-md text-body-md text-on-surface-variant mt-1">
            Find a time on my calendar.
          </span>
        </span>
      </div>
      <span className="inline-flex items-center justify-center bg-surface-container-high px-5 py-3 rounded-md font-label-caps text-label-caps text-on-surface uppercase tracking-widest shrink-0">
        {buttonLabel}
      </span>
    </>
  );
}

function Field({
  children,
  className = "",
  label,
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
