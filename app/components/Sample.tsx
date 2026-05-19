export type LayoutId = "leica" | "side" | "film" | "pol" | "min" | "card";

export function Sample({ id }: { id: LayoutId }) {
  switch (id) {
    case "leica":
      return (
        <div className="lf lf-leica">
          <div className="photo" />
          <div className="strip">
            <div className="brand">LEICA</div>
            <div className="data">
              35mm · f/2.0 · 1/250s · ISO 400
              <br />2026.03.18 · 14:22
            </div>
          </div>
        </div>
      );
    case "side":
      return (
        <div className="lf lf-side">
          <div className="photo" />
          <div className="panel">
            <div>
              <b>SONY α7 IV</b>
              <small>FE 35mm GM</small>
            </div>
            <small>
              f/1.8 · 1/500s
              <br />ISO 200
              <br />2026.03.18
            </small>
          </div>
        </div>
      );
    case "film":
      return (
        <div className="lf lf-film">
          <div className="sprocket-top">
            {Array.from({ length: 8 }).map((_, i) => <div key={i} className="hole" />)}
          </div>
          <div className="photo" />
          <div className="sprocket-bot">
            {Array.from({ length: 8 }).map((_, i) => <div key={i} className="hole" />)}
          </div>
          <div className="edge">
            <span>KODAK PORTRA 400</span>
            <span>03·18·26 · FRAME 14</span>
          </div>
        </div>
      );
    case "pol":
      return (
        <div className="lf lf-pol">
          <div className="photo" />
          <div className="cap">
            MARRAKECH, MAR 18
            <small>FUJIFILM X100V · ƒ/2 · 1/500</small>
          </div>
        </div>
      );
    case "min":
      return (
        <div className="lf lf-min">
          <div className="photo" />
          <div className="line">
            <span>NIKON Z9</span>
            <span>85MM · F/1.4 · ISO 100</span>
          </div>
        </div>
      );
    case "card":
      return (
        <div className="lf lf-card">
          <div className="photo-wrap"><div className="photo" /></div>
          <div className="info">
            <div>
              <b>HASSELBLAD</b>
              <div className="kv" style={{ marginTop: 4 }}>X2D 100C</div>
            </div>
            <div className="kv">
              <span>XCD 55V</span>
              f/2.5 · 1/1000
              <br />ISO 64
            </div>
            <div className="kv" style={{ color: "#888" }}>
              2026.03.18
              <br />14:22:08
            </div>
          </div>
        </div>
      );
  }
}
