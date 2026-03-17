import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { getDictionary, isValidLocale, Locale, locales } from "@/lib/site-content";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;

  if (!isValidLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  const dictionary = getDictionary(locale);

  return (
    <div className="min-h-screen">
      <SiteHeader locale={locale} dictionary={dictionary} />
      {children}
      <SiteFooter locale={locale} dictionary={dictionary} />
    </div>
  );
}
