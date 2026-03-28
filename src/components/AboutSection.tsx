import { motion } from "framer-motion";
import { TreePine, Leaf, Mountain } from "lucide-react";

const values = [
  { icon: TreePine, title: "Verwurzelt", desc: "Inspiriert von den dunklen Wäldern des Schwarzwalds." },
  { icon: Leaf, title: "Nachhaltig", desc: "Bio-Baumwolle & faire Produktion – für dich und die Natur." },
  { icon: Mountain, title: "Grenzenlos", desc: "Streetwear ohne Grenzen – vom Wald in die Stadt." },
];

const AboutSection = () => {
  return (
    <section id="über uns" className="py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-3">
            Wer wir sind
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Born in the Forest
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Schwarzwaldjungfrau ist mehr als ein Label – es ist ein Lebensgefühl.
            Wir verbinden urbane Streetwear mit der rauen Schönheit des Schwarzwalds.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
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
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
