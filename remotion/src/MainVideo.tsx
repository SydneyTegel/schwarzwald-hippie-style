import { AbsoluteFill, useCurrentFrame, interpolate, Sequence, Img, staticFile } from "remotion";
import { TransitionSeries, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { wipe } from "@remotion/transitions/wipe";
import { loadFont } from "@remotion/google-fonts/SpaceGrotesk";

const { fontFamily: headingFont } = loadFont("normal", { weights: ["700"], subsets: ["latin"] });

import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
const { fontFamily: bodyFont } = loadInter("normal", { weights: ["400", "500"], subsets: ["latin"] });

const BG = "#0f1a10";
const PRIMARY = "#4a7c59";
const PINK = "#d4829c";
const CREAM = "#f5efe6";

const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 60], [1.15, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [15, 45], [80, 0], { extrapolateRight: "clamp" });
  const titleOp = interpolate(frame, [15, 45], [0, 1], { extrapolateRight: "clamp" });
  const subtitleOp = interpolate(frame, [40, 65], [0, 1], { extrapolateRight: "clamp" });
  const lineW = interpolate(frame, [50, 80], [0, 200], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: BG }}>
      <AbsoluteFill style={{ transform: `scale(${scale})`, opacity: 0.3 }}>
        <Img src={staticFile("images/product-dirndelhoodie-pink.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "blur(20px) saturate(0.5)" }} />
      </AbsoluteFill>
      <AbsoluteFill style={{ background: `radial-gradient(ellipse at center, transparent 30%, ${BG} 80%)` }} />
      <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ overflow: "hidden" }}>
          <div style={{ fontFamily: headingFont, fontSize: 28, letterSpacing: 12, color: PINK, textTransform: "uppercase", opacity: subtitleOp, marginBottom: 16 }}>
            Schwarzwaldjungfrau
          </div>
        </div>
        <div style={{ overflow: "hidden" }}>
          <div style={{ fontFamily: headingFont, fontSize: 90, color: CREAM, fontWeight: 700, transform: `translateY(${titleY}px)`, opacity: titleOp, lineHeight: 1.1, textAlign: "center" }}>
            Dirndelhoodie
            <br />
            <span style={{ color: PINK }}>Pink</span>
          </div>
        </div>
        <div style={{ width: lineW, height: 2, background: `linear-gradient(90deg, transparent, ${PINK}, transparent)`, marginTop: 30 }} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const imgScale = interpolate(frame, [0, 90], [1.05, 1], { extrapolateRight: "clamp" });
  const imgX = interpolate(frame, [0, 30], [-60, 0], { extrapolateRight: "clamp" });
  const imgOp = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const textOp = interpolate(frame, [20, 45], [0, 1], { extrapolateRight: "clamp" });
  const textY = interpolate(frame, [20, 45], [40, 0], { extrapolateRight: "clamp" });
  const priceOp = interpolate(frame, [40, 60], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: `linear-gradient(135deg, ${BG}, #1a2a1b)` }}>
      <div style={{ position: "absolute", left: 80, top: 0, width: "50%", height: "100%", opacity: imgOp, transform: `translateX(${imgX}px) scale(${imgScale})` }}>
        <Img src={staticFile("images/product-dirndelhoodie-pink.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 20 }} />
      </div>
      <div style={{ position: "absolute", right: 100, top: 0, width: "40%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontFamily: bodyFont, fontSize: 16, letterSpacing: 6, color: PRIMARY, textTransform: "uppercase", opacity: textOp, marginBottom: 20 }}>
          Kollektion 2026
        </div>
        <div style={{ fontFamily: headingFont, fontSize: 56, color: CREAM, fontWeight: 700, opacity: textOp, transform: `translateY(${textY}px)`, lineHeight: 1.15, marginBottom: 24 }}>
          Tracht trifft
          <br />
          <span style={{ color: PINK }}>Streetwear</span>
        </div>
        <div style={{ fontFamily: bodyFont, fontSize: 20, color: "#a0a0a0", opacity: textOp, lineHeight: 1.6, marginBottom: 30 }}>
          Traditionelle Schnürung,
          <br />
          Dirndl-Schürze & florale Stickerei.
          <br />
          100 % Bio-Baumwolle.
        </div>
        <div style={{ fontFamily: headingFont, fontSize: 42, color: PINK, fontWeight: 700, opacity: priceOp }}>
          119 €
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const scale1 = interpolate(frame, [0, 80], [1, 1.08], { extrapolateRight: "clamp" });
  const scale2 = interpolate(frame, [10, 80], [1.08, 1], { extrapolateRight: "clamp" });
  const op1 = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });
  const op2 = interpolate(frame, [10, 25], [0, 1], { extrapolateRight: "clamp" });
  const labelOp = interpolate(frame, [30, 50], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: BG }}>
      <div style={{ position: "absolute", left: 0, top: 0, width: "55%", height: "100%", overflow: "hidden", opacity: op1 }}>
        <Img src={staticFile("images/detail-dirndelhoodie-pink-closeup.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover", transform: `scale(${scale1})` }} />
      </div>
      <div style={{ position: "absolute", right: 0, top: 0, width: "48%", height: "100%", overflow: "hidden", opacity: op2 }}>
        <Img src={staticFile("images/detail-dirndelhoodie-pink-lifestyle.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover", transform: `scale(${scale2})` }} />
      </div>
      <div style={{ position: "absolute", left: "50%", top: 0, width: 3, height: "100%", background: BG }} />
      <div style={{ position: "absolute", bottom: 80, left: 80, opacity: labelOp }}>
        <div style={{ fontFamily: bodyFont, fontSize: 14, letterSpacing: 5, color: PRIMARY, textTransform: "uppercase", marginBottom: 8 }}>Detail</div>
        <div style={{ fontFamily: headingFont, fontSize: 36, color: CREAM, fontWeight: 700 }}>
          Handgemachte <span style={{ color: PINK }}>Stickerei</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const logoOp = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const tagOp = interpolate(frame, [20, 50], [0, 1], { extrapolateRight: "clamp" });
  const tagY = interpolate(frame, [20, 50], [30, 0], { extrapolateRight: "clamp" });
  const pulse = interpolate(frame, [0, 90], [0, Math.PI * 3]);
  const glowOp = 0.3 + 0.15 * Math.sin(pulse);

  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse at center, #1a2a1b, ${BG})` }}>
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 50% 50%, ${PINK}22, transparent 60%)`, opacity: glowOp }} />
      <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ fontFamily: headingFont, fontSize: 24, letterSpacing: 10, color: CREAM, textTransform: "uppercase", opacity: logoOp, marginBottom: 20 }}>
          Schwarzwald<span style={{ color: PRIMARY }}>jungfrau</span>
        </div>
        <div style={{ width: 60, height: 2, background: PINK, opacity: logoOp, marginBottom: 30 }} />
        <div style={{ fontFamily: headingFont, fontSize: 52, color: CREAM, fontWeight: 700, opacity: tagOp, transform: `translateY(${tagY}px)`, textAlign: "center", lineHeight: 1.3 }}>
          Verwurzelt im Wald.
          <br />
          <span style={{ color: PINK }}>Getragen auf der Straße.</span>
        </div>
        <div style={{ fontFamily: bodyFont, fontSize: 18, color: "#808080", opacity: tagOp, marginTop: 30, letterSpacing: 3, textTransform: "uppercase" }}>
          schwarzwaldjungfrau.de
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: BG }}>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={100}>
          <Scene1 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-left" })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: 20 })}
        />
        <TransitionSeries.Sequence durationInFrames={110}>
          <Scene2 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: 20 })}
        />
        <TransitionSeries.Sequence durationInFrames={100}>
          <Scene3 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: 20 })}
        />
        <TransitionSeries.Sequence durationInFrames={110}>
          <Scene4 />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
