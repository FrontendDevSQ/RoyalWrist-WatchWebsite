import { useEffect, useMemo, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  Clock3,
  Heart,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Plus,
  Send,
  Search,
  ShoppingBag,
  ShieldCheck,
  Star,
  Truck,
  User,
  Video,
  X,
} from 'lucide-react';

const imageModules = import.meta.glob('../Images/*.{png,jpg,jpeg,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, url]) => [
    path.split('/').pop().toLowerCase(),
    url,
  ]),
);

const img = (name) => images[name.toLowerCase()];

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Contact', href: '#contact' },
];

const categories = [
  { title: 'Men Watches', image: 'men1.png', tag: 'Sharp daily classics' },
  { title: 'Women Watches', image: 'women2.png', tag: 'Polished statement pieces' },
  { title: 'Kids Watches', image: 'kid 1.png', tag: 'Bright, durable picks' },
  { title: 'Hot Selling', image: 'luxury watch.png', tag: 'Most wanted styles' },
];

const products = [
  {
    brand: 'Tommy Hilfiger',
    name: 'Green Nylon Strap Black Dial 44mm Watch 1792006',
    price: 'Rs.22,500',
    category: 'Men',
    image: 'product1.png',
  },
  {
    brand: 'Fossil',
    name: 'Chronograph Brown Leather Strap Navy Blue Dial 44mm Watch FS5210',
    price: 'Rs.21,999',
    category: 'Men',
    image: 'Product2.png',
  },
  {
    brand: 'Michael Kors',
    name: 'Chronograph Stainless Steel Black Dial 44mm Watch MK8749',
    price: 'Rs.26,000',
    category: 'Men',
    image: 'product4.png',
  },
  {
    brand: 'Fossil',
    name: 'Rose Gold Stainless Steel Mother Of Pearl Dial 36mm Watch ES3757',
    price: 'Rs.21,800',
    category: 'Women',
    image: 'product5.png',
  },
  {
    brand: 'Guess',
    name: 'Blue Silicone Strap Rose Gold Dial 36mm Watch GW0484L2',
    price: 'Rs.24,999',
    category: 'Women',
    image: 'product6.png',
  },
  {
    brand: 'Michael Kors',
    name: 'Two-tone Stainless Steel White Dial 39mm Watch MK5687',
    price: 'Rs.25,800',
    category: 'Women',
    image: 'product8.png',
  },
  {
    brand: 'Superdry',
    name: 'White Silicone Strap Black Dial 38mm Watch SYG164W',
    price: 'Rs.7,500',
    category: 'Kids',
    image: 'product9.png',
  },
  {
    brand: 'Lacoste',
    name: 'Navy Blue Silicone Strap Navy Blue Dial 44mm Watch 2010703',
    price: 'Rs.10,300',
    category: 'Kids',
    image: 'product11.png',
  },
];

const highlights = [
  { icon: ShieldCheck, label: 'Authentic brands', text: 'Original timepieces sourced from trusted international channels.' },
  { icon: Truck, label: 'Nationwide delivery', text: 'Quick fulfillment across Pakistan with order support.' },
  { icon: Clock3, label: 'Style guidance', text: 'Help choosing a watch that fits your wrist, outfit, and budget.' },
];

