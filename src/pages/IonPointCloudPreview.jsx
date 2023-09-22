import { Viewer, Cesium3DTileset } from "resium";
import { IonResource, Ion, Cesium3DTileStyle } from "cesium";
import { useRef } from "react";

Ion.defaultAccessToken = import.meta.env.VITE_TEST_DATA;

const IonPointCloudPreview = () => {
  let ref = useRef(null);

  const handleReady = (tileset) => {
    if (ref.current.cesiumElement) {
      ref.current.cesiumElement.zoomTo(tileset);
    }
  };

  return (
    <Viewer className="viewer-container" ref={ref}>
      <Cesium3DTileset
        url={IonResource.fromAssetId(2277214)}
        style={
          new Cesium3DTileStyle({
            pointSize: 4.0,
          })
        }
        onReady={handleReady}
      />
    </Viewer>
  );
};

export default IonPointCloudPreview;
