import logoIcon from "@/assets/logo-icon-white.png";

const LogoTestPage = () => {
  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <h1 className="font-heading text-3xl font-bold text-foreground text-center mb-4">
        Logo-Varianten – Zweizeilig
      </h1>
      <p className="text-muted-foreground text-center mb-16 text-sm">
        Wähle deine bevorzugte Variante. Klick auf den Vorschlag unten zum Umsetzen.
      </p>

      <div className="max-w-5xl mx-auto space-y-20">
        {/* Variante 1: Linksbündig, gleiche Größe, Icon links */}
        <div>
          <p className="text-xs uppercase tracking-widest text-accent mb-6 text-center">
            Variante 1 – Linksbündig, gleiche Größe
          </p>
          <div className="flex justify-center">
            <div className="bg-background/80 backdrop-blur-lg border border-border px-6 py-4 rounded-2xl inline-flex items-center gap-3">
              <img src={logoIcon} alt="Logo" className="w-9 h-9" />
              <div className="flex flex-col leading-none">
                <span className="font-heading text-lg font-bold tracking-tight text-foreground">
                  SCHWARZWALD
                </span>
                <span className="font-heading text-lg font-bold tracking-tight text-primary">
                  JUNGFRAU
                </span>
              </div>
            </div>
          </div>
          {/* Navbar mock */}
          <div className="mt-6 bg-background/80 backdrop-blur-lg border border-border rounded-2xl px-6 py-3 flex items-center justify-between max-w-4xl mx-auto">
            <div className="flex items-center gap-2.5">
              <img src={logoIcon} alt="Logo" className="w-7 h-7" />
              <div className="flex flex-col leading-none">
                <span className="font-heading text-sm font-bold tracking-tight text-foreground">
                  SCHWARZWALD
                </span>
                <span className="font-heading text-sm font-bold tracking-tight text-primary">
                  JUNGFRAU
                </span>
              </div>
            </div>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <span>Shop</span><span>Lookbook</span><span>Magazin</span><span>Über uns</span>
            </div>
          </div>
        </div>

        {/* Variante 2: Zentriert, hierarchisch, Icon oben */}
        <div>
          <p className="text-xs uppercase tracking-widest text-accent mb-6 text-center">
            Variante 2 – Zentriert, hierarchisch, Icon oben
          </p>
          <div className="flex justify-center">
            <div className="bg-background/80 backdrop-blur-lg border border-border px-8 py-5 rounded-2xl inline-flex flex-col items-center gap-2">
              <img src={logoIcon} alt="Logo" className="w-8 h-8" />
              <div className="flex flex-col items-center leading-none">
                <span className="font-heading text-2xl font-bold tracking-tight text-foreground">
                  SCHWARZWALD
                </span>
                <span className="font-heading text-sm font-medium tracking-[0.35em] text-primary mt-1">
                  JUNGFRAU
                </span>
              </div>
            </div>
          </div>
          {/* Navbar mock */}
          <div className="mt-6 bg-background/80 backdrop-blur-lg border border-border rounded-2xl px-6 py-3 flex items-center justify-between max-w-4xl mx-auto">
            <div className="flex items-center gap-2.5">
              <img src={logoIcon} alt="Logo" className="w-6 h-6" />
              <div className="flex flex-col items-start leading-none">
                <span className="font-heading text-sm font-bold tracking-tight text-foreground">
                  SCHWARZWALD
                </span>
                <span className="font-heading text-[9px] font-medium tracking-[0.3em] text-primary">
                  JUNGFRAU
                </span>
              </div>
            </div>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <span>Shop</span><span>Lookbook</span><span>Magazin</span><span>Über uns</span>
            </div>
          </div>
        </div>

        {/* Variante 3: Linksbündig, Icon rechts */}
        <div>
          <p className="text-xs uppercase tracking-widest text-accent mb-6 text-center">
            Variante 3 – Linksbündig, Icon rechts
          </p>
          <div className="flex justify-center">
            <div className="bg-background/80 backdrop-blur-lg border border-border px-6 py-4 rounded-2xl inline-flex items-center gap-4">
              <div className="flex flex-col leading-none">
                <span className="font-heading text-xl font-bold tracking-tight text-foreground">
                  SCHWARZWALD
                </span>
                <span className="font-heading text-xl font-bold tracking-tight text-primary">
                  JUNGFRAU
                </span>
              </div>
              <img src={logoIcon} alt="Logo" className="w-10 h-10" />
            </div>
          </div>
          {/* Navbar mock */}
          <div className="mt-6 bg-background/80 backdrop-blur-lg border border-border rounded-2xl px-6 py-3 flex items-center justify-between max-w-4xl mx-auto">
            <div className="flex items-center gap-2">
              <div className="flex flex-col leading-none">
                <span className="font-heading text-sm font-bold tracking-tight text-foreground">
                  SCHWARZWALD
                </span>
                <span className="font-heading text-sm font-bold tracking-tight text-primary">
                  JUNGFRAU
                </span>
              </div>
              <img src={logoIcon} alt="Logo" className="w-6 h-6" />
            </div>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <span>Shop</span><span>Lookbook</span><span>Magazin</span><span>Über uns</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoTestPage;
