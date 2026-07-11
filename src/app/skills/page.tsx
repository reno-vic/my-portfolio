import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { skillGroups, techChoices } from "@/data/portfolio";

export default function Skills() {
  return (
    <PageTransition>
      <div className="grow pb-stack-xl relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <section className="mb-stack-xl">
          <div className="max-w-4xl">
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-5">
              Building robust systems for human scale.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
              I choose tools for clarity, reliability, and the kind of pressure the system will carry. Here is what I
              use and why it matters for clients.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-stack-xl">
          {skillGroups.slice(0, 3).map((group) => (
            <article key={group.title} className="glossy-card rounded-3xl p-8 min-h-65 flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-surface-container-highest flex items-center justify-center mb-6 text-primary border border-outline-variant/50">
                <span className="material-symbols-outlined">
                  {group.title.includes("Data") ? "database" : group.title.includes("Cloud") ? "cloud" : "code_blocks"}
                </span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-4">{group.title}</h2>
              <div className="flex flex-wrap gap-2 mt-auto">
                {group.items.map((item) => (
                  <span key={item} className="px-3 py-1 bg-surface-container rounded-full font-label-caps text-[10px] text-on-surface-variant border border-outline-variant/30 uppercase tracking-wider">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {techChoices.map((tech) => (
            <article key={tech.title} className="glossy-card rounded-3xl p-8">
              <p className="font-label-caps text-label-caps uppercase text-primary mb-4">Why I use it</p>
              <h3 className="font-headline-md text-3xl text-on-surface mb-4">{tech.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{tech.copy}</p>
            </article>
          ))}
        </section>

        <section className="mt-stack-xl">
          <div className="bg-surface-container-highest rounded-3xl p-10 md:p-16 text-center border border-outline-variant/30">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
              Need these tools pointed at a real business problem?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-xl mx-auto">
              Tell me what is slow, risky, or unclear in your workflow, and I will help shape the practical next step.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary-container text-on-primary font-label-caps text-label-caps px-8 py-4 rounded-2xl hover:scale-[1.02] transition-all duration-300 shadow-[0_4px_16px_rgba(255,95,31,0.3)]">
              Start a conversation
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
