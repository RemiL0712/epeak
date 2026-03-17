import { getDictionary, Locale } from "@/lib/site-content";

export default async function ServicesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);

  return (
    <main className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="mb-12 max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f6cf84]">Services</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-white md:text-6xl">{dictionary.servicesTitle}</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">{dictionary.servicesIntro}</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {dictionary.services.map((service) => (
          <article key={service.slug} className="glass rounded-[30px] p-7">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white">{service.title}</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">{service.summary}</p>
            <ul className="mt-6 grid gap-3 text-sm text-slate-400">
              {service.points.map((point) => (
                <li key={point} className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3">{point}</li>
              ))}
            </ul>
            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Typical deliverables</p>
              <ul className="grid gap-3 text-sm text-slate-300">
                {service.deliverables.map((item) => (
                  <li key={item} className="rounded-2xl bg-[#0d4f8f]/25 px-4 py-3">{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
