import { Viewer, Cesium3DTileset } from "resium";
import { useRef } from "react";
import tileset from "/src/assets/tileset/tileset.json";

const Cesium3DTilesetPreview = () => {
  let ref = useRef(null);

  const handleReady = (tileset) => {
    if (ref) {
      ref.zoomTo(tileset);
    }
  };

  return (
    <Viewer
      className="viewer-container"
      ref={(e) => {
        ref = e && e.cesiumElement;
      }}
    >
      <Cesium3DTileset url={tileset} onReady={handleReady} />
    </Viewer>
  );
};

export default Cesium3DTilesetPreview;
