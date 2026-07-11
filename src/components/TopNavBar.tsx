"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { contact, navLinks } from "@/data/portfolio";

export default function TopNavBar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isContactActive = pathname === "/contact";

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-md border-b border-white/40 shadow-[0_4px_24px_0_rgba(0,0,0,0.02)]">
      <div className="w-full max-w-340 mx-auto px-margin-mobile md:px-8 xl:px-10 flex justify-between items-center h-16 box-border">
        <Link href="/" className="brand-mark font-display-lg text-[26px] md:text-[30px] leading-none font-extrabold flex items-center">
          <span className="brand-mark-text">Victor Reno</span>
          <svg
            aria-hidden="true"
            className="brand-mark-swoosh"
            focusable="false"
            preserveAspectRatio="none"
            viewBox="0 0 220 28"
          >
            <path
              className="brand-mark-swoosh-shadow"
              d="M7 20 C42 29 76 12 113 17 C149 22 178 24 214 11"
            />
            <path
              className="brand-mark-swoosh-main"
              d="M5 15 C39 23 74 10 108 14 C145 18 178 22 216 7"
            />
          </svg>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
              className={`inline-flex items-center gap-1.5 font-label-caps text-label-caps transition-all duration-200 uppercase rounded-full px-3 py-2 ${
                isActive
                    ? "bg-secondary-container text-on-surface shadow-[0_8px_24px_rgba(208,237,0,0.25)]"
                    : "text-on-surface-variant hover:text-primary hover:bg-surface-container"
                }`}
              >
                {link.name === "SERVICES" ? (
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                    design_services
                  </span>
                ) : null}
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Trailing Action */}
        <Link href="/contact" className={`bg-primary-container text-white rounded-2xl px-5 py-2.5 font-body-md font-bold hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_16px_rgba(255,95,31,0.3)] hover:shadow-[0_8px_24px_rgba(255,95,31,0.5)] hidden md:block border ${
          isContactActive ? "border-secondary-container/70 shadow-[0_8px_24px_rgba(255,95,31,0.35)]" : "border-white/20"
        }`}>
          Get in touch
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-primary p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-md border-b border-surface-border">
          <div className="flex flex-col px-margin-mobile py-4 gap-4">
             {navLinks.map((link) => (
               <Link
                 key={link.name}
                 href={link.href}
                 onClick={() => setMobileMenuOpen(false)}
                 className={`inline-flex items-center gap-2 font-label-caps text-label-caps uppercase py-2 ${
                   pathname === link.href ? "bg-secondary-container text-on-surface font-bold px-3 rounded-xl" : "text-on-surface-variant"
                 }`}
               >
                 {link.name === "SERVICES" ? (
                   <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                     design_services
                   </span>
                 ) : null}
                 {link.name}
               </Link>
             ))}
             <Link 
               href="/contact"
               onClick={() => setMobileMenuOpen(false)}
               className={`bg-primary-container text-white text-center rounded-2xl px-6 py-3 font-body-md font-bold mt-2 ${
                 isContactActive ? "ring-2 ring-secondary-container/60" : ""
               }`}
             >
               Get in touch
             </Link>
             <a href={`mailto:${contact.email}`} className="font-label-caps text-label-caps text-center uppercase text-on-surface-variant">
               {contact.email}
             </a>
          </div>
        </div>
      )}
    </nav>
  );
}
