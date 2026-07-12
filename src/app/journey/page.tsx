import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import { awards, certifications, education, experiences, languages, pursuits } from "@/data/portfolio";

export default function Journey() {
  return (
    <PageTransition>
      <div className="grow pb-stack-xl relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <section className="mb-stack-xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-fixed text-on-secondary-fixed mb-stack-sm border border-secondary-fixed-dim/50">
              <span className="w-2 h-2 rounded-full bg-on-secondary-fixed" />
              <span className="font-label-caps text-label-caps uppercase">Journey</span>
            </div>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-5">
              The path behind the software I build.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              A quick walk through my education, work experience, certifications, recognition and the engineering
              areas I keep pursuing.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-stack-xl">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-primary-container">route</span>
              <h2 className="font-headline-md text-2xl text-on-surface">Career journey</h2>
              <div className="h-px flex-1 bg-outline-variant/40" />
            </div>

            <div className="border-l border-outline-variant pl-8">
              {experiences.map((experience) => (
                <article key={experience.company} className="relative mb-10 last:mb-0">
                  <span className="absolute left-[-2.15rem] top-2 w-3 h-3 rounded-full bg-primary-container border-2 border-surface" />
                  <p className="font-label-caps text-label-caps uppercase text-on-surface-variant mb-2">
                    {experience.period}
                  </p>
                  <h3 className="font-headline-md text-2xl md:text-headline-md text-on-surface">{experience.role}</h3>
                  <p className="font-label-caps text-label-caps uppercase text-primary mt-2">{experience.company}</p>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-4">{experience.copy}</p>
                  <ul className="mt-5 space-y-3">
                    {experience.highlights.map((item) => (
                      <li key={item} className="flex gap-3 font-body-md text-body-md text-on-surface-variant">
                        <span className="material-symbols-outlined text-primary-container text-[18px] mt-1">
                          arrow_right_alt
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-5 space-y-gutter">
            <div className="glossy-card rounded-3xl p-8">
              <p className="font-label-caps text-label-caps uppercase text-primary mb-3">Education</p>
              <div className="space-y-6">
                {education.map((item) => (
                  <article key={item.title}>
                    <p className="font-label-caps text-label-caps uppercase text-on-surface-variant mb-2">
                      {item.period}
                    </p>
                    <h2 className="font-headline-md text-2xl text-on-surface">{item.title}</h2>
                    <p className="font-label-caps text-label-caps uppercase text-primary mt-2">
                      {item.institution} / {item.meta}
                    </p>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-3">{item.copy}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="glossy-card rounded-3xl p-8">
              <p className="font-label-caps text-label-caps uppercase text-primary mb-4">Languages</p>
              <div className="flex flex-wrap gap-2">
                {languages.map((language) => (
                  <span
                    key={language}
                    className="px-3 py-1 bg-surface-container rounded-full font-label-caps text-[10px] text-on-surface-variant border border-outline-variant/30 uppercase tracking-wider"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-gutter mb-stack-xl">
          <div className="glossy-card rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary-container">workspace_premium</span>
              <h2 className="font-headline-md text-2xl text-on-surface">Certifications</h2>
            </div>
            <div className="space-y-5">
              {certifications.map((certification) => (
                <article key={certification.title} className="border-b border-outline-variant/25 pb-5 last:border-0 last:pb-0">
                  <p className="font-label-caps text-label-caps uppercase text-primary mb-2">{certification.period}</p>
                  <h3 className="font-headline-md text-xl text-on-surface">{certification.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2">{certification.issuer}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="glossy-card rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary-container">military_tech</span>
              <h2 className="font-headline-md text-2xl text-on-surface">Recognition</h2>
            </div>
            <div className="space-y-5">
              {awards.map((award) => (
                <article key={award.title} className="border-b border-outline-variant/25 pb-5 last:border-0 last:pb-0">
                  <p className="font-label-caps text-label-caps uppercase text-primary mb-2">{award.period}</p>
                  <h3 className="font-headline-md text-xl text-on-surface">{award.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2">{award.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface-container-highest rounded-3xl p-8 md:p-12 border border-outline-variant/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-5">
              <p className="font-label-caps text-label-caps uppercase text-primary mb-3">Hobbies & pursuits</p>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
                What I keep chasing.
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                My CV lists professional pursuits rather than personal hobbies, so I am keeping this honest: these are
                the areas I keep studying, building around, and trying to get sharper at.
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-wrap gap-3">
              {pursuits.map((pursuit) => (
                <span
                  key={pursuit}
                  className="px-4 py-2 bg-surface rounded-full font-label-caps text-[11px] text-on-surface-variant border border-outline-variant/30 uppercase tracking-wider"
                >
                  {pursuit}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-stack-lg text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary-container text-on-primary font-label-caps text-label-caps px-8 py-4 rounded-2xl hover:scale-[1.02] transition-all duration-300 shadow-[0_4px_16px_rgba(255,95,31,0.3)]">
            Start a conversation
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}
