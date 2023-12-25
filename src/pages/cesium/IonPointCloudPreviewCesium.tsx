import { useEffect } from "react";
import * as Cesium from "cesium";

const IonPointCloudPreviewCesium = () => {
  useEffect(() => {
    const viewer = new Cesium.Viewer("cesiumContainer");

    const create3DTile = async () => {
      const tileset = await Cesium.Cesium3DTileset.fromIonAssetId(2277214, {});
      tileset.style = new Cesium.Cesium3DTileStyle({
        pointSize: 4.0,
      });
      viewer.scene.primitives.add(tileset);
      viewer.zoomTo(tileset);
    };

    create3DTile();

    return () => {
      viewer.destroy();
    };
  }, []);

  return <div id="cesiumContainer" className="viewer-container" />;
};

export default IonPointCloudPreviewCesium;
