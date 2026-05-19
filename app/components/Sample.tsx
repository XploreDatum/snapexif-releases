export type LayoutId = "leica" | "side" | "film" | "pol" | "min" | "card";

/**
 * Mini-mockups faithful to WatermarkRenderer.swift in the macOS app.
 * Kept short so they read clearly in a small preview card.
 */
export function Sample({ id }: { id: LayoutId }) {
  switch (id) {
    /* ── Leica strip: band BELOW the photo. Left = logo + brand/model.
       Center = exposure mono. Right = date. ──────────────────────────── */
    case "leica":
      return (
        <div className="lf lf-leica">
          <div className="photo" />
          <div className="band">
            <div className="left">
              <div className="logo">L</div>
              <div>
                <b>LEICA</b>
                <small>Q3</small>
              </div>
            </div>
            <div className="center mono">35mm · f/2 · 1/250 · ISO 400</div>
            <div className="right mono">2026.03.18</div>
          </div>
        </div>
      );

    /* ── Side bar: vertical strip on the right. All text centered. ───── */
    case "side":
      return (
        <div className="lf lf-side">
          <div className="photo" />
          <div className="bar">
            <div className="top">
              <div className="logo">α</div>
              <b>SONY</b>
              <small>α7 IV</small>
            </div>
            <div className="middle mono">
              <span>35mm</span>
              <span>f/1.8</span>
              <span>1/500</span>
              <span>ISO 200</span>
            </div>
            <div className="bottom mono">03·18·26</div>
          </div>
        </div>
      );

    /* ── Film rebate: black bars top + bottom with sprockets, orange edge. */
    case "film":
      return (
        <div className="lf lf-film">
          <div className="rebate">
            {Array.from({ length: 8 }).map((_, i) => <div key={i} className="sprocket" />)}
          </div>
          <div className="photo" />
          <div className="rebate">
            {Array.from({ length: 8 }).map((_, i) => <div key={i} className="sprocket" />)}
          </div>
          <div className="edge mono">
            <span>KODAK PORTRA 400</span>
            <span>35MM · F/2</span>
            <span>03·18·26</span>
          </div>
        </div>
      );

    /* ── Polaroid: white frame around photo + wide bottom flap with
       logo + brand stacked, centered. ───────────────────────────────── */
    case "pol":
      return (
        <div className="lf lf-pol">
          <div className="photo" />
          <div className="flap">
            <div className="logo">F</div>
            <b>FUJIFILM</b>
            <small>X100V</small>
            <div className="cfg mono">35mm · f/2 · 1/500</div>
          </div>
        </div>
      );

    /* ── Minimal: hairline divider + single row of small-caps text. ──── */
    case "min":
      return (
        <div className="lf lf-min">
          <div className="photo" />
          <div className="line">
            <span className="caps">NIKON · Z9</span>
            <span className="mono">85MM · F/1.4 · ISO 100</span>
            <span className="caps">03·18·26</span>
          </div>
        </div>
      );

    /* ── Metadata card: overlay card in top-right of the photo. ──────── */
    case "card":
      return (
        <div className="lf lf-card">
          <div className="photo" />
          <div className="overlay">
            <div className="row">
              <b>HASSELBLAD</b>
              <small>X2D 100C</small>
            </div>
            <div className="rule" />
            <div className="mono kv">55mm · f/2.5 · 1/1000s · ISO 64</div>
            <div className="mono ts">2026.03.18 · 14:22</div>
          </div>
        </div>
      );
  }
}
