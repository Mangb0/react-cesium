import { Viewer, Entity, BillboardGraphics } from "resium";

import test from "../assets/testImg.png";

import { Cartesian3, createWorldTerrainAsync } from "cesium";

const BillboardPreview = () => {
  return (
    <Viewer
      className="viewer-container"
      terrainProvider={createWorldTerrainAsync()}
    >
      <Entity
        name="BillboardTest"
        description="Billboard show Image"
        position={Cartesian3.fromDegrees(-75.59777, 40.03883)}
      >
        <BillboardGraphics image={test} scale={0.1} />
      </Entity>
    </Viewer>
  );
};

export default BillboardPreview;
