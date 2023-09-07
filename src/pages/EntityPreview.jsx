import { Viewer, Entity } from "resium";
import { Cartesian3, createWorldTerrainAsync } from "cesium";

const EntityPreview = () => {
  return (
    <Viewer full terrainProvider={createWorldTerrainAsync()}>
      <Entity
        name="Korea"
        description="Hello Korea!"
        position={Cartesian3.fromDegrees(127.024612, 37.5326, 100)}
        point={{ pixelSize: 10 }}
      />
    </Viewer>
  );
};

export default EntityPreview;
