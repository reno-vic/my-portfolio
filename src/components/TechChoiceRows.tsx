"use client";

import { useState } from "react";

type TechChoice = {
  title: string;
  copy: string;
};

export default function TechChoiceRows({ choices }: { choices: TechChoice[] }) {
  const [openChoice, setOpenChoice] = useState<string | null>(choices[0]?.title ?? null);

  return (
    <div className="overflow-hidden rounded-3xl border border-outline-variant/30 bg-white/70 shadow-[0_15px_35px_-12px_rgba(171,54,0,0.16)]">
      {choices.map((tech, index) => {
        const isOpen = openChoice === tech.title;

        return (
          <div key={tech.title} className={index === 0 ? "" : "border-t border-outline-variant/25"}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenChoice(isOpen ? null : tech.title)}
              className="flex w-full cursor-pointer items-center justify-between gap-5 px-6 py-5 text-left transition-colors duration-200 hover:bg-surface-container-low focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-primary-container"
            >
              <span className="font-headline-md text-xl text-on-surface">{tech.title}</span>
              <span
                className={`material-symbols-outlined shrink-0 text-primary-container transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              >
                expand_more
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-200 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl px-6 pb-6 font-body-md text-body-md text-on-surface-variant">
                  {tech.copy}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
