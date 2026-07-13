import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { services, valueCards, clientTypes, references } from "@/data/portfolio";
import ServiceRows from "@/components/ServiceRows";

export default function Services() {
  return (
    <PageTransition>
      <div className="grow pb-stack-xl relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Decorative Ambient Glows */}
        <div className="fixed top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-primary-fixed/30 blur-[120px] pointer-events-none -z-10"></div>
        <div className="fixed bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-secondary-fixed/10 blur-[100px] pointer-events-none -z-10"></div>

        {/* Hero Section */}
        <section className="mb-stack-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
             <div className="md:col-span-8 md:col-start-3 text-center">
                
                <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-5">
                   I Build the Software Your <span className="text-gradient">Business Runs On.</span>
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                   Whatever the problem, I write clean code that solves it and keeps working long after launch.
                </p>
             </div>
          </div>
        </section>

        {/* Browsable Services Grid */}
        <section className="mb-stack-xl">
           <div className="mb-8">
              <p className="font-label-caps text-label-caps uppercase text-primary mb-3">What I build</p>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
                 Find your project here.
              </h2>
           </div>

           <ServiceRows services={services} />
        </section>

        {/* Who I Work With */}
        <section className="mb-stack-xl">
           <div className="text-center mb-8">
              <p className="font-label-caps text-label-caps uppercase text-primary mb-3">Who I work with</p>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-3">
                 From solo founders to large organisations.
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
                 I have built software for small teams running on WhatsApp, fintech startups at innovation labs, Swiss ecommerce brands, and enterprise-scale internal tools. If you have a problem that software can solve, we can work together.
              </p>
           </div>
           <div className="flex flex-wrap justify-center gap-3">
              {clientTypes.map((type) => (
                 <span key={type} className="px-5 py-2.5 rounded-full bg-surface-container-high border border-outline-variant/40 font-body-md text-body-md text-on-surface hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-200 cursor-default">
                    {type}
                 </span>
              ))}
           </div>
        </section>

        {/* Why Choose Me */}
        <section className="mb-stack-xl">
           <div className="max-w-3xl mb-8">
              <p className="font-label-caps text-label-caps uppercase text-primary mb-3">The difference</p>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
                 Why Clients Choose Me
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                 It is not just about writing code. It is about how the work gets done — the communication, the quality, the approach, and the results you can actually see.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {valueCards.map((card, index) => {
                 const colors = [
                    "text-primary-container bg-primary-container/10 border-primary-container/20",
                    "text-blue-600 bg-blue-500/10 border-blue-500/20",
                    "text-emerald-600 bg-emerald-500/10 border-emerald-500/20",
                    "text-purple-600 bg-purple-500/10 border-purple-500/20",
                    "text-rose-600 bg-rose-500/10 border-rose-500/20"
                 ];
                 const colorClass = colors[index % colors.length];
                 const watermarkColors = [
                    "text-primary-container",
                    "text-blue-600",
                    "text-emerald-600",
                    "text-purple-600",
                    "text-rose-600"
                 ];
                 const watermarkClass = watermarkColors[index % watermarkColors.length];

                 return (
                 <article key={card.title} className="glossy-card rounded-3xl p-7 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4 gap-4">
                       <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center border ${colorClass}`}>
                             <span className="material-symbols-outlined">{card.icon}</span>
                          </div>
                          <h3 className="font-headline-md text-xl text-on-surface leading-tight">{card.title}</h3>
                       </div>
                       <span className={`material-symbols-outlined text-5xl opacity-10 shrink-0 ${watermarkClass} hidden sm:block`}>
                          {card.icon}
                       </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant grow pt-2">{card.description}</p>
                 </article>
                 );
              })}
           </div>
        </section>

        {/* References */}
        <section id="references" className="mb-stack-xl scroll-mt-24">
           <div className="max-w-3xl mb-8">
              <p className="font-label-caps text-label-caps uppercase text-primary mb-3">References</p>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
                 People I Have Worked With
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                 Real projects. Real people. Here is what working with me looks like from the other side.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {references.map((ref) => (
                 <article key={ref.name} className="glossy-card rounded-3xl p-7 flex flex-col">
                    {/* Quote icon */}
                    <span className="material-symbols-outlined text-primary-fixed-dim text-4xl opacity-25 mb-4">format_quote</span>
                    <p className="font-body-md text-body-md text-on-surface-variant grow italic leading-relaxed mb-6">
                       &ldquo;{ref.quote}&rdquo;
                    </p>
                    <div className="border-t border-outline-variant/30 pt-5 flex items-center gap-4">
                       <div className="w-11 h-11 rounded-full bg-primary-container/15 border border-primary-container/25 flex items-center justify-center shrink-0">
                          <span className="font-label-caps text-label-caps text-primary font-bold">{ref.initials}</span>
                       </div>
                       <div className="min-w-0">
                          <p className="font-headline-md text-sm text-on-surface font-bold truncate">{ref.name}</p>
                          <p className="font-body-md text-xs text-on-surface-variant truncate">{ref.role}, {ref.company}</p>
                          <p className="font-body-md text-xs text-on-surface-variant">{ref.flag} {ref.country}</p>
                       </div>
                    </div>
                 </article>
              ))}
           </div>
        </section>

        {/* CTA Section */}
        <section className="mt-stack-xl">
           <div className="bg-surface-container-highest rounded-3xl p-10 md:p-16 text-center border border-outline-variant/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4 relative z-10">Ready to build something impactful?</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-xl mx-auto relative z-10">Let&apos;s discuss how customized engineering solutions can accelerate your business objectives.</p>
              <Link href="/contact" className="relative z-10 inline-flex items-center gap-2 bg-primary-container text-on-primary font-label-caps text-label-caps px-8 py-4 rounded-full hover:scale-[1.02] transition-all duration-300 shadow-[0_4px_16px_rgba(255,95,31,0.3)]">
                 Start a Conversation
                 <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
           </div>
        </section>
      </div>
    </PageTransition>
  );
}
