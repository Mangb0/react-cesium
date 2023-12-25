import { useEffect } from "react";
import * as Cesium from "cesium";

const BillboardCesiumPreview = () => {
  useEffect(() => {
    const viewer = new Cesium.Viewer("cesiumContainer");

    viewer.entities.add({
      name: "BillboardTest",
      description: "Billboard show Image",
      position: Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
      billboard: {
        image: "/src/assets/testImg.png",
        scale: 0.1,
      },
    });
    return () => {
      viewer.destroy();
    };
  }, []);

  return <div id="cesiumContainer" className="viewer-container" />;
};

export default BillboardCesiumPreview;
