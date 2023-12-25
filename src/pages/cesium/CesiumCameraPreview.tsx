import { useRef, useEffect } from "react";
import { Viewer, Cartesian3 } from "cesium";

const CesiumCameraPreview = () => {
  const viewerRef = useRef<Viewer | null>(null);

  useEffect(() => {
    if (!viewerRef.current) {
      // Viewer 초기화
      const viewer = new Viewer("cesiumContainer");
      viewerRef.current = viewer;

      // CameraFlyTo 애니메이션 설정
      const destination = Cartesian3.fromDegrees(127.024612, 37.5326, 100);
      viewer.camera.flyTo({
        destination,
        duration: 5,
      });
    }
  }, []);

  return <div id="cesiumContainer" className="viewer-container"></div>;
};

export default CesiumCameraPreview;
