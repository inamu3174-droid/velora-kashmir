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

const products = [
  {
    id: "honey",
    index: "01",
    category: "Nectar / 500 g",
    name: "Kashmiri White Honey",
    short: "Naturally rich, smooth and delicately sweet — inspired by the pristine landscapes of Kashmir.",
    detail:
      "A luminous, smooth honey chosen for its delicate sweetness and rich floral character. Velora White Honey is a quiet everyday ritual: slow mornings, warm toast, and a little sweetness from the valley.",
    origin: "Kashmir, Jammu & Kashmir",
    sizes: ["250 g", "500 g", "1 kg"],
    price: "₹799",
    image: "/images/velora-kahwa.jpg",
    tone: "honey",
    tags: ["Natural", "Pure", "Kashmiri origin"],
  },
  {
    id: "saffron",
    index: "02",
    category: "Threads / 1 g",
    name: "Kashmiri Saffron",
    short: "Aromatic strands selected for distinctive colour, fragrance and traditional culinary character.",
    detail:
      "A small ritual with a big presence. These deep red saffron strands bring a warm aroma, colour and traditional character to Kahwa, desserts and slow-cooked recipes.",
    origin: "Kashmir, Jammu & Kashmir",
    sizes: ["1 g", "2 g", "5 g"],
    price: "₹499",
    image: "/images/velora-kahwa.jpg",
    tone: "saffron",
    tags: ["Rich aroma", "Carefully sourced", "Premium strands"],
  },
  {
    id: "almonds",
    index: "03",
    category: "Dry fruit / 500 g",
    name: "Premium Kashmiri Almonds",
    short: "Crunchy, naturally rich almonds selected for snacking, gifting and everyday hospitality.",
    detail:
      "Naturally crunchy and generously textured, these almonds are made for the table — tea time, gifting boxes, and the small moments of hospitality that feel like home.",
    origin: "Kashmir, Jammu & Kashmir",
    sizes: ["250 g", "500 g", "1 kg"],
    price: "₹899",
    image: "/images/velora-kahwa.jpg",
    tone: "almond",
    tags: ["Crunchy", "Premium grade", "Gift ready"],
  },
  {
    id: "kahwa",
    index: "04",
    category: "Blend / 100 g",
    name: "Traditional Kashmiri Kahwa",
    short: "A fragrant green tea blend with saffron, cardamom and warm spices — the taste of Kashmiri mornings.",
    detail:
      "Slow-steeped and aromatic. Our Kahwa brings together green tea, saffron strands, cardamom and subtle spices for a cup that feels both ceremonial and everyday.",
    origin: "Kashmir, Jammu & Kashmir",
    sizes: ["50 g", "100 g", "250 g"],
    price: "₹649",
    image: "/images/velora-kahwa.jpg",
    tone: "kahwa",
    tags: ["Saffron notes", "Traditional blend", "Everyday ritual"],
  },
];

