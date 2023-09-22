import { Viewer, Cesium3DTileset, CesiumComponentRef } from "resium";
import {
  IonResource,
  Ion,
  Cesium3DTileStyle,
  Viewer as CesiumViewer,
} from "cesium";
import { useRef } from "react";

Ion.defaultAccessToken = import.meta.env.VITE_TEST_DATA;

const IonPointCloudPreview = () => {
  const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);

  return (
    <Viewer className="viewer-container" ref={ref}>
      <Cesium3DTileset
        url={IonResource.fromAssetId(2277214)}
        style={
          new Cesium3DTileStyle({
            pointSize: 4.0,
          })
        }
        onReady={(tileset) => ref.current?.cesiumElement?.zoomTo(tileset)}
      />
    </Viewer>
  );
};

export default IonPointCloudPreview;
