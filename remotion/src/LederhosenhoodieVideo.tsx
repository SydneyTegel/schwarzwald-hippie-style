import { AbsoluteFill, useCurrentFrame, interpolate, Img, staticFile } from "remotion";
import { TransitionSeries, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { wipe } from "@remotion/transitions/wipe";
import { loadFont } from "@remotion/google-fonts/SpaceGrotesk";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";

const { fontFamily: heading } = loadFont("normal", { weights: ["700"], subsets: ["latin"] });
const { fontFamily: body } = loadInter("normal", { weights: ["400", "500"], subsets: ["latin"] });

const BG = "#12100e";
const BROWN = "#8b6b4a";
const LEATHER = "#c4956a";
const CREAM = "#f5efe6";
const GREEN = "#4a7c59";

const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 90], [1.15, 1], { extrapolateRight: "clamp" });
  const overlay = interpolate(frame, [0, 40], [0.85, 0.55], { extrapolateRight: "clamp" });
  const titleOp = interpolate(frame, [20, 50], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [20, 50], [70, 0], { extrapolateRight: "clamp" });
  const lineW = interpolate(frame, [45, 75], [0, 200], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: BG }}>
      <AbsoluteFill style={{ transform: `scale(${scale})` }}>
        <Img src={staticFile("images/product-lederhosenhoodie-men.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </AbsoluteFill>
      <AbsoluteFill style={{ background: `rgba(18,16,14,${overlay})` }} />
      <AbsoluteFill style={{ background: "radial-gradient(ellipse at center, transparent 20%, #12100e 75%)" }} />
      <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ fontFamily: body, fontSize: 16, letterSpacing: 8, color: LEATHER, textTransform: "uppercase", opacity: titleOp, marginBottom: 20 }}>
          Schwarzwaldjungfrau
        </div>
        <div style={{ overflow: "hidden" }}>
          <div style={{ fontFamily: heading, fontSize: 88, color: CREAM, fontWeight: 700, transform: `translateY(${titleY}px)`, opacity: titleOp, lineHeight: 1, textAlign: "center" }}>
            LEDERHOSEN
            <br />
            <span style={{ color: LEATHER }}>HOODIE</span>
          </div>
        </div>
        <div style={{ width: lineW, height: 2, background: `linear-gradient(90deg, transparent, ${LEATHER}, transparent)`, marginTop: 30 }} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const imgX = interpolate(frame, [0, 30], [80, 0], { extrapolateRight: "clamp" });
  const imgOp = interpolate(frame, [0, 25], [0, 1], { extrapolateRight: "clamp" });
  const textOp = interpolate(frame, [20, 45], [0, 1], { extrapolateRight: "clamp" });
  const textY = interpolate(frame, [20, 45], [40, 0], { extrapolateRight: "clamp" });
  const imgScale = interpolate(frame, [0, 100], [1.05, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: `linear-gradient(135deg, ${BG}, #1a1512)` }}>
      <div style={{ position: "absolute", left: 80, top: "5%", width: "45%", height: "90%", borderRadius: 20, overflow: "hidden", opacity: imgOp, transform: `translateX(${imgX}px) scale(${imgScale})` }}>
        <Img src={staticFile("images/product-lederhosenhoodie-men.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div style={{ position: "absolute", right: 80, top: 0, width: "42%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontFamily: body, fontSize: 14, letterSpacing: 6, color: BROWN, textTransform: "uppercase", opacity: textOp, marginBottom: 20 }}>Herren · 129 €</div>
        <div style={{ fontFamily: heading, fontSize: 50, color: CREAM, fontWeight: 700, opacity: textOp, transform: `translateY(${textY}px)`, lineHeight: 1.2, marginBottom: 24 }}>
          Tracht trifft
          <br />
          <span style={{ color: LEATHER }}>Streetwear</span>
        </div>
        <div style={{ fontFamily: body, fontSize: 18, color: "#999", opacity: textOp, lineHeight: 1.7 }}>
          Hirschgeweih-Toggle-Verschlüsse
          <br />
          Wildleder-Optik-Panels
          <br />
          Traditionelle Stickerei
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const scale1 = interpolate(frame, [0, 90], [1, 1.06], { extrapolateRight: "clamp" });
  const scale2 = interpolate(frame, [0, 90], [1.06, 1], { extrapolateRight: "clamp" });
  const op = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const labelOp = interpolate(frame, [30, 50], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: BG }}>
      <div style={{ position: "absolute", left: 0, top: 0, width: "50%", height: "100%", overflow: "hidden", opacity: op }}>
        <Img src={staticFile("images/detail-lederhosenhoodie-men-closeup.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover", transform: `scale(${scale1})` }} />
      </div>
      <div style={{ position: "absolute", right: 0, top: 0, width: "50%", height: "100%", overflow: "hidden", opacity: op }}>
        <Img src={staticFile("images/detail-lederhosenhoodie-men-lifestyle.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover", transform: `scale(${scale2})` }} />
      </div>
      <div style={{ position: "absolute", left: "50%", top: 0, width: 3, height: "100%", background: BG, zIndex: 2 }} />
      <div style={{ position: "absolute", bottom: 70, left: 0, right: 0, textAlign: "center", zIndex: 3, opacity: labelOp }}>
        <div style={{ fontFamily: body, fontSize: 13, letterSpacing: 5, color: BROWN, textTransform: "uppercase", marginBottom: 8 }}>Handwerkskunst</div>
        <div style={{ fontFamily: heading, fontSize: 38, color: CREAM, fontWeight: 700 }}>
          Veganes <span style={{ color: LEATHER }}>Wildleder</span> · Geweih-<span style={{ color: LEATHER }}>Toggles</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const op = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const tagY = interpolate(frame, [15, 45], [35, 0], { extrapolateRight: "clamp" });
  const pulse = interpolate(frame, [0, 90], [0, Math.PI * 3]);
  const glow = 0.25 + 0.12 * Math.sin(pulse);

  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse at 50% 50%, #1e1815, ${BG})` }}>
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 50% 50%, ${LEATHER}20, transparent 55%)`, opacity: glow }} />
      <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ fontFamily: heading, fontSize: 22, letterSpacing: 10, color: CREAM, textTransform: "uppercase", opacity: op, marginBottom: 24 }}>
          Schwarzwald<span style={{ color: GREEN }}>jungfrau</span>
        </div>
        <div style={{ width: 50, height: 2, background: LEATHER, opacity: op, marginBottom: 30 }} />
        <div style={{ fontFamily: heading, fontSize: 48, color: CREAM, fontWeight: 700, opacity: op, transform: `translateY(${tagY}px)`, textAlign: "center", lineHeight: 1.3 }}>
          Verwurzelt im Wald.
          <br />
          <span style={{ color: LEATHER }}>Getragen auf der Straße.</span>
        </div>
        <div style={{ fontFamily: body, fontSize: 16, color: "#666", opacity: op, marginTop: 30, letterSpacing: 4, textTransform: "uppercase" }}>
          schwarzwaldjungfrau.de
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const LederhosenhoodieVideo: React.FC = () => (
  <AbsoluteFill style={{ background: BG }}>
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={100}><Scene1 /></TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={wipe({ direction: "from-right" })} timing={springTiming({ config: { damping: 200 }, durationInFrames: 20 })} />
      <TransitionSeries.Sequence durationInFrames={110}><Scene2 /></TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={springTiming({ config: { damping: 200 }, durationInFrames: 20 })} />
      <TransitionSeries.Sequence durationInFrames={100}><Scene3 /></TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={springTiming({ config: { damping: 200 }, durationInFrames: 20 })} />
      <TransitionSeries.Sequence durationInFrames={100}><Scene4 /></TransitionSeries.Sequence>
    </TransitionSeries>
  </AbsoluteFill>
);
