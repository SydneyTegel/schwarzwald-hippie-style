import { motion } from "framer-motion";
import { TreePine, Leaf, Mountain, Heart, Recycle, Users, MapPin, Sparkles } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

const AboutSection = () => {
  const { t } = useI18n();

  const values = [
    { icon: TreePine, title: t("about.values.rooted"), desc: t("about.values.rooted.desc") },
    { icon: Leaf, title: t("about.values.sustainable"), desc: t("about.values.sustainable.desc") },
    { icon: Mountain, title: t("about.values.limitless"), desc: t("about.values.limitless.desc") },
  ];

  const milestones = [
    { year: "2023", text: t("about.timeline.2023") },
    { year: "2024", text: t("about.timeline.2024") },
    { year: "2025", text: t("about.timeline.2025") },
    { year: "2026", text: t("about.timeline.2026") },
  ];

  return (
    <section id="über uns" className="py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-3">
            {t("about.tag")}
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("about.title")}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            {t("about.intro")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative mb-24 p-10 md:p-16 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-accent/5 border border-border"
        >
          <Sparkles className="absolute top-6 right-6 text-accent/40" size={24} />
          <div className="max-w-3xl">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t("about.mission.title")}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              {t("about.mission.p1")}
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              {t("about.mission.p2")}
            </p>
          </div>
        </motion.div>

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

        <div className="grid md:grid-cols-2 gap-16 mb-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
              {t("about.story.title")}
            </h2>
            <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
              <p>{t("about.story.p1")}</p>
              <p>{t("about.story.p2")}</p>
              <p>{t("about.story.p3")}</p>
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
                <p className="text-xs text-muted-foreground mt-1">{t("about.stats.organic")}</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border text-center">
                <MapPin className="mx-auto text-primary mb-3" size={24} />
                <p className="text-2xl font-bold text-foreground">EU</p>
                <p className="text-xs text-muted-foreground mt-1">{t("about.stats.production")}</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border text-center">
                <Heart className="mx-auto text-primary mb-3" size={24} />
                <p className="text-2xl font-bold text-foreground">Fair</p>
                <p className="text-xs text-muted-foreground mt-1">{t("about.stats.fair")}</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border text-center">
                <Users className="mx-auto text-primary mb-3" size={24} />
                <p className="text-2xl font-bold text-foreground">Klein</p>
                <p className="text-xs text-muted-foreground mt-1">{t("about.stats.small")}</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            {t("about.timeline.title")}
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
