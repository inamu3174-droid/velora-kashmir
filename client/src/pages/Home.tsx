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
    short: "Pure floral sweetness, kept close to its natural character.",
    detail:
      "Delicate, clean and gently floral, with a mild sweetness and a soft, naturally creamy character. Gently gathered by honeybees from the white blossoms of native acacia trees.",
    origin: "Bijbehara, Anantnag, Kashmir",
    sizes: ["250 g", "325 g", "500 g", "1 kg"],
    price: "Enquire",
    image: KAHWA_IMG,
    tone: "honey",
    tags: ["No added sugar", "Natural character", "Raw honey"],
  },
  {
    id: "sulai-honey",
    index: "02",
    category: "Sulai Flora",
    name: "Sulai Butter Honey",
    short: "A distinctive Kashmiri honey with rich floral character from Sulai blossoms.",
    detail:
      "Rich and buttery with a distinctive floral depth, gentle bitterness and a long, lingering finish. Naturally gathered from Sulai blossoms.",
    origin: "Bijbehara, Anantnag, Kashmir",
    sizes: ["250 g", "325 g", "500 g", "1 kg"],
    price: "Enquire",
    image: KAHWA_IMG,
    tone: "honey",
    tags: ["Raw Sulai honey", "Natural character", "Distinctive flavour"],
  },
  {
    id: "forest-honey",
    index: "03",
    category: "Multiflora Forest",
    name: "Forest Honey",
    short: "A deeper honey shaped by the varied floral sources of Kashmir's forest landscapes.",
    detail:
      "Deep, rich and naturally complex, with warm woody notes, gentle floral sweetness and a lingering finish.",
    origin: "Bijbehara, Anantnag, Kashmir",
    sizes: ["250 g", "325 g", "500 g", "1 kg"],
    price: "Enquire",
    image: KAHWA_IMG,
    tone: "honey",
    tags: ["Multiflora", "Raw forest honey", "Natural character"],
  },
  {
    id: "saffron",
    index: "04",
    category: "Raw Mongra",
    name: "Raw Mongra Saffron",
    short: "A rare seasonal harvest from Kashmir — deep colour, delicate aroma and natural character.",
    detail:
      "Floral, warm and subtly earthy, with a delicate honey-like sweetness and a lingering aromatic finish. Genuine saffron gradually releases a natural golden hue in milk or water.",
    origin: "Kashmir",
    sizes: ["1 g", "2 g", "3 g", "4 g", "5 g"],
    price: "Enquire",
    image: KAHWA_IMG,
    tone: "saffron",
    tags: ["Crocus sativus", "Seasonal harvest", "Pure strands"],
  },
  {
    id: "kahwa",
    index: "05",
    category: "Saffron Mist Blend",
    name: "Kahwa",
    short: "A warming Kashmiri tea blend of green tea, aromatic spices and saffron, finished with crushed almonds.",
    detail:
      "Warm, aromatic and gently sweet, with bright cardamom, warming ginger and cinnamon, a subtle clove note, delicate saffron and a nutty almond finish.",
    origin: "Kashmir",
    sizes: ["100 g", "200 g", "500 g", "1 kg"],
    price: "Enquire",
    image: KAHWA_IMG,
    tone: "kahwa",
    tags: ["Contains almonds", "Traditional blend", "Saffron"],
  },
  {
    id: "almonds",
    index: "06",
    category: "Dry fruit",
    name: "Raw Almonds",
    short: "Carefully selected Kashmiri almonds, kept close to their natural character.",
    detail:
      "Mildly sweet and delicately nutty, with a clean, creamy bite and a naturally crisp finish. Sourced from Kashmir's protected fields.",
    origin: "Kashmir",
    sizes: ["250 g", "500 g", "1 kg"],
    price: "Enquire",
    image: KAHWA_IMG,
    tone: "almond",
    tags: ["Tree nuts", "Natural oils", "Protein"],
  },
  {
    id: "walnuts",
    index: "07",
    category: "Dry fruit",
    name: "Walnut Kernels",
    short: "Carefully selected Kashmiri walnut kernels, rich in natural character.",
    detail:
      "Rich and buttery with a naturally earthy nuttiness, gentle bitterness and a delicate, lingering finish.",
    origin: "Kashmir",
    sizes: ["250 g", "500 g", "1 kg"],
    price: "Enquire",
    image: KAHWA_IMG,
    tone: "walnut",
    tags: ["Omega-3", "Tree nuts", "Healthy fats"],
  },
];

type Product = (typeof products)[number];

function WhatsAppButton({ product, size, compact = false }: { product?: Product; size?: string; compact?: boolean }) {
  const productName = product?.name ?? "BELYN's Kashmir collection";
  const message = product
    ? `Hello BELYN, I'm interested in ordering ${product.name}${size ? ` (${size})` : ""}. Please share the next steps.`
    : "Hello BELYN, I'd like to know more about the Kashmir collection.";
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Order ${productName} on WhatsApp`}
      className={`wa-button ${compact ? "wa-button--compact" : ""}`}
    >
      <MessageCircle size={16} strokeWidth={1.7} />
      <span>Order on WhatsApp</span>
      <ArrowUpRight size={15} strokeWidth={1.8} />
    </a>
  );
}

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const [size, setSize] = useState(product.sizes[1] ?? product.sizes[0]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div className="product-modal" role="dialog" aria-modal="true" aria-label={product.name} onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close product details">
          <X size={18} />
        </button>
        <div className="modal-image-wrap">
          <img src={product.image} alt={`${product.name} product detail`} />
          <span className={`product-stamp product-stamp--${product.tone}`}>BELYN / {product.index}</span>
        </div>
        <div className="modal-copy">
          <p className="eyebrow">{product.category} · Premium collection</p>
          <h2>{product.name}</h2>
          <div className="rating" aria-label="Five out of five stars">
            <span>★★★★★</span> <small>Curated in Kashmir</small>
          </div>
          <p className="modal-description">{product.detail}</p>
          <div className="modal-meta">
            <div><span>Origin</span><strong>{product.origin}</strong></div>
            <div><span>From</span><strong>{product.price}</strong></div>
          </div>
          <div className="size-control">
            <div className="size-label"><span>Choose a size</span><span>{size}</span></div>
            <div className="size-options">
              {product.sizes.map((option) => (
                <button key={option} className={size === option ? "selected" : ""} onClick={() => setSize(option)}>
                  {size === option && <Check size={13} />}{option}
                </button>
              ))}
            </div>
          </div>
          <p className="quantity-note">Looking for a different quantity? We'd be happy to prepare it for you.</p>
          <WhatsAppButton product={product} size={size} />
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
