import { Viewer, Billboard, BillboardCollection } from "resium";

import test from "../assets/testImg.png";

import { Cartesian3, createWorldTerrainAsync } from "cesium";

const BillboardPreview = () => {
  return (
    <Viewer full terrainProvider={createWorldTerrainAsync()}>
      <BillboardCollection>
        <Billboard
          position={Cartesian3.fromDegrees(-75.59777, 40.03883)}
          image={test}
          scale={0.1}
        />
      </BillboardCollection>
    </Viewer>
  );
};

export default BillboardPreview;
