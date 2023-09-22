import { useRef } from "react";
import { Viewer as CesiumViewer } from "cesium";
import { Cesium3DTileset, CesiumComponentRef, Viewer } from "resium";
const Cesium3DTilesetPreview = () => {
  const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);

  return (
    <Viewer className="viewer-container" ref={ref}>
      <Cesium3DTileset
        url="./tileset/tileset.json"
        onAllTilesLoad={() => console.log("All tiles loaded")}
        onReady={(tileset) => ref.current?.cesiumElement?.zoomTo(tileset)}
      />
    </Viewer>
  );
};

export default Cesium3DTilesetPreview;
