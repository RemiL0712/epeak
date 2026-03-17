import { getDictionary, Locale } from "@/lib/site-content";

export default async function ReviewsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);

  return (
    <main className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="mb-12 max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f6cf84]">Reviews</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-white md:text-6xl">{dictionary.reviewsTitle}</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">{dictionary.reviewsIntro}</p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {dictionary.testimonials.map((item) => (
          <article key={item.quote} className="glass rounded-[30px] p-7">
            <p className="text-lg leading-8 text-slate-100">&ldquo;{item.quote}&rdquo;</p>
            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="font-semibold text-white">{item.name}</p>
              <p className="mt-1 text-sm text-slate-400">{item.role}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
