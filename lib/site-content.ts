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
  deliverables: string[];
};

type CaseStudy = {
  slug: string;
  label: string;
  title: string;
  summary: string;
  metrics: string[];
  challenge: string;
  solution: string;
};

type Insight = {
  title: string;
  category: string;
  summary: string;
};

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

type Resource = {
  title: string;
  summary: string;
  format: string;
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
  differentiatorsTitle: string;
  differentiators: string[];
  servicesTitle: string;
  servicesIntro: string;
  industriesTitle: string;
  industries: string[];
  casesTitle: string;
  casesIntro: string;
  methodologyTitle: string;
  methodologySteps: string[];
  reviewsTitle: string;
  reviewsIntro: string;
  insightsTitle: string;
  insightsIntro: string;
  resourcesTitle: string;
  resourcesIntro: string;
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
  testimonials: Testimonial[];
  resources: Resource[];
};

const en: SiteDictionary = {
  localeLabel: "Language",
  languages: { en: "EN", uk: "UA", de: "DE", pl: "PL" },
  nav: [
    { href: "/services", label: "Services" },
    { href: "/cases", label: "Cases" },
    { href: "/about", label: "About" },
    { href: "/reviews", label: "Reviews" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ],
  cta: "Book a strategy call",
  heroEyebrow: "Multilingual growth marketing agency for brands ready to look and perform at a higher level",
  heroTitle: "Epeak should feel like a serious growth partner from the first screen.",
  heroText:
    "The old site had breadth, but not enough sharpness. The new version keeps the real service depth of Epeak: SEO, PPC, SMM, websites, analytics, app promotion, tools, reporting, and international growth. The difference is how it is packaged: clearer offers, stronger trust signals, better structure, and language that sounds current.",
  heroPrimary: "Start the redesign",
  heroSecondary: "View service depth",
  proof: [
    "SEO, PPC, SMM, web development, web analytics, and app promotion in one system",
    "Structured for English and Ukrainian first, with room to scale additional languages",
    "Built to grow into service pages, case stories, client proof, and insight content",
  ],
  authorityTitle: "Authority comes from coverage, clarity, and proof.",
  authorityText:
    "A strong agency website is not just one good landing page. It needs a full narrative layer: a homepage that explains the offer, service pages that show capability, case pages that prove execution, reviews that reduce risk, and resources that demonstrate expertise. That is how the new Epeak should feel: not smaller than the old site, but cleaner, smarter, and more convincing.",
  differentiatorsTitle: "What the new version needs to communicate clearly",
  differentiators: [
    "In-house specialists, not fragmented outsourcing communication",
    "Transparent dashboards, reporting, and performance visibility",
    "Support across local markets, English-speaking markets, and multilingual launches",
    "A full commercial system that connects traffic, site conversion, analytics, and growth decisions",
  ],
  servicesTitle: "Services with more commercial clarity",
  servicesIntro:
    "These service blocks keep the substance of the current site, but rewrite the presentation around outcomes, trust, and execution depth.",
  industriesTitle: "Who this is built for",
  industries: [
    "Service businesses that need a more premium lead-generation presence",
    "Ecommerce brands that want cleaner acquisition and stronger performance visibility",
    "Digital products and apps preparing for wider regional or international growth",
    "Founders and marketing teams replacing a dated agency-style site with a sharper commercial system",
  ],
  casesTitle: "Case structure that feels credible",
  casesIntro:
    "The new case pages should not be vague success stories. They should show the challenge, the thinking, the implementation, and the metric movement. These are sample narratives built in that style.",
  methodologyTitle: "How Epeak should work today",
  methodologySteps: [
    "Audit the current market position, site quality, channel setup, analytics, and growth friction.",
    "Define the offer architecture, service hierarchy, and the message that should lead the sale.",
    "Launch redesigned pages, campaign systems, and conversion improvements with clear reporting.",
    "Build long-term authority through multilingual content, proof assets, and repeatable insight publishing.",
  ],
  reviewsTitle: "Social proof should look modern too",
  reviewsIntro:
    "The old site already had client feedback. The new site needs to present it with stronger formatting, clearer positioning, and better context.",
  insightsTitle: "Insight content is part of the sales system",
  insightsIntro:
    "A modern agency builds authority not just through services, but through visible thinking. That means articles, frameworks, and practical resources around SEO, paid media, analytics, websites, and market expansion.",
  resourcesTitle: "Tools and resources can stay, but with a stronger frame",
  resourcesIntro:
    "The old site had a tools layer. In the new version, that becomes a more curated resources section: audits, checklists, launch frameworks, and practical marketing materials that support trust.",
  aboutTitle: "The new Epeak should feel experienced, structured, and commercially sharper.",
  aboutText: [
    "The goal is not to remove information from the old website. The goal is to reorganize it so clients understand faster what Epeak does, why the agency is credible, and where the value comes from.",
    "That means stronger hierarchy, cleaner navigation, better service packaging, and more deliberate proof. It also means a visual system that feels more premium and less generic.",
    "The brand itself already has the right foundation: multilingual support, performance focus, website capability, analytics, and international orientation. The redesign should make all of that more obvious.",
  ],
  faqTitle: "Questions the new site should answer without hesitation",
  faq: [
    {
      q: "Do we need the exact same number of pages as the old site?",
      a: "No. We need the same or greater information coverage, but with better structure. Fewer pages is acceptable only if the site feels deeper and clearer, not thinner.",
    },
    {
      q: "Should we keep both strategic and operational services on the site?",
      a: "Yes. The old site suggests a broad execution footprint, so the redesign should keep that. The difference is stronger grouping, better language, and clearer commercial logic.",
    },
    {
      q: "Why add reviews and resources to the new structure?",
      a: "Because authority is built through more than service claims. Reviews reduce perceived risk. Resources show expertise. Together they make the agency feel more established.",
    },
    {
      q: "Can we upload real visuals from the old site later?",
      a: "Yes. The project now includes media folders so you can drop in real team photos, case screenshots, logos, and brand assets without reorganizing the codebase.",
    },
  ],
  contactTitle: "Rebuild the site so it matches the ambition of the agency.",
  contactText:
    "This version should help Epeak sell with more confidence, look stronger across languages, and support a deeper long-term content and proof system.",
  form: {
    name: "Name",
    email: "Email",
    company: "Company",
    message: "What should the new site communicate better?",
    button: "Request strategy call",
  },
  services: [
    {
      slug: "seo",
      title: "SEO strategy and organic growth",
      summary: "Technical SEO, search visibility planning, semantic architecture, and content systems built to capture commercial demand over time.",
      points: ["Technical audits and implementation priorities", "Semantic planning and content direction", "Search growth in competitive categories"],
      deliverables: ["SEO audits", "Content briefs", "Landing-page recommendations", "Visibility dashboards"],
    },
    {
      slug: "ppc",
      title: "PPC and paid media",
      summary: "Search advertising, paid social, and performance campaigns structured around measurable acquisition, budget control, and fast learning loops.",
      points: ["Google Ads and paid social management", "Tracking and attribution cleanup", "Performance reporting with decision logic"],
      deliverables: ["Campaign architecture", "Creative testing plans", "Budget split models", "Weekly reporting"],
    },
    {
      slug: "smm",
      title: "SMM and social campaigns",
      summary: "Social strategy, ongoing content direction, and campaign support for awareness, launches, and trust-building.",
      points: ["Content planning and publishing direction", "Campaign concepts for launches and promos", "Paid amplification support"],
      deliverables: ["Content calendars", "Creative concepts", "Promo campaign structures", "Audience hypotheses"],
    },
    {
      slug: "web",
      title: "Web development and conversion UX",
      summary: "Corporate websites, landing pages, and conversion-oriented user flows designed to support brand trust and lead generation.",
      points: ["Website rebuilds and landing-page systems", "Information architecture around the offer", "Conversion friction reduction"],
      deliverables: ["Page wireframes", "Copy direction", "Conversion blocks", "Development-ready layouts"],
    },
    {
      slug: "analytics",
      title: "Web analytics and performance visibility",
      summary: "Measurement, dashboards, and visibility systems that help both the agency and the client see where performance is moving and where decisions should be made next.",
      points: ["Analytics setup and event mapping", "Marketing dashboards", "Channel-level visibility for leadership"],
      deliverables: ["Dashboards", "Tracking maps", "Performance reviews", "Monthly decision summaries"],
    },
    {
      slug: "apps",
      title: "App promotion and growth support",
      summary: "App launch support, acquisition planning, and store visibility improvements for digital products that need user growth.",
      points: ["Store visibility foundations", "Paid acquisition support", "Growth setup for launches and expansion"],
      deliverables: ["App launch plans", "Acquisition channels", "Growth hypotheses", "Campaign reporting"],
    },
    {
      slug: "markets",
      title: "International and English-speaking markets",
      summary: "Localized messaging, multilingual campaigns, and growth systems that help brands enter broader regional and English-speaking markets with more confidence.",
      points: ["Localization and multilingual messaging", "Market-entry support", "Cross-market campaign coordination"],
      deliverables: ["Localization outlines", "Regional landing pages", "Market entry checklists", "Multilingual campaign briefs"],
    },
  ],
  cases: [
    {
      slug: "service-brand",
      label: "SEO + website relaunch",
      title: "A service company moved from an outdated site into a more credible lead-generation system.",
      summary: "The old structure did not support trust or search intent well enough. The new approach clarified the offer, improved structure, and turned organic demand into stronger conversion paths.",
      metrics: ["+118% qualified organic leads", "-21% cost per lead after landing-page improvements"],
      challenge: "Outdated structure, weak hierarchy, and pages that did not convert traffic into high-intent inquiries.",
      solution: "Rebuilt the page logic, clarified the service promise, and aligned SEO landing paths with conversion blocks.",
    },
    {
      slug: "ecommerce",
      label: "PPC + analytics",
      title: "An ecommerce account regained performance control through cleaner media architecture.",
      summary: "Tracking was noisy and reporting was not helping real decisions. The new setup simplified media buying, improved attribution, and gave the client clearer visibility into what worked.",
      metrics: ["3.6x blended ROAS", "Faster reporting and budget decisions"],
      challenge: "Fragmented campaign structure and weak reporting visibility made scaling inconsistent.",
      solution: "Rebuilt campaigns around intent and economics, then added dashboard visibility for faster optimization.",
    },
    {
      slug: "expansion",
      label: "App + market expansion",
      title: "A digital product entered new markets with multilingual acquisition and launch support.",
      summary: "The product needed more than ad setup. It needed localized messages, cleaner launch structure, and a repeatable framework that could work across several markets.",
      metrics: ["3 markets launched", "One coordinated expansion framework"],
      challenge: "The product team needed a faster way to localize and launch without building a separate system for each market.",
      solution: "Combined localization logic, acquisition planning, and app growth support into one rollout system.",
    },
  ],
  insights: [
    {
      category: "Positioning",
      title: "Why agency websites lose trust before the first discovery call",
      summary: "The common signals that make a service brand feel dated, generic, or commercially weak even when the team behind it is strong.",
    },
    {
      category: "Performance",
      title: "What modern PPC reporting should do beyond listing numbers",
      summary: "Why dashboards need to support budget decisions, faster optimization, and commercial clarity instead of just showing metrics.",
    },
    {
      category: "Expansion",
      title: "How multilingual presentation changes conversion and authority",
      summary: "Why English plus local-language communication affects market trust, clarity, and launch readiness more than teams expect.",
    },
  ],
  testimonials: [
    {
      quote: "The team did not just run campaigns. They helped structure the commercial logic behind them.",
      name: "Founder, service business",
      role: "SEO + website relaunch",
    },
    {
      quote: "Reporting became easier to act on, and the account finally felt manageable instead of chaotic.",
      name: "Head of growth, ecommerce brand",
      role: "PPC + analytics",
    },
    {
      quote: "Localization and launch support were handled as one system, which made expansion much easier for us.",
      name: "Product lead, digital app",
      role: "International growth support",
    },
  ],
  resources: [
    {
      title: "Website credibility audit",
      summary: "A checklist for identifying where a marketing site looks generic, unclear, or commercially weak.",
      format: "Checklist",
    },
    {
      title: "Market-entry landing page brief",
      summary: "A working brief for launching localized pages for new markets without rebuilding the whole site.",
      format: "Framework",
    },
    {
      title: "Performance reporting template",
      summary: "A structure for dashboards and monthly reporting that is easier for founders and leadership teams to use.",
      format: "Template",
    },
  ],
};

const uk: SiteDictionary = {
  localeLabel: "Мова",
  languages: { en: "EN", uk: "UA", de: "DE", pl: "PL" },
  nav: [
    { href: "/services", label: "Послуги" },
    { href: "/cases", label: "Кейси" },
    { href: "/about", label: "Про агенцію" },
    { href: "/reviews", label: "Відгуки" },
    { href: "/resources", label: "Ресурси" },
    { href: "/contact", label: "Контакти" },
  ],
  cta: "Записатись на стратсесію",
  heroEyebrow: "Мультимовна growth marketing agency для брендів, яким потрібен сильніший рівень подачі та результату",
  heroTitle: "Epeak має відчуватись серйозним growth-партнером уже з першого екрана.",
  heroText:
    "Старий сайт мав ширину, але не мав достатньої чіткості. Нова версія зберігає реальну глибину Epeak: SEO, PPC, SMM, сайти, аналітику, app promotion, tools, звітність і міжнародне масштабування. Різниця в упаковці: зрозуміліші офери, сильніші сигнали довіри, краща структура і мова, яка звучить сучасно.",
  heroPrimary: "Почати редизайн",
  heroSecondary: "Подивитись глибину послуг",
  proof: [
    "SEO, PPC, SMM, web development, web analytics та app promotion в одній системі",
    "Одразу побудовано під англійську й українську, з можливістю масштабувати інші мови",
    "Архітектура, яка може вирости в service pages, кейси, client proof та insight-контент",
  ],
  authorityTitle: "Авторитет будується через покриття, ясність і докази.",
  authorityText:
    "Сильний agency-сайт це не просто одна красива landing page. Йому потрібен повний narrative layer: головна, яка пояснює офер, service pages, які показують компетенцію, кейси, які доводять виконання, відгуки, які знижують ризик, і ресурси, які демонструють експертизу. Саме так має відчуватись новий Epeak: не менший за старий сайт, а чистіший, розумніший і переконливіший.",
  differentiatorsTitle: "Що нова версія має комунікувати максимально ясно",
  differentiators: [
    "In-house спеціалісти, а не розірвана комунікація між підрядниками",
    "Прозорі dashboard-и, звітність і видимість performance",
    "Підтримка локальних ринків, англомовних ринків і мультимовних запусків",
    "Повна комерційна система, яка поєднує трафік, конверсію сайту, аналітику та growth-рішення",
  ],
  servicesTitle: "Послуги з більшою комерційною ясністю",
  servicesIntro:
    "Ці блоки зберігають суть поточного сайту, але переписують подачу навколо результату, довіри та глибини виконання.",
  industriesTitle: "Для кого це зібрано",
  industries: [
    "Сервісні бізнеси, яким потрібна дорожча й сильніша lead-generation присутність",
    "Ecommerce-бренди, яким потрібне чистіше залучення і краща видимість performance",
    "Цифрові продукти й застосунки, які готуються до ширшого регіонального або міжнародного росту",
    "Фаундери й маркетинг-команди, які замінюють застарілий agency-style сайт на чіткішу комерційну систему",
  ],
  casesTitle: "Структура кейсів, яка виглядає переконливо",
  casesIntro:
    "Нові кейси не мають бути розмитими success stories. Вони мають показувати задачу, логіку, реалізацію й рух метрик. Ці приклади вже побудовані в такому стилі.",
  methodologyTitle: "Як Epeak має працювати сьогодні",
  methodologySteps: [
    "Аудит поточного позиціонування, якості сайту, setup каналів, аналітики та growth-фрикції.",
    "Визначення offer architecture, service hierarchy і меседжу, який має вести продаж.",
    "Запуск оновлених сторінок, campaign systems і conversion improvements із прозорою звітністю.",
    "Побудова довгострокового авторитету через мультимовний контент, proof assets і регулярний insight publishing.",
  ],
  reviewsTitle: "Соціальний proof теж має виглядати сучасно",
  reviewsIntro:
    "На старому сайті вже були клієнтські відгуки. У новій версії їх треба подати сильніше: кращий формат, чіткіший контекст і дорожче позиціонування.",
  insightsTitle: "Інсайт-контент це частина sales-системи",
  insightsIntro:
    "Сучасна агенція будує авторитет не лише через послуги, а й через видиме мислення. Це означає статті, фреймворки та практичні ресурси про SEO, paid media, аналітику, сайти і вихід на нові ринки.",
  resourcesTitle: "Tools і resources можна зберегти, але в сильнішій рамці",
  resourcesIntro:
    "На старому сайті вже був tools-layer. У новій версії це має стати більш curated resources section: аудити, чеклісти, launch-фреймворки й практичні маркетингові матеріали, які підсилюють довіру.",
  aboutTitle: "Новий Epeak має відчуватись досвідченішим, структурованішим і комерційно гострішим.",
  aboutText: [
    "Ціль не в тому, щоб прибрати інформацію зі старого сайту. Ціль у тому, щоб зібрати її так, аби клієнт швидше розумів, що робить Epeak, чому агенція викликає довіру і де саме формується цінність.",
    "Це означає сильнішу ієрархію, чистішу навігацію, кращу упаковку сервісів і більш осмислений proof.",
    "У самого бренду вже є правильна база: мультимовність, performance-фокус, веб-напрям, аналітика та міжнародна орієнтація. Редизайн має зробити все це очевиднішим.",
  ],
  faqTitle: "Питання, на які новий сайт має відповідати без вагань",
  faq: [
    {
      q: "Чи потрібна нам точно така ж кількість сторінок, як у старого сайту?",
      a: "Ні. Нам потрібне таке саме або більше інформаційне покриття, але з кращою структурою. Менша кількість сторінок допустима тільки якщо сайт відчувається глибшим, а не біднішим.",
    },
    {
      q: "Чи варто залишати на сайті і стратегічні, і операційні послуги?",
      a: "Так. Старий сайт показує широку execution-зону, і редизайн має це зберегти. Різниця буде в сильнішому групуванні, кращій мові та чіткішій комерційній логіці.",
    },
    {
      q: "Навіщо додавати reviews і resources у нову структуру?",
      a: "Бо авторитет будується не лише через заяви про послуги. Reviews знижують ризик. Resources показують експертизу. Разом вони роблять агенцію відчутно більш established.",
    },
    {
      q: "Чи можна буде потім завантажити реальні візуали зі старого сайту?",
      a: "Так. У проєкті будуть підготовлені media-папки, куди можна покласти фото команди, скріни кейсів, логотипи клієнтів і бренд-матеріали без хаосу в кодовій базі.",
    },
  ],
  contactTitle: "Перебудуй сайт так, щоб він відповідав амбіції агенції.",
  contactText:
    "Ця версія має допомогти Epeak продавати впевненіше, сильніше виглядати між мовами і підтримувати глибшу довгострокову систему контенту та proof.",
  form: {
    name: "Ім'я",
    email: "Email",
    company: "Компанія",
    message: "Що новий сайт має пояснювати краще?",
    button: "Запросити стратсесію",
  },
  services: [
    {
      slug: "seo",
      title: "SEO-стратегія та органічне зростання",
      summary: "Технічне SEO, планування пошукової видимості, семантична архітектура та контент-системи для захоплення комерційного попиту в довгу.",
      points: ["Технічні аудити та пріоритети впровадження", "Семантичне планування і контент-напрям", "Ріст у конкурентних категоріях"],
      deliverables: ["SEO-аудити", "Контент-брифи", "Рекомендації для лендінгів", "Visibility-dashboard-и"],
    },
    {
      slug: "ppc",
      title: "PPC та paid media",
      summary: "Search advertising, paid social і performance-кампанії, зібрані навколо вимірюваного залучення, контролю бюджету й швидких learning loops.",
      points: ["Google Ads і paid social management", "Очистка tracking та attribution", "Performance reporting з логікою рішень"],
      deliverables: ["Архітектура кампаній", "Плани creative testing", "Budget split models", "Щотижнева звітність"],
    },
    {
      slug: "smm",
      title: "SMM та social campaigns",
      summary: "Соціальна стратегія, системна контент-подача й campaign support для впізнаваності, запусків і побудови довіри.",
      points: ["Контент-планування та publishing direction", "Кампанійні концепти для запусків і промо", "Підтримка paid amplification"],
      deliverables: ["Контент-календарі", "Creative concepts", "Promo campaign structures", "Audience hypotheses"],
    },
    {
      slug: "web",
      title: "Web development та conversion UX",
      summary: "Корпоративні сайти, landing pages і conversion-oriented user flows, створені для довіри бренду і лідогенерації.",
      points: ["Перезбірка сайтів і landing-page systems", "Інформаційна архітектура навколо оферу", "Зменшення conversion friction"],
      deliverables: ["Page wireframes", "Copy direction", "Conversion blocks", "Development-ready layouts"],
    },
    {
      slug: "analytics",
      title: "Web analytics та visibility performance",
      summary: "Вимірювання, dashboard-и й системи видимості, які допомагають і агенції, і клієнту бачити рух performance та точки наступних рішень.",
      points: ["Analytics setup та event mapping", "Marketing dashboards", "Видимість по каналах для leadership"],
      deliverables: ["Dashboard-и", "Tracking maps", "Performance reviews", "Monthly decision summaries"],
    },
    {
      slug: "apps",
      title: "App promotion та growth support",
      summary: "Підтримка запусків, acquisition planning і покращення store visibility для цифрових продуктів, яким потрібне зростання користувачів.",
      points: ["База для store visibility", "Підтримка paid acquisition", "Growth setup для launch і expansion"],
      deliverables: ["App launch plans", "Acquisition channels", "Growth hypotheses", "Campaign reporting"],
    },
    {
      slug: "markets",
      title: "Міжнародні та англомовні ринки",
      summary: "Локалізовані меседжі, мультимовні кампанії та growth-системи для брендів, які виходять на ширші регіональні й англомовні ринки.",
      points: ["Localization та multilingual messaging", "Підтримка market-entry", "Координація cross-market campaigns"],
      deliverables: ["Localization outlines", "Regional landing pages", "Market-entry checklists", "Multilingual campaign briefs"],
    },
  ],
  cases: [
    {
      slug: "service-brand",
      label: "SEO + website relaunch",
      title: "Сервісна компанія перейшла від застарілого сайту до переконливішої lead-generation системи.",
      summary: "Стара структура не підтримувала довіру й пошуковий інтент достатньо добре. Новий підхід уточнив офер, покращив структуру і перетворив органічний попит на сильніші конверсійні шляхи.",
      metrics: ["+118% кваліфікованих органічних лідів", "-21% cost per lead після покращення landing pages"],
      challenge: "Застаріла структура, слабка ієрархія й сторінки, які не конвертували трафік у high-intent запити.",
      solution: "Перебудували логіку сторінок, уточнили обіцянку сервісу й поєднали SEO-landing paths із conversion blocks.",
    },
    {
      slug: "ecommerce",
      label: "PPC + analytics",
      title: "Ecommerce-акаунт повернув контроль над performance через чистішу media-архітектуру.",
      summary: "Tracking був шумним, а звітність не допомагала приймати реальні рішення. Новий setup спростив media buying, покращив attribution і дав клієнту чистішу видимість того, що реально працює.",
      metrics: ["3.6x blended ROAS", "Швидші звітні й бюджетні рішення"],
      challenge: "Фрагментована структура кампаній і слабка reporting visibility робили масштабування нестабільним.",
      solution: "Перезібрали кампанії навколо intent та economics, а потім додали dashboard visibility для швидшої оптимізації.",
    },
    {
      slug: "expansion",
      label: "App + market expansion",
      title: "Цифровий продукт вийшов на нові ринки через мультимовне залучення і support під launch.",
      summary: "Продукту був потрібен не просто ad setup. Потрібні були локалізовані меседжі, чистіша launch-структура і repeatable framework, який може працювати на кількох ринках.",
      metrics: ["3 нові ринки", "Один координований expansion framework"],
      challenge: "Команді продукту потрібен був швидший спосіб локалізуватися й запускатися без створення окремої системи під кожний ринок.",
      solution: "Поєднали localization logic, acquisition planning і app growth support в одну rollout-систему.",
    },
  ],
  insights: [
    {
      category: "Позиціонування",
      title: "Чому agency-сайти втрачають довіру ще до першого discovery call",
      summary: "Типові сигнали, через які сервісний бренд виглядає застарілим, generic або комерційно слабким, навіть якщо сама команда сильна.",
    },
    {
      category: "Performance",
      title: "Що сучасна PPC-звітність має робити, окрім показу цифр",
      summary: "Чому dashboard-и мають підтримувати бюджетні рішення, швидшу оптимізацію і комерційну ясність, а не просто виводити метрики.",
    },
    {
      category: "Expansion",
      title: "Як мультимовна подача змінює конверсію та авторитет",
      summary: "Чому англійська плюс локальна мова впливають на ринкову довіру, ясність і готовність до запусків сильніше, ніж багато хто думає.",
    },
  ],
  testimonials: [
    {
      quote: "Команда не просто запускала кампанії. Вона допомогла зібрати комерційну логіку навколо них.",
      name: "Founder, service business",
      role: "SEO + website relaunch",
    },
    {
      quote: "Звітність стало легше використовувати для рішень, а акаунт нарешті перестав виглядати хаотичним.",
      name: "Head of growth, ecommerce brand",
      role: "PPC + analytics",
    },
    {
      quote: "Локалізація й launch support були зібрані в одну систему, і це сильно спростило expansion.",
      name: "Product lead, digital app",
      role: "International growth support",
    },
  ],
  resources: [
    {
      title: "Аудит довіри до сайту",
      summary: "Чекліст для виявлення місць, де маркетинговий сайт виглядає generic, неясним або комерційно слабким.",
      format: "Checklist",
    },
    {
      title: "Бриф для market-entry landing page",
      summary: "Робочий бриф для запуску локалізованих сторінок на нові ринки без повної перебудови сайту.",
      format: "Framework",
    },
    {
      title: "Шаблон performance reporting",
      summary: "Структура dashboard-ів і monthly reporting, яку фаундери та leadership teams можуть реально використовувати.",
      format: "Template",
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
