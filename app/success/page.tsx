import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "SnapExif — Thanks for your purchase",
};

export default function SuccessPage({ searchParams }: { searchParams: { key?: string; email?: string } }) {
  const key = searchParams.key;
  const email = searchParams.email;

  return (
    <main className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <div className="flex items-center gap-3 mb-12">
        <Image src="/snapexif-logo.png" alt="" width={36} height={36} className="rounded-[8px]" />
        <span className="font-display text-2xl">Snapexif</span>
      </div>

      <div className="font-mono text-[10px] tracking-[0.20em] uppercase text-[var(--accent-ink)] bg-[var(--accent-soft)] inline-block px-2 py-0.5 rounded mb-6">
        License · Active
      </div>
      <h1 className="font-display text-5xl md:text-6xl mb-4 leading-tight">
        Welcome to SnapExif.
      </h1>
      <p className="text-lg text-[var(--ink-2)] mb-10 leading-relaxed">
        Your license is active. Every photo you process from now on is yours to keep —
        no watermark on the watermark, no expiry, no nagging.
      </p>

      {key && (
        <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-5 mb-6 shadow-[var(--shadow-card)]">
          <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--sub)] mb-2">
            Your license key
          </div>
          <div className="font-mono text-sm break-all select-all bg-[var(--bg-deep)] rounded p-3">
            {key}
          </div>
          <p className="text-xs text-[var(--sub)] mt-3">
            Copy this key and paste it into SnapExif → Preferences → License.
            {email && <span> A copy has been sent to <strong>{email}</strong>.</span>}
          </p>
        </div>
      )}

      <div className="space-y-3 text-[var(--ink-2)] mb-10">
        <div className="flex items-start gap-3">
          <span className="font-mono text-xs text-[var(--accent)] mt-0.5">01</span>
          <div>Download SnapExif (link below) and drag it to Applications.</div>
        </div>
        <div className="flex items-start gap-3">
          <span className="font-mono text-xs text-[var(--accent)] mt-0.5">02</span>
          <div>Open SnapExif. The first launch will show the License sheet.</div>
        </div>
        <div className="flex items-start gap-3">
          <span className="font-mono text-xs text-[var(--accent)] mt-0.5">03</span>
          <div>Paste your key and hit <span className="font-mono">⏎</span>. You&apos;re in.</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href="https://github.com/xploredatum/snapexif-releases/releases/latest"
          className="bg-[var(--accent)] text-white px-6 py-3 rounded-lg font-semibold shadow-[0_8px_24px_-8px_var(--accent)] hover:opacity-95 transition-opacity"
        >
          Download SnapExif
        </a>
        <Link
          href="/"
          className="px-6 py-3 rounded-lg font-medium border border-[var(--line)] bg-[var(--surface)] hover:bg-[var(--surface-2)] transition-colors"
        >
          ← Back to site
        </Link>
      </div>

      <p className="text-xs text-[var(--sub)] mt-10 font-mono">
        Need help? <a className="underline" href="mailto:hello@snapexif.com">hello@snapexif.com</a>
      </p>
    </main>
  );
}
