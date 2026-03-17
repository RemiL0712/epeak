import { getDictionary, Locale } from "@/lib/site-content";

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);

  return (
    <main className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="glass rounded-[32px] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f6cf84]">Contact</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-white md:text-6xl">{dictionary.contactTitle}</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">{dictionary.contactText}</p>
        </section>
        <form className="glass grid gap-4 rounded-[32px] p-8">
          <label className="grid gap-2 text-sm font-medium text-slate-300">
            {dictionary.form.name}
            <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none placeholder:text-slate-500" />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-300">
            {dictionary.form.email}
            <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none placeholder:text-slate-500" />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-300">
            {dictionary.form.company}
            <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none placeholder:text-slate-500" />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-300">
            {dictionary.form.message}
            <textarea rows={6} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none placeholder:text-slate-500" />
          </label>
          <button type="button" className="mt-2 rounded-full bg-[#f6cf84] px-6 py-4 font-semibold text-slate-950 transition hover:bg-[#ffdd9c]">
            {dictionary.form.button}
          </button>
        </form>
      </div>
    </main>
  );
}
