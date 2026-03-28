import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { getArticleBySlug, articles } from "@/data/articles";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NotFound from "./NotFound";

// Inline markdown-ish renderer for our content (no external deps needed)
const renderContent = (content: string) => {
  return content.split("\n\n").map((block, i) => {
    // Headings
    if (block.startsWith("### ")) {
      return <h3 key={i} className="font-heading text-xl font-bold text-foreground mt-10 mb-3">{block.replace("### ", "")}</h3>;
    }
    if (block.startsWith("## ")) {
      return <h2 key={i} className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">{block.replace("## ", "")}</h2>;
    }
    // Blockquote
    if (block.startsWith("> ")) {
      return (
        <blockquote key={i} className="border-l-4 border-primary pl-6 py-2 my-8 text-lg italic text-muted-foreground">
          {block.replace(/^> /gm, "")}
        </blockquote>
      );
    }
    // Horizontal rule
    if (block.trim() === "---") {
      return <hr key={i} className="border-border my-10" />;
    }
    // Table
    if (block.includes("|") && block.includes("---")) {
      const rows = block.split("\n").filter((r) => !r.match(/^\|[\s-|]+\|$/));
      const header = rows[0]?.split("|").filter(Boolean).map((c) => c.trim());
      const body = rows.slice(1).map((r) => r.split("|").filter(Boolean).map((c) => c.trim()));
      return (
        <div key={i} className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead className="bg-card">
              <tr>{header?.map((h, j) => <th key={j} className="px-4 py-3 text-left font-semibold text-foreground border-b border-border">{h}</th>)}</tr>
            </thead>
            <tbody>
              {body.map((row, ri) => (
                <tr key={ri} className="border-b border-border last:border-0">
                  {row.map((cell, ci) => <td key={ci} className="px-4 py-3 text-muted-foreground">{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    // Unordered list
    if (block.match(/^- /m)) {
      const items = block.split("\n").filter((l) => l.startsWith("- "));
      return (
        <ul key={i} className="space-y-2 my-4">
          {items.map((item, j) => {
            const text = item.replace(/^- /, "");
            const boldMatch = text.match(/^\*\*(.+?)\*\*(.*)$/);
            return (
              <li key={j} className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                {boldMatch ? <span><strong className="text-foreground">{boldMatch[1]}</strong>{boldMatch[2]}</span> : <span>{text}</span>}
              </li>
            );
          })}
        </ul>
      );
    }
    // Ordered list
    if (block.match(/^\d+\. /m)) {
      const items = block.split("\n").filter((l) => l.match(/^\d+\. /));
      return (
        <ol key={i} className="space-y-2 my-4">
          {items.map((item, j) => {
            const text = item.replace(/^\d+\. /, "");
            const boldMatch = text.match(/^\*\*(.+?)\*\*(.*)$/);
            return (
              <li key={j} className="flex items-start gap-3 text-muted-foreground">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center shrink-0 mt-0.5 font-semibold">{j + 1}</span>
                {boldMatch ? <span><strong className="text-foreground">{boldMatch[1]}</strong>{boldMatch[2]}</span> : <span>{text}</span>}
              </li>
            );
          })}
        </ol>
      );
    }
    // Bold in paragraph
    const renderInline = (text: string) => {
      const parts = text.split(/\*\*(.+?)\*\*/g);
      return parts.map((part, j) => j % 2 === 1 ? <strong key={j} className="text-foreground">{part}</strong> : part);
    };
    // Paragraph
    return <p key={i} className="text-muted-foreground leading-relaxed text-base">{renderInline(block)}</p>;
  });
};

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) return <NotFound />;

  const otherArticles = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-16">
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={article.image}
            alt={article.alt}
            className="w-full h-full object-cover"
            width={1600}
            height={900}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
      </section>

      {/* Article Content */}
      <article className="container px-4 max-w-3xl mx-auto -mt-32 relative z-10 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/magazin"
            className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-6 hover:gap-3 transition-all"
          >
            <ArrowLeft size={16} /> Zurück zum Magazin
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
            <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
              <Tag size={12} /> {article.tag}
            </span>
            <span>{article.date}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
            <span className="flex items-center gap-1"><Clock size={14} /> {article.readTime}</span>
          </div>

          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
            {article.title}
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-10 border-l-4 border-primary/30 pl-6">
            {article.excerpt}
          </p>

          <div className="space-y-1">
            {renderContent(article.content)}
          </div>
        </motion.div>

        {/* Related Products */}
        {article.relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 pt-10 border-t border-border"
          >
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">Passende Produkte</h3>
            <p className="text-muted-foreground text-sm mb-6">Die Pieces aus diesem Artikel – direkt im Shop ansehen.</p>
            <div className="flex flex-wrap gap-3">
              {article.relatedProducts.map((name) => (
                <Link
                  key={name}
                  to="/shop"
                  className="px-5 py-3 rounded-xl bg-card border border-border hover:border-primary text-foreground text-sm font-medium transition-colors"
                >
                  {name} →
                </Link>
              ))}
            </div>
          </motion.div>
        )}

        {/* More Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-10 border-t border-border"
        >
          <h3 className="font-heading text-xl font-bold text-foreground mb-6">Weitere Artikel</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {otherArticles.map((a) => (
              <Link key={a.slug} to={`/magazin/${a.slug}`} className="group">
                <div className="overflow-hidden rounded-xl mb-3">
                  <img
                    src={a.image}
                    alt={a.alt}
                    loading="lazy"
                    width={400}
                    height={500}
                    className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="text-xs text-primary font-medium uppercase tracking-wider">{a.tag}</span>
                <h4 className="font-heading font-semibold text-foreground text-sm mt-1 group-hover:text-primary transition-colors line-clamp-2">
                  {a.title}
                </h4>
              </Link>
            ))}
          </div>
        </motion.div>
      </article>

      <FooterSection />
    </div>
  );
};

export default BlogDetail;
