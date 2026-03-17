import Link from "next/link";
import Reveal from "@/components/Reveal";
import { getDictionary, Locale } from "@/lib/site-content";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);

  return (
    <main className="page-grid">
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <Reveal>
            <div>
              <p className="mb-5 inline-flex rounded-full border border-[#f6cf84]/30 bg-[#f6cf84]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#f6cf84]">
                {dictionary.heroEyebrow}
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white md:text-7xl">
                {dictionary.heroTitle}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{dictionary.heroText}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={`/${locale}/contact`}
                  className="rounded-full bg-[#f6cf84] px-6 py-4 font-semibold text-slate-950 transition hover:bg-[#ffdd9c]"
                >
                  {dictionary.heroPrimary}
                </Link>
                <Link
                  href={`/${locale}/services`}
                  className="rounded-full border border-white/15 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  {dictionary.heroSecondary}
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass rounded-[32px] p-6">
              <div className="rounded-[28px] bg-[linear-gradient(180deg,rgba(16,81,148,0.96),rgba(7,17,31,0.88))] p-7 shadow-[0_28px_100px_rgba(0,0,0,0.28)]">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f6cf84]">Authority stack</p>
                <div className="mt-6 grid gap-4">
                  {dictionary.proof.map((item, index) => (
                    <div key={item} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">0{index + 1}</p>
                      <p className="text-base leading-7 text-slate-200">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f6cf84]">Authority</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">{dictionary.authorityTitle}</h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="glass rounded-[32px] p-8 text-lg leading-8 text-slate-300">{dictionary.authorityText}</div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <Reveal>
            <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f6cf84]">Differentiators</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">{dictionary.differentiatorsTitle}</h2>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {dictionary.differentiators.map((item, index) => (
              <Reveal key={item} delay={index * 80}>
                <article className="glass rounded-[28px] p-6">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">0{index + 1}</p>
                  <p className="text-base leading-7 text-slate-200">{item}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <Reveal>
            <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f6cf84]">Services</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">{dictionary.servicesTitle}</h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">{dictionary.servicesIntro}</p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {dictionary.services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 80}>
                <article className="glass h-full rounded-[30px] p-7">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">0{index + 1}</p>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">{service.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-300">{service.summary}</p>
                  <ul className="mt-6 grid gap-3 text-sm text-slate-400">
                    {service.points.map((point) => (
                      <li key={point} className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <Reveal>
            <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f6cf84]">Industries</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">{dictionary.industriesTitle}</h2>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {dictionary.industries.map((item, index) => (
              <Reveal key={item} delay={index * 90}>
                <article className="glass rounded-[28px] p-7">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Focus 0{index + 1}</p>
                  <p className="text-lg leading-8 text-slate-200">{item}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <Reveal>
            <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f6cf84]">Cases</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">{dictionary.casesTitle}</h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">{dictionary.casesIntro}</p>
            </div>
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr_0.85fr]">
            {dictionary.cases.map((caseStudy, index) => (
              <Reveal key={caseStudy.slug} delay={index * 100}>
                <article className={`h-full rounded-[32px] p-8 ${index === 0 ? "bg-[#0d4f8f]" : "glass"}`}>
                  <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${index === 0 ? "text-[#f6cf84]" : "text-slate-500"}`}>{caseStudy.label}</p>
                  <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white">{caseStudy.title}</h3>
                  <p className="mt-5 text-base leading-7 text-slate-200">{caseStudy.summary}</p>
                  <div className="mt-6 grid gap-3 text-sm text-slate-200">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <span className="font-semibold text-white">Challenge:</span> {caseStudy.challenge}
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <span className="font-semibold text-white">Solution:</span> {caseStudy.solution}
                    </div>
                  </div>
                  <div className="mt-8 grid gap-3">
                    {caseStudy.metrics.map((metric) => (
                      <div key={metric} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white">
                        {metric}
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f6cf84]">Method</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">{dictionary.methodologyTitle}</h2>
            </div>
          </Reveal>
          <div className="grid gap-4">
            {dictionary.methodologySteps.map((step, index) => (
              <Reveal key={step} delay={index * 80}>
                <div className="glass rounded-[28px] px-6 py-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Step 0{index + 1}</p>
                  <p className="text-lg leading-8 text-slate-200">{step}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <Reveal>
            <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f6cf84]">Reviews</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">{dictionary.reviewsTitle}</h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">{dictionary.reviewsIntro}</p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {dictionary.testimonials.map((item, index) => (
              <Reveal key={item.quote} delay={index * 90}>
                <article className="glass rounded-[30px] p-7">
                  <p className="text-lg leading-8 text-slate-100">&ldquo;{item.quote}&rdquo;</p>
                  <div className="mt-6 border-t border-white/10 pt-5">
                    <p className="font-semibold text-white">{item.name}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.role}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <Reveal>
            <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f6cf84]">Insights</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">{dictionary.insightsTitle}</h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">{dictionary.insightsIntro}</p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {dictionary.insights.map((article, index) => (
              <Reveal key={article.title} delay={index * 90}>
                <article className="glass rounded-[30px] p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f6cf84]">{article.category}</p>
                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-white">{article.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-300">{article.summary}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <Reveal>
            <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f6cf84]">Resources</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">{dictionary.resourcesTitle}</h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">{dictionary.resourcesIntro}</p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {dictionary.resources.map((resource, index) => (
              <Reveal key={resource.title} delay={index * 90}>
                <article className="glass rounded-[30px] p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{resource.format}</p>
                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-white">{resource.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-300">{resource.summary}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <Reveal>
            <div className="mb-10 max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f6cf84]">FAQ</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">{dictionary.faqTitle}</h2>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {dictionary.faq.map((item, index) => (
              <Reveal key={item.q} delay={index * 70}>
                <details className="glass rounded-[28px] p-6">
                  <summary className="cursor-pointer text-lg font-semibold text-white">{item.q}</summary>
                  <p className="mt-4 max-w-4xl text-base leading-7 text-slate-300">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
