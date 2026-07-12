"use client";

import { useEffect, useState } from "react";

type SkillGroup = {
  title: string;
  icon: string;
  items: string[];
  detail: string;
};

export default function SkillCards({ groups }: { groups: SkillGroup[] }) {
  const [openCard, setOpenCard] = useState<string | null>(null);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenCard(null);
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    if (!openCard) {
      return;
    }

    function closeOnOutsideClick(event: PointerEvent) {
      const target = event.target as Element | null;
      const activeCard = target?.closest("[data-skill-card]");

      if (activeCard?.getAttribute("data-skill-card") !== openCard) {
        setOpenCard(null);
      }
    }

    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, [openCard]);

  return (
    <section className="grid grid-cols-1 items-start gap-gutter md:grid-cols-2 lg:grid-cols-3 mb-stack-xl">
      {groups.map((group) => {
        const isOpen = openCard === group.title;

        return (
          <article
            key={group.title}
            data-skill-card={group.title}
            className={`glossy-card relative flex self-start !overflow-visible rounded-3xl p-8 transition-transform duration-300 ${
              isOpen ? "z-30" : "z-0"
            }`}
          >
            <div className="flex w-full flex-col">
              <div className="w-14 h-14 rounded-xl bg-surface-container-highest flex items-center justify-center mb-6 text-primary border border-outline-variant/50">
                <span className="material-symbols-outlined">{group.icon}</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-4">{group.title}</h2>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-surface-container rounded-full font-label-caps text-[10px] text-on-surface-variant border border-outline-variant/30 uppercase tracking-wider"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="relative mt-6 border-t border-outline-variant/25 pt-4">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenCard(isOpen ? null : group.title)}
                  className="inline-flex cursor-pointer items-center gap-2 font-label-caps text-label-caps uppercase text-primary-container transition-colors duration-200 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-container"
                >
                  <span className="underline decoration-primary-container/40 decoration-2 underline-offset-4">
                    Read more
                  </span>
                  <span
                    className={`material-symbols-outlined text-base no-underline transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    expand_more
                  </span>
                </button>

                <div
                  className={`absolute left-0 right-0 top-full mt-3 rounded-2xl border border-outline-variant/35 bg-white/95 p-5 shadow-[0_18px_44px_-18px_rgba(27,28,27,0.35),0_14px_36px_-22px_rgba(255,95,31,0.45)] backdrop-blur-xl transition-all duration-200 ${
                    isOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-2 opacity-0"
                  }`}
                >
                  <p className="font-body-md text-body-md text-on-surface-variant">{group.detail}</p>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
