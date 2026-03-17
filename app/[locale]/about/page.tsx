import { getDictionary, Locale } from "@/lib/site-content";

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);

  return (
    <main className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="glass rounded-[32px] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f6cf84]">About</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-white md:text-6xl">{dictionary.aboutTitle}</h1>
        </section>
        <section className="glass rounded-[32px] p-8">
          <div className="grid gap-5 text-lg leading-8 text-slate-300">
            {dictionary.aboutText.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
