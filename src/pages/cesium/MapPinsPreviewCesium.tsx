import { useEffect } from "react";
import * as Cesium from "cesium";

const MapPinsPreviewCesium = () => {
  useEffect(() => {
    const viewer = new Cesium.Viewer("cesiumContainer", {
      timeline: false,
      animation: false,
    });

    const pinBuilder = new Cesium.PinBuilder();

    const bluePin = viewer.entities.add({
      name: "Blank blue pin",
      position: Cesium.Cartesian3.fromDegrees(-75.170726, 39.9208667),
      billboard: {
        image: pinBuilder.fromColor(Cesium.Color.ROYALBLUE, 48).toDataURL(),
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      },
    });

    const questionPin = viewer.entities.add({
      name: "Question mark",
      position: Cesium.Cartesian3.fromDegrees(-75.1698606, 39.9211275),
      billboard: {
        image: pinBuilder.fromText("?", Cesium.Color.BLACK, 48).toDataURL(),
      },
    });

    return () => {
      viewer.destroy();
    };
  }, []);

  return <div id="cesiumContainer" className="viewer-container" />;
};

export default MapPinsPreviewCesium;
