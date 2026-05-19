import Image from "next/image";
import Link from "next/link";

const DODO_PRODUCT_ID = "pdt_0NfBt7eUi120qMFvjJLCu";
const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_DODO_CHECKOUT_URL ||
  `https://checkout.dodopayments.com/buy/${DODO_PRODUCT_ID}`;

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 md:px-10 py-8 md:py-12">
      <Nav />
      <Hero />
      <ScreenshotBlock />
      <Layouts />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <nav className="flex items-center justify-between mb-12 md:mb-20">
      <Link href="/" className="flex items-center gap-3 group">
        <Image
          src="/snapexif-logo.png"
          alt="SnapExif"
          width={36}
          height={36}
          className="rounded-[8px]"
          priority
        />
        <span className="font-display text-2xl tracking-tight">Snapexif</span>
      </Link>
      <div className="flex items-center gap-6 text-sm">
        <a href="#layouts" className="hover:text-[var(--accent)] transition-colors hidden sm:inline">Layouts</a>
        <a href="#features" className="hover:text-[var(--accent)] transition-colors hidden sm:inline">Features</a>
        <a href="#pricing" className="hover:text-[var(--accent)] transition-colors hidden sm:inline">Pricing</a>
        <a
          href={CHECKOUT_URL}
          className="bg-[var(--accent)] text-white px-4 py-2 rounded-lg font-medium text-sm shadow-[0_4px_12px_-4px_var(--accent)] hover:opacity-95 transition-opacity"
        >
          Buy — $19
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="mb-16 md:mb-24">
      <div className="flex items-center gap-2 mb-6">
        <span className="font-mono text-[10px] tracking-[0.20em] uppercase text-[var(--sub)]">
          v1.0 · macOS
        </span>
        <span className="text-[var(--mute)]">·</span>
        <span className="font-mono text-[10px] tracking-[0.20em] uppercase text-[var(--accent-ink)] bg-[var(--accent-soft)] px-2 py-0.5 rounded">
          3-day trial
        </span>
      </div>
      <h1 className="font-display text-5xl md:text-7xl leading-[1.05] tracking-tight mb-6 max-w-3xl">
        EXIF, <span className="italic text-[var(--accent)]">beautifully</span>.
      </h1>
      <p className="text-lg md:text-xl text-[var(--ink-2)] max-w-2xl mb-10 leading-relaxed">
        Batch-watermark photos with magazine-style camera frames. Six editorial
        layouts, forty-plus camera brands, native resolution, EXIF preserved.
      </p>
      <div className="flex flex-wrap items-center gap-4">
        <a
          href={CHECKOUT_URL}
          className="bg-[var(--accent)] text-white px-7 py-3.5 rounded-lg font-semibold inline-flex items-center gap-2 shadow-[0_8px_24px_-8px_var(--accent)] hover:opacity-95 transition-opacity"
        >
          <PlayIcon /> Buy SnapExif — $19
        </a>
        <a
          href="#download"
          className="px-6 py-3.5 rounded-lg font-medium border border-[var(--line)] bg-[var(--surface)] hover:bg-[var(--surface-2)] transition-colors"
        >
          Start free 3-day trial
        </a>
        <span className="text-sm text-[var(--sub)] font-mono">
          One-time · No subscription
        </span>
      </div>
    </section>
  );
}

function ScreenshotBlock() {
  return (
    <section className="mb-20 md:mb-28">
      <div className="relative rounded-2xl overflow-hidden bg-[var(--surface)] shadow-[var(--shadow-pop)] border border-[var(--line)]">
        <Image
          src="/screenshot-light.png"
          alt="SnapExif application screenshot — light mode"
          width={2400}
          height={1500}
          className="w-full h-auto block dark:hidden"
          priority
        />
        <Image
          src="/screenshot-dark.png"
          alt="SnapExif application screenshot — dark mode"
          width={2400}
          height={1500}
          className="w-full h-auto hidden dark:block"
        />
      </div>
      <div className="mt-4 text-center text-xs font-mono text-[var(--sub)] tracking-[0.16em] uppercase">
        Live preview · Auto brand detection · Full-res output
      </div>
    </section>
  );
}

const LAYOUTS = [
  { name: "Leica strip", hint: "Classic bottom band" },
  { name: "Side bar", hint: "Vertical strip, right" },
  { name: "Film rebate", hint: "Edge data, sprocket" },
  { name: "Polaroid", hint: "Wide white frame" },
  { name: "Minimal", hint: "Hairline + small caps" },
  { name: "Metadata card", hint: "Detached info card" },
];

