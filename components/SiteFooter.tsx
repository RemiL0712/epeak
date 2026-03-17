import Link from "next/link";
import LogoMark from "@/components/LogoMark";
import { Locale, SiteDictionary } from "@/lib/site-content";

export default function SiteFooter({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: SiteDictionary;
}) {
  return (
    <footer className="border-t border-white/10 bg-[#07111f]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="mb-5 flex items-center gap-3 text-white">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
              <LogoMark />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">Elevate Peak</p>
              <p className="text-lg font-semibold tracking-tight">epeak.one</p>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400">{dictionary.contactText}</p>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Navigation</p>
          <div className="grid gap-3 text-sm text-slate-300">
            {dictionary.nav.map((item) => (
              <Link key={item.href} href={`/${locale}${item.href}`} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</p>
          <div className="grid gap-3 text-sm text-slate-300">
            <a href="mailto:hello@epeak.one" className="transition hover:text-white">hello@epeak.one</a>
            <a href="tel:+380938422548" className="transition hover:text-white">+38 (093) 842 25 48</a>
            <p className="text-slate-400">Kyiv, Ukraine</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
