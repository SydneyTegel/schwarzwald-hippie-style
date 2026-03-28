import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import blogStreetImg from "@/assets/blog-schwarzwald-streetwear.jpg";
import blogNachhaltigImg from "@/assets/blog-nachhaltigkeit.jpg";
import blogUrbanImg from "@/assets/blog-urban-tracht.jpg";
import blogWaldImg from "@/assets/blog-waldguide.jpg";

interface Article {
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  readTime: string;
  tag: string;
  date: string;
}

const articles: Article[] = [
  {
    title: "Schwarzwald trifft Streetwear – wie Natur urbane Mode inspiriert",
    excerpt: "Vom Tannenwald in die Stadt: Warum der Schwarzwald die perfekte Inspiration für nachhaltige Streetwear ist und wie wir Wald-Ästhetik in unsere Hoodies übersetzen.",
    image: blogStreetImg,
    alt: "Forest Hoodie im Schwarzwald – nachhaltige Streetwear inspiriert von Natur",
    readTime: "5 Min.",
    tag: "Style",
    date: "März 2026",
  },
  {
    title: "Bio-Baumwolle & Fair Fashion – so produzieren wir nachhaltig",
    excerpt: "380 g/m² French Terry aus GOTS-zertifizierter Bio-Baumwolle: Was nachhaltige Mode wirklich bedeutet und warum wir auf faire Lieferketten setzen.",
    image: blogNachhaltigImg,
    alt: "Bio-Baumwolle Hoodie Flat Lay – nachhaltige Materialien für Fair Fashion",
    readTime: "7 Min.",
    tag: "Nachhaltigkeit",
    date: "Februar 2026",
  },
  {
    title: "Tracht trifft Hoodie – wie wir Dirndl & Lederhosen neu denken",
    excerpt: "Dirndelhoodie, Lederhosenhoodie: Unsere modernen Trachten-Interpretationen verbinden bayerische Tradition mit urbanem Streetwear-Design.",
    image: blogUrbanImg,
    alt: "Junge Leute tragen moderne Trachten-Hoodies im urbanen Café in Berlin",
    readTime: "4 Min.",
    tag: "Kollektion",
    date: "Januar 2026",
  },
  {
    title: "Schwarzwald Style-Guide – 5 Wege, den Forest Hoodie zu tragen",
    excerpt: "Vom Waldspaziergang bis zum City-Trip: So stylst du unseren Forest Hoodie in Stuttgart, Berlin oder Köln für jeden Anlass.",
    image: blogWaldImg,
    alt: "Wanderer mit Hoodie im Schwarzwald bei Sonnenuntergang – Outdoor Style Guide",
    readTime: "3 Min.",
    tag: "Styling",
    date: "Dezember 2025",
  },
];

const BlogSection = () => {
  return (
    <section id="magazin" className="py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-3">
            Magazin
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Wald, Mode & Nachhaltigkeit
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Geschichten rund um Schwarzwald-Streetwear, faire Produktion und den Style zwischen Natur und Großstadt.
          </p>
        </motion.div>

        {/* Featured Article */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group cursor-pointer mb-10"
        >
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={articles[0].image}
                alt={articles[0].alt}
                loading="lazy"
                width={800}
                height={1024}
                className="w-full aspect-[4/5] md:aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 text-xs uppercase tracking-widest text-primary bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
                {articles[0].tag}
              </span>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 text-muted-foreground text-sm mb-4">
                <span>{articles[0].date}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                <span className="flex items-center gap-1"><Clock size={14} /> {articles[0].readTime}</span>
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {articles[0].title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                {articles[0].excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                Weiterlesen <ArrowRight size={16} />
              </span>
            </div>
          </div>
        </motion.article>

        {/* Article Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {articles.slice(1).map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={article.image}
                  alt={article.alt}
                  loading="lazy"
                  width={800}
                  height={1024}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 text-xs uppercase tracking-widest text-primary bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  {article.tag}
                </span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-xs mb-2">
                <span>{article.date}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
              </div>
              <h3 className="font-heading font-semibold text-foreground text-base md:text-lg mb-2 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-2">
                {article.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
