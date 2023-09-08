import { Viewer, Entity, BillboardGraphics } from "resium";
import { PinBuilder, Color, Cartesian3, createWorldTerrainAsync } from "cesium";

const MapPinsPreview = () => {
  const pinBuilder = new PinBuilder();

  return (
    <Viewer
      className="viewer-container"
      terrainProvider={createWorldTerrainAsync()}
    >
      <Entity
        name="Question mark"
        description="question mark"
        position={Cartesian3.fromDegrees(-75.1698529, 39.9220071, 100)}
      >
        <BillboardGraphics
          image={pinBuilder.fromText("?", Color.BLACK, 48).toDataURL()}
        />
      </Entity>
    </Viewer>
  );
};

export default MapPinsPreview;
