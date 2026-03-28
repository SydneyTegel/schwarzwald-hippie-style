import { useState, useEffect } from "react";
import { X, Mail, Gift } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { useI18n } from "@/i18n/I18nContext";

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const dismissed = localStorage.getItem("newsletter-dismissed");
    const subscribed = localStorage.getItem("newsletter-subscribed");
    if (dismissed || subscribed) return;
    const timer = setTimeout(() => setIsOpen(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => { setIsOpen(false); localStorage.setItem("newsletter-dismissed", "true"); };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error(t("newsletter.emailError"));
      return;
    }
    setIsSubmitted(true);
    localStorage.setItem("newsletter-subscribed", "true");
    toast.success(t("newsletter.successToast"));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={handleClose}>
          <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} transition={{ type: "spring", damping: 25, stiffness: 300 }} className="relative w-full max-w-md bg-card border border-border rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-br from-primary/20 to-accent/10 px-8 pt-8 pb-6 text-center">
              <button onClick={handleClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors" aria-label="Close"><X size={20} /></button>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 mb-4"><Gift className="text-primary" size={28} /></div>
              <h3 className="font-heading text-2xl font-bold text-foreground">{t("newsletter.title")}</h3>
              <p className="text-muted-foreground text-sm mt-2">{t("newsletter.subtitle")}<span className="text-accent font-semibold">{t("newsletter.discount")}</span>.</p>
            </div>
            <div className="px-8 pb-8 pt-4">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <input type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm" />
                  </div>
                  <button type="submit" className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors">{t("newsletter.cta")}</button>
                  <p className="text-[11px] text-muted-foreground text-center">{t("newsletter.privacy")}</p>
                </form>
              ) : (
                <div className="text-center py-4">
                  <div className="text-3xl mb-2">🎉</div>
                  <p className="text-foreground font-semibold">{t("newsletter.success.title")}</p>
                  <p className="text-muted-foreground text-sm mt-1">{t("newsletter.success.text")}</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewsletterPopup;
