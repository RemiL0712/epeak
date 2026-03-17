import { getDictionary, Locale } from "@/lib/site-content";

export default async function CasesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);

  return (
    <main className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="mb-12 max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f6cf84]">Cases</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-white md:text-6xl">{dictionary.casesTitle}</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">{dictionary.casesIntro}</p>
      </div>
      <div className="grid gap-5">
        {dictionary.cases.map((caseStudy, index) => (
          <article key={caseStudy.slug} className={`rounded-[32px] p-8 ${index === 0 ? "bg-[#0d4f8f]" : "glass"}`}>
            <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${index === 0 ? "text-[#f6cf84]" : "text-slate-500"}`}>{caseStudy.label}</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white">{caseStudy.title}</h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200">{caseStudy.summary}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-300">
                <span className="font-semibold text-white">Challenge:</span> {caseStudy.challenge}
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-300">
                <span className="font-semibold text-white">Solution:</span> {caseStudy.solution}
              </div>
            </div>
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {caseStudy.metrics.map((metric) => (
                <div key={metric} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white">{metric}</div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
