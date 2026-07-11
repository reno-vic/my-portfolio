import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { valueCards } from "@/data/portfolio";

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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-fixed text-on-secondary-fixed mb-stack-sm shadow-sm border border-secondary-fixed-dim/50">
                   <span className="w-2 h-2 rounded-full bg-on-secondary-fixed animate-pulse"></span>
                   <span className="font-label-caps text-label-caps uppercase">Value-Driven Engineering</span>
                </div>
                <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-5">
                   Architecting <span className="text-gradient">Digital Solutions</span> That Drive Growth.
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                   From robust web applications to complex fintech integrations, I deliver high-performance software tailored to your business processes.
                </p>
             </div>
          </div>
        </section>

        {/* Services Bento Grid */}
        <section className="mb-stack-xl">
           <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
               {/* Service 1: Custom Web Apps */}
               <div className="md:col-span-8 glossy-card rounded-3xl p-8 md:p-10 flex flex-col justify-between group h-full min-h-75">
                   <div className="mb-8">
                       <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary border border-primary/20">
                           <span className="material-symbols-outlined text-3xl icon-fill" style={{ fontVariationSettings: "'FILL' 1" }}>web</span>
                       </div>
                       <h2 className="font-headline-md text-headline-md text-on-surface mb-4 group-hover:text-primary transition-colors">Custom Web Applications</h2>
                       <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                           Scalable, secure, and high-performance applications built from the ground up. I leverage modern frameworks to create seamless, interactive experiences that users love and businesses rely on.
                       </p>
                   </div>
                   <div className="flex flex-wrap gap-2 mt-auto">
                       <span className="px-3 py-1 bg-surface-container rounded-full font-label-caps text-[10px] text-on-surface-variant border border-outline-variant/30 uppercase tracking-wider">React / Next.js</span>
                       <span className="px-3 py-1 bg-surface-container rounded-full font-label-caps text-[10px] text-on-surface-variant border border-outline-variant/30 uppercase tracking-wider">Node.js</span>
                       <span className="px-3 py-1 bg-surface-container rounded-full font-label-caps text-[10px] text-on-surface-variant border border-outline-variant/30 uppercase tracking-wider">Cloud Native</span>
                   </div>
               </div>
               
               {/* Decorative Image */}
               <div className="md:col-span-4 rounded-3xl overflow-hidden shadow-glossy-layer relative group h-full min-h-75">
                   <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDbYzFcaNMz-P3sM1XbmAjb1mXb17inymYhIadJHL3EagKrnE8vYf7li8s47FMWFBzsyppSOFHZYVQeiuEo9wXZgRWbgd2-iaoJvXvlWobdFy66O6r6zc-sJquLG3yypbgu5-US1eD9xniIR5g-nyuCIVoQ2TmDSdDt6nLv9GXiIz86WyrPTbwKy1zp5QBmWOCu9Uop5teGmUswWtwMr05Zxbb2g9M4czhNudFoJgKoc4-g4MZp-VdK')" }}></div>
                   <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                   <div className="absolute bottom-6 left-6 right-6">
                       <p className="font-label-caps text-label-caps text-on-primary opacity-80 uppercase tracking-widest mb-1">Architecture</p>
                       <p className="font-headline-md text-xl text-on-primary font-bold">Built to Scale</p>
                   </div>
               </div>

               {/* Service 2: Fintech */}
               <div className="md:col-span-5 glossy-card rounded-3xl p-8 flex flex-col group h-full">
                   <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center mb-6 text-on-surface border border-outline-variant/50">
                       <span className="material-symbols-outlined text-2xl">payments</span>
                   </div>
                   <h3 className="font-headline-md text-2xl text-on-surface mb-3 group-hover:text-primary transition-colors">Fintech & Integrations</h3>
                   <p className="font-body-md text-body-md text-on-surface-variant mb-6 grow">
                       Seamless integration of payment gateways like M-Pesa and Stripe. I build secure transaction flows and automated reconciliation systems to ensure financial data integrity.
                   </p>
                   <div className="flex gap-2">
                       <span className="px-3 py-1 bg-surface-container rounded-full font-label-caps text-[10px] text-on-surface-variant border border-outline-variant/30 uppercase">M-Pesa</span>
                       <span className="px-3 py-1 bg-surface-container rounded-full font-label-caps text-[10px] text-on-surface-variant border border-outline-variant/30 uppercase">Stripe API</span>
                   </div>
               </div>

               {/* Service 3: Automation */}
               <div className="md:col-span-7 glossy-card rounded-3xl p-8 flex flex-col group h-full relative overflow-hidden">
                   <div className="absolute right-0 top-0 w-32 h-32 bg-secondary-fixed/20 rounded-bl-full -z-10"></div>
                   <div className="w-12 h-12 rounded-xl bg-secondary-fixed/20 flex items-center justify-center mb-6 text-on-secondary-container border border-secondary-fixed/50">
                       <span className="material-symbols-outlined text-2xl">account_tree</span>
                   </div>
                   <h3 className="font-headline-md text-2xl text-on-surface mb-3 group-hover:text-primary transition-colors">Business Process Automation</h3>
                   <p className="font-body-md text-body-md text-on-surface-variant mb-6 max-w-lg grow">
                       Transforming manual tasks into streamlined digital workflows. From custom internal tools to complex ERP integrations, I help teams operate faster and with fewer errors.
                   </p>
                   <div className="flex gap-2">
                       <span className="px-3 py-1 bg-surface-container rounded-full font-label-caps text-[10px] text-on-surface-variant border border-outline-variant/30 uppercase">Workflows</span>
                       <span className="px-3 py-1 bg-surface-container rounded-full font-label-caps text-[10px] text-on-surface-variant border border-outline-variant/30 uppercase">Internal Tools</span>
                   </div>
               </div>
           </div>
        </section>

        <section className="mb-stack-xl">
           <div className="max-w-3xl mb-8">
              <p className="font-label-caps text-label-caps uppercase text-primary mb-3">Value I bring</p>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
                 Business value in plain English.
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                 The goal is not just to ship code. The goal is to help your team move faster, trust the system, and
                 keep growing without rebuilding everything from scratch.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {valueCards.map((card) => (
                 <article key={card.title} className="glossy-card rounded-3xl p-7 min-h-70 flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                       <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary-container border border-primary-container/20">
                          <span className="material-symbols-outlined">{card.icon}</span>
                       </div>
                       <span className="material-symbols-outlined text-primary-fixed-dim text-5xl opacity-30">
                          {card.icon}
                       </span>
                    </div>
                    <h3 className="font-headline-md text-2xl text-on-surface mb-4">{card.title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant grow">{card.description}</p>
                    <div className="border-t border-outline-variant/30 mt-6 pt-4 flex items-center justify-between gap-4">
                       <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Impact</span>
                       <span className="font-label-caps text-label-caps text-primary uppercase">{card.metric}</span>
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
              <Link href="/contact" className="relative z-10 inline-flex items-center gap-2 bg-on-surface text-inverse-on-surface font-label-caps text-label-caps px-8 py-4 rounded-full hover:bg-primary-container hover:text-on-primary transition-colors duration-300 shadow-md">
                 Start a Conversation
                 <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
           </div>
        </section>
      </div>
    </PageTransition>
  );
}
