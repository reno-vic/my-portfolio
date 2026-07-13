"use client";

import { useState } from "react";

type Service = {
  title: string;
  icon: string;
  description: string;
  tags: string[];
};

export default function ServiceRows({ services }: { services: Service[] }) {
  const [openService, setOpenService] = useState<string | null>(services[0]?.title ?? null);

  return (
    <div className="overflow-hidden rounded-3xl border border-outline-variant/30 bg-white/70 shadow-[0_15px_35px_-12px_rgba(171,54,0,0.16)]">
      {services.map((service, index) => {
        const isOpen = openService === service.title;

        return (
          <div key={service.title} className={index === 0 ? "" : "border-t border-outline-variant/25"}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenService(isOpen ? null : service.title)}
              className="group flex w-full cursor-pointer items-center justify-between gap-5 px-6 py-5 text-left transition-colors duration-200 hover:bg-surface-container-low focus-visible:outline focus-visible:outline-inset focus-visible:outline-primary-container"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary border border-outline-variant/50 transition-colors duration-300 group-hover:bg-primary/10 group-hover:border-primary/20">
                   <span className="material-symbols-outlined text-xl">{service.icon}</span>
                </div>
                <span className="font-headline-md text-xl text-on-surface group-hover:text-primary transition-colors duration-200">{service.title}</span>
              </div>
              <span
                className="material-symbols-outlined shrink-0 text-primary-container transition-transform duration-200"
                aria-hidden="true"
              >
                {isOpen ? "remove" : "add"}
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-200 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 pt-2 pl-22 md:pl-22">
                  <p className="max-w-3xl font-body-md text-body-md text-on-surface-variant mb-5">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                     {service.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-0.5 bg-surface-container rounded-full font-label-caps text-[10px] text-on-surface-variant border border-outline-variant/30 uppercase tracking-wider">{tag}</span>
                     ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
