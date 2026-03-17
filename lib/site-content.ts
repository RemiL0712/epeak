export const locales = ["en", "uk", "de", "pl"] as const;
export type Locale = (typeof locales)[number];

type NavItem = {
  href: string;
  label: string;
};

type Service = {
  slug: string;
  title: string;
  summary: string;
  points: string[];
};

type CaseStudy = {
  slug: string;
  label: string;
  title: string;
  summary: string;
  metrics: string[];
};

type Insight = {
  title: string;
  category: string;
  summary: string;
};

export type SiteDictionary = {
  localeLabel: string;
  languages: Record<Locale, string>;
  nav: NavItem[];
  cta: string;
  heroEyebrow: string;
  heroTitle: string;
  heroText: string;
  heroPrimary: string;
  heroSecondary: string;
  proof: string[];
  authorityTitle: string;
  authorityText: string;
  servicesTitle: string;
  servicesIntro: string;
  casesTitle: string;
  casesIntro: string;
  methodologyTitle: string;
  methodologySteps: string[];
  insightsTitle: string;
  insightsIntro: string;
  aboutTitle: string;
  aboutText: string[];
  faqTitle: string;
  faq: { q: string; a: string }[];
  contactTitle: string;
  contactText: string;
  form: {
    name: string;
    email: string;
    company: string;
    message: string;
    button: string;
  };
  services: Service[];
  cases: CaseStudy[];
  insights: Insight[];
};

