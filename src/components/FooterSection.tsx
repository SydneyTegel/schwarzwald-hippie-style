import { useState } from "react";
import { Instagram, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo-icon-white.png";
import { toast } from "sonner";
import { useI18n } from "@/i18n/I18nContext";

const FooterSection = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { t } = useI18n();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error(t("newsletter.emailError"));
      return;
    }
    setSubscribed(true);
    localStorage.setItem("newsletter-subscribed", "true");
    toast.success(t("newsletter.successToast"));
  };

  return (
    <footer className="py-16 border-t border-border">
      <div className="container px-4">
        <div className="mb-12 pb-10 border-b border-border text-center">
          <div className="max-w-lg mx-auto">
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">{t("newsletter.footer.title")}</h3>
            <p className="text-muted-foreground text-sm mb-5">{t("newsletter.footer.subtitle")}</p>
            {!subscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2 max-w-sm mx-auto">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                  <input type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full pl-9 pr-3 py-2.5 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm" />
                </div>
                <button type="submit" className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors flex items-center gap-1.5">
                  {t("newsletter.footer.cta")} <ArrowRight size={14} />
                </button>
              </form>
            ) : (
              <p className="text-primary font-semibold text-sm">{t("newsletter.footer.success")}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <img src={logoIcon} alt="Schwarzwaldjungfrau Logo" width={86} height={86} className="w-[86px] h-[86px]" loading="lazy" />
              <div className="flex flex-col leading-none">
                <span className="font-heading text-sm font-bold tracking-tight text-foreground">SCHWARZWALD</span>
                <span className="font-heading text-sm font-bold tracking-tight text-primary">JUNGFRAU</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm mt-1">{t("footer.tagline")}</p>
          </div>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/shop" className="hover:text-foreground transition-colors">{t("nav.shop")}</Link>
            <Link to="/lookbook" className="hover:text-foreground transition-colors">{t("nav.lookbook")}</Link>
            <Link to="/magazin" className="hover:text-foreground transition-colors">{t("nav.magazin")}</Link>
            <Link to="/ueber-uns" className="hover:text-foreground transition-colors">{t("nav.about")}</Link>
          </nav>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="mailto:grotesk@grotesk.de?subject=Schwarzwaldjungfrau.de" className="text-sm text-muted-foreground hover:text-foreground transition-colors">hello@schwarzwaldjungfrau.de</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
