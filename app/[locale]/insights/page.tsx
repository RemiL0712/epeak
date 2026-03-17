import { getDictionary, Locale } from "@/lib/site-content";

export default async function InsightsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);

  return (
    <main className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="mb-12 max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f6cf84]">Insights</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-white md:text-6xl">{dictionary.insightsTitle}</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">{dictionary.insightsIntro}</p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {dictionary.insights.map((article) => (
          <article key={article.title} className="glass rounded-[30px] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f6cf84]">{article.category}</p>
            <h2 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-white">{article.title}</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">{article.summary}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
