import { motion } from "framer-motion";
import { TreePine, Leaf, Mountain, Heart, Recycle, Users, MapPin, Sparkles } from "lucide-react";

const values = [
  { icon: TreePine, title: "Verwurzelt", desc: "Inspiriert von den dunklen Wäldern des Schwarzwalds – jedes Stück erzählt eine Geschichte von Natur und Tradition." },
  { icon: Leaf, title: "Nachhaltig", desc: "GOTS-zertifizierte Bio-Baumwolle, faire Löhne, kurze Lieferwege. Wir produzieren ausschließlich in Europa." },
  { icon: Mountain, title: "Grenzenlos", desc: "Streetwear ohne Grenzen – vom Wald in die Stadt. Unsere Designs verbinden Tracht mit urbanem Zeitgeist." },
];

const milestones = [
  { year: "2023", text: "Die Idee entsteht – auf einer Wanderung durch den Nordschwarzwald." },
  { year: "2024", text: "Erste Prototypen: Dirndelhoodie & Forest Hoodie entstehen in Handarbeit." },
  { year: "2025", text: "Launch der ersten Kollektion mit 6 Pieces. Crowdfunding startet." },
  { year: "2026", text: "Produktion in einer familiengeführten Manufaktur im Schwarzwald." },
];

const AboutSection = () => {
  return (
    <section id="über uns" className="py-24">
      <div className="container px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-3">
            Wer wir sind
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nachhaltige Mode aus dem Schwarzwald
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Schwarzwaldjungfrau ist mehr als ein Label – es ist ein Lebensgefühl.
            Wir verbinden urbane Streetwear mit der rauen Schönheit des Schwarzwalds.
            Jedes Kleidungsstück wird fair und nachhaltig produziert, aus GOTS-zertifizierter
            Bio-Baumwolle, in einer familiengeführten Manufaktur mitten im Schwarzwald.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative mb-24 p-10 md:p-16 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-accent/5 border border-border"
        >
          <Sparkles className="absolute top-6 right-6 text-accent/40" size={24} />
          <div className="max-w-3xl">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Unsere Mission
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Mode sollte keine Kompromisse verlangen – weder beim Style noch bei der Verantwortung.
              Wir glauben, dass nachhaltige Kleidung genauso bold, urban und selbstbewusst sein kann
              wie Fast Fashion – nur eben ohne den ökologischen Fußabdruck.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Unsere Designs entstehen dort, wo der Schwarzwald am dichtesten ist. Wir lassen uns
              von Moos, Nebel und alten Tannen inspirieren – und übersetzen das in Pieces, die auf
              den Straßen von Stuttgart, Berlin und Köln getragen werden. Tracht trifft Streetwear.
              Natur trifft Stadt. Tradition trifft Zukunft.
            </p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-5">
                <item.icon size={28} />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Story */}
        <div className="grid md:grid-cols-2 gap-16 mb-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
              Vom Wanderweg zum Laufsteg
            </h2>
            <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
              <p>
                Alles begann mit einer einfachen Frage: Warum gibt es keine Mode, die den
                Schwarzwald feiert – ohne kitschig zu sein? Keine Hirschgeweihe auf Filz,
                keine Kuckucksuhren-Prints. Sondern echte, tragbare Streetwear, die die
                DNA des Waldes in sich trägt.
              </p>
              <p>
                Unsere Gründerin wuchs zwischen Tannen und Schluchten auf, studierte Design
                in der Stadt und vermisste dort immer eines: das Gefühl von Wald. Die Stille.
                Das Moos unter den Füßen. Den Nebel am Morgen. Schwarzwaldjungfrau ist der
                Versuch, dieses Gefühl in Kleidung zu übersetzen.
              </p>
              <p>
                Jedes Stück wird in kleinen Auflagen gefertigt – kein Massenprodukt, sondern
                ein Statement. Wir arbeiten mit lokalen Handwerkern, nutzen recycelte
                Verpackungen und pflanzen für jede verkaufte Kollektion Bäume im Schwarzwald.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-card border border-border text-center">
                <Recycle className="mx-auto text-primary mb-3" size={24} />
                <p className="text-2xl font-bold text-foreground">100%</p>
                <p className="text-xs text-muted-foreground mt-1">Bio-Baumwolle</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border text-center">
                <MapPin className="mx-auto text-primary mb-3" size={24} />
                <p className="text-2xl font-bold text-foreground">EU</p>
                <p className="text-xs text-muted-foreground mt-1">Produktion</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border text-center">
                <Heart className="mx-auto text-primary mb-3" size={24} />
                <p className="text-2xl font-bold text-foreground">Fair</p>
                <p className="text-xs text-muted-foreground mt-1">Löhne & Bedingungen</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border text-center">
                <Users className="mx-auto text-primary mb-3" size={24} />
                <p className="text-2xl font-bold text-foreground">Klein</p>
                <p className="text-xs text-muted-foreground mt-1">Auflagen, kein Fast Fashion</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Unsere Reise
          </h2>
          <div className="max-w-2xl mx-auto">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                    {m.year}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-px h-full bg-border mt-2" />
                  )}
                </div>
                <p className="text-muted-foreground text-sm pt-2.5 leading-relaxed">{m.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
