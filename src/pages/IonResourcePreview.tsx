import { Viewer, Cesium3DTileset, CesiumComponentRef } from "resium";
import { IonResource, Viewer as CesiumViewer } from "cesium";
import { useRef } from "react";

function IonResourcePreview() {
  const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);

  return (
    <Viewer className="viewer-container" ref={ref}>
      <Cesium3DTileset
        url={IonResource.fromAssetId(75343)}
        onReady={(tileset) => ref.current?.cesiumElement?.zoomTo(tileset)}
      />
    </Viewer>
  );
}

export default IonResourcePreview;
