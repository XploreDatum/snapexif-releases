import Image from "next/image";
import { Sample, type LayoutId } from "./components/Sample";
import { ThemeToggle } from "./components/ThemeProvider";

const DODO_PRODUCT_ID = "pdt_0NfBt7eUi120qMFvjJLCu";
const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_DODO_CHECKOUT_URL ||
  `https://checkout.dodopayments.com/buy/${DODO_PRODUCT_ID}`;
const DOWNLOAD_URL =
  "https://github.com/XploreDatum/snapexif-releases/releases/latest/download/SnapExif.dmg";

const LAYOUTS: { id: LayoutId; name: string; desc: string }[] = [
  { id: "leica", name: "Leica strip",    desc: "Classic bottom band" },
  { id: "side",  name: "Side bar",       desc: "Vertical strip, right" },
  { id: "film",  name: "Film rebate",    desc: "Edge data, sprocket" },
  { id: "pol",   name: "Polaroid",       desc: "Wide white frame" },
  { id: "min",   name: "Minimal",        desc: "Hairline + small caps" },
  { id: "card",  name: "Metadata card",  desc: "Detached info card" },
];

const BRANDS = [
  "Leica", "Sony", "Nikon", "Canon", "Fujifilm", "Hasselblad",
  "Olympus", "Lumix", "Ricoh", "Sigma", "Zeiss", "Kodak",
];

const FAQS = [
  {
    q: "Does the watermark reduce my photo's resolution?",
    a: "No. SnapExif decodes at the photo's full pixel size, composites the frame at native scale, and re-embeds EXIF and GPS in the output. A 60MP RAW conversion exports at 60MP.",
  },
  {
    q: "Can I edit a photo's EXIF if it's missing or wrong?",
    a: "Yes. Every field is overrideable per-batch. Type a new camera body, change the focal length, drag the date to a different slot, or hide a field entirely.",
  },
  {
    q: "What file formats does it support?",
    a: "Reads JPEG, HEIC/HEIF, PNG, and TIFF. Exports at native scale with EXIF preserved.",
  },
  {
    q: "How does the trial work?",
    a: "Three days, all features, no watermark on output. No credit card up front. After the trial, unlock with a one-time $19 license that's yours forever.",
  },
  {
    q: "Does it work on Intel Macs?",
    a: "Yes — it's a universal binary, so it runs natively on both Apple Silicon and Intel Macs. macOS 13 Ventura or newer required.",
  },
  {
    q: "Where do my photos go?",
    a: "Nowhere. Everything happens locally. No cloud, no uploads, no telemetry. The only network call is a one-time license check with Dodo when you activate.",
  },
  {
    q: "What if I want a refund?",
    a: "Email refunds@snapexif.com within 14 days for a full refund. No questions, no hoops.",
  },
];

