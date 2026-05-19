export type LayoutId = "leica" | "side" | "film" | "pol" | "min" | "card";

/**
 * Mini-mockups that mirror what the macOS app actually renders for each layout.
 * Kept visually faithful to WatermarkRenderer.swift output.
 */
export function Sample({ id }: { id: LayoutId }) {
  switch (id) {
    /* ── Leica strip:
       Bottom band under the photo. Logo on the left, EXIF line on the right,
       date below. Cream band. */
    case "leica":
      return (
        <div className="lf lf-leica">
          <div className="photo" />
          <div className="band">
            <div className="left">
              <b>LEICA</b>
              <small>Q3 · Summilux 28mm</small>
            </div>
            <div className="center mono">35mm · f/2.0 · 1/250s · ISO 400</div>
            <div className="right mono">2026.03.18</div>
          </div>
        </div>
      );

    /* ── Side bar:
       Vertical strip on the right. Logo + brand + model at top, exposure
       params stacked each on its own line, date at bottom — ALL CENTERED. */
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
              <span>1/500s</span>
              <span>ISO 200</span>
            </div>
            <div className="bottom mono">2026.03.18</div>
          </div>
        </div>
      );

    /* ── Film rebate:
       Black bars top + bottom with sprocket holes, orange mono text on
       bottom rebate showing brand · exposure · date. */
    case "film":
      return (
        <div className="lf lf-film">
          <div className="rebate-top">
            {Array.from({ length: 8 }).map((_, i) => <div key={i} className="sprocket" />)}
          </div>
          <div className="photo" />
          <div className="rebate-bot">
            {Array.from({ length: 8 }).map((_, i) => <div key={i} className="sprocket" />)}
          </div>
          <div className="edge mono">
            <span>KODAK PORTRA 400</span>
            <span>35MM · F/2.0 · 1/250</span>
            <span>03·18·26</span>
          </div>
        </div>
      );

    /* ── Polaroid:
       Wide white frame around the photo. Inside the bottom flap: logo on
       top, brand + model stacked, exposure line, all centered horizontally. */
    case "pol":
      return (
        <div className="lf lf-pol">
          <div className="photo" />
          <div className="flap">
            <div className="logo">F</div>
            <b>FUJIFILM</b>
            <small>X100V</small>
            <div className="cfg mono">35mm · f/2.0 · 1/500s · ISO 200</div>
          </div>
        </div>
      );

    /* ── Minimal:
       Thin band beneath the photo with a hairline divider at the top.
       Left: brand · model small-caps. Center: exposure mono. Right: date. */
    case "min":
      return (
        <div className="lf lf-min">
          <div className="photo" />
          <div className="line">
            <span className="caps">NIKON · Z9</span>
            <span className="mono">85MM · F/1.4 · 1/200S · ISO 100</span>
            <span className="caps">2026.03.18</span>
          </div>
        </div>
      );

    /* ── Metadata card:
       Detached card overlaid on the top-right of the photo (drop shadow).
       Stacked: brand bold + model muted, hairline, exposure, date. */
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
