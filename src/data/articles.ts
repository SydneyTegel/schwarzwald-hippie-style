import blogStreetImg from "@/assets/blog-schwarzwald-streetwear.jpg";
import blogNachhaltigImg from "@/assets/blog-nachhaltigkeit.jpg";
import blogUrbanImg from "@/assets/blog-urban-tracht.jpg";
import blogWaldImg from "@/assets/blog-waldguide.jpg";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  readTime: string;
  tag: string;
  date: string;
  relatedProducts: string[];
  content: string;
}

export const articles: Article[] = [
  {
    slug: "schwarzwald-trifft-streetwear",
    title: "Schwarzwald trifft Streetwear – wie Natur urbane Mode inspiriert",
    excerpt: "Vom Tannenwald in die Stadt: Warum der Schwarzwald die perfekte Inspiration für nachhaltige Streetwear ist und wie wir Wald-Ästhetik in unsere Hoodies übersetzen.",
    image: blogStreetImg,
    alt: "Forest Hoodie im Schwarzwald – nachhaltige Streetwear inspiriert von Natur",
    readTime: "5 Min.",
    tag: "Style",
    date: "März 2026",
    relatedProducts: ["Forest Hoodie Frauen", "Forest Hoodie Herren", "Forest Hoodie Herren Avantgarde"],
    content: `## Wo der Wald zur Kollektion wird

Der Schwarzwald ist mehr als eine Landschaft – er ist ein Gefühl. Nebelverhangene Tannen, moosbedeckte Pfade, das Knacken unter den Füßen. Genau dieses Gefühl wollen wir in Streetwear übersetzen.

### Die Farbpalette der Natur

Unsere Forest-Linie greift die Farben des Waldes auf: tiefes Tannengrün, warmes Moosbraun und das matte Grau von Granitfelsen. Jede Farbe ist direkt von Wanderungen durch den Nordschwarzwald inspiriert – keine Pantone-Charts, sondern echte Natur.

### Mönchskutte trifft Hoodie

Die charakteristische Kapuzenform unserer Forest Hoodies erinnert nicht zufällig an mittelalterliche Mönchskutten. Die Klöster des Schwarzwalds – von St. Blasien bis Alpirsbach – haben die Region jahrhundertelang geprägt. Wir nehmen diese Silhouette und übersetzen sie in modernes Streetwear-Design.

> „Mode ist dann gut, wenn sie eine Geschichte erzählt. Unsere Geschichte beginnt im Wald." – Gründerteam Schwarzwaldjungfrau

### Vom Trail in die City

Das Besondere an unserer Kollektion: Sie funktioniert überall. Der Forest Hoodie sieht auf einem Waldweg genauso richtig aus wie auf der Königstraße in Stuttgart oder in einem Café in Berlin-Kreuzberg. Streetwear, die verwurzelt ist – aber keine Grenzen kennt.

### Nachhaltige Materialien aus Überzeugung

380 g/m² Bio-Baumwolle in French-Terry-Qualität: schwer genug für kühle Waldmorgen, weich genug für den ganzen Tag. GOTS-zertifiziert, fair produziert, in Portugal genäht. Weil Liebe zur Natur bei den Materialien anfängt.

### Die Details machen den Unterschied

- **Tannen-Stickerei** auf der Brust – handgezeichnetes Motiv
- **Daumenlöcher** in den Bündchen – für Wanderungen und kalte Stadtmorgen
- **Tiefe Känguru-Tasche** mit versteckter Innentasche
- **Verlängerte Rückenpartie** – schützt vor Wind auf dem Trail

Unsere Forest Hoodies sind nicht einfach Kleidungsstücke. Sie sind ein Statement: Man kann urban leben und trotzdem verwurzelt sein.`,
  },
  {
    slug: "bio-baumwolle-fair-fashion",
    title: "Bio-Baumwolle & Fair Fashion – so produzieren wir nachhaltig",
    excerpt: "380 g/m² French Terry aus GOTS-zertifizierter Bio-Baumwolle: Was nachhaltige Mode wirklich bedeutet und warum wir auf faire Lieferketten setzen.",
    image: blogNachhaltigImg,
    alt: "Bio-Baumwolle Hoodie Flat Lay – nachhaltige Materialien für Fair Fashion",
    readTime: "7 Min.",
    tag: "Nachhaltigkeit",
    date: "Februar 2026",
    relatedProducts: ["Moss Sweater Frauen", "Wildblumen Tee Frauen", "Cable Knit Sweater Herren"],
    content: `## Nachhaltigkeit ist kein Trend – es ist unsere Grundlage

Bei Schwarzwaldjungfrau ist nachhaltige Produktion keine Marketing-Story. Es ist die einzige Art, wie wir arbeiten wollen. Hier erklären wir, was das konkret bedeutet.

### GOTS-zertifizierte Bio-Baumwolle

Der Global Organic Textile Standard (GOTS) ist das strengste Zertifikat für Naturtextilien weltweit. Unsere Bio-Baumwolle wird ohne synthetische Pestizide oder Düngemittel angebaut und spart im Vergleich zu konventioneller Baumwolle:

- **91 % weniger Wasserverbrauch**
- **62 % weniger Energie**
- **46 % weniger CO₂-Emissionen**

### Faire Lieferkette von der Faser bis zum Hoodie

Unsere Produktion in Portugal garantiert europäische Arbeitsstandards, faire Löhne und kurze Transportwege. Jedes Kleidungsstück können wir bis zur Baumwollplantage zurückverfolgen.

| Schritt | Ort | Zertifizierung |
|---------|-----|----------------|
| Baumwollanbau | Türkei (Izmir) | GOTS, Fair Trade |
| Garnherstellung | Portugal (Porto) | OEKO-TEX 100 |
| Färbung | Portugal (Guimarães) | GOTS, bluesign |
| Konfektion | Portugal (Braga) | SA8000 |

### Warum 380 g/m²?

Viele Fast-Fashion-Hoodies wiegen 200-250 g/m² – dünn, schnell ausgeleiert, nach zwei Wäschen formlos. Unsere 380 g/m² French-Terry-Qualität hält Jahre. Das ist der nachhaltigste Ansatz: Kleidung, die nicht ersetzt werden muss.

### Färben ohne Gift

Alle Farben unserer Kollektion – vom Tannengrün bis zum Alpenrosa – werden mit GOTS-konformen Farbstoffen gefärbt. Keine Schwermetalle, keine AZO-Farbstoffe, kein Formaldehyd. Die Abwässer werden biologisch geklärt.

### Verpackung & Versand

- **Verpackung**: 100 % recyceltes Papier, kompostierbare Versandtasche aus Maisstärke
- **Versand**: CO₂-kompensiert über DHL GoGreen
- **Retouren**: Aufbereitung statt Vernichtung – jede Retoure wird professionell aufbereitet

> „Wer den Schwarzwald liebt, muss ihn schützen. Das fängt bei der Kleidung an, die man trägt."

### Was ihr tun könnt

1. **Weniger kaufen, besser kaufen** – Ein guter Hoodie ersetzt fünf billige
2. **Kalt waschen** – 30°C reicht, spart 40 % Energie
3. **Lufttrocknen** – schont die Fasern und die Umwelt
4. **Reparieren statt wegwerfen** – wir bieten einen kostenlosen Reparatur-Service`,
  },
  {
    slug: "tracht-trifft-hoodie",
    title: "Tracht trifft Hoodie – wie wir Dirndl & Lederhosen neu denken",
    excerpt: "Dirndelhoodie, Lederhosenhoodie: Unsere modernen Trachten-Interpretationen verbinden bayerische Tradition mit urbanem Streetwear-Design.",
    image: blogUrbanImg,
    alt: "Junge Leute tragen moderne Trachten-Hoodies im urbanen Café in Berlin",
    readTime: "4 Min.",
    tag: "Kollektion",
    date: "Januar 2026",
    relatedProducts: ["Dirndelhoodie Frauen", "Dirndelhoodie Pink Frauen", "Lederhosenhoodie Herren"],
    content: `## Tradition ist nicht verstaubt – sie braucht nur ein Update

Dirndl und Lederhosen stehen seit Jahrhunderten für alpine Identität. Aber warum sollte Tracht nur auf dem Oktoberfest funktionieren? Wir bringen sie auf die Straße.

### Der Dirndelhoodie: Unser Signature Piece

Die Idee war einfach und verrückt zugleich: Was passiert, wenn man ein Dirndl-Mieder mit einem Hoodie kreuzt? Das Ergebnis ist der Dirndelhoodie – unser meistverkauftes Stück.

**Was ihn besonders macht:**
- Traditionelle Schnürung aus gewachster Baumwollkordel
- Blumenstickerei, inspiriert von Schwarzwälder Trachten
- Schürzen-Element als asymmetrischer Saum
- Hoodie-Komfort mit Kapuze und Känguru-Tasche

### Von Pink bis Grün – eine Familie

Was als einzelnes Stück begann, ist heute eine ganze Familie:

- **Dirndelhoodie Classic** – der Original in Waldgrün
- **Dirndelhoodie V-Neck** – elegant mit Edelweiß-Stickerei
- **Dirndelhoodie Pink** – unser Statement in Alpenrosa (5 Varianten!)
- **Dirndelhoodie Grün & Spitze** – mit echter Klöppelspitze

### Der Lederhosenhoodie: Für Ihn und Sie

Hirschgeweih-Toggle-Verschlüsse, Wildleder-Optik-Panels, traditionelle Stickerei – aber eben als Hoodie. Die Lederhosenhoodie-Linie zeigt, dass Trachten-Elemente auch in maskulinem Streetwear-Design funktionieren.

### Die Handwerkskunst dahinter

Jede Stickerei basiert auf originalen Schwarzwälder Trachtenmustern. Wir haben mit lokalen Trachtenvereinen zusammengearbeitet, um authentische Motive zu finden und respektvoll zu interpretieren.

> „Wir kopieren keine Tracht – wir übersetzen sie in eine neue Sprache."

### Street-Tracht in der Stadt

Unsere Kunden tragen den Dirndelhoodie nicht zum Volksfest – sie tragen ihn im Büro, im Café, auf dem Fahrrad. In Stuttgart, Berlin, Köln, München. Das ist das Schöne an der Idee: Tracht wird Alltag.`,
  },
  {
    slug: "schwarzwald-style-guide",
    title: "Schwarzwald Style-Guide – 5 Wege, den Forest Hoodie zu tragen",
    excerpt: "Vom Waldspaziergang bis zum City-Trip: So stylst du unseren Forest Hoodie in Stuttgart, Berlin oder Köln für jeden Anlass.",
    image: blogWaldImg,
    alt: "Wanderer mit Hoodie im Schwarzwald bei Sonnenuntergang – Outdoor Style Guide",
    readTime: "3 Min.",
    tag: "Styling",
    date: "Dezember 2025",
    relatedProducts: ["Forest Hoodie Frauen", "Forest Hoodie Herren Kurz", "Pine Tee Herren"],
    content: `## 5 Looks für den Forest Hoodie

Unser Forest Hoodie ist das vielseitigste Stück der Kollektion. Hier zeigen wir euch fünf Wege, ihn zu stylen – von Outdoor bis Urban.

### 1. Der Trail-Look

**Setting:** Schwarzwald-Wanderung, Sonntagsspaziergang, Waldlauf

Kombiniert den Forest Hoodie mit einer guten Hiking-Hose und Trail-Runnern. Die tiefe Kapuze schützt bei leichtem Regen, die Daumenlöcher halten die Hände warm. Dazu ein kleiner Rucksack – fertig ist der perfekte Outdoor-Look.

**Styling-Tipp:** Die verlängerte Rückenpartie des Forest Hoodie deckt den Nierenbereich ab – perfekt für windige Gipfel.

### 2. Der Café-Look (Stuttgart)

**Setting:** Brunch auf der Königstraße, Kaffee im Bohnenviertel

Den Forest Hoodie locker über ein weißes T-Shirt werfen, dazu eine schwarze Jeans und weiße Sneaker. Lässig, urban, trotzdem mit Charakter. Der Mönchskutten-Schnitt fällt auf – auf eine gute Art.

### 3. Der Kreuzberg-Look (Berlin)

**Setting:** Galerie-Besuch, Späti-Abend, Flomarkt

Oversized tragen, mit weiten Cargo-Pants und schweren Boots. Die Avantgarde-Variante unseres Forest Hoodie passt hier besonders gut – asymmetrischer Schnitt trifft auf Berliner Laissez-faire.

### 4. Der Ehrenfeld-Look (Köln)

**Setting:** After-Work im Biergarten, Rheinterrassen

Den kurz geschnittenen Forest Hoodie (Gürtelhöhe) mit High-Waist-Jeans kombinieren. Dazu Birkenstock oder Canvas-Sneaker. Relaxed, freundlich, typisch Köln.

### 5. Der Layer-Look (Herbst/Winter)

**Setting:** Überall, wenn es kalt wird

Forest Hoodie unter einer offenen Jacke oder einem Mantel. Die Kapuze rausschauen lassen – das gibt jedem Outfit sofort Charakter. Funktioniert mit Peacoat, Parka oder sogar einem Blazer.

---

### Bonus: Die richtige Größe

| Körpergröße | Relaxed Fit | Oversized |
|-------------|------------|-----------|
| 160–170 cm | S | M |
| 170–180 cm | M | L |
| 180–190 cm | L | XL |
| 190+ cm | XL | XXL |

**Pro-Tipp:** Im Zweifelsfall eine Größe größer nehmen – der Oversized-Look ist bei unseren Hoodies gewollt und sieht am besten aus.`,
  },
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find((a) => a.slug === slug);
};
