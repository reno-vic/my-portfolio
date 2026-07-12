import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import SkillCards from "@/components/SkillCards";
import TechChoiceRows from "@/components/TechChoiceRows";
import { skillGroups, techChoices } from "@/data/portfolio";

export default function Skills() {
  return (
    <PageTransition>
      <div className="grow pb-stack-xl relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <section className="mb-stack-xl">
          <div className="max-w-4xl">
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-5">
              Tech Stack & <span className="text-primary-container">Competencies</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
              I choose tools based on the job they need to do.
            </p>
          </div>
        </section>

        <SkillCards groups={skillGroups} />

        <section>
          <div className="mb-6">
            <p className="font-label-caps text-label-caps uppercase text-primary">Tool choices</p>
            <h2 className="mt-3 font-headline-md text-3xl text-on-surface">Why I use</h2>
          </div>

          <TechChoiceRows choices={techChoices} />
        </section>

        <section className="mt-stack-xl">
          <div className="bg-surface-container-highest rounded-3xl p-10 md:p-16 text-center border border-outline-variant/30">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
              Need these tools pointed at a real business problem?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-xl mx-auto">
              Tell me what you are trying to build, fix, automate, or understand, and I will help turn the rough problem
              into a practical next step.
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
