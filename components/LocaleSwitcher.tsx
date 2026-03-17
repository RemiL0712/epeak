"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale, locales, getDictionary } from "@/lib/site-content";

export default function LocaleSwitcher({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const rest = segments.slice(1).join("/");
  const suffix = rest ? `/${rest}` : "";

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
      <span className="sr-only">{dictionary.localeLabel}</span>
      {locales.map((item) => {
        const href = `/${item}${suffix}`;
        const isActive = item === locale;
        return (
          <Link
            key={item}
            href={href}
            className={`rounded-full px-3 py-2 transition ${
              isActive ? "bg-white text-slate-950" : "hover:bg-white/10 hover:text-white"
            }`}
          >
            {dictionary.languages[item]}
          </Link>
        );
      })}
    </div>
  );
}
