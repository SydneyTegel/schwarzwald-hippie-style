import { AbsoluteFill, useCurrentFrame, interpolate, Img, staticFile } from "remotion";
import { TransitionSeries, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { wipe } from "@remotion/transitions/wipe";
import { loadFont } from "@remotion/google-fonts/SpaceGrotesk";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";

const { fontFamily: heading } = loadFont("normal", { weights: ["700"], subsets: ["latin"] });
const { fontFamily: body } = loadInter("normal", { weights: ["400", "500"], subsets: ["latin"] });

const BG = "#0f1a10";
const GREEN = "#4a7c59";
const MOSS = "#7a9e6a";
const CREAM = "#f5efe6";

const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 90], [1.2, 1], { extrapolateRight: "clamp" });
  const overlay = interpolate(frame, [0, 40], [0.8, 0.5], { extrapolateRight: "clamp" });
  const titleOp = interpolate(frame, [20, 50], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [20, 50], [60, 0], { extrapolateRight: "clamp" });
  const lineW = interpolate(frame, [45, 75], [0, 180], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: BG }}>
      <AbsoluteFill style={{ transform: `scale(${scale})` }}>
        <Img src={staticFile("images/product-foresthoodie-women.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </AbsoluteFill>
      <AbsoluteFill style={{ background: `rgba(15,26,16,${overlay})` }} />
      <AbsoluteFill style={{ background: "radial-gradient(ellipse at center, transparent 20%, #0f1a10 75%)" }} />
      <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ fontFamily: body, fontSize: 16, letterSpacing: 8, color: GREEN, textTransform: "uppercase", opacity: titleOp, marginBottom: 20 }}>
          Schwarzwaldjungfrau
        </div>
        <div style={{ overflow: "hidden" }}>
          <div style={{ fontFamily: heading, fontSize: 100, color: CREAM, fontWeight: 700, transform: `translateY(${titleY}px)`, opacity: titleOp, lineHeight: 1, textAlign: "center" }}>
            FOREST
            <br />
            <span style={{ color: MOSS }}>HOODIE</span>
          </div>
        </div>
        <div style={{ width: lineW, height: 2, background: `linear-gradient(90deg, transparent, ${MOSS}, transparent)`, marginTop: 30 }} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const leftX = interpolate(frame, [0, 35], [-100, 0], { extrapolateRight: "clamp" });
  const rightX = interpolate(frame, [10, 45], [100, 0], { extrapolateRight: "clamp" });
  const op = interpolate(frame, [0, 25], [0, 1], { extrapolateRight: "clamp" });
  const labelOp = interpolate(frame, [35, 55], [0, 1], { extrapolateRight: "clamp" });
  const zoom1 = interpolate(frame, [0, 100], [1, 1.06], { extrapolateRight: "clamp" });
  const zoom2 = interpolate(frame, [0, 100], [1.06, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: BG }}>
      <div style={{ position: "absolute", left: 0, top: 0, width: "50%", height: "100%", overflow: "hidden", opacity: op, transform: `translateX(${leftX}px)` }}>
        <Img src={staticFile("images/product-foresthoodie-women.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover", transform: `scale(${zoom1})` }} />
        <div style={{ position: "absolute", bottom: 40, left: 40, opacity: labelOp }}>
          <div style={{ fontFamily: heading, fontSize: 28, color: CREAM, fontWeight: 700 }}>Frauen</div>
          <div style={{ fontFamily: heading, fontSize: 36, color: MOSS, fontWeight: 700 }}>89 €</div>
        </div>
      </div>
      <div style={{ position: "absolute", right: 0, top: 0, width: "50%", height: "100%", overflow: "hidden", opacity: op, transform: `translateX(${rightX}px)` }}>
        <Img src={staticFile("images/product-foresthoodie-men.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover", transform: `scale(${zoom2})` }} />
        <div style={{ position: "absolute", bottom: 40, right: 40, textAlign: "right", opacity: labelOp }}>
          <div style={{ fontFamily: heading, fontSize: 28, color: CREAM, fontWeight: 700 }}>Herren</div>
          <div style={{ fontFamily: heading, fontSize: 36, color: MOSS, fontWeight: 700 }}>89 €</div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "50%", top: 0, width: 3, height: "100%", background: BG, zIndex: 2 }} />
    </AbsoluteFill>
  );
};