export default function Page() {
  return (
    <>
      <SetThemeScript />
      <div className="grain" aria-hidden />
      <Nav />
      <Hero />
      <LayoutsSection />
      <HowItWorks />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}

/** Inline script that applies the saved theme before paint to avoid a flash. */
function SetThemeScript() {
  const code = `try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark')t='dark';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}

function Nav() {
  return (
    <nav className="nav">
      <div className="wrap nav-row">
        <a href="/" className="brand">
          <span className="brand-mark">
            <Image src="/snapexif-logo.png" alt="" width={28} height={28} />
          </span>
          <span>SnapExif</span>
          <span className="badge mono" style={{ marginLeft: 4 }}>v1.0</span>
        </a>
        <div className="nav-links">
          <a href="#layouts">Layouts</a>
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <ThemeToggle />
          <a href={DOWNLOAD_URL} className="btn btn-primary">Download</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="section hero">
      <div className="wrap">
        <div className="hero-stack">
          <div className="hero-text">
            <div className="hero-badges">
              <span className="badge"><span className="dot" />VERSION 1.0</span>
              <span className="badge">macOS 13+</span>
              <span className="badge badge-accent">3-DAY FREE TRIAL</span>
            </div>
            <h1 className="h1">
              Frame the <span style={{ color: "var(--accent)" }}>moment</span>,
              not the file.
            </h1>
            <p className="lead" style={{ marginTop: 28 }}>
              SnapExif batch-watermarks photos with magazine-style camera frames.
              Six editorial layouts, forty-plus camera brands, full native
              resolution — EXIF preserved end-to-end.
            </p>
            <div className="hero-cta">
              <a href={DOWNLOAD_URL} className="btn btn-primary btn-lg">
                <DownloadGlyph /> Download for Mac
              </a>
              <a href="#pricing" className="btn btn-ghost btn-lg">See pricing</a>
            </div>
            <div className="hero-meta">
              <span><span className="tick mono">✓</span> 3-day free trial · no card</span>
              <span><span className="tick mono">✓</span> $19 one-time · lifetime updates</span>
              <span><span className="tick mono">✓</span> Apple Silicon + Intel</span>
            </div>
          </div>

          <div className="hero-shot-wrap">
            <div className="shot-frame">
              <Image
                src="/screenshot-dark.png"
                alt="SnapExif app — dark mode"
                width={2400}
                height={1500}
                className="shot-dark"
                priority
              />
              <Image
                src="/screenshot-light.png"
                alt="SnapExif app — light mode"
                width={2400}
                height={1500}
                className="shot-light"
                priority
              />
            </div>
          </div>
        </div>

        <div className="brands">
          <span className="lbl">Auto-detects</span>
          <div className="brand-row">
            {BRANDS.map((b) => <span key={b}>{b}</span>)}
            <span style={{ color: "var(--accent)" }}>+ 28 more</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScreenshotPair() {
  return (
    <section className="section" id="screenshots">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="eyebrow">/ 00 &nbsp; PREVIEW</span>
            <h2 className="h2">Looks at home<br />in dark and light.</h2>
          </div>
          <div className="right">
            Native macOS appearance. The app follows your system theme — same
            interface, same precision, in either skin.
          </div>
        </div>
        <div className="shot-pair">
          <figure>
            <div className="shot-card">
              <Image src="/screenshot-dark.png" alt="SnapExif in dark mode" width={2400} height={1500} />
            </div>
            <figcaption>Dark</figcaption>
          </figure>
          <figure>
            <div className="shot-card">
              <Image src="/screenshot-light.png" alt="SnapExif in light mode" width={2400} height={1500} />
            </div>
            <figcaption>Light</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function LayoutsSection() {
  return (
    <section className="section" id="layouts">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="eyebrow">/ 01 &nbsp; LAYOUTS</span>
            <h2 className="h2">Six ways<br />to frame.</h2>
          </div>
          <div className="right">
            Each layout has its own aesthetic. None of them generic. Switch
            between them with a click and the live preview redraws — layout,
            color, position, every field exposed.
          </div>
        </div>
        <div className="grid-3">
          {LAYOUTS.map((L, i) => (
            <div className="layout-card" key={L.id}>
              <div className="preview"><Sample id={L.id} /></div>
              <div className="meta">
                <div>
                  <div className="name">{L.name}</div>
                  <div className="desc">{L.desc}</div>
                </div>
                <div className="num">/ {String(i + 1).padStart(2, "0")}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "STEP 01", t: "Drop photos in", d: "Pick a folder, many folders, or individual files. RAW, JPG, HEIC, TIFF, PNG." },
    { n: "STEP 02", t: "Pick a layout", d: "Six editorial frames. Color, font, band size, per-field position all live-previewed." },
    { n: "STEP 03", t: "Auto-detect brand", d: "EXIF tells SnapExif which camera shot what. The right brand mark stamps each photo." },
    { n: "STEP 04", t: "Hit Process", d: "Native-resolution composites land in a _watermarked/ folder. Originals untouched, EXIF preserved." },
  ];
  return (
    <section className="section" id="how">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="eyebrow">/ 02 &nbsp; HOW IT WORKS</span>
            <h2 className="h2">Four steps.<br />Done.</h2>
          </div>
          <div className="right">
            From folder to finished frame in under a minute. No tutorials, no
            re-saving, no Photoshop layers.
          </div>
        </div>
        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.n}>
              <div className="nm">{s.n}</div>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items: { k?: string; ix?: string; t: string; d: string }[] = [
    {
      k: "40+",
      t: "Camera brands, auto-detected",
      d: "Leica, Sony Alpha, Nikon, Canon, Fujifilm, Hasselblad, Olympus, Lumix, Ricoh, Sigma, Zeiss, Kodak — plus Apple, Samsung, Google, Xiaomi, OnePlus.",
    },
    {
      k: "0",
      t: "Quality lost",
      d: "Decodes at full pixel size. Composites at native scale. Re-embeds EXIF and GPS into the output. Your 60MP RAW conversions stay 60MP.",
    },
    {
      ix: "LIVE",
      t: "Real-time preview",
      d: "Every adjustment renders instantly on the photo you're focused on. Layout, color, font, position — see it before you process.",
    },
    {
      ix: "EDIT",
      t: "Per-field control",
      d: "Show, hide, position (start / middle / end), or override any field. Photo missing EXIF? Type it in. Want the date on the left? Drag the slot.",
    },
    {
      ix: "LOCAL",
      t: "Nothing leaves your Mac",
      d: "Everything happens on-device. No cloud uploads, no telemetry, no analytics. The only network call is a one-time license check.",
    },
    {
      ix: "BATCH",
      t: "Folders within folders",
      d: "Pick a folder, pick many folders, mix files and folders. Each source gets a sibling _watermarked/ output, or pick your own destination.",
    },
  ];
  return (
    <section className="section" id="features">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="eyebrow">/ 03 &nbsp; BUILT FOR PHOTOGRAPHERS</span>
            <h2 className="h2">Made to<br />disappear.</h2>
          </div>
          <div className="right">
            Everything you need, nothing you don&apos;t. Live preview, native
            dark mode, keyboard-first workflow, full-res output.
          </div>
        </div>
        <div className="grid-3">
          {items.map((it, i) => (
            <div className="feature" key={i}>
              {it.k ? <div className="big-num">{it.k}</div> : <div className="ix">{it.ix}</div>}
              <h3>{it.t}</h3>
              <p>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="eyebrow">/ 04 &nbsp; PRICING</span>
            <h2 className="h2">Try first.<br />Buy if it sticks.</h2>
          </div>
          <div className="right">
            Three days free, no card. Then $19 once for lifetime use on up to
            five Macs. No tiers, no team plans, no per-photo charges.
          </div>
        </div>
        <div className="pricing-card">
          <span className="badge badge-accent" style={{ marginBottom: 18 }}>
            3-DAY FREE TRIAL · NO CARD
          </span>
          <div className="price">
            <b>$19</b>
            <small>USD · one-time</small>
          </div>
          <ul>
            <li><span className="tick">✓</span>Unlimited photos, unlimited folders</li>
            <li><span className="tick">✓</span>All six editorial layouts</li>
            <li><span className="tick">✓</span>40+ auto-detected camera brands</li>
            <li><span className="tick">✓</span>Full-resolution output, EXIF preserved</li>
            <li><span className="tick">✓</span>Up to 5 Macs per license</li>
            <li><span className="tick">✓</span>Every future v1.x update</li>
            <li><span className="tick">✓</span>14-day refund, no questions</li>
          </ul>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <a href={DOWNLOAD_URL} className="btn btn-ghost btn-lg" style={{ justifyContent: "center" }}>
              <DownloadGlyph /> Download
            </a>
            <a href={CHECKOUT_URL} className="btn btn-primary btn-lg" style={{ justifyContent: "center" }}>
              Buy — $19
            </a>
          </div>
          <div className="fine">SECURE CHECKOUT BY DODO PAYMENTS</div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="eyebrow">/ 05 &nbsp; FAQ</span>
            <h2 className="h2">Questions.</h2>
          </div>
          <div className="right">
            If something&apos;s not here, email hello@snapexif.com. A human
            answers within 24 hours.
          </div>
        </div>
        <div className="faq">
          {FAQS.map((it, i) => (
            <details key={i} className="faq-item" open={i === 0}>
              <summary>
                <span>{it.q}</span>
                <span className="plus" aria-hidden>+</span>
              </summary>
              <div className="ans">{it.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-row">
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span className="brand-mark" style={{ width: 24, height: 24, borderRadius: 6 }}>
            <Image src="/snapexif-logo.png" alt="" width={24} height={24} />
          </span>
          <span style={{ color: "var(--fg)", fontWeight: 600 }}>SnapExif</span>
          <span className="mono" style={{ color: "var(--dim)" }}>v1.0</span>
        </div>
        <div className="footer-links">
          <a href="mailto:hello@snapexif.com">hello@snapexif.com</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="https://github.com/XploreDatum/snapexif-releases">Releases</a>
        </div>
        <div className="mono" style={{ color: "var(--dim)", fontSize: 12 }}>
          © 2026 Xploredatum · Made with light
        </div>
      </div>
    </footer>
  );
}

function DownloadGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2v9M4 8l4 4 4-4M2 14h12" />
    </svg>
  );
}
