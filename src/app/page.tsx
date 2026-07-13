import PageTransition from "@/components/PageTransition";
import Link from "next/link";

export default function Home() {
  return (
    <PageTransition>
      <section className="relative w-full min-h-115 md:min-h-125 flex flex-col items-center justify-start overflow-hidden pt-2 pb-8 md:pt-3 md:pb-10 grow">


        <div className="relative z-10 max-w-4xl mx-auto px-margin-mobile md:px-gutter flex flex-col items-center text-center space-y-6">
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/60 backdrop-blur-md border border-outline-variant shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
              Available for work
            </span>
          </div> */}

          <h1 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface font-extrabold">
            Hi.
            <br />
            I&apos;m{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">Victor,</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-secondary-container/60 -rotate-2 -z-10" />
            </span>
          </h1>

          <p className="font-headline-md text-2xl md:text-headline-md text-primary max-w-3xl mx-auto">
             a Software &amp; Cloud Engineer.
          </p>

          <p className="font-body-lg text-body-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto">
            I build software that scales smoothly. From managing cloud infrastructure to writing the backend code that powers everything, I engineer practical solutions that your business can depend on.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/projects" className="bg-primary-container text-white rounded-[24px] px-8 py-4 font-body-lg font-bold hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_16px_rgba(255,95,31,0.3)] hover:shadow-[0_8px_24px_rgba(255,95,31,0.5)] border border-white/20">
              See my work
            </Link>
            <Link href="/contact" className="bg-surface/60 backdrop-blur-md border border-outline-variant text-on-surface rounded-3xl px-8 py-4 font-body-lg font-bold hover:bg-surface-container-high transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
              Let&apos;s connect
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