const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 90], [1.08, 1], { extrapolateRight: "clamp" });
  const op = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const textOp = interpolate(frame, [15, 40], [0, 1], { extrapolateRight: "clamp" });
  const textY = interpolate(frame, [15, 40], [30, 0], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: BG }}>
      <div style={{ position: "absolute", right: 0, top: 0, width: "55%", height: "100%", overflow: "hidden", opacity: op }}>
        <Img src={staticFile("images/detail-foresthoodie-women-closeup.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover", transform: `scale(${scale})` }} />
      </div>
      <div style={{ position: "absolute", left: 0, top: 0, width: "55%", height: "100%", background: `linear-gradient(90deg, ${BG} 60%, transparent)`, zIndex: 1 }} />
      <div style={{ position: "absolute", left: 100, top: 0, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", zIndex: 2, maxWidth: 600 }}>
        <div style={{ fontFamily: body, fontSize: 14, letterSpacing: 6, color: GREEN, textTransform: "uppercase", opacity: textOp, marginBottom: 16 }}>Detail</div>
        <div style={{ fontFamily: heading, fontSize: 48, color: CREAM, fontWeight: 700, opacity: textOp, transform: `translateY(${textY}px)`, lineHeight: 1.2, marginBottom: 20 }}>
          Mönchskutten-
          <br />
          <span style={{ color: MOSS }}>Kapuze</span>
        </div>
        <div style={{ fontFamily: body, fontSize: 18, color: "#a0a0a0", opacity: textOp, lineHeight: 1.7 }}>
          380 g/m² Bio-Baumwolle
          <br />
          French Terry · GOTS-zertifiziert
          <br />
          Daumenlöcher · Tiefe Känguru-Tasche
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const op = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const tagY = interpolate(frame, [15, 45], [40, 0], { extrapolateRight: "clamp" });
  const pulse = interpolate(frame, [0, 90], [0, Math.PI * 3]);
  const glow = 0.2 + 0.1 * Math.sin(pulse);

  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse at 50% 50%, #1a2a1b, ${BG})` }}>
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 50% 50%, ${MOSS}22, transparent 50%)`, opacity: glow }} />
      <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ fontFamily: heading, fontSize: 22, letterSpacing: 10, color: CREAM, textTransform: "uppercase", opacity: op, marginBottom: 24 }}>
          Schwarzwald<span style={{ color: GREEN }}>jungfrau</span>
        </div>
        <div style={{ width: 50, height: 2, background: MOSS, opacity: op, marginBottom: 30 }} />
        <div style={{ fontFamily: heading, fontSize: 48, color: CREAM, fontWeight: 700, opacity: op, transform: `translateY(${tagY}px)`, textAlign: "center", lineHeight: 1.3 }}>
          Born in the
          <br />
          <span style={{ color: MOSS }}>Forest.</span>
        </div>
        <div style={{ fontFamily: body, fontSize: 16, color: "#666", opacity: op, marginTop: 30, letterSpacing: 4, textTransform: "uppercase" }}>
          schwarzwaldjungfrau.de
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const ForestHoodieVideo: React.FC = () => (
  <AbsoluteFill style={{ background: BG }}>
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={100}><Scene1 /></TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={wipe({ direction: "from-left" })} timing={springTiming({ config: { damping: 200 }, durationInFrames: 20 })} />
      <TransitionSeries.Sequence durationInFrames={110}><Scene2 /></TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={springTiming({ config: { damping: 200 }, durationInFrames: 20 })} />
      <TransitionSeries.Sequence durationInFrames={100}><Scene3 /></TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={springTiming({ config: { damping: 200 }, durationInFrames: 20 })} />
      <TransitionSeries.Sequence durationInFrames={100}><Scene4 /></TransitionSeries.Sequence>
    </TransitionSeries>
  </AbsoluteFill>
);
