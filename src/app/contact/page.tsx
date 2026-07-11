import ContactForm from "@/components/ContactForm";
import PageTransition from "@/components/PageTransition";
import ScheduleCallCard from "@/components/ScheduleCallCard";
import { contact } from "@/data/portfolio";

export default function Contact() {
  return (
    <PageTransition>
      <div className="grow pb-stack-xl relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg">
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div>
              <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-5">
                Let&apos;s work.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Ready to start your next project or get in touch? Drop a message or schedule a quick discovery call.
              </p>
            </div>

            <ScheduleCallCard />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href={`mailto:${contact.email}`} className="contact-row">
                <span className="material-symbols-outlined text-primary-container">mail</span>
                {contact.email}
              </a>
              <a href={`tel:${contact.phone.replaceAll(" ", "")}`} className="contact-row">
                <span className="material-symbols-outlined text-primary-container">call</span>
                {contact.phone}
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <ContactForm />
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
