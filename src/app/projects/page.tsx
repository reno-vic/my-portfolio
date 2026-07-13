import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import PageTransition from "@/components/PageTransition";
import { type Project, projects } from "@/data/portfolio";

const logoToneClasses = {
  neutral: "bg-white text-on-surface",
  coral: "bg-primary/10 text-primary",
  lime: "bg-secondary-fixed/50 text-on-secondary-fixed",
  ink: "bg-on-surface text-inverse-on-surface",
  gold: "bg-[#fff4cb] text-[#8a5a00]",
  stone: "bg-surface-container-high text-on-surface",
  transparent: "bg-transparent text-on-surface"
} satisfies Record<NonNullable<Project["logoTone"]>, string>;

function ProjectLogo({ project }: { project: Project }) {
  const isWide = project.logoShape === "wide";
  const isTransparent = project.logoTone === "transparent";
  const toneClass = logoToneClasses[project.logoTone ?? "neutral"];

  return (
    <div
      className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-2xl ${
        isTransparent
          ? "border-0 shadow-none"
          : "border border-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_12px_28px_rgba(27,28,27,0.08)]"
      } ${
        isWide ? "h-16 w-32 p-3" : isTransparent ? "h-16 w-16 p-0" : "h-16 w-16 p-2"
      } ${toneClass}`}
    >
      {project.logoSrc ? (
        <Image
          src={project.logoSrc}
          alt={project.logoAlt ?? `${project.title} logo`}
          width={isWide ? 160 : 96}
          height={isWide ? 72 : 96}
          sizes={isWide ? "128px" : "64px"}
          className={isWide ? "max-h-11 w-full object-contain" : isTransparent ? "h-16 w-16 object-contain" : "h-12 w-12 object-contain"}
        />
      ) : (
        <span className="font-display-lg text-xl font-extrabold tracking-tight">{project.logoText ?? project.title.slice(0, 2)}</span>
      )}
    </div>
  );
}

function ProjectDescription({ project }: { project: Project }) {
  if (project.title !== "Orionramp" || !project.description.includes("Hedera")) {
    return <>{project.description}</>;
  }

  const [before, after] = project.description.split("Hedera");

  return (
    <>
      {before}
      <a
        href="https://hedera.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-primary-container underline decoration-secondary-fixed decoration-2 underline-offset-4 transition-colors duration-200 hover:text-primary"
      >
        Hedera
      </a>
      {after}
    </>
  );
}

export default function Projects() {
  return (
    <PageTransition>
      <div className="grow pb-stack-xl relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop min-w-0 box-border">
        <section className="mb-stack-xl min-w-0">
          <div className="max-w-3xl min-w-0">
            <h1 className="font-display-lg text-[30px] leading-[1.16] md:text-display-lg text-on-surface mb-5 max-w-full wrap-break-word">
              Building <span className="text-primary-container">applications</span> that address problems.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl wrap-break-word">
              A selected look at projects I&apos;ve worked on and the stories behind them. Less theatre, more useful software.
            </p>
          </div>
        </section>

        <section className="mb-stack-xl min-w-0">
          <div className="flex min-w-0 items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-primary-container">terminal</span>
            <h2 className="font-headline-md text-2xl text-on-surface shrink-0">Selected Projects</h2>
            <div className="h-px flex-1 bg-outline-variant/40" />
          </div>

          <div className="grid min-w-0 grid-cols-1 items-start md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`glossy-card rounded-3xl p-6 flex flex-col min-w-0 overflow-hidden ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-8">
                  <ProjectLogo project={project} />
                  <span className="px-3 py-1 bg-surface-container rounded-full font-label-caps text-[10px] text-on-surface-variant border border-outline-variant/30 uppercase tracking-wider">
                    {project.status}
                  </span>
                </div>

                <p className="font-label-caps text-[10px] sm:text-label-caps leading-relaxed uppercase text-primary mb-3 wrap-anywhere">{project.eyebrow}</p>
                <h3 className="font-headline-md text-3xl text-on-surface mb-4 wrap-anywhere">{project.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-5 wrap-anywhere">
                  <ProjectDescription project={project} />
                </p>
                <p className="font-body-md text-body-md text-on-surface mb-5 bg-surface-container-low rounded-2xl p-4 wrap-anywhere">
                  {project.value}
                </p>

                <div className="flex min-w-0 flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/5 rounded-md font-label-mono text-[11px] text-primary wrap-anywhere">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {(project.actions ?? (project.link ? [{ label: "View", href: project.link }] : [])).map((action) =>
                    action.href ? (
                      <a
                        key={action.label}
                        href={action.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={action.tone === "github" ? `${project.title} ${action.label}` : undefined}
                        title={action.tone === "github" ? action.label : undefined}
                        className={
                          action.tone === "github"
                            ? "group inline-flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant/35 bg-surface-container text-on-surface transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-container hover:bg-on-surface hover:text-inverse-on-surface focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary-container"
                            : "group inline-flex max-w-full items-center gap-2 rounded-full border border-outline-variant/35 bg-surface-container px-4 py-2 font-label-caps text-label-caps text-primary-container uppercase transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-container hover:bg-primary-container hover:text-on-primary focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary-container wrap-anywhere"
                        }
                      >
                        {action.tone === "github" ? (
                          <FaGithub className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
                        ) : (
                          <>
                            <span className="group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4">
                              {action.label === "View project" ? "View" : action.label}
                            </span>
                            <span className="material-symbols-outlined text-lg no-underline transition-transform duration-200 group-hover:translate-x-0.5">
                              open_in_new
                            </span>
                          </>
                        )}
                      </a>
                    ) : (
                      <span
                        key={action.label}
                        className="inline-flex max-w-full items-center rounded-full bg-surface-container px-3 py-2 font-label-caps text-label-caps text-on-surface-variant uppercase wrap-anywhere"
                      >
                        {action.label}
                      </span>
                    )
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