function Layouts() {
  return (
    <section id="layouts" className="mb-20 md:mb-28">
      <SectionLabel>Layouts</SectionLabel>
      <h2 className="font-display text-4xl md:text-5xl mb-3">Six ways to frame.</h2>
      <p className="text-[var(--ink-2)] max-w-2xl mb-10">
        Each layout has its own aesthetic, none of them generic. Switch between them
        with a click — the live preview updates instantly.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {LAYOUTS.map((l) => (
          <div
            key={l.name}
            className="rounded-xl bg-[var(--surface)] border border-[var(--line)] p-5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-pop)] transition-shadow"
          >
            <LayoutThumb kind={l.name} />
            <div className="mt-4">
              <div className="font-semibold">{l.name}</div>
              <div className="text-xs text-[var(--sub)] font-mono mt-0.5">{l.hint}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function LayoutThumb({ kind }: { kind: string }) {
  const gradient =
    "linear-gradient(160deg, oklch(0.66 0.10 30), oklch(0.30 0.06 240))";
  const cream = "#f6f3ec";
  const jet = "#0f0d0c";
  return (
    <div
      className="relative rounded-md overflow-hidden border border-[var(--line)]"
      style={{ aspectRatio: "5 / 3" }}
    >
      <div className="absolute inset-0" style={{ background: gradient }} />
      {kind === "Leica strip" && (
        <div className="absolute left-0 right-0 bottom-0 h-[28%]" style={{ background: cream }} />
      )}
      {kind === "Side bar" && (
        <div className="absolute top-0 bottom-0 right-0 w-[24%]" style={{ background: cream }} />
      )}
      {kind === "Film rebate" && (
        <>
          <div className="absolute left-0 right-0 top-0 h-[16%]" style={{ background: jet }} />
          <div className="absolute left-0 right-0 bottom-0 h-[16%]" style={{ background: jet }} />
        </>
      )}
      {kind === "Polaroid" && (
        <>
          <div className="absolute inset-2 rounded-sm" style={{ background: gradient }} />
          <div className="absolute left-0 right-0 bottom-0 h-[28%]" style={{ background: "#fbfaf6" }} />
        </>
      )}
      {kind === "Minimal" && (
        <div className="absolute left-0 right-0 bottom-0 h-[12%] border-t border-black/15" style={{ background: cream }} />
      )}
      {kind === "Metadata card" && (
        <div
          className="absolute bottom-3 right-3 rounded-sm"
          style={{
            background: "rgba(255,255,255,0.95)", width: "42%", height: "30%",
            boxShadow: "0 4px 14px -4px rgba(0,0,0,0.4)"
          }}
        />
      )}
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="mb-20 md:mb-28">
      <SectionLabel>Built for photographers</SectionLabel>
      <h2 className="font-display text-4xl md:text-5xl mb-3">Made to disappear.</h2>
      <p className="text-[var(--ink-2)] max-w-2xl mb-10">
        Everything you need, nothing you don&apos;t. Live preview, native dark mode,
        keyboard-first workflow, full-res output.
      </p>
      <div className="grid md:grid-cols-2 gap-5">
        <Feature
          title="40+ camera brands, auto-detected"
          body="Leica, Sony Alpha, Nikon, Canon, Fujifilm, Hasselblad, Olympus, Lumix, Ricoh, Sigma, Zeiss, Kodak — plus Apple, Samsung, Google, Xiaomi, OnePlus and more. The right wordmark stamps the right photo."
        />
        <Feature
          title="Zero quality loss"
          body="Decodes at full pixel size. Composites at native scale. Re-embeds EXIF and GPS into the output. Your 60MP RAW conversions stay 60MP."
        />
        <Feature
          title="Live preview"
          body="Every adjustment renders in real time on the photo you're focused on. Layout, color, font, position — see it before you process."
        />
        <Feature
          title="Per-field control"
          body="Show, hide, position (start / middle / end), or override any field. Photo missing EXIF? Type it in. Want the date on the left instead? Drag the slot."
        />
        <Feature
          title="Mac-native"
          body="SwiftUI. Native dark mode. ⌘⏎ to process. Drag-and-drop. App Sandbox. Apple-silicon-fast."
        />
        <Feature
          title="Batch everything"
          body="Pick a folder, pick many folders, mix files and folders. Each source gets a sibling _watermarked/ output — or pick your own destination."
        />
      </div>
    </section>
  );
}

function Feature({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl bg-[var(--surface)] border border-[var(--line)] p-6 shadow-[var(--shadow-card)]">
      <h3 className="font-semibold mb-2 text-lg">{title}</h3>
      <p className="text-[var(--ink-2)] leading-relaxed">{body}</p>
    </div>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="mb-20 md:mb-28">
      <SectionLabel>Pricing</SectionLabel>
      <h2 className="font-display text-4xl md:text-5xl mb-10">
        One price. Forever yours.
      </h2>
      <div className="max-w-md rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-8 shadow-[var(--shadow-pop)]">
        <div className="flex items-baseline gap-3 mb-1">
          <span className="font-display text-6xl">$19</span>
          <span className="font-mono text-sm text-[var(--sub)]">USD · one-time</span>
        </div>
        <div className="text-sm text-[var(--accent-ink)] bg-[var(--accent-soft)] inline-block px-2 py-0.5 rounded font-medium mb-6">
          3-day free trial included
        </div>
        <ul className="space-y-3 mb-8 text-[var(--ink-2)]">
          <PricingLi>Unlimited photos, unlimited folders</PricingLi>
          <PricingLi>All six editorial layouts</PricingLi>
          <PricingLi>40+ auto-detected camera brands</PricingLi>
          <PricingLi>Full-resolution output with EXIF preserved</PricingLi>
          <PricingLi>Every future update for v1.x</PricingLi>
        </ul>
        <a
          href={CHECKOUT_URL}
          className="block text-center bg-[var(--accent)] text-white px-6 py-3.5 rounded-lg font-semibold shadow-[0_8px_24px_-8px_var(--accent)] hover:opacity-95 transition-opacity"
        >
          Buy SnapExif — $19
        </a>
        <p className="text-xs text-center text-[var(--sub)] mt-4 font-mono">
          Secure checkout by Dodo Payments · 14-day refund
        </p>
      </div>
    </section>
  );
}

function PricingLi({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <CheckIcon /> <span>{children}</span>
    </li>
  );
}

function FAQ() {
  const items = [
    {
      q: "Does the watermark reduce my photo's resolution?",
      a: "No. SnapExif decodes the original at full pixel size, composites the watermark band onto a canvas extended from native dimensions, and re-embeds your EXIF and GPS into the output. A 60MP source stays 60MP.",
    },
    {
      q: "Can I edit a photo's EXIF if it's missing or wrong?",
      a: "Yes. Every field in the right rail has an inline editor. Type a value to override EXIF — useful for photos exported from Lightroom that lost metadata, scanned film, or creative captions.",
    },
    {
      q: "What file formats does it support?",
      a: "Input: JPG, HEIC/HEIF, PNG, TIFF. Output matches input format with maximum quality (JPEG at 100, HEIC lossless). EXIF/GPS preserved unless you turn that off.",
    },
    {
      q: "How does the trial work?",
      a: "3 days of unlimited use. After that, you'll need a license key to keep processing. No card required for the trial — download, install, run.",
    },
    {
      q: "What if I want a refund?",
      a: "Email refunds@snapexif.com within 14 days of purchase with your license key. No questions.",
    },
  ];
  return (
    <section className="mb-20 md:mb-28">
      <SectionLabel>FAQ</SectionLabel>
      <h2 className="font-display text-4xl md:text-5xl mb-10">Questions.</h2>
      <div className="space-y-3 max-w-3xl">
        {items.map((it) => (
          <details
            key={it.q}
            className="group rounded-xl border border-[var(--line)] bg-[var(--surface)] p-5 cursor-pointer"
          >
            <summary className="font-medium flex items-center justify-between list-none">
              {it.q}
              <span className="text-[var(--sub)] group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="text-[var(--ink-2)] mt-3 leading-relaxed">{it.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--line)] pt-8 pb-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/snapexif-logo.png"
            alt="SnapExif"
            width={20}
            height={20}
            className="rounded-[4px]"
          />
          <span className="font-display text-lg">Snapexif</span>
          <span className="font-mono text-xs text-[var(--mute)] tracking-[0.10em]">v1.0</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-[var(--sub)]">
          <a href="mailto:hello@snapexif.com" className="hover:text-[var(--accent)] transition-colors">hello@snapexif.com</a>
          <a href="/privacy" className="hover:text-[var(--accent)] transition-colors">Privacy</a>
          <a href="/terms" className="hover:text-[var(--accent)] transition-colors">Terms</a>
        </div>
        <div className="font-mono text-xs text-[var(--mute)]">
          © 2026 xploredatum
        </div>
      </div>
    </footer>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[10px] tracking-[0.20em] uppercase text-[var(--sub)] mb-4">
      {children}
    </div>
  );
}

function PlayIcon() {
  return (
    <svg width="11" height="13" viewBox="0 0 11 13" fill="currentColor">
      <polygon points="0,0 11,6.5 0,13" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="var(--accent)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0">
      <path d="M3.2 8.4l3 3 6.6-6.6" />
    </svg>
  );
}
