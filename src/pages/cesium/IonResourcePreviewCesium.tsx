import { useEffect } from "react";
import * as Cesium from "cesium";

const IonResourcePreviewCesium = () => {
  useEffect(() => {
    const viewer = new Cesium.Viewer("cesiumContainer");

    const loadIon = async () => {
      const tileset = await Cesium.Cesium3DTileset.fromIonAssetId(75343, {});
      viewer.scene.primitives.add(tileset);
      viewer.zoomTo(tileset);
    };

    loadIon();

    return () => {
      viewer.destroy();
    };
  }, []);

  return <div id="cesiumContainer" className="viewer-container" />;
};

export default IonResourcePreviewCesium;