const brands = [
  'Kenneth Cole',
  'Tommy Hilfiger',
  'Emporio Armani',
  'Fossil',
  'Michael Kors',
  'Coach New York',
  'Ferrari',
  'Ted Baker',
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [cartCount, setCartCount] = useState(2);

  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: true,
      offset: 90,
    });
  }, []);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  const categoryFilters = ['All', 'Men', 'Women', 'Kids'];

  return (
    <div className="min-h-screen bg-porcelain text-ink">
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-porcelain/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="RoyalWrist home">
            <img src={img('logo.png')} alt="RoyalWrist logo" className="h-12 w-12 object-contain" />
            <div className="leading-tight">
              <p className="font-display text-xl font-bold text-ink">RoyalWrist</p>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-champagne">Premium watches</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-graphite lg:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-wine">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden min-w-72 items-center rounded-full border border-ink/10 bg-white px-4 py-2 shadow-sm xl:flex">
            <Search className="h-4 w-4 text-graphite/60" />
            <input
              type="search"
              placeholder="Search RoyalWrist"
              className="w-full bg-transparent px-3 text-sm outline-none placeholder:text-graphite/45"
            />
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="tel:03080122278" className="flex items-center gap-2 text-sm font-semibold text-graphite">
              <Phone className="h-4 w-4 text-wine" />
              03080122278
            </a>
            <button
              className="relative rounded-full bg-ink p-3 text-white shadow-soft transition hover:bg-wine"
              aria-label="Shopping cart"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-champagne text-xs font-bold text-ink">
                {cartCount}
              </span>
            </button>
          </div>

          <button
            className="rounded-full border border-ink/10 bg-white p-3 text-ink lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-ink/10 bg-porcelain px-4 py-4 lg:hidden">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-semibold text-graphite hover:bg-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden bg-ink text-white">
          <div className="absolute inset-0">
            <img src={img('slider1.png')} alt="Luxury watches display" className="h-full w-full object-cover opacity-45" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,24,24,0.95),rgba(24,24,24,0.72),rgba(24,24,24,0.25))]" />
          </div>
          <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div className="max-w-3xl" data-aos="fade-right">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
                <Star className="h-4 w-4 fill-champagne text-champagne" />
                Genuine branded watches in Pakistan
              </div>
              <h1 className="font-display text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
                RoyalWrist
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
                Premium watches from trusted global brands, curated for everyday confidence, celebrations, and timeless gifting.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-champagne px-6 py-3 text-sm font-bold text-ink transition hover:bg-white"
                >
                  Shop collection <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-ink"
                >
                  Why RoyalWrist
                </a>
              </div>
            </div>

            <div className="hidden lg:block" data-aos="fade-left" data-aos-delay="150">
              <div className="ml-auto max-w-sm rounded-lg border border-white/15 bg-white/10 p-5 backdrop-blur">
                <img src={img('watch 1.png')} alt="Featured RoyalWrist watch" className="mx-auto h-80 w-full object-contain" />
                <div className="mt-4 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-champagne">Featured pick</p>
                    <h2 className="mt-1 text-2xl font-bold">Luxury dial collection</h2>
                  </div>
                  <p className="text-right text-sm text-white/70">From Rs.22,500</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map(({ icon: Icon, label, text }, index) => (
              <div key={label} className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm" data-aos="fade-up" data-aos-delay={index * 90}>
                <Icon className="h-7 w-7 text-wine" />
                <h3 className="mt-4 text-lg font-bold">{label}</h3>
                <p className="mt-2 text-sm leading-6 text-graphite/75">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-pearl py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end" data-aos="fade-up">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-wine">Browse by style</p>
                <h2 className="mt-3 font-display text-4xl font-bold text-ink">Find your next signature piece</h2>
              </div>
              <a href="#products" className="inline-flex items-center gap-2 text-sm font-bold text-wine">
                See all watches <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category, index) => (
                <a
                  href="#products"
                  key={category.title}
                  className="group overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-ink/10"
                  data-aos="zoom-in"
                  data-aos-delay={index * 90}
                >
                  <div className="aspect-[4/3] bg-porcelain p-5">
                    <img
                      src={img(category.image)}
                      alt={category.title}
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold">{category.title}</h3>
                    <p className="mt-1 text-sm text-graphite/65">{category.tag}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div data-aos="fade-up">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-wine">Collection</p>
              <h2 className="mt-3 font-display text-4xl font-bold text-ink">Hot selling watches</h2>
              <p className="mt-3 max-w-2xl text-graphite/75">
                A modernized product shelf using your existing watch images, organized for quick browsing.
              </p>
            </div>
            <div className="flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="120">
              {categoryFilters.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                    activeCategory === category
                      ? 'bg-ink text-white'
                      : 'border border-ink/10 bg-white text-graphite hover:border-wine hover:text-wine'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product, index) => (
              <article
                key={`${product.brand}-${product.name}`}
                className="group rounded-lg border border-ink/10 bg-white shadow-sm"
                data-aos="fade-up"
                data-aos-delay={(index % 4) * 80}
              >
                <div className="relative aspect-square overflow-hidden rounded-t-lg bg-porcelain p-6">
                  <button className="absolute right-4 top-4 rounded-full bg-white p-2 text-graphite shadow-sm transition hover:text-wine" aria-label="Save product">
                    <Heart className="h-4 w-4" />
                  </button>
                  <img
                    src={img(product.image)}
                    alt={`${product.brand} ${product.name}`}
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-wine">{product.category}</p>
                    <div className="flex text-champagne">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h3 className="mt-3 text-lg font-bold">{product.brand}</h3>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-graphite/70">{product.name}</p>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <p className="text-lg font-extrabold">{product.price}</p>
                    <button
                      onClick={() => setCartCount((count) => count + 1)}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white transition hover:bg-wine"
                      aria-label={`Add ${product.brand} to cart`}
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="bg-ink py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
            <div className="overflow-hidden rounded-lg bg-white/8" data-aos="fade-right">
              <img src={img('About1.png')} alt="RoyalWrist watch presentation" className="h-full min-h-96 w-full object-cover" />
            </div>
            <div className="self-center" data-aos="fade-left" data-aos-delay="120">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-champagne">About RoyalWrist</p>
              <h2 className="mt-3 font-display text-4xl font-bold">Authentic watches, made reachable</h2>
              <p className="mt-6 leading-8 text-white/78">
                RoyalWrist brings premium brands within reach through genuine products, fair pricing, and customer-focused support. Every watch is selected to help customers express style without losing trust in quality.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {['Original branded products', 'Budget-conscious luxury', 'Helpful customer support', 'Curated global styles'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-champagne" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div data-aos="fade-right">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-wine">Contact</p>
            <h2 className="mt-3 font-display text-4xl font-bold">We are ready to help</h2>
            <p className="mt-4 leading-7 text-graphite/75">
              Ask about availability, sizing, delivery, or gifting. The same contact details from the original site are now easier to scan.
            </p>

            <div className="mt-8 grid gap-4">
              <ContactRow icon={MapPin} title="Address">
                Office 4B-4th Floor, Building 38-C, Lane-8, Main Khayaban-e-Muslim, D.H.A Phase 6 Karachi, Pakistan.
              </ContactRow>
              <ContactRow icon={Phone} title="Phone">03080122278</ContactRow>
              <ContactRow icon={Mail} title="Email">info@royalwrist.pk</ContactRow>
            </div>
          </div>

          <div className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft" data-aos="fade-left" data-aos-delay="120">
            <div className="grid gap-5">
              <label className="grid gap-2">
                <span className="text-sm font-bold text-graphite">Full name</span>
                <input className="rounded-lg border border-ink/10 bg-porcelain px-4 py-3 outline-none ring-wine/20 focus:ring-4" />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-bold text-graphite">Email</span>
                <input type="email" className="rounded-lg border border-ink/10 bg-porcelain px-4 py-3 outline-none ring-wine/20 focus:ring-4" />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-bold text-graphite">Message</span>
                <textarea rows="5" className="resize-none rounded-lg border border-ink/10 bg-porcelain px-4 py-3 outline-none ring-wine/20 focus:ring-4" />
              </label>
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-wine px-6 py-3 text-sm font-bold text-white transition hover:bg-ink">
                Send message <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        <section id="login" className="bg-pearl py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.82fr] lg:px-8">
            <div className="overflow-hidden rounded-lg" data-aos="fade-right">
              <img src={img('login bg pic.png')} alt="RoyalWrist member access" className="h-full min-h-96 w-full object-cover" />
            </div>
            <div className="self-center rounded-lg border border-ink/10 bg-white p-6 shadow-soft" data-aos="fade-left" data-aos-delay="120">
              <div className="mb-6 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-ink text-white">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Member login</h2>
                  <p className="text-sm text-graphite/65">Access saved orders and offers.</p>
                </div>
              </div>
              <div className="grid gap-4">
                <input type="email" placeholder="Email" className="rounded-lg border border-ink/10 bg-porcelain px-4 py-3 outline-none ring-wine/20 focus:ring-4" />
                <input type="password" placeholder="Password" className="rounded-lg border border-ink/10 bg-porcelain px-4 py-3 outline-none ring-wine/20 focus:ring-4" />
                <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-graphite/75">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4 accent-wine" />
                    Remember me
                  </label>
                  <a href="#login" className="font-bold text-wine">Forgot password?</a>
                </div>
                <button className="rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition hover:bg-wine">
                  Login
                </button>
                <p className="text-center text-sm text-graphite/70">
                  Do not have an account? <a href="#login" className="font-bold text-wine">Register</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div data-aos="fade-up">
            <img src={img('logo.png')} alt="RoyalWrist logo" className="h-14 w-14 rounded-full bg-white object-contain p-1" />
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/70">
              Premium fashion on a budget, with service that treats every customer like part of the kingdom.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="80">
            <h3 className="font-bold">Top brands</h3>
            <div className="mt-4 grid gap-2 text-sm text-white/70">
              {brands.map((brand) => <a key={brand} href="#products" className="hover:text-champagne">{brand}</a>)}
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="160">
            <h3 className="font-bold">Quick links</h3>
            <div className="mt-4 grid gap-2 text-sm text-white/70">
              {navItems.map((item) => <a key={item.label} href={item.href} className="hover:text-champagne">{item.label}</a>)}
              <a href="#login" className="hover:text-champagne">Login</a>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="240">
            <h3 className="font-bold">Newsletter</h3>
            <div className="mt-4 grid gap-3">
              <input type="email" placeholder="Your email" className="rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-white/45" />
              <input type="text" placeholder="WhatsApp number" className="rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-white/45" />
              <button className="rounded-full bg-champagne px-5 py-3 text-sm font-bold text-ink transition hover:bg-white">Sign up</button>
            </div>
            <div className="mt-5 flex gap-3">
              {[MessageCircle, Send, Camera, Video].map((Icon, index) => (
                <a key={index} href="#contact" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/75 transition hover:border-champagne hover:text-champagne">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-white/55">
          Copyright RoyalWrist 2026. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

function ContactRow({ icon: Icon, title, children }) {
  return (
    <div className="flex gap-4 rounded-lg border border-ink/10 bg-white p-5 shadow-sm">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-pearl text-wine">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-graphite/70">{children}</p>
      </div>
    </div>
  );
}

export default App;
