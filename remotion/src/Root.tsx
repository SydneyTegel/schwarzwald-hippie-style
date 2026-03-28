import { Composition } from "remotion";
import { MainVideo } from "./MainVideo";
import { ForestHoodieVideo } from "./ForestHoodieVideo";
import { LederhosenhoodieVideo } from "./LederhosenhoodieVideo";

export const RemotionRoot: React.FC = () => (
  <>
    <Composition id="main" component={MainVideo} durationInFrames={360} fps={30} width={1920} height={1080} />
    <Composition id="forest-hoodie" component={ForestHoodieVideo} durationInFrames={350} fps={30} width={1920} height={1080} />
    <Composition id="lederhosenhoodie" component={LederhosenhoodieVideo} durationInFrames={350} fps={30} width={1920} height={1080} />
  </>
);
