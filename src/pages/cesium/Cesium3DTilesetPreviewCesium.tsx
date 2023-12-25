import { useEffect } from "react";
import * as Cesium from "cesium";
const Cesium3DTilesetPreview = () => {
  useEffect(() => {
    const viewer = new Cesium.Viewer("cesiumContainer");

    const create3DTile = async () => {
      const tileset = await Cesium.Cesium3DTileset.fromUrl(
        "../tileset/tileset.json"
      );
      viewer.scene.primitives.add(tileset);
      viewer.zoomTo(tileset);
    };

    create3DTile();

    return () => {
      viewer.destroy();
    };
  }, []);

  return <div id="cesiumContainer" className="viewer-container"></div>;
};

export default Cesium3DTilesetPreview;