const en: SiteDictionary = {
  localeLabel: "Language",
  languages: { en: "EN", uk: "UA", de: "DE", pl: "PL" },
  nav: [
    { href: "/services", label: "Services" },
    { href: "/cases", label: "Cases" },
    { href: "/about", label: "About" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ],
  cta: "Book a strategy call",
  heroEyebrow: "Elevate Peak is a multilingual growth marketing agency",
  heroTitle: "Authority for the brand starts with authority in the site itself.",
  heroText:
    "We redesign Epeak into a sharper growth agency for SEO, PPC, SMM, websites, analytics, and international expansion. The goal is not a prettier brochure. The goal is a site that looks credible, sells clearly, and scales across languages.",
  heroPrimary: "Start the project",
  heroSecondary: "Explore capabilities",
  proof: [
    "SEO, PPC, SMM, web development, analytics, and app promotion in one commercial system",
    "Built for Ukrainian and international presentation from day one",
    "Structured to grow into service pages, case stories, and insight content",
  ],
  authorityTitle: "A credible agency site needs depth, not just decoration.",
  authorityText:
    "The old site had many pages, which helped create breadth, but the language and structure felt dated. The new version keeps that authority layer through a cleaner information architecture: a strong homepage, focused service pages, proof-driven case stories, a credible about page, and an insights layer that shows expertise.",
  servicesTitle: "Core growth capabilities",
  servicesIntro:
    "These services preserve the real meaning of the current site while presenting them in a more premium and modern way.",
  casesTitle: "Selected growth narratives",
  casesIntro:
    "Case pages should show outcomes, business context, and the thinking behind execution. These sample narratives create that direction now and can later be replaced with real proof.",
  methodologyTitle: "How Epeak should work now",
  methodologySteps: [
    "Audit the market position, existing funnel, and current channel performance.",
    "Define the offer architecture, page hierarchy, and growth priorities.",
    "Launch redesigned pages and campaign systems with clear reporting.",
    "Scale with multilingual content, case proof, and insight publishing.",
  ],
  insightsTitle: "Insights that build authority",
  insightsIntro:
    "A serious agency needs a visible thinking layer. That means articles around strategy, market expansion, analytics, performance marketing, and website conversion.",
  aboutTitle: "A modern agency should look like a specialist system, not a general digital vendor.",
  aboutText: [
    "Epeak already has the right service foundation. The upgrade is in focus, language, and presentation.",
    "Instead of listing everything in equal weight, the new site groups capabilities into a system clients can understand quickly and trust immediately.",
  ],
  faqTitle: "Questions clients will actually ask",
  faq: [
    {
      q: "Do we need as many pages as the old site?",
      a: "Not necessarily. We need enough structure to feel deep and authoritative, but every page must earn its place.",
    },
    {
      q: "Why keep multilingual support from the start?",
      a: "Because international credibility is part of the offer. English and Ukrainian are mandatory. Additional languages can expand with demand.",
    },
    {
      q: "Can the site grow later without redesigning again?",
      a: "Yes. The architecture is built so service pages, case studies, and industry-specific pages can be added without changing the core system.",
    },
  ],
  contactTitle: "Build the version that matches the level of the work.",
  contactText:
    "Use this redesign to reset perception, improve sales conversations, and create a stronger base for multilingual growth.",
  form: {
    name: "Name",
    email: "Email",
    company: "Company",
    message: "What needs to change?",
    button: "Request strategy call",
  },
  services: [
    {
      slug: "seo",
      title: "SEO strategy and organic growth",
      summary: "Technical SEO, semantic architecture, and content systems for durable demand capture.",
      points: ["Technical audits", "Content planning", "Growth in competitive niches"],
    },
    {
      slug: "ppc",
      title: "PPC and paid media",
      summary: "Search and paid social built around economics, reporting, and faster optimization cycles.",
      points: ["Google Ads", "Paid social", "Attribution and dashboards"],
    },
    {
      slug: "smm",
      title: "SMM and social campaigns",
      summary: "Social content and promotion that support awareness, launches, and demand generation.",
      points: ["Content planning", "Campaign concepts", "Paid amplification"],
    },
    {
      slug: "web",
      title: "Web development and conversion UX",
      summary: "Websites and landing pages designed to support trust, clarity, and lead generation.",
      points: ["Landing pages", "Offer architecture", "Conversion improvements"],
    },
    {
      slug: "analytics",
      title: "Analytics and performance visibility",
      summary: "Reporting and measurement systems that help clients see what is working and where to act.",
      points: ["Dashboard setup", "Channel reporting", "Decision support"],
    },
    {
      slug: "markets",
      title: "International market expansion",
      summary: "Localized messaging, multilingual presentation, and growth systems for broader markets.",
      points: ["Localization", "English-speaking markets", "Cross-market support"],
    },
  ],
  cases: [
    {
      slug: "service-brand",
      label: "SEO + web relaunch",
      title: "A service company moved from a dated website to a serious lead-generation system.",
      summary: "The offer was clarified, the structure rebuilt, and search intent turned into landing-page logic.",
      metrics: ["+118% qualified organic leads", "-21% lead acquisition cost"],
    },
    {
      slug: "ecommerce",
      label: "PPC + analytics",
      title: "An ecommerce account regained control through a cleaner campaign structure.",
      summary: "We simplified execution, improved tracking, and turned reporting into a commercial tool.",
      metrics: ["3.6x blended ROAS", "Faster decision cycles"],
    },
    {
      slug: "expansion",
      label: "App + markets",
      title: "A digital product entered new markets with multilingual acquisition support.",
      summary: "Campaign messaging, localization, and app growth mechanics were aligned into one launch system.",
      metrics: ["3 markets launched", "One unified framework"],
    },
  ],
  insights: [
    {
      category: "Positioning",
      title: "Why agency websites lose trust before the first call",
      summary: "The signals that make a digital agency feel generic, dated, or hard to trust in competitive markets.",
    },
    {
      category: "Performance",
      title: "What clients really expect from modern PPC reporting",
      summary: "Why dashboards are not enough unless they help leaders make faster commercial decisions.",
    },
    {
      category: "Expansion",
      title: "How multilingual presentation changes market perception",
      summary: "Why language strategy affects authority, conversion, and cross-market growth more than teams expect.",
    },
  ],
};

const uk: SiteDictionary = {
  ...en,
  localeLabel: "Мова",
  nav: [
    { href: "/services", label: "Послуги" },
    { href: "/cases", label: "Кейси" },
    { href: "/about", label: "Про агенцію" },
    { href: "/insights", label: "Інсайти" },
    { href: "/contact", label: "Контакти" },
  ],
  cta: "Записатись на стратсесію",
  heroEyebrow: "Elevate Peak це мультимовна growth marketing agency",
  heroTitle: "Авторитет бренду починається з авторитету самого сайту.",
  heroText:
    "Ми перебудовуємо Epeak у сильнішу growth-агенцію для SEO, PPC, SMM, сайтів, аналітики та міжнародного масштабування. Ціль не в тому, щоб зробити просто красивіше. Ціль у тому, щоб сайт виглядав переконливо, продавав чітко й масштабувався між мовами.",
  heroPrimary: "Почати проєкт",
  heroSecondary: "Подивитись можливості",
  proof: [
    "SEO, PPC, SMM, web development, analytics та app promotion в одній комерційній системі",
    "Одразу спроєктовано під українську й міжнародну подачу",
    "Структура, яка може вирости в сервісні сторінки, кейси та контент-інсайти",
  ],
  authorityTitle: "Сильному agency-сайту потрібна глибина, а не просто декор.",
  authorityText:
    "Старий сайт мав багато сторінок, і це давало відчуття ширини, але мова й структура вже виглядали застаріло. Нова версія зберігає цей авторитетний шар через чистішу інформаційну архітектуру: сильна головна, сфокусовані service pages, proof-driven кейси, переконлива сторінка про агенцію та insights-рівень, що демонструє експертизу.",
  servicesTitle: "Ключові growth-напрями",
  servicesIntro:
    "Ці напрями зберігають реальний сенс поточного сайту, але подають його дорожче й сучасніше.",
  casesTitle: "Вибрані growth-наративи",
  casesIntro:
    "Кейси мають показувати результат, бізнес-контекст і логіку виконання. Ці приклади вже задають правильний вектор і пізніше можуть бути замінені реальними доказами.",
  methodologyTitle: "Як Epeak має працювати тепер",
  methodologySteps: [
    "Аудит позиціонування, поточного funnel і ефективності каналів.",
    "Визначення offer architecture, page hierarchy і growth-пріоритетів.",
    "Запуск оновлених сторінок і campaign systems із прозорою звітністю.",
    "Масштабування через мультимовний контент, кейси та інсайт-публікації.",
  ],
  insightsTitle: "Інсайти, що будують авторитет",
  insightsIntro:
    "Серйозній агенції потрібен видимий thinking layer. Це означає статті про стратегію, міжнародне масштабування, аналітику, performance marketing і website conversion.",
  aboutTitle: "Сучасна агенція має виглядати як спеціалізована система, а не як загальний digital-підрядник.",
  aboutText: [
    "У Epeak уже є правильна сервісна база. Апгрейд потрібен у фокусі, мові та подачі.",
    "Замість того щоб показувати все з однаковою вагою, новий сайт збирає можливості в систему, яку клієнт швидко розуміє і якій одразу довіряє.",
  ],
  faqTitle: "Питання, які клієнти реально поставлять",
  faq: [
    {
      q: "Чи потрібно нам стільки ж сторінок, як на старому сайті?",
      a: "Не обов'язково. Нам потрібна достатня глибина, щоб сайт відчувався авторитетним, але кожна сторінка має мати сенс.",
    },
    {
      q: "Навіщо одразу тримати мультимовність?",
      a: "Бо міжнародна довіра є частиною оферу. Англійська й українська обов'язкові. Інші мови можуть розширюватись із попитом.",
    },
    {
      q: "Чи можна масштабувати сайт далі без нового редизайну?",
      a: "Так. Архітектура зроблена так, щоб можна було додавати service pages, case studies та industry pages без перебудови системи.",
    },
  ],
  contactTitle: "Побудуйте версію, яка відповідає рівню роботи.",
  contactText:
    "Цей редизайн має перезібрати сприйняття бренду, покращити sales-розмову й дати сильнішу базу для мультимовного росту.",
  form: {
    name: "Ім'я",
    email: "Email",
    company: "Компанія",
    message: "Що потрібно змінити?",
    button: "Запросити стратсесію",
  },
  services: [
    {
      slug: "seo",
      title: "SEO-стратегія та органічне зростання",
      summary: "Технічне SEO, семантична архітектура та контент-системи для сталого захоплення попиту.",
      points: ["Технічні аудити", "Контент-планування", "Ріст у конкурентних нішах"],
    },
    {
      slug: "ppc",
      title: "PPC та paid media",
      summary: "Search і paid social, побудовані навколо економіки, звітності й швидших циклів оптимізації.",
      points: ["Google Ads", "Paid social", "Атрибуція та dashboard-и"],
    },
    {
      slug: "smm",
      title: "SMM та social campaigns",
      summary: "Соціальний контент і просування, які підтримують впізнаваність, запуски та генерацію попиту.",
      points: ["Контент-планування", "Кампанійні концепти", "Paid amplification"],
    },
    {
      slug: "web",
      title: "Web development та conversion UX",
      summary: "Сайти й landing pages, створені для довіри, ясності та лідогенерації.",
      points: ["Landing pages", "Offer architecture", "Покращення конверсії"],
    },
    {
      slug: "analytics",
      title: "Аналітика та visibility performance",
      summary: "Системи звітності й вимірювання, які допомагають клієнтам бачити результат і точки дії.",
      points: ["Налаштування dashboard-ів", "Звітність по каналах", "Підтримка рішень"],
    },
    {
      slug: "markets",
      title: "Міжнародне масштабування",
      summary: "Локалізовані меседжі, мультимовна подача й growth-системи для ширших ринків.",
      points: ["Локалізація", "Англомовні ринки", "Підтримка між ринками"],
    },
  ],
  cases: [
    {
      slug: "service-brand",
      label: "SEO + web relaunch",
      title: "Сервісна компанія перейшла від застарілого сайту до серйозної лідогенераційної системи.",
      summary: "Офер став чіткішим, структура була перебудована, а пошуковий інтент перетворено на landing-page logic.",
      metrics: ["+118% кваліфікованих органічних лідів", "-21% вартість залучення ліда"],
    },
    {
      slug: "ecommerce",
      label: "PPC + analytics",
      title: "Ecommerce-акаунт повернув контроль через чистішу архітектуру кампаній.",
      summary: "Ми спростили виконання, покращили tracking і перетворили звітність на комерційний інструмент.",
      metrics: ["3.6x blended ROAS", "Швидші цикли рішень"],
    },
    {
      slug: "expansion",
      label: "App + markets",
      title: "Цифровий продукт зайшов на нові ринки через мультимовну підтримку залучення.",
      summary: "Campaign messaging, локалізація й app growth mechanics були зібрані в одну launch-system.",
      metrics: ["3 нові ринки", "Один єдиний framework"],
    },
  ],
  insights: [
    {
      category: "Позиціонування",
      title: "Чому agency-сайти втрачають довіру ще до першого дзвінка",
      summary: "Сигнали, через які digital-агенція виглядає generic, застарілою або складною для довіри.",
    },
    {
      category: "Performance",
      title: "Що клієнти насправді чекають від сучасної PPC-звітності",
      summary: "Чому dashboard-ів недостатньо, якщо вони не допомагають швидше приймати комерційні рішення.",
    },
    {
      category: "Expansion",
      title: "Як мультимовна подача змінює ринкове сприйняття",
      summary: "Чому language strategy впливає на авторитет, конверсію і cross-market growth сильніше, ніж здається.",
    },
  ],
};

const fallbackMap: Record<Locale, SiteDictionary> = {
  en,
  uk,
  de: en,
  pl: en,
};

export function getDictionary(locale: string): SiteDictionary {
  return fallbackMap[(locales as readonly string[]).includes(locale) ? (locale as Locale) : "en"];
}

export function isValidLocale(locale: string): locale is Locale {
  return (locales as readonly string[]).includes(locale);
}
