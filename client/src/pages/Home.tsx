import "../legal.css";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  Instagram,
  Leaf,
  MapPin,
  Menu,
  MessageCircle,
  Mountain,
  PackageCheck,
  Sparkles,
  X,
} from "lucide-react";

const WHATSAPP_NUMBER = "919999999999"; // Replace with the brand's live WhatsApp number.
const LOGO_CIRCLE = "https://litter.catbox.moe/fdtgr6.png";
const LOGO_GOLD = "https://litter.catbox.moe/4g78wy.png";
const LOGO_DARK = "https://litter.catbox.moe/f2twec.png";
const LOGO_GOLD_DARK = "https://litter.catbox.moe/glo59b.png";
const KAHWA_IMG = "https://litter.catbox.moe/9ehhmf.jpg";

const products = [
  {
    id: "white-honey",
    index: "01",
    category: "Acacia Flora",
    name: "White Honey",
    tagline: "A delicate sweetness from Kashmir.",
    short: "Pure floral sweetness, kept close to its natural character.",
    paragraphs: [
      "White Honey is a gently floral honey drawn from the white blossoms of native acacia trees around Bijbehara. It is soft, clean and lightly sweet — a honey that keeps its natural character close.",
      "The texture is naturally creamy, with a mild sweetness that never overwhelms. Its quiet floral notes make it a natural companion for breakfast, tea, or simple everyday cooking.",
      "Chosen for purity of flavour rather than intensity, this is honey for those who prefer subtlety over force.",
    ],
    origin: "Bijbehara, Anantnag, Kashmir",
    character: "Delicate · Floral · Naturally sweet",
    bestEnjoyed: "With tea, warm bread, yoghurt, or as a soft finishing touch over fruit and desserts",
    sizes: ["250 g", "325 g", "500 g", "1 kg"],
    price: "Enquire",
    image: KAHWA_IMG,
    tone: "honey",
  },
  {
    id: "sulai-honey",
    index: "02",
    category: "Sulai Flora",
    name: "Sulai Butter Honey",
    tagline: "Rich, buttery, and unmistakably of the Valley.",
    short: "A distinctive Kashmiri honey with rich floral character from Sulai blossoms.",
    paragraphs: [
      "Sulai Butter Honey is gathered from the Sulai blossoms of Kashmir — a honey known for its depth and distinctive character. It is richer and more layered than a simple floral honey.",
      "The flavour is buttery and full, with a gentle bitterness and a long, lingering finish. It carries the warmth of the landscape it comes from.",
      "This is a honey for those who enjoy complexity — best savoured slowly, on its own or alongside strong tea and rustic bread.",
    ],
    origin: "Bijbehara, Anantnag, Kashmir",
    character: "Rich · Buttery · Lingering",
    bestEnjoyed: "On its own, with strong Kashmiri tea, warm roti, or as a generous drizzle over cheese and nuts",
    sizes: ["250 g", "325 g", "500 g", "1 kg"],
    price: "Enquire",
    image: KAHWA_IMG,
    tone: "honey",
  },
  {
    id: "forest-honey",
    index: "03",
    category: "Multiflora Forest",
    name: "Forest Honey",
    tagline: "A deeper honey shaped by the forest.",
    short: "A deeper honey shaped by the varied floral sources of Kashmir's forest landscapes.",
    paragraphs: [
      "Forest Honey is shaped by the varied floral sources of Kashmir's wooded landscapes. It is multiflora in nature — deeper, warmer, and more complex than single-blossom honeys.",
      "Expect warm woody notes, gentle floral sweetness, and a finish that lingers. The character shifts slightly with the season, reflecting the diversity of the forest floor and canopy.",
      "It is a honey of place — suited to everyday use, yet distinctive enough to stand on its own.",
    ],
    origin: "Bijbehara, Anantnag, Kashmir",
    character: "Deep · Woody · Complex",
    bestEnjoyed: "With morning porridge, dark bread, cheese boards, or stirred into warm milk",
    sizes: ["250 g", "325 g", "500 g", "1 kg"],
    price: "Enquire",
    image: KAHWA_IMG,
    tone: "honey",
  },
  {
    id: "saffron",
    index: "04",
    category: "Raw Mongra",
    name: "Raw Mongra Saffron",
    tagline: "A rare seasonal harvest from Kashmir.",
    short: "A rare seasonal harvest from Kashmir — deep colour, delicate aroma and natural character.",
    paragraphs: [
      "Raw Mongra Saffron is the carefully separated stigma of Crocus sativus, harvested in Kashmir's saffron fields. It is valued for its deep colour, delicate aroma, and natural character.",
      "The aroma is floral, warm and subtly earthy, with a honey-like sweetness and a lingering finish. Genuine strands gradually release a natural golden hue when steeped in milk or water.",
      "This is saffron for cooking, for Kahwa, and for the quiet rituals of the Kashmiri kitchen — used sparingly, and with care.",
    ],
    origin: "Kashmir",
    character: "Floral · Warm · Aromatic",
    bestEnjoyed: "In Kahwa, milk, rice dishes, desserts, or as a finishing accent in slow cooking",
    sizes: ["1 g", "2 g", "3 g", "4 g", "5 g"],
    price: "Enquire",
    image: KAHWA_IMG,
    tone: "saffron",
  },
  {
    id: "kahwa",
    index: "05",
    category: "Saffron Mist Blend",
    name: "Kashmiri Kahwa",
    tagline: "Warmth, spice, and a quiet saffron note.",
    short: "A warming Kashmiri tea blend of green tea, aromatic spices and saffron, finished with crushed almonds.",
    paragraphs: [
      "Kashmiri Kahwa is a traditional tea blend of green tea, aromatic spices and a delicate touch of saffron, finished with crushed almonds. It is the everyday warmth of the Valley in a cup.",
      "The flavour is bright with cardamom, warming with ginger and cinnamon, subtle with clove, and lifted by saffron's gentle aroma. Crushed almonds add a soft, nutty close.",
      "Brewed lightly and served hot, it is as much a ritual as a drink — shared in the morning, after meals, or on cold evenings.",
    ],
    origin: "Kashmir",
    character: "Aromatic · Warming · Gently sweet",
    bestEnjoyed: "Brewed light and hot, plain or with a touch of honey; best shared",
    sizes: ["100 g", "200 g", "500 g", "1 kg"],
    price: "Enquire",
    image: KAHWA_IMG,
    tone: "kahwa",
  },
  {
    id: "almonds",
    index: "06",
    category: "Dry fruit",
    name: "Raw Almonds",
    tagline: "Clean, creamy, and carefully selected.",
    short: "Carefully selected Kashmiri almonds, kept close to their natural character.",
    paragraphs: [
      "Raw Almonds from Kashmir are selected for their clean flavour and natural character. Mildly sweet and delicately nutty, they offer a creamy bite and a naturally crisp finish.",
      "Kept close to their natural state, they are suited to everyday snacking, baking, and the traditional uses of the Kashmiri pantry — including Kahwa.",
      "Custom quantities are available on request, including 250 g, 500 g, 750 g and 1 kg.",
    ],
    origin: "Kashmir",
    character: "Mildly sweet · Creamy · Crisp",
    bestEnjoyed: "As a snack, in Kahwa, baking, salads, or with honey and fruit",
    sizes: ["250 g", "500 g", "750 g", "1 kg"],
    price: "Enquire",
    image: KAHWA_IMG,
    tone: "almond",
  },
  {
    id: "walnuts",
    index: "07",
    category: "Dry fruit",
    name: "Walnut Kernels",
    tagline: "Rich, earthy, and full of natural character.",
    short: "Carefully selected Kashmiri walnut kernels, rich in natural character.",
    paragraphs: [
      "Walnut Kernels from Kashmir are chosen for their rich, buttery character and natural earthy nuttiness. A gentle bitterness and a delicate finish complete the profile.",
      "They belong to the everyday table of the Valley — eaten plain, folded into sweets, or used in traditional cooking where depth of flavour matters.",
      "Custom quantities are available on request, including 250 g, 500 g, 750 g and 1 kg.",
    ],
    origin: "Kashmir",
    character: "Buttery · Earthy · Rich",
    bestEnjoyed: "Plain, in baking and sweets, with cheese, or as part of a dry-fruit mix",
    sizes: ["250 g", "500 g", "750 g", "1 kg"],
    price: "Enquire",
    image: KAHWA_IMG,
    tone: "walnut",
  },
];

