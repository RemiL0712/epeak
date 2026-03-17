import { getDictionary, Locale } from "@/lib/site-content";

export default async function ResourcesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);

  return (
    <main className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="mb-12 max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f6cf84]">Resources</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-white md:text-6xl">{dictionary.resourcesTitle}</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">{dictionary.resourcesIntro}</p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {dictionary.resources.map((resource) => (
          <article key={resource.title} className="glass rounded-[30px] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{resource.format}</p>
            <h2 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-white">{resource.title}</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">{resource.summary}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
