import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "de" | "en" | "zh";

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};

const translations: Record<Lang, Record<string, string>> = {
  de: {
    // Navbar
    "nav.shop": "Shop",
    "nav.lookbook": "Lookbook",
    "nav.magazin": "Magazin",
    "nav.crowdfunding": "Crowdfunding",
    "nav.about": "Über uns",

    // Hero
    "hero.tagline": "Streetwear aus dem Schwarzwald",
    "hero.subtitle": "Verwurzelt im Wald. Getragen auf der Straße.",
    "hero.cta": "Kollektion entdecken",

    // Products
    "products.tag": "Neue Kollektion",
    "products.title": "Nachhaltige Hoodies, T-Shirts & Sweater",
    "products.filter.all": "Alle",
    "products.filter.women": "Damen",
    "products.filter.men": "Herren",
    "products.sizes": "Größen",
    "products.addToCart": "In den Warenkorb",
    "products.material": "Material",

    // Video
    "video.tag": "Im Fokus",
    "video.title": "Unsere Highlights in Bewegung",

    // Lookbook
    "lookbook.title": "Lookbook – Urban Streetwear trifft Schwarzwald",
    "lookbook.subtitle": "Nachhaltige Mode zwischen Schwarzwald-Natur und urbanem City-Style in Stuttgart, Berlin & Köln.",

    // Blog
    "blog.tag": "Magazin",
    "blog.title": "Wald, Mode & Nachhaltigkeit",
    "blog.subtitle": "Geschichten rund um Schwarzwald-Streetwear, faire Produktion und den Style zwischen Natur und Großstadt.",
    "blog.readMore": "Weiterlesen",

    // About
    "about.tag": "Wer wir sind",
    "about.title": "Nachhaltige Mode aus dem Schwarzwald",
    "about.intro": "Schwarzwaldjungfrau ist mehr als ein Label – es ist ein Lebensgefühl. Wir verbinden urbane Streetwear mit der rauen Schönheit des Schwarzwalds. Jedes Kleidungsstück wird fair und nachhaltig produziert, aus GOTS-zertifizierter Bio-Baumwolle, in einer familiengeführten Manufaktur mitten im Schwarzwald.",
    "about.mission.title": "Unsere Mission",
    "about.mission.p1": "Mode sollte keine Kompromisse verlangen – weder beim Style noch bei der Verantwortung. Wir glauben, dass nachhaltige Kleidung genauso bold, urban und selbstbewusst sein kann wie Fast Fashion – nur eben ohne den ökologischen Fußabdruck.",
    "about.mission.p2": "Unsere Designs entstehen dort, wo der Schwarzwald am dichtesten ist. Wir lassen uns von Moos, Nebel und alten Tannen inspirieren – und übersetzen das in Pieces, die auf den Straßen von Stuttgart, Berlin und Köln getragen werden. Tracht trifft Streetwear. Natur trifft Stadt. Tradition trifft Zukunft.",
    "about.values.rooted": "Verwurzelt",
    "about.values.rooted.desc": "Inspiriert von den dunklen Wäldern des Schwarzwalds – jedes Stück erzählt eine Geschichte von Natur und Tradition.",
    "about.values.sustainable": "Nachhaltig",
    "about.values.sustainable.desc": "GOTS-zertifizierte Bio-Baumwolle, faire Löhne, kurze Lieferwege. Wir produzieren ausschließlich in Europa.",
    "about.values.limitless": "Grenzenlos",
    "about.values.limitless.desc": "Streetwear ohne Grenzen – vom Wald in die Stadt. Unsere Designs verbinden Tracht mit urbanem Zeitgeist.",
    "about.story.title": "Vom Wanderweg zum Laufsteg",
    "about.story.p1": "Alles begann mit einer einfachen Frage: Warum gibt es keine Mode, die den Schwarzwald feiert – ohne kitschig zu sein? Keine Hirschgeweihe auf Filz, keine Kuckucksuhren-Prints. Sondern echte, tragbare Streetwear, die die DNA des Waldes in sich trägt.",
    "about.story.p2": "Unsere Gründerin wuchs zwischen Tannen und Schluchten auf, studierte Design in der Stadt und vermisste dort immer eines: das Gefühl von Wald. Die Stille. Das Moos unter den Füßen. Den Nebel am Morgen. Schwarzwaldjungfrau ist der Versuch, dieses Gefühl in Kleidung zu übersetzen.",
    "about.story.p3": "Jedes Stück wird in kleinen Auflagen gefertigt – kein Massenprodukt, sondern ein Statement. Wir arbeiten mit lokalen Handwerkern, nutzen recycelte Verpackungen und pflanzen für jede verkaufte Kollektion Bäume im Schwarzwald.",
    "about.stats.organic": "Bio-Baumwolle",
    "about.stats.production": "Produktion",
    "about.stats.fair": "Löhne & Bedingungen",
    "about.stats.small": "Auflagen, kein Fast Fashion",
    "about.timeline.title": "Unsere Reise",
    "about.timeline.2023": "Die Idee entsteht – auf einer Wanderung durch den Nordschwarzwald.",
    "about.timeline.2024": "Erste Prototypen: Dirndelhoodie & Forest Hoodie entstehen in Handarbeit.",
    "about.timeline.2025": "Launch der ersten Kollektion mit 6 Pieces. Crowdfunding startet.",
    "about.timeline.2026": "Produktion in einer familiengeführten Manufaktur im Schwarzwald.",

    // Crowdfunding
    "crowd.tag": "Crowdfunding",
    "crowd.title": "Werde Teil der Bewegung",
    "crowd.subtitle": "Hilf uns, nachhaltige Schwarzwald-Streetwear in die Welt zu bringen. Mit deiner Unterstützung finanzieren wir die erste große Produktion – fair, lokal und ohne Kompromisse.",
    "crowd.goal": "Ziel",
    "crowd.backers": "Unterstützer",
    "crowd.daysLeft": "Tage übrig",
    "crowd.reached": "erreicht",
    "crowd.popular": "Beliebteste Wahl",
    "crowd.of": "von",
    "crowd.remaining": "übrig",
    "crowd.selected": "ausgewählt",
    "crowd.emailPrompt": "Hinterlasse deine E-Mail – wir benachrichtigen dich, sobald die Kampagne live geht.",
    "crowd.secure": "Sichern",
    "crowd.why": "Warum unterstützen?",
    "crowd.why.fair": "Fair & lokal.",
    "crowd.why.fair.desc": "Jeder Euro fließt in faire Produktion im Schwarzwald.",
    "crowd.why.trees": "Bäume pflanzen.",
    "crowd.why.trees.desc": "Für jede Pledge pflanzen wir einen Baum im Schwarzwald.",
    "crowd.why.exclusive": "Exklusiv.",
    "crowd.why.exclusive.desc": "Early-Supporter erhalten limitierte Designs, die nie wieder produziert werden.",
    "crowd.tier.waldfreund": "Waldfreund",
    "crowd.tier.waldfreund.desc": "Dein Name auf unserer Unterstützer-Wand + exklusiver Sticker-Set.",
    "crowd.tier.trailblazer": "Trailblazer",
    "crowd.tier.trailblazer.desc": "Ein Schwarzwaldjungfrau T-Shirt deiner Wahl + alle Rewards aus Waldfreund.",
    "crowd.tier.gipfel": "Gipfelstürmer",
    "crowd.tier.gipfel.desc": "Exklusiver limitierter Hoodie + Naming im ersten Lookbook + alle vorherigen Rewards.",

    // Newsletter
    "newsletter.title": "10 % Rabatt sichern",
    "newsletter.subtitle": "Melde dich für unseren Newsletter an und erhalte",
    "newsletter.discount": " 10 % auf deine erste Bestellung",
    "newsletter.cta": "Jetzt 10 % sichern",
    "newsletter.privacy": "Kein Spam. Jederzeit abbestellbar. Nur das Beste aus dem Schwarzwald.",
    "newsletter.success.title": "Willkommen im Wald!",
    "newsletter.success.text": "Dein Rabattcode ist unterwegs.",
    "newsletter.footer.title": "10 % auf deine erste Bestellung",
    "newsletter.footer.subtitle": "Melde dich an und erhalte exklusive Angebote, Style-Tipps und News aus dem Schwarzwald.",
    "newsletter.footer.cta": "Anmelden",
    "newsletter.footer.success": "🎉 Willkommen! Dein Rabattcode ist unterwegs.",
    "newsletter.emailError": "Bitte gib eine gültige E-Mail-Adresse ein.",
    "newsletter.successToast": "Willkommen! Dein 10 %-Rabattcode kommt per E-Mail.",

    // Footer
    "footer.tagline": "Nachhaltige Streetwear aus dem Schwarzwald. © 2026",
  },

  en: {
    "nav.shop": "Shop",
    "nav.lookbook": "Lookbook",
    "nav.magazin": "Magazine",
    "nav.crowdfunding": "Crowdfunding",
    "nav.about": "About us",

    "hero.tagline": "Streetwear from the Black Forest",
    "hero.subtitle": "Rooted in the forest. Worn on the street.",
    "hero.cta": "Discover collection",

    "products.tag": "New Collection",
    "products.title": "Sustainable Hoodies, T-Shirts & Sweaters",
    "products.filter.all": "All",
    "products.filter.women": "Women",
    "products.filter.men": "Men",
    "products.sizes": "Sizes",
    "products.addToCart": "Add to cart",
    "products.material": "Material",

    "video.tag": "Spotlight",
    "video.title": "Our Highlights in Motion",

    "lookbook.title": "Lookbook – Urban Streetwear meets Black Forest",
    "lookbook.subtitle": "Sustainable fashion between Black Forest nature and urban city style in Stuttgart, Berlin & Cologne.",

    "blog.tag": "Magazine",
    "blog.title": "Forest, Fashion & Sustainability",
    "blog.subtitle": "Stories about Black Forest streetwear, fair production and the style between nature and the city.",
    "blog.readMore": "Read more",

    "about.tag": "Who we are",
    "about.title": "Sustainable Fashion from the Black Forest",
    "about.intro": "Schwarzwaldjungfrau is more than a label – it's a lifestyle. We combine urban streetwear with the raw beauty of the Black Forest. Every garment is fairly and sustainably produced from GOTS-certified organic cotton in a family-run workshop in the heart of the Black Forest.",
    "about.mission.title": "Our Mission",
    "about.mission.p1": "Fashion shouldn't demand compromises – neither in style nor responsibility. We believe sustainable clothing can be just as bold, urban and confident as fast fashion – without the ecological footprint.",
    "about.mission.p2": "Our designs are born where the Black Forest is densest. We draw inspiration from moss, fog and ancient fir trees – and translate it into pieces worn on the streets of Stuttgart, Berlin and Cologne. Tradition meets streetwear. Nature meets city. Heritage meets future.",
    "about.values.rooted": "Rooted",
    "about.values.rooted.desc": "Inspired by the dark forests of the Black Forest – every piece tells a story of nature and tradition.",
    "about.values.sustainable": "Sustainable",
    "about.values.sustainable.desc": "GOTS-certified organic cotton, fair wages, short supply chains. We produce exclusively in Europe.",
    "about.values.limitless": "Limitless",
    "about.values.limitless.desc": "Streetwear without borders – from the forest to the city. Our designs blend tradition with urban zeitgeist.",
    "about.story.title": "From Trail to Runway",
    "about.story.p1": "It all started with a simple question: Why isn't there fashion that celebrates the Black Forest – without being kitschy? No antlers on felt, no cuckoo clock prints. But real, wearable streetwear that carries the DNA of the forest.",
    "about.story.p2": "Our founder grew up between fir trees and gorges, studied design in the city, and always missed one thing: the feeling of forest. The silence. The moss underfoot. The morning fog. Schwarzwaldjungfrau is the attempt to translate this feeling into clothing.",
    "about.story.p3": "Every piece is made in small batches – not mass-produced, but a statement. We work with local artisans, use recycled packaging, and plant trees in the Black Forest for every collection sold.",
    "about.stats.organic": "Organic Cotton",
    "about.stats.production": "Production",
    "about.stats.fair": "Wages & Conditions",
    "about.stats.small": "Small batches, no fast fashion",
    "about.timeline.title": "Our Journey",
    "about.timeline.2023": "The idea is born – on a hike through the Northern Black Forest.",
    "about.timeline.2024": "First prototypes: Dirndelhoodie & Forest Hoodie handcrafted.",
    "about.timeline.2025": "Launch of the first collection with 6 pieces. Crowdfunding starts.",
    "about.timeline.2026": "Production in a family-run workshop in the Black Forest.",

    "crowd.tag": "Crowdfunding",
    "crowd.title": "Be Part of the Movement",
    "crowd.subtitle": "Help us bring sustainable Black Forest streetwear to the world. With your support, we'll fund the first major production – fair, local, no compromises.",
    "crowd.goal": "Goal",
    "crowd.backers": "Backers",
    "crowd.daysLeft": "Days left",
    "crowd.reached": "reached",
    "crowd.popular": "Most Popular",
    "crowd.of": "of",
    "crowd.remaining": "left",
    "crowd.selected": "selected",
    "crowd.emailPrompt": "Leave your email – we'll notify you when the campaign goes live.",
    "crowd.secure": "Pledge",
    "crowd.why": "Why support us?",
    "crowd.why.fair": "Fair & local.",
    "crowd.why.fair.desc": "Every euro goes into fair production in the Black Forest.",
    "crowd.why.trees": "Plant trees.",
    "crowd.why.trees.desc": "For every pledge, we plant a tree in the Black Forest.",
    "crowd.why.exclusive": "Exclusive.",
    "crowd.why.exclusive.desc": "Early supporters receive limited designs that will never be produced again.",
    "crowd.tier.waldfreund": "Forest Friend",
    "crowd.tier.waldfreund.desc": "Your name on our supporter wall + exclusive sticker set.",
    "crowd.tier.trailblazer": "Trailblazer",
    "crowd.tier.trailblazer.desc": "A Schwarzwaldjungfrau T-Shirt of your choice + all rewards from Forest Friend.",
    "crowd.tier.gipfel": "Summit Stormer",
    "crowd.tier.gipfel.desc": "Exclusive limited hoodie + naming in the first lookbook + all previous rewards.",

    "newsletter.title": "Get 10% Off",
    "newsletter.subtitle": "Sign up for our newsletter and receive",
    "newsletter.discount": " 10% off your first order",
    "newsletter.cta": "Get 10% now",
    "newsletter.privacy": "No spam. Unsubscribe anytime. Only the best from the Black Forest.",
    "newsletter.success.title": "Welcome to the Forest!",
    "newsletter.success.text": "Your discount code is on its way.",
    "newsletter.footer.title": "10% off your first order",
    "newsletter.footer.subtitle": "Sign up for exclusive offers, style tips and news from the Black Forest.",
    "newsletter.footer.cta": "Subscribe",
    "newsletter.footer.success": "🎉 Welcome! Your discount code is on its way.",
    "newsletter.emailError": "Please enter a valid email address.",
    "newsletter.successToast": "Welcome! Your 10% discount code is on its way.",

    "footer.tagline": "Sustainable streetwear from the Black Forest. © 2026",
  },

  zh: {
    "nav.shop": "商店",
    "nav.lookbook": "型录",
    "nav.magazin": "杂志",
    "nav.crowdfunding": "众筹",
    "nav.about": "关于我们",

    "hero.tagline": "来自黑森林的街头时尚",
    "hero.subtitle": "根植于森林，穿行于街头。",
    "hero.cta": "探索系列",

    "products.tag": "新系列",
    "products.title": "可持续卫衣、T恤和毛衣",
    "products.filter.all": "全部",
    "products.filter.women": "女款",
    "products.filter.men": "男款",
    "products.sizes": "尺码",
    "products.addToCart": "加入购物车",
    "products.material": "材质",

    "video.tag": "焦点",
    "video.title": "精选视频",

    "lookbook.title": "型录 – 都市街头风遇见黑森林",
    "lookbook.subtitle": "在斯图加特、柏林和科隆，黑森林自然与都市风格之间的可持续时尚。",

    "blog.tag": "杂志",
    "blog.title": "森林、时尚与可持续",
    "blog.subtitle": "关于黑森林街头服饰、公平生产以及自然与城市之间的风格故事。",
    "blog.readMore": "阅读更多",

    "about.tag": "关于我们",
    "about.title": "来自黑森林的可持续时尚",
    "about.intro": "Schwarzwaldjungfrau不仅是一个品牌——更是一种生活态度。我们将都市街头风与黑森林的粗犷之美融合在一起。每一件服装都采用GOTS认证的有机棉，在黑森林中心的家族工坊中公平且可持续地生产。",
    "about.mission.title": "我们的使命",
    "about.mission.p1": "时尚不应要求妥协——无论是在风格还是责任方面。我们相信，可持续服装可以像快时尚一样大胆、都市化和自信——只是没有生态足迹。",
    "about.mission.p2": "我们的设计诞生于黑森林最深处。我们从苔藓、雾气和古老的冷杉中汲取灵感——并将其转化为在斯图加特、柏林和科隆街头穿着的服饰。传统遇见街头。自然遇见城市。",
    "about.values.rooted": "根植",
    "about.values.rooted.desc": "灵感源于黑森林的幽暗林地——每一件作品都诉说着自然与传统的故事。",
    "about.values.sustainable": "可持续",
    "about.values.sustainable.desc": "GOTS认证有机棉、公平工资、短供应链。我们只在欧洲生产。",
    "about.values.limitless": "无界",
    "about.values.limitless.desc": "无界街头风——从森林到城市。我们的设计将传统与都市精神融合。",
    "about.story.title": "从山径到T台",
    "about.story.p1": "一切始于一个简单的问题：为什么没有庆祝黑森林的时尚——而不是俗气的？没有毛毡上的鹿角，没有布谷鸟钟图案。而是真正可穿的街头服饰，承载着森林的DNA。",
    "about.story.p2": "我们的创始人在冷杉和峡谷之间长大，在城市学习设计，却一直怀念一样东西：森林的感觉。寂静。脚下的苔藓。清晨的薄雾。Schwarzwaldjungfrau是将这种感觉转化为服装的尝试。",
    "about.story.p3": "每一件都是小批量生产——不是大规模生产，而是一种宣言。我们与当地工匠合作，使用回收包装，并为每个系列的销售在黑森林种植树木。",
    "about.stats.organic": "有机棉",
    "about.stats.production": "生产",
    "about.stats.fair": "工资与条件",
    "about.stats.small": "小批量，非快时尚",
    "about.timeline.title": "我们的旅程",
    "about.timeline.2023": "创意诞生——在北黑森林的一次徒步中。",
    "about.timeline.2024": "首批原型：Dirndelhoodie和Forest Hoodie手工制作。",
    "about.timeline.2025": "首个系列发布，共6件单品。众筹启动。",
    "about.timeline.2026": "在黑森林的家族工坊中生产。",

    "crowd.tag": "众筹",
    "crowd.title": "成为运动的一部分",
    "crowd.subtitle": "帮助我们将可持续的黑森林街头时尚带向世界。通过您的支持，我们将资助首次大规模生产——公平、本地、不妥协。",
    "crowd.goal": "目标",
    "crowd.backers": "支持者",
    "crowd.daysLeft": "天剩余",
    "crowd.reached": "已达成",
    "crowd.popular": "最受欢迎",
    "crowd.of": "/",
    "crowd.remaining": "剩余",
    "crowd.selected": "已选择",
    "crowd.emailPrompt": "留下您的电子邮件——活动上线时我们会通知您。",
    "crowd.secure": "支持",
    "crowd.why": "为什么要支持？",
    "crowd.why.fair": "公平与本地。",
    "crowd.why.fair.desc": "每一欧元都投入黑森林的公平生产。",
    "crowd.why.trees": "种植树木。",
    "crowd.why.trees.desc": "每次支持，我们都在黑森林种一棵树。",
    "crowd.why.exclusive": "独家。",
    "crowd.why.exclusive.desc": "早期支持者获得限量设计，绝不再生产。",
    "crowd.tier.waldfreund": "森林之友",
    "crowd.tier.waldfreund.desc": "您的名字出现在支持者墙上 + 独家贴纸套装。",
    "crowd.tier.trailblazer": "先锋",
    "crowd.tier.trailblazer.desc": "任选一件Schwarzwaldjungfrau T恤 + 森林之友所有奖励。",
    "crowd.tier.gipfel": "登顶者",
    "crowd.tier.gipfel.desc": "独家限量卫衣 + 首本型录署名 + 所有之前的奖励。",

    "newsletter.title": "获得10%折扣",
    "newsletter.subtitle": "订阅我们的通讯并获得",
    "newsletter.discount": "首次订单10%折扣",
    "newsletter.cta": "立即获取10%",
    "newsletter.privacy": "无垃圾邮件。随时退订。只有来自黑森林的精品。",
    "newsletter.success.title": "欢迎来到森林！",
    "newsletter.success.text": "您的折扣码正在发送中。",
    "newsletter.footer.title": "首次订单10%折扣",
    "newsletter.footer.subtitle": "订阅获取独家优惠、穿搭建议和黑森林资讯。",
    "newsletter.footer.cta": "订阅",
    "newsletter.footer.success": "🎉 欢迎！您的折扣码正在发送中。",
    "newsletter.emailError": "请输入有效的电子邮件地址。",
    "newsletter.successToast": "欢迎！您的10%折扣码正在发送中。",

    "footer.tagline": "来自黑森林的可持续街头时尚 © 2026",
  },
};

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang") as Lang;
    return saved && translations[saved] ? saved : "de";
  });

  const handleSetLang = (newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.lang = newLang === "zh" ? "zh-CN" : newLang;
  };

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations.de[key] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};
