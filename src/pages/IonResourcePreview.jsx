import { Viewer, Cesium3DTileset } from "resium";
import { IonResource } from "cesium";

function IonResourcePreview() {
  let viewer;

  const handleReady = (tileset) => {
    if (viewer) {
      viewer.zoomTo(tileset);
    }
  };

  return (
    <Viewer
      full
      ref={(e) => {
        viewer = e && e.cesiumElement;
      }}
    >
      {/* <Cesium3DTileset
        url={IonResource.fromAssetId(5714)}
        onReady={handleReady}
      /> */}
      <Cesium3DTileset
        url={IonResource.fromAssetId(75343)}
        onReady={handleReady}
      />
    </Viewer>
  );
}

export default IonResourcePreview;
