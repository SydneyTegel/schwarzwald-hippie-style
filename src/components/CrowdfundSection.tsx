import { useState } from "react";
import { motion } from "framer-motion";
import { Rocket, TreePine, Heart, Star, Users, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const GOAL = 25000;
const RAISED = 8750;
const BACKERS = 47;
const DAYS_LEFT = 23;

const tiers = [
  {
    name: "Waldfreund",
    price: 25,
    icon: TreePine,
    description: "Dein Name auf unserer Unterstützer-Wand + exklusiver Sticker-Set.",
    claimed: 34,
    limit: 100,
  },
  {
    name: "Trailblazer",
    price: 89,
    icon: Star,
    description: "Ein Schwarzwaldjungfrau T-Shirt deiner Wahl + alle Rewards aus Waldfreund.",
    claimed: 12,
    limit: 50,
    popular: true,
  },
  {
    name: "Gipfelstürmer",
    price: 179,
    icon: Rocket,
    description: "Exklusiver limitierter Hoodie + Naming im ersten Lookbook + alle vorherigen Rewards.",
    claimed: 1,
    limit: 20,
  },
];

const CrowdfundSection = () => {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [email, setEmail] = useState("");

  const progress = (RAISED / GOAL) * 100;

  const handlePledge = (tierName: string) => {
    setSelectedTier(tierName);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Bitte gib eine gültige E-Mail-Adresse ein.");
      return;
    }
    toast.success(`Danke! Du wirst benachrichtigt, wenn "${selectedTier}" live geht.`);
    setSelectedTier(null);
    setEmail("");
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/50">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-accent font-medium mb-3">
            Crowdfunding
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Werde Teil der Bewegung
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Hilf uns, nachhaltige Schwarzwald-Streetwear in die Welt zu bringen.
            Mit deiner Unterstützung finanzieren wir die erste große Produktion –
            fair, lokal und ohne Kompromisse.
          </p>
        </motion.div>

        {/* Progress Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16 p-8 md:p-10 rounded-3xl bg-card border border-border"
        >
          <div className="flex flex-wrap gap-8 justify-between items-end mb-6">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-foreground">
                €{RAISED.toLocaleString("de-DE")}
              </p>
              <p className="text-muted-foreground text-sm">
                von €{GOAL.toLocaleString("de-DE")} Ziel
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">{BACKERS}</p>
              <p className="text-muted-foreground text-sm">Unterstützer</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-accent">{DAYS_LEFT}</p>
              <p className="text-muted-foreground text-sm">Tage übrig</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative h-4 bg-muted rounded-full overflow-hidden mb-3">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${progress}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-accent rounded-full"
            />
          </div>
          <p className="text-sm text-muted-foreground text-right">
            {Math.round(progress)}% erreicht
          </p>
        </motion.div>

        {/* Tiers */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-2xl border transition-all cursor-pointer ${
                tier.popular
                  ? "bg-primary/5 border-primary/40 ring-1 ring-primary/20"
                  : "bg-card border-border hover:border-primary/30"
              } ${selectedTier === tier.name ? "ring-2 ring-primary" : ""}`}
              onClick={() => handlePledge(tier.name)}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full">
                  Beliebteste Wahl
                </span>
              )}

              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                <tier.icon size={24} />
              </div>

              <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                {tier.name}
              </h3>
              <p className="text-2xl font-bold text-accent mb-3">€{tier.price}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {tier.description}
              </p>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Users size={12} />
                  {tier.claimed} von {tier.limit}
                </span>
                <span>{tier.limit - tier.claimed} übrig</span>
              </div>

              <div className="h-1.5 bg-muted rounded-full mt-2 overflow-hidden">
                <div
                  className="h-full bg-primary/60 rounded-full transition-all"
                  style={{ width: `${(tier.claimed / tier.limit) * 100}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pledge Form */}
        {selectedTier && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto p-8 rounded-2xl bg-card border border-primary/30 text-center"
          >
            <CheckCircle className="mx-auto text-primary mb-3" size={32} />
            <h3 className="font-heading text-lg font-bold text-foreground mb-2">
              „{selectedTier}" ausgewählt
            </h3>
            <p className="text-muted-foreground text-sm mb-5">
              Hinterlasse deine E-Mail – wir benachrichtigen dich, sobald die Kampagne live geht.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                placeholder="deine@email.de"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2.5 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                Sichern
              </button>
            </form>
          </motion.div>
        )}

        {/* Why Support */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-20 text-center"
        >
          <h3 className="font-heading text-xl font-bold text-foreground mb-6">
            Warum unterstützen?
          </h3>
          <div className="grid sm:grid-cols-3 gap-6 text-sm">
            <div className="flex flex-col items-center gap-2">
              <Heart className="text-primary" size={20} />
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">Fair & lokal.</span> Jeder Euro fließt in faire Produktion im Schwarzwald.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <TreePine className="text-primary" size={20} />
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">Bäume pflanzen.</span> Für jede Pledge pflanzen wir einen Baum im Schwarzwald.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Star className="text-primary" size={20} />
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">Exklusiv.</span> Early-Supporter erhalten limitierte Designs, die nie wieder produziert werden.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CrowdfundSection;
