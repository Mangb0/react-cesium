import { useRef } from "react";
import { Cesium3DTileset, Viewer } from "resium";
const Cesium3DTilesetPreview = () => {
  const ref = useRef(null);
  const handleReady = (tileset) => {
    if (ref.current.cesiumElement) {
      ref.current.cesiumElement.zoomTo(tileset);
    }
  };

  return (
    <Viewer className="viewer-container" ref={ref}>
      <Cesium3DTileset url="./tileset/tileset.json" onReady={handleReady} />
    </Viewer>
  );
};

export default Cesium3DTilesetPreview;
