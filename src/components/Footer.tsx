import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { contact, navLinks } from "@/data/portfolio";

const footerLinks = [
  { label: "LinkedIn", icon: FaLinkedinIn, href: contact.linkedinUrl },
  { label: "GitHub", icon: FaGithub, href: contact.githubUrl },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-outline-variant/20 bg-surface-container">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg">
          <div className="lg:col-span-5">
            <Link href="/" className="font-display-lg text-headline-md font-extrabold text-on-surface block mb-4">
              Victor Reno
            </Link>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Software &amp; Cloud Engineer building reliable business systems, cloud-native applications and operational tools for small, medium and large enterprises.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a href={`mailto:${contact.email}`} className="contact-row w-auto min-h-0 py-3">
                <span className="material-symbols-outlined text-primary-container text-[18px]">mail</span>
                {contact.email}
              </a>
              <a href={`tel:${contact.phone.replaceAll(" ", "")}`} className="contact-row w-auto min-h-0 py-3">
                <span className="material-symbols-outlined text-primary-container text-[18px]">call</span>
                {contact.phone}
              </a>
              <div className="contact-row w-auto min-h-0 py-3">
                <span className="material-symbols-outlined text-primary-container text-[18px]">location_on</span>
                {contact.address}
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-4">
              {footerLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="group inline-flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors duration-200 uppercase"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface border border-outline-variant/40 text-on-surface group-hover:border-primary-container group-hover:text-primary-container transition-colors duration-200">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="font-label-caps text-label-caps text-primary uppercase mb-4">Explore</p>
            <div className="grid grid-cols-1 gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors duration-200 uppercase"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <p className="font-label-caps text-label-caps text-primary uppercase mb-4">Start here</p>
            <div className="glossy-panel rounded-2xl p-5">
              <p className="font-headline-md text-2xl text-on-surface mb-3">Have something that needs to work better?</p>
              <p className="font-body-md text-body-md text-on-surface-variant mb-5">
                Send the rough version. I will help shape it into a practical next step.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary-container text-on-primary font-label-caps text-label-caps px-5 py-3 rounded-xl hover:scale-[1.02] transition-all duration-300 shadow-[0_4px_16px_rgba(255,95,31,0.25)]"
              >
                Get in touch
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-stack-lg pt-6 border-t border-outline-variant/25">
          <p className="font-body-md text-body-md text-primary">
            &copy; {year} Victor. Engineered with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
