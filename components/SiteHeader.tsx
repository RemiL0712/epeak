import Link from "next/link";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import LogoMark from "@/components/LogoMark";
import { Locale, SiteDictionary } from "@/lib/site-content";

export default function SiteHeader({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: SiteDictionary;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[rgba(7,17,31,0.78)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 lg:px-8">
        <Link href={`/${locale}`} className="flex items-center gap-3 text-white">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
            <LogoMark />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">Elevate Peak</p>
            <p className="text-lg font-semibold tracking-tight">epeak.one</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 lg:flex">
          {dictionary.nav.map((item) => (
            <Link key={item.href} href={`/${locale}${item.href}`} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <LocaleSwitcher locale={locale} />
          </div>
          <Link
            href={`/${locale}/contact`}
            className="rounded-full bg-[#f6cf84] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#ffd89a]"
          >
            {dictionary.cta}
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-3 lg:hidden">
        <LocaleSwitcher locale={locale} />
      </div>
    </header>
  );
}