function waLink(text?: string) {
  const msg = text || "Hi Velora, I would like to know more about your Kashmiri products.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function ProductModal({
  product,
  onClose,
}: {
  product: (typeof products)[0];
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>
        <div className="modal-grid">
          <div className={`modal-image tone-${product.tone}`}>
            <img src={product.image} alt={product.name} />
          </div>
          <div className="modal-body">
            <p className="section-number">{product.index}</p>
            <p className="eyebrow"><span className="eyebrow-dot" />{product.category}</p>
            <h2>{product.name}</h2>
            <p className="modal-detail">{product.detail}</p>
            <div className="modal-meta">
              <div><MapPin size={14} /><span>{product.origin}</span></div>
              <div><PackageCheck size={14} /><span>{product.sizes.join(" · ")}</span></div>
            </div>
            <div className="modal-tags">
              {product.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="modal-footer">
              <strong>{product.price}</strong>
              <a className="wa-button" href={waLink(`Hi Velora, I am interested in ${product.name}`)} target="_blank" rel="noreferrer">
                <MessageCircle size={16} /> Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({
  product,
  onOpen,
}: {
  product: (typeof products)[0];
  onOpen: (p: (typeof products)[0]) => void;
}) {
  return (
    <article className={`product-card tone-${product.tone}`}>
      <div className="product-card-image">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="product-card-body">
        <div className="product-card-topline">
          <span>{product.index}</span>
          <span>{product.category}</span>
        </div>
        <h3>{product.name}</h3>
        <p>{product.short}</p>
        <div className="product-card-footer">
          <strong>{product.price}</strong>
          <button onClick={() => onOpen(product)}>
            Explore <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </article>
  );
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState<(typeof products)[0] | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#" className="logo">VELORA</a>
          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            <a href="#collection" onClick={() => setMenuOpen(false)}>Collection</a>
            <a href="#story" onClick={() => setMenuOpen(false)}>Our Story</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <a className="wa-button nav-wa" href={waLink()} target="_blank" rel="noreferrer">
              <MessageCircle size={15} /> WhatsApp
            </a>
          </nav>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" />From Kashmir</p>
            <h1>Closer to <em>you</em></h1>
            <p className="hero-lead">
              Authentic Kashmiri honey, saffron, dry fruits and Kahwa — sourced with care and brought closer to your table.
            </p>
            <div className="hero-actions">
              <a className="wa-button" href={waLink()} target="_blank" rel="noreferrer">
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
              <a className="text-link" href="#collection">
                View collection <ArrowDown size={14} />
              </a>
            </div>
            <div className="hero-footer">
              <span>White honey</span>
              <span>Saffron</span>
              <span>Kahwa</span>
              <span>Dry fruits</span>
            </div>
          </div>
          <div className="hero-image" aria-hidden="true">
            <img src="/images/velora-kahwa.jpg" alt="" />
          </div>
        </div>
      </section>

      <section id="collection" className="section-shell collection">
        <div className="container">
          <Reveal>
            <p className="section-number">01 — Collection</p>
            <h2>Chosen from the <em>valley</em></h2>
            <p className="collection-note">Four carefully selected essentials from Kashmir.</p>
          </Reveal>
          <div className="product-grid">
            {products.map((p) => (
              <Reveal key={p.id}>
                <ProductCard product={p} onOpen={setActiveProduct} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="section-shell story">
        <div className="container story-grid">
          <Reveal className="story-copy">
            <p className="section-number">02 — Origin</p>
            <h2>From the mountains of <em>Kashmir</em></h2>
            <div className="gold-rule" />
            <p>
              Velora brings a small selection of Kashmiri staples closer to you — white honey with a delicate floral character,
              aromatic saffron strands, crunchy almonds, and traditional Kahwa.
            </p>
            <p>
              Each product is chosen for purity of character and the quiet pleasure of everyday use: morning toast, a slow cup of Kahwa,
              a gift that feels personal.
            </p>
            <ul className="story-points">
              <li><Leaf size={16} /> Naturally sourced ingredients</li>
              <li><Mountain size={16} /> Rooted in Kashmiri tradition</li>
              <li><Sparkles size={16} /> Selected for everyday rituals</li>
            </ul>
          </Reveal>
          <Reveal className="kashmir-image">
            <img src="/images/velora-kahwa.jpg" alt="A steaming cup of Kashmiri Kahwa beside a brass pot" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section id="contact" className="section-shell contact">
        <div className="container">
          <Reveal>
            <p className="section-number">03 — Contact</p>
            <h2>Say hello on <em>WhatsApp</em></h2>
            <p className="contact-lead">Orders, questions and gifting — we reply personally.</p>
          </Reveal>
          <div className="contact-grid">
            <Reveal className="contact-card">
              <div className="contact-card-top"><Clock3 size={14} /> Response time</div>
              <h3>Usually within a few hours</h3>
              <p>Share what you are looking for and we will guide you.</p>
            </Reveal>
            <Reveal className="contact-card">
              <div className="contact-card-top"><Check size={14} /> What we can help with</div>
              <h3>Orders & gifting</h3>
              <p>Product details, sizes, bulk or gift requests.</p>
            </Reveal>
            <Reveal className="contact-cta">
              <a className="wa-button large" href={waLink()} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Open WhatsApp
              </a>
              <a className="text-link" href="https://instagram.com" target="_blank" rel="noreferrer">
                <Instagram size={14} /> Follow on Instagram <ArrowUpRight size={14} />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <strong>VELORA</strong>
            <span>From Kashmir, closer to you.</span>
          </div>
          <div className="footer-bottom">
            <span>Made with care in Kashmir</span>
            <span>White honey · Saffron · Kahwa</span>
          </div>
        </div>
      </footer>

      {activeProduct && <ProductModal product={activeProduct} onClose={() => setActiveProduct(null)} />}
    </>
  );
}