type Product = (typeof products)[number];

function buildWhatsAppMessage(product?: Product, size?: string) {
  if (!product) {
    return "Hello BELYN, I'd like to know more about the Kashmir collection.";
  }
  const isDryFruit = product.id === "almonds" || product.id === "walnuts";
  if (isDryFruit) {
    return `Hi Belyn, I'm interested in ${product.name}. Please share the available quantities (250g · 500g · 750g · 1kg) and details, including custom quantities.`;
  }
  if (size) {
    return `Hi Belyn, I'm interested in ${product.name} (${size}). Please share the available quantities and details.`;
  }
  return `Hi Belyn, I'm interested in ${product.name}. Please share the available quantities and details.`;
}

function WhatsAppButton({
  product,
  size,
  compact = false,
  label,
}: {
  product?: Product;
  size?: string;
  compact?: boolean;
  label?: string;
}) {
  const productName = product?.name ?? "BELYN's Kashmir collection";
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage(product, size))}`;
  const text = label ?? (compact ? "Order on WhatsApp" : "Enquire on WhatsApp");

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${text} for ${productName}`}
      className={`wa-button ${compact ? "wa-button--compact" : ""}`}
    >
      <MessageCircle size={16} strokeWidth={1.7} />
      <span>{text}</span>
      <ArrowUpRight size={15} strokeWidth={1.8} />
    </a>
  );
}

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const [size, setSize] = useState(product.sizes[0]);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    const frame = requestAnimationFrame(() => setEntered(true));
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      cancelAnimationFrame(frame);
    };
  }, [onClose]);

  return (
    <div
      className={`product-detail-backdrop ${entered ? "is-open" : ""}`}
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={`product-detail ${entered ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={product.name}
      >
        <button className="product-detail-close" onClick={onClose} aria-label="Close product details">
          <X size={18} />
        </button>

        <div className="product-detail-media">
          <img src={product.image} alt={product.name} />
          <span className={`product-stamp product-stamp--${product.tone}`}>BELYN / {product.index}</span>
        </div>

        <div className="product-detail-body">
          <button type="button" className="product-detail-back" onClick={onClose}>
            ← Back to collection
          </button>

          <p className="product-detail-meta">
            {product.index} / {product.category.toUpperCase()}
          </p>

          <h2 className="product-detail-title">{product.name}</h2>
          <p className="product-detail-tagline">“{product.tagline}”</p>

          <div className="product-detail-rule" />

          <div className="product-detail-copy">
            {product.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <div className="product-detail-info">
            <div>
              <span>Origin</span>
              <strong>{product.origin}</strong>
            </div>
            <div>
              <span>Character</span>
              <strong>{product.character}</strong>
            </div>
            <div>
              <span>Best enjoyed</span>
              <strong>{product.bestEnjoyed}</strong>
            </div>
            <div>
              <span>Available quantities</span>
              <strong>{product.sizes.join(" · ")}</strong>
            </div>
          </div>

          <div className="product-detail-sizes">
            <div className="size-label">
              <span>Select a quantity</span>
              <span>{size}</span>
            </div>
            <div className="size-options">
              {product.sizes.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={size === option ? "selected" : ""}
                  onClick={() => setSize(option)}
                >
                  {size === option && <Check size={13} />}
                  {option}
                </button>
              ))}
            </div>
            <p className="quantity-note">
              Looking for a different quantity or a gift hamper? Share the details on WhatsApp — we will confirm availability.
            </p>
          </div>

          <div className="product-detail-actions">
            <WhatsAppButton product={product} size={size} label="Enquire on WhatsApp" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product, onOpen }: { product: Product; onOpen: (product: Product) => void }) {
  return (
    <article className={`product-card product-card--${product.tone}`}>
      <button className="product-card-image" onClick={() => onOpen(product)} aria-label={`View details for ${product.name}`}>
        <img src={product.image} alt={product.name} loading="lazy" />
        <span className={`product-stamp product-stamp--${product.tone}`}>BELYN / {product.index}</span>
        <span className="image-hover-label">View details <ArrowUpRight size={15} /></span>
      </button>
      <div className="product-card-copy">
        <div className="product-card-topline"><span>{product.index}</span><span>{product.category}</span></div>
        <button className="product-title-button" onClick={() => onOpen(product)}><h3>{product.name}</h3><ArrowUpRight size={18} /></button>
        <p>{product.short}</p>
        <div className="product-card-footer"><strong>{product.price}</strong><button onClick={() => onOpen(product)}>Explore <ArrowRight size={14} /></button></div>
      </div>
    </article>
  );
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1200);
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className={`loading-screen ${loading ? "is-visible" : "is-hidden"}`} aria-hidden={!loading}>
        <div className="loader-logo-wrap">
          <img src={LOGO_CIRCLE} alt="Belyn" className="loader-logo" />
        </div>
        <div className="loader-caption">KASHMIR CLOSER</div>
        <div className="loader-line"><span /></div>
      </div>

      <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
        <a href="#top" className="logo-link" onClick={closeMenu} aria-label="BELYN home">
          <img
            src={scrolled ? LOGO_DARK : LOGO_GOLD}
            alt="Belyn — Kashmir Closer"
            className="nav-logo"
          />
        </a>
        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <a href="#top" onClick={closeMenu}>Home</a>
          <a href="#collection" onClick={closeMenu}>Shop</a>
          <a href="#story" onClick={closeMenu}>Our Story</a>
          <a href="#kashmir" onClick={closeMenu}>Kashmir</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <div className="mobile-nav-cta"><WhatsAppButton compact /></div>
        </nav>
        <div className="nav-actions"><WhatsAppButton compact /><button className="menu-trigger" onClick={() => setMenuOpen((current) => !current)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button></div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-image" aria-hidden="true"><img src={KAHWA_IMG} alt="" /></div>
          <div className="hero-overlay" />
          <div className="hero-noise" />
          <div className="hero-content container">
            <Reveal className="hero-copy">
              <p className="eyebrow light"><span className="eyebrow-dot" /> A modern Kashmiri pantry</p>
              <h1>Closer to the<br /><em>source.</em></h1>
              <p className="hero-description">From honey and saffron to Kahwa and carefully selected dry fruits — BELYN brings the natural character of Kashmir closer to the modern table.</p>
              <div className="hero-actions"><a className="pill-button pill-button--light" href="#collection">Explore collection <ArrowDown size={15} /></a><WhatsAppButton compact /></div>
            </Reveal>
            <div className="hero-aside">
              <div className="hero-aside-card"><span>01</span><div><small>Our point of view</small><p>Thoughtful ingredients.<br />Quietly beautiful rituals.</p></div></div>
              <div className="hero-scroll"><span>Scroll to discover</span><div className="scroll-track"><span /></div></div>
            </div>
          </div>
          <div className="hero-footer container"><span>Bijbehara · Anantnag · J&K</span><span>Est. for the everyday ritual</span></div>
        </section>

        <section className="statement-section section-shell" id="story">
          <div className="container statement-grid">
            <Reveal><p className="section-number">01 / The beginning</p></Reveal>
            <Reveal className="statement-copy"><h2>It starts with<br /><em>the source.</em></h2><div className="gold-rule" /><p>BELYN began with a simple idea — to bring the character of Kashmir a little closer. Thoughtfully sourced, carefully handled, and brought closer to the people who value where their food comes from.</p><a className="text-link" href="#kashmir">Discover our story <ArrowUpRight size={16} /></a></Reveal>
            <Reveal className="statement-aside"><div className="rotated-note">A quiet luxury, from the Valley</div><Sparkles size={25} strokeWidth={1.2} /><p>Less noise.<br />More meaning.</p></Reveal>
          </div>
        </section>

        <section className="collection-section section-shell" id="collection">
          <div className="container">
            <Reveal className="section-heading"><div><p className="section-number">02 / The collection</p><h2>Kashmir, in its<br /><em>natural form.</em></h2></div><p className="section-intro">A considered collection of Kashmiri staples, selected for their character, origin and everyday enjoyment.</p></Reveal>
            <div className="collection-grid">
              <Reveal className="span-7"><ProductCard product={products[0]} onOpen={setActiveProduct} /></Reveal>
              <Reveal className="span-5"><ProductCard product={products[1]} onOpen={setActiveProduct} /></Reveal>
              <Reveal className="span-4"><ProductCard product={products[2]} onOpen={setActiveProduct} /></Reveal>
              <Reveal className="span-4"><ProductCard product={products[3]} onOpen={setActiveProduct} /></Reveal>
              <Reveal className="span-4"><ProductCard product={products[4]} onOpen={setActiveProduct} /></Reveal>
              <Reveal className="span-6"><ProductCard product={products[5]} onOpen={setActiveProduct} /></Reveal>
              <Reveal className="span-6"><ProductCard product={products[6]} onOpen={setActiveProduct} /></Reveal>
            </div>
            <div className="collection-note"><span>Every order is packed with care.</span><span>WhatsApp ordering · Custom quantities · Gifting</span></div>
          </div>
        </section>

        <section className="kashmir-section" id="kashmir">
          <div className="kashmir-image"><img src={KAHWA_IMG} alt="A steaming cup of Kashmiri Kahwa beside a brass pot" loading="lazy" /></div>
          <div className="kashmir-overlay" />
          <div className="container kashmir-content">
            <Reveal><p className="eyebrow light"><span className="eyebrow-dot" /> A sense of place</p><h2>Rooted in Kashmir.<br /><em>Made for everywhere.</em></h2><p className="kashmir-body">From Bijbehara in Anantnag, we look outward — bringing a considered part of Kashmir to tables beyond the valley, while keeping its sense of place at the heart of everything we do.</p><a className="pill-button pill-button--light" href="#why-belyn">Why BELYN <ArrowRight size={15} /></a></Reveal>
            <div className="kashmir-side-note"><Mountain size={20} strokeWidth={1.2} /><span>Walnut groves · Saffron fields<br />Mountain light · Shared tables</span></div>
          </div>
        </section>

        <section className="why-section section-shell" id="why-belyn">
          <div className="container">
            <Reveal className="section-heading"><div><p className="section-number">03 / Why BELYN</p><h2>Less intervention.<br /><em>More character.</em></h2></div><p className="section-intro">Nothing unnecessary, nothing overdone — just the character of the ingredient, brought closer.</p></Reveal>
            <div className="why-grid">
              {[
                [<Mountain />, "Authentic Kashmir", "Products inspired by the natural richness and generous spirit of the Valley."],
                [<Leaf />, "Premium selection", "Carefully selected ingredients, chosen for character, not clutter."],
                [<MessageCircle />, "Simple ordering", "A direct line to BELYN through WhatsApp. Personal, easy, human."],
                [<PackageCheck />, "From Kashmir", "A modern brand carrying the essence of a place we are proud to call home."],
              ].map(([icon, title, text], index) => <Reveal key={title as string} className="why-card"><span className="why-index">0{index + 1}</span><div className="why-icon">{icon}</div><h3>{title as string}</h3><p>{text as string}</p><ArrowUpRight className="why-arrow" size={18} /></Reveal>)}
            </div>
          </div>
        </section>

        <section className="quote-section section-shell"><div className="container quote-wrap"><Reveal><p className="section-number">04 / The ritual</p><h2><span>Honey.</span> <span>Saffron.</span><br /><span>Kahwa.</span> <em>Dry fruits.</em></h2><div className="quote-bottom"><p>The pantry of Kashmir,<br />in its most beautiful form.</p><div className="quote-mark">“</div></div></Reveal></div></section>

        <section className="contact-section" id="contact"><div className="container contact-grid"><Reveal><p className="section-number light-number">05 / Come closer</p><h2>Let's make<br /><em>something warm.</em></h2><p className="contact-copy">Have a question, a gifting idea, or simply want to say hello? BELYN is a message away.</p><WhatsAppButton /></Reveal><Reveal className="contact-card"><div className="contact-card-top"><span className="contact-dot" /><span>Find us here</span></div><div className="contact-location"><MapPin size={20} strokeWidth={1.3} /><div><strong>Bijbehara, Anantnag</strong><span>Jammu & Kashmir, India</span></div></div><div className="contact-hours"><Clock3 size={18} strokeWidth={1.3} /><span>Usually replying between<br />10:00 — 18:00 IST</span></div><div className="contact-social"><a href="#top" aria-label="BELYN on Instagram"><Instagram size={18} /></a><a href="#top" aria-label="BELYN social link"><ArrowUpRight size={17} /></a></div></Reveal></div></section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top">
          <a href="#top" className="footer-logo-link" aria-label="BELYN home"><img src={LOGO_DARK} alt="Belyn" className="footer-logo" /></a>
          <p>Kashmir closer.</p>
          <a href="#top" className="back-top">Back to top <ArrowUpRight size={15} /></a>
        </div>
        <div className="container footer-links">
          <a href="#collection">Shop</a>
          <a href="#story">Our Story</a>
          <a href="#contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms & Conditions</a>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 BELYN. Bijbehara, Anantnag – 192124 · FSSAI 21026017000306</span>
          <span>Made with care in Kashmir</span>
          <span>Honey · Saffron · Kahwa · Dry fruits</span>
        </div>
      </footer>

      {activeProduct && <ProductModal product={activeProduct} onClose={() => setActiveProduct(null)} />}
    </>
  );
}
